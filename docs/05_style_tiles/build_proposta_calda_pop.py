"""Proposta autonoma: non modifica le tile A/B o i token del prototipo."""
from pathlib import Path
import json,base64
from build_style_tiles import font,glyph_paths
from ui_canvas import Canvas
HERE=Path(__file__).resolve().parent
WARM={'background':'#F5E9D6','surface':'#FFFCF6','text':'#2B2822','muted':'#615446','primary':'#2B2822','divider':'#9C8B76','terracotta':'#D87556','pink':'#E8B4A2','green':'#A8B786','yellow':'#E6B957','card':'#D87556'}
POP={'background':'#80EFED','surface':'#FFFFFF','text':'#000000','muted':'#4B4B4B','primary':'#000000','divider':'#6B6B63','terracotta':'#9E6CDA','pink':'#FD87BA','green':'#ADE25D','yellow':'#FCEC52','card':'#80EFED'}
THEMES={k:dict(heading='Boldonse',heading_weight=400,body='Helvetica Neue',colors=c) for k,c in [('warm',WARM),('pop',POP)]}
reports=[]
def contrast(a,b):
 def lum(h):
  rgb=[int(h[i:i+2],16)/255 for i in (1,3,5)]
  return sum((v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4)*w for v,w in zip(rgb,[.2126,.7152,.0722]))
 aa,bb=lum(a),lum(b);return (max(aa,bb)+.05)/(min(aa,bb)+.05)
for theme in THEMES:
 s=Canvas(1560,1160,theme,THEMES,font,glyph_paths,'SNODO — proposta Calda Pop' if theme=='warm' else 'SNODO — controparte Pop per confronto cromatico')
 c=s.c
 def panel(x,y,w,h,title):
  s.rect(x,y,w,h,c['surface'],32);s.text(x+w-24,y+48,title,31,anchor='end',maxw=w-48,bg=c['surface'])
 def photo(x,y,w,h,file,r=16):
  s.counter+=1;clip='photo-'+str(s.counter)
  data=base64.b64encode((HERE.parent/'07_prototipo/media'/file).read_bytes()).decode()
  s.parts.append(f'<defs><clipPath id="{clip}"><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}"/></clipPath></defs><image x="{x}" y="{y}" width="{w}" height="{h}" href="data:image/jpeg;base64,{data}" preserveAspectRatio="xMidYMid slice" clip-path="url(#{clip})"/>')
 def txt(x,y,text,size=18,color=None,maxw=None,bg=None,weight=400):s.text(x,y,text,size,color,weight,maxw=maxw,bg=bg or c['surface'])
 def tag(x,y,w,label,color):
  s.rect(x,y,w,28,color,14,c['text'],1);s.text(x+w/2,y+19,label,15,c['text'],anchor='middle',maxw=w-12,bg=color)
 def pill(x,y,w,label,fill,ink,arrow=False):
  s.rect(x,y,w,48,fill,24)
  if arrow:s.icon(x+18,y+12,'arrow',ink,bg=fill)
  s.text(x+w/2+(12 if arrow else 0),y+31,label,21,ink,anchor='middle',maxw=w-(70 if arrow else 24),bg=fill)
 s.rect(0,0,1560,1160,c['background'])
 s.heading(28,83,'CALDA POP' if theme=='warm' else 'POP / CONFRONTO',44,maxw=1110,bg=c['background'])
 s.text(1532,49,'SNODO',18,c['text'],700,anchor='end',bg=c['background'])
 s.text(1532,82,'Proposta visiva · contenuti demo',16,c['muted'],anchor='end',bg=c['background'])
 panel(28,124,468,260,'Tipografia')
 txt(52,225,'BOLDONSE',16,maxw=390,weight=700)
 s.heading(52,278,'QUESTO È UN TITOLO',24,maxw=420,bg=c['surface'])
 txt(52,320,'Forma DJR Text',16,maxw=400)
 txt(52,356,'Questo è un testo.',28,maxw=420)
 panel(520,124,496,260,'Palette colori')
 rows=[('pink','Rosa argilla' if theme=='warm' else 'Rosa'),('green','Oliva' if theme=='warm' else 'Lime'),('terracotta','Terracotta' if theme=='warm' else 'Viola'),('yellow','Ocra' if theme=='warm' else 'Giallo')]
 for i,(key,name) in enumerate(rows):
  x=544+(i%2)*224;y=198+(i//2)*57;s.rect(x,y,224,57,c[key]);s.text(x+12,y+24,name,16,c['text'],bg=c[key]);s.text(x+12,y+47,c[key],18,c['text'],bg=c[key])
 s.rect(544,312,448,48,c['background'],0);s.text(556,342,('Crema' if theme=='warm' else 'Turchese')+'  '+c['background'],18,c['text'],bg=c['background'])
 panel(28,408,528,248,'Elementi grafici')
 for i,fill in enumerate([c['yellow'],c['pink'],c['green']]):s.rect(52+i*160,489,160,144,fill)
 s.swirl(65,505,130,c['terracotta'],13);s.star(292,560,56,c['text'],points=8,inner=.37)
 s.parts.append('<g transform="translate(413 515)">');s.path('M45 0C45 34 66 46 90 49C62 52 45 71 45 98C44 74 28 53 0 49C27 47 45 28 45 0Z',stroke=c['surface'],sw=9);s.parts.append('</g>')
 panel(580,408,436,248,'Pulsanti e tag')
 pill(604,491,232,'Continua',c['background'],c['text'],True)
 s.circle(912,515,24,c['background']);s.icon(900,503,'compass',c['text'],bg=c['background'])
 pill(604,549,232,'Continua',c['text'],c['background'])
 s.circle(912,573,24,c['text']);s.icon(900,561,'compass',c['background'],bg=c['text'])
 tag(604,610,116,'all’aperto',c['pink']);tag(732,610,108,'culturale',c['green']);tag(852,610,136,'con gli amici',c['yellow'])
 # Schede con le stesse informazioni e la stessa geometria nelle due direzioni.
 s.rect(28,680,988,452,c['surface'],32)
 txt(52,721,'Anteprima locale',24,maxw=566);txt(646,721,'Anteprima recensione',24,maxw=346)
 s.rect(52,743,570,363,c['card'],28)
 photo(68,761,160,329,'cafe-terrazza.jpg',17)
 tag(246,761,126,'all’aperto',c['pink']);tag(384,761,130,'con amici',c['green'])
 s.heading(246,842,'CORTILE UNO',22,maxw=346,bg=c['card'])
 s.icon(246,861,'pin',c['text'],18,bg=c['card']);txt(270,877,'Roma · San Lorenzo',18,maxw=290,bg=c['card'])
 txt(246,909,'12–18 € / persona',18,maxw=344,bg=c['card'])
 s.circle(260,946,14,c['text']);s.star(260,946,10,c['pink'],points=8)
 txt(282,953,'Luca · visita con amici',18,maxw=306,bg=c['card'])
 s.para(246,991,'“Potevamo parlare senza alzare la voce.”',345,20,28,c['text'],bg=c['card'])
 pill(390,1040,210,'Leggi il racconto',c['text'],c['background'])
 def review(x,y,author,copy,file):
  s.rect(x,y,346,169,c['surface'],24,c['text'],1.2);photo(x+12,y+12,82,145,file,13)
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
 s.rect(1064,475,444,633,c['card'],28)
 tag(1084,497,126,'all’aperto',c['pink']);tag(1222,497,124,'con amici',c['green'])
 s.icon(1457,497,'bookmark',c['text'],24,bg=c['card'])
 s.heading(1084,580,'CORTILE UNO',24,maxw=390,bg=c['card'])
 txt(1084,615,'Roma · San Lorenzo',20,maxw=398,bg=c['card']);txt(1084,650,'12–18 € / persona   ·   16:00–23:00',17,maxw=400,bg=c['card'])
 txt(1084,702,'Foto del locale',21,maxw=400,bg=c['card'],weight=700)
 photo(1084,723,246,164,'cafe-terrazza.jpg');photo(1342,723,146,164,'cafe-verde.jpg')
 txt(1084,929,'Foto degli utenti',21,maxw=400,bg=c['card'],weight=700)
 photo(1084,950,195,138,'caffe-tazza.jpg');photo(1293,950,195,138,'caffe-due-tazze.jpg')
 s.rect(1094,958,76,24,c['surface'],12);s.text(1132,975,'Luca',13,c['text'],anchor='middle',bg=c['surface'])
 s.rect(1303,958,76,24,c['surface'],12);s.text(1341,975,'Chiara',13,c['text'],anchor='middle',bg=c['surface'])
 name='Proposta_Calda_Pop' if theme=='warm' else 'Confronto_Pop_Calda'
 report=s.save(HERE/name)
 pairs=[dict(use=v['use'],foreground=v['fg'],background=v['bg'],ratio=round(contrast(v['fg'],v['bg']),4),threshold=v['threshold'],status='PASS' if contrast(v['fg'],v['bg'])>=v['threshold'] else 'FAIL') for v in s.contrast_uses]
 reports.append(dict(variant=theme,svg=Path(report['svg']).name,png=Path(report['png']).name,overflows=report['overflows'],contrastPairs=pairs,failures=[v for v in pairs if v['status']=='FAIL']))
(HERE/'QA_Proposta_Calda_Pop.json').write_text(json.dumps(dict(status='proposal',bodyIntent='Forma DJR Text',bodyPreview='Helvetica Neue',heading='Boldonse — glifi da file locale',images='Foto stock dimostrative riutilizzate dal prototipo, crediti in 07_prototipo/media',warmPalette=WARM,variants=reports,limits=['Non sostituisce la Calda attuale o i token del prototipo.','Non è una scelta dei partecipanti.','Controlli di colori e geometria non sono un audit WCAG completo.','Boldonse è convertito in contorni SVG; corpo nativo Helvetica Neue.']),ensure_ascii=False,indent=2)+'\n')
print(json.dumps([{k:v for k,v in r.items() if k not in ('contrastPairs',)} for r in reports],ensure_ascii=False,indent=2))
if any(r['overflows'] or r['failures'] for r in reports):raise SystemExit(1)
