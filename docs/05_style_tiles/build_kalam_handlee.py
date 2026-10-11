"""Proposta autonoma: non modifica le tile A/B o i token del prototipo."""
from pathlib import Path
import json,base64
from build_style_tiles import font,glyph_paths
from ui_canvas import Canvas as BaseCanvas
from functools import lru_cache
from html import escape
from PIL import ImageFont
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
HERE=Path(__file__).resolve().parent
PALETTE={'background':'#F6EDE0','surface':'#FFFCF7','text':'#022E21','muted':'#335449','primary':'#33173A','divider':'#647166','terracotta':'#33173A','pink':'#F6EDE0','green':'#022E21','yellow':'#F6EDE0','card':'#F6EDE0'}
THEMES={k:dict(heading=family,heading_weight=weight,body='Helvetica Neue',colors=PALETTE) for k,family,weight in [('kalam','Kalam',700),('handlee','Handlee',400)]}
HAND_FILES={'Kalam':HERE/'fonts/Kalam-Bold.ttf','Handlee':HERE/'fonts/Handlee-Regular.ttf'}
@lru_cache(maxsize=200)
def hand_font(family,size,weight=400):
 if family in HAND_FILES:return ImageFont.truetype(str(HAND_FILES[family]),round(size))
 return font(family,size,weight)
@lru_cache(maxsize=4)
def hand_source(family):
 f=TTFont(HAND_FILES[family]);return f,f.getGlyphSet(),f.getBestCmap(),f['head'].unitsPerEm
@lru_cache(maxsize=200)
def hand_paths(text,size,family,weight=400):
 f,glyphs,cmap,upem=hand_source(family);scale=size/upem;metric=hand_font(family,size,weight);parts=[]
 for i,ch in enumerate(text):
  name=cmap.get(ord(ch),'.notdef')
  if name=='.notdef':raise ValueError(f'Glifo mancante: {family} {ch!r}')
  pen=SVGPathPen(glyphs);glyphs[name].draw(pen);advance=metric.getlength(text[:i+1])-metric.getlength(ch)
  if pen.getCommands():parts.append(f'<path d="{pen.getCommands()}" transform="translate({advance:.4f} 0) scale({scale:.8f} {-scale:.8f})"/>')
 return ''.join(parts),metric.getlength(text)
class Canvas(BaseCanvas):
 def text(self,x,y,text,size=16,color=None,weight=400,family=None,anchor='start',maxw=None,record=True,bg=None):
  fam=family or self.t['body']
  if fam not in HAND_FILES:return super().text(x,y,text,size,color,weight,fam,anchor,maxw,record,bg)
  color=color or self.c['text'];paths,width=hand_paths(text,size,fam,weight)
  if maxw is not None and width>maxw+.25:self.overflows.append(dict(component=self.component,text=text,width=round(width,2),available=maxw))
  left=x-width if anchor=='end' else x-width/2 if anchor=='middle' else x
  bbox=self.font(fam,size,weight).getbbox(text,anchor='ls')
  if left+min(0,bbox[0])<-.5 or left+width>self.w+.5 or y+bbox[1]<-.5 or y+bbox[3]>self.h+.5:self.overflows.append(dict(text=text,reason='canvas bounds'))
  self.parts.append(f'<g transform="translate({left:.3f} {y})" fill="{color}" data-text="{escape(text,quote=True)}" data-font="{fam}" data-size="{size}" data-weight="{weight}" aria-label="{escape(text,quote=True)}"><title>{escape(text)}</title>{paths}</g>')
  self.sources.append(dict(text=text,x=x,baseline=y,size=size,weight=weight,font=fam,svg='glyph outlines from actual local font file'))
  if record:self.labels.append(text)
  if record and self.component:self.copy[self.component].append(text)
  if bg:self.contrast_uses.append(dict(theme=self.theme,use=text,fg=color,bg=bg,threshold=4.5,criterion='1.4.3'))
reports=[]
def contrast(a,b):
 def lum(h):
  rgb=[int(h[i:i+2],16)/255 for i in (1,3,5)]
  return sum((v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4)*w for v,w in zip(rgb,[.2126,.7152,.0722]))
 aa,bb=lum(a),lum(b);return (max(aa,bb)+.05)/(min(aa,bb)+.05)
for theme in THEMES:
 s=Canvas(1560,1160,theme,THEMES,hand_font,hand_paths,'SNODO — Calda · alternative tipografiche · '+THEMES[theme]['heading'])
 c=s.c
 def panel(x,y,w,h,title):
  s.rect(x,y,w,h,c['surface'],22);s.text(x+w-24,y+48,title,30,weight=s.t['heading_weight'],family=s.t['heading'],anchor='end',maxw=w-48,bg=c['surface'])
 def photo(x,y,w,h,file,r=16):
  s.counter+=1;clip='photo-'+str(s.counter)
  data=base64.b64encode((HERE.parent/'07_prototipo/media'/file).read_bytes()).decode()
  s.parts.append(f'<defs><clipPath id="{clip}"><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}"/></clipPath></defs><image x="{x}" y="{y}" width="{w}" height="{h}" href="data:image/jpeg;base64,{data}" preserveAspectRatio="xMidYMid slice" clip-path="url(#{clip})"/>')
 def txt(x,y,text,size=18,color=None,maxw=None,bg=None,weight=400):s.text(x,y,text,size,color,weight,maxw=maxw,bg=bg or c['surface'])
 def tag(x,y,w,label,color):
  s.rect(x,y,w,28,color,10,c['text'],1);s.text(x+w/2,y+19,label,15,c['background'] if color==c['text'] else c['text'],anchor='middle',maxw=w-12,bg=color)
 def pill(x,y,w,label,fill,ink,arrow=False):
  s.rect(x,y,w,48,fill,14,c['text'] if fill==c['background'] else None)
  if arrow:s.icon(x+18,y+12,'arrow',ink,bg=fill)
  s.text(x+w/2+(12 if arrow else 0),y+31,label,21,ink,anchor='middle',maxw=w-(70 if arrow else 24),bg=fill)
 s.rect(0,0,1560,1160,c['background'])
 s.heading(28,83,'Calda, un’altra voce',54,maxw=1110,bg=c['background'])
 s.text(1532,49,'SNODO',18,c['text'],700,anchor='end',bg=c['background'])
 s.text(1532,82,s.t['heading']+' · contenuti demo',16,c['muted'],anchor='end',bg=c['background'])
 panel(28,124,468,260,'Tipografia')
 txt(52,216,s.t['heading']+(' · 700' if theme=='kalam' else ' · 400'),16,maxw=390,weight=700)
 s.heading(52,271,'Un posto per incontrarsi',33,maxw=420,bg=c['surface'])
 txt(52,317,'Forma DJR Text · corpo lineare',16,maxw=400)
 txt(52,356,'Questo è un testo.',28,maxw=420)
 panel(520,124,496,260,'Palette colori')
 for i,(color,name) in enumerate([(c['primary'],'Prugna'),(c['text'],'Verde scuro')]):
  x=544+i*224;s.rect(x,198,224,109,color);s.text(x+16,240,name,20,c['background'],bg=color);s.text(x+16,279,color,24,c['background'],bg=color)
 s.rect(544,307,448,53,c['background'],0);s.text(560,341,'Crema  '+c['background'],23,c['text'],bg=c['background'])
 panel(28,408,528,248,'Segni leggeri')
 # Tratti decorativi essenziali, senza blocchi multicolore o stelle Pop.
 s.path('M61 558C105 541 150 543 192 554M79 576C122 568 154 570 178 572',stroke=c['primary'],sw=3)
 s.path('M243 578C255 570 279 563 302 563C323 563 337 571 357 566M347 557L359 566L347 576',stroke=c['text'],sw=3)
 s.path('M424 582C422 557 432 535 451 512M433 543C409 539 401 522 407 509C427 511 437 525 433 543M440 530C443 510 457 504 473 507C467 526 455 532 440 530',stroke=c['text'],sw=2.5)
 txt(66,617,'Sottolineare',14,c['muted'],maxw=150)
 txt(249,617,'Accompagnare',14,c['muted'],maxw=150)
 txt(420,617,'Richiamare',14,c['muted'],maxw=120)
 panel(580,408,436,248,'Pulsanti e tag')
 pill(604,491,232,'Continua',c['background'],c['text'],True)
 s.circle(912,515,24,c['background']);s.icon(900,503,'compass',c['text'],bg=c['background'])
 pill(604,549,232,'Continua',c['primary'],c['background'])
 s.circle(912,573,24,c['primary']);s.icon(900,561,'compass',c['background'],bg=c['primary'])
 tag(604,610,116,'all’aperto',c['pink']);tag(732,610,108,'culturale',c['background']);tag(852,610,136,'con gli amici',c['yellow'])
 # Schede con le stesse informazioni e la stessa geometria nelle due direzioni.
 s.rect(28,680,988,452,c['surface'],32)
 txt(52,721,'Anteprima locale',24,maxw=566);txt(646,721,'Anteprima recensione',24,maxw=346)
 s.rect(52,743,570,363,c['card'],18,c['divider'],1)
 photo(68,761,160,329,'cafe-terrazza.jpg',17)
 tag(246,761,126,'all’aperto',c['pink']);tag(384,761,130,'con amici',c['green'])
 s.heading(246,842,'Cortile Uno',40,maxw=346,bg=c['card'])
 s.icon(246,861,'pin',c['text'],18,bg=c['card']);txt(270,877,'Roma · San Lorenzo',18,maxw=290,bg=c['card'])
 txt(246,909,'12–18 € / persona',18,maxw=344,bg=c['card'])
 s.circle(260,946,14,c['text']);s.text(260,951,'L',14,c['background'],anchor='middle',bg=c['text'])
 txt(282,953,'Luca · visita con amici',18,maxw=306,bg=c['card'])
 s.para(246,991,'“Potevamo parlare senza alzare la voce.”',345,20,28,c['text'],bg=c['card'])
 pill(390,1040,210,'Leggi il racconto',c['primary'],c['background'])
 def review(x,y,author,copy,file):
  s.rect(x,y,346,169,c['surface'],18,c['divider'],1);photo(x+12,y+12,82,145,file,13)
  txt(x+108,y+31,author,16,maxw=218,weight=700);txt(x+108,y+52,'Visita di settembre · demo',12,c['muted'],maxw=224)
  s.para(x+108,y+83,copy,223,15,21,c['text'],bg=c['surface'])
  txt(x+108,y+150,'Leggi la visita →',14,maxw=224,weight=700)
 review(646,743,'Luca','“Una pausa all’aperto. Al nostro tavolo riuscivamo a parlare.”','caffe-tazza.jpg')
 review(646,929,'Chiara','“Nel pomeriggio ho trovato un tavolino libero per leggere.”','caffe-due-tazze.jpg')
 # Esempio di dettaglio: mappa, foto del locale e foto degli utenti.
 panel(1040,124,492,1008,'Interfaccia')
 txt(1064,210,'Profilo del luogo · esempio',18,maxw=438)
 s.rect(1064,232,444,223,c['background'],22)
 s.parts.append('<g opacity=".7">')
 for xx in [1100,1160,1260,1370,1460]:s.path(f'M{xx} 232L{xx-20} 335L{xx+17} 455',stroke=c['surface'],sw=11)
 for yy in [270,327,390,431]:s.path(f'M1064 {yy}L1230 {yy+16}L1390 {yy-18}L1508 {yy+10}',stroke=c['surface'],sw=10)
 s.parts.append('</g>');s.circle(1280,327,30,c['text']);s.icon(1265,312,'pin',c['background'],30,bg=c['text'])
 s.rect(1168,377,228,44,c['surface'],22);s.text(1282,405,'Qui trovi Cortile Uno',17,c['text'],700,anchor='middle',maxw=210,bg=c['surface'])
 s.rect(1064,475,444,633,c['card'],18,c['divider'],1)
 tag(1084,497,126,'all’aperto',c['pink']);tag(1222,497,124,'con amici',c['green'])
 s.icon(1457,497,'bookmark',c['text'],24,bg=c['card'])
 s.heading(1084,580,'Cortile Uno',42,maxw=390,bg=c['card'])
 txt(1084,615,'Roma · San Lorenzo',20,maxw=398,bg=c['card']);txt(1084,650,'12–18 € / persona   ·   16:00–23:00',17,maxw=400,bg=c['card'])
 s.heading(1084,702,'Foto del locale',32,maxw=400,bg=c['card'])
 photo(1084,723,246,164,'cafe-terrazza.jpg');photo(1342,723,146,164,'cafe-verde.jpg')
 s.heading(1084,929,'Foto degli utenti',32,maxw=400,bg=c['card'])
 photo(1084,950,195,138,'caffe-tazza.jpg');photo(1293,950,195,138,'caffe-due-tazze.jpg')
 s.rect(1094,958,76,24,c['surface'],12);s.text(1132,975,'Luca',13,c['text'],anchor='middle',bg=c['surface'])
 s.rect(1303,958,76,24,c['surface'],12);s.text(1341,975,'Chiara',13,c['text'],anchor='middle',bg=c['surface'])
 name='Proposta_Calda_Kalam' if theme=='kalam' else 'Proposta_Calda_Handlee'
 report=s.save(HERE/name)
 pairs=[dict(use=v['use'],foreground=v['fg'],background=v['bg'],ratio=round(contrast(v['fg'],v['bg']),4),threshold=v['threshold'],status='PASS' if contrast(v['fg'],v['bg'])>=v['threshold'] else 'FAIL') for v in s.contrast_uses]
 reports.append(dict(variant=theme,svg=Path(report['svg']).name,png=Path(report['png']).name,overflows=report['overflows'],contrastPairs=pairs,failures=[v for v in pairs if v['status']=='FAIL']))
(HERE/'QA_Kalam_Handlee.json').write_text(json.dumps(dict(status='proposal',bodyIntent='Forma DJR Text',bodyPreview='Helvetica Neue',headingOptions=['Kalam 700','Handlee 400'],primaryPalette={k:PALETTE[k] for k in ['background','text','primary']},images='Stock illustrative dal prototipo, crediti in 07_prototipo/media',variants=reports,limits=['Titoli brevi e in maiuscolo/minuscolo; non destinati a testi lunghi o dati.','Controlli di colori e geometria non sono un audit WCAG completo.','La comprensione del font va verificata su schermo con persone reali.','Titoli in contorni SVG con testo nei metadati; corpo Helvetica Neue.']),ensure_ascii=False,indent=2)+'\n')
print(json.dumps([{k:v for k,v in r.items() if k not in ('contrastPairs',)} for r in reports],ensure_ascii=False,indent=2))
if any(r['overflows'] or r['failures'] for r in reports):raise SystemExit(1)
