#!/usr/bin/env python3
"""SNODO: tile A/B + base DS v0.3. Rigenera entrambe le direzioni.
Eseguire con Python 3, Pillow e fontTools (dipendenza non inclusa nel pacchetto).
Boldonse locale in fonts/Boldonse-Regular.ttf; body B: Helvetica Neue TTC,
fallback esplicito dell'intent Forma DJR Text, che qui non è disponibile.
Titoli Boldonse in contorni SVG, sorgente Unicode in data-text/metadata.
Ogni PNG è rasterizzata dal proprio SVG con Node.js/sharp.
Non genera risposte ai test, né seleziona una direzione.
"""
from pathlib import Path
import csv
import json
from functools import lru_cache
from html import escape
from PIL import ImageFont
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

HERE = Path(__file__).resolve().parent
PRODUCT_NAME = 'SNODO'
DS = HERE.parent / '06_design_system'
DS.mkdir(parents=True, exist_ok=True)
FONTS = Path('/System/Library/Fonts/Supplemental')
THEMES = {
 'A': {'heading':'Georgia','heading_weight':400,'body':'Trebuchet MS','radius':{'card':20,'control':12,'chip':22,'field':12,'passiveTag':8},
  'colors':{'background':'#F7F1E8','surface':'#FFFCF7','surfaceMuted':'#EEE4D7','text':'#28221F','muted':'#64544A','primary':'#9C432D','primaryHover':'#843824','primaryPressed':'#6E2F20','primarySoft':'#F6DDD0','secondaryBg':'#FFFCF7','onSecondary':'#9C432D','border':'#8A7769','divider':'#D7C9B9','focus':'#51366F','accentDecorative':'#D97A4A','success':'#285844','successBg':'#E3F0E8','warning':'#795000','warningBg':'#FFF0CB','danger':'#A0302C','dangerBg':'#FBE4DF','info':'#345968','infoBg':'#E6EFF1','onPrimary':'#FFFFFF'}},
 'B': {'heading':'Boldonse','heading_weight':400,'body':'Helvetica Neue',
  'body_intent':'Forma DJR Text','body_fallback':'Helvetica Neue',
  'radius':{'card':32,'control':32,'chip':22,'field':18,'passiveTag':14},
  'colors':{'background':'#80EFED','surface':'#FFFFFF','surfaceMuted':'#F2F2EE','text':'#000000','muted':'#4B4B4B','primary':'#000000','primaryHover':'#252525','primaryPressed':'#111111','primarySoft':'#80EFED','secondaryBg':'#80EFED','onSecondary':'#000000','border':'#000000','divider':'#BDBDB5','focus':'#000000','accentDecorative':'#9E6CDA','accentPink':'#FD87BA','accentGreen':'#ADE25D','accentPurple':'#9E6CDA','accentYellow':'#FCEC52','accentTurquoise':'#80EFED','success':'#235B2E','successBg':'#E8F6E8','warning':'#684900','warningBg':'#FFF2CC','danger':'#A42335','dangerBg':'#FDE8EB','info':'#254E68','infoBg':'#E7F1F7','onPrimary':'#80EFED'}}
}
COMMON = {'bodyFont':'Trebuchet MS','bodySize':16,'bodyLineHeight':24,
 'typeScale':{'caption':14,'body':16,'bodyStrong':16,'titleSmall':24,'title':32,'display':44},
 'spacing':[4,8,12,16,24,32,40,48,64],
 'radius':{'card':20,'control':12,'chip':22,'field':12,'passiveTag':8},'stroke':1.8,
 'targetMinimumRecommended':44,'controlHeight':48,'fieldHeight':52,
 'passiveTagHeight':28,'filterHeight':44,'iconSize':24,'navWidth':360,'navHeight':80,'navActiveCapsule':{'width':48,'height':32},'focusWidth':3,'focusOffset':3,'motionDurationMs':160,
 'motionReducedMs':0,'mobileFrame':{'width':390,'height':844}}

@lru_cache(maxsize=200)
def font(family, size, weight=400):
 if family=='Boldonse':return ImageFont.truetype(str(HERE/'fonts/Boldonse-Regular.ttf'),round(size))
 if family=='Helvetica Neue':return ImageFont.truetype('/System/Library/Fonts/HelveticaNeue.ttc',round(size),index=1 if weight>=600 else 0)
 name = family + (' Bold' if weight>=600 else '') + '.ttf'
 p = FONTS/name
 if not p.exists(): raise FileNotFoundError(f'Font locale mancante: {p}')
 return ImageFont.truetype(str(p), round(size))

@lru_cache(maxsize=12)
def glyph_source(family,weight):
 if family=='Boldonse':p=HERE/'fonts/Boldonse-Regular.ttf';number=0
 elif family=='Helvetica Neue':p=Path('/System/Library/Fonts/HelveticaNeue.ttc');number=1 if weight>=600 else 0
 else:p=FONTS/(family+(' Bold' if weight>=600 else '')+'.ttf');number=0
 f=TTFont(p,fontNumber=number);return f,f.getGlyphSet(),f.getBestCmap(),f['head'].unitsPerEm

def glyph_paths(s,size,family='Boldonse',weight=400):
 """File font deterministico; posizioni dal motore metrico usato nel layout.
 I glifi non dipendono dalla risoluzione font del browser o di librsvg.
 """
 f,glyphs,cmap,upem=glyph_source(family,weight);scale=size/upem;metric=font(family,size,weight);parts=[]
 for i,ch in enumerate(s):
  name=cmap.get(ord(ch),'.notdef')
  if name=='.notdef':raise ValueError(f'Glifo assente nel font {family}: {ch!r}')
  pen=SVGPathPen(glyphs);glyphs[name].draw(pen)
  advance=metric.getlength(s[:i+1])-metric.getlength(ch)
  if pen.getCommands():parts.append(f'<path d="{pen.getCommands()}" transform="translate({advance:.4f} 0) scale({scale:.8f} {-scale:.8f})"/>')
 return ''.join(parts),metric.getlength(s)

from ui_canvas import Canvas
from ui_layout import tile, states, courtyard

def export_tokens():
 for t,data in THEMES.items():
  body=data.get('body',COMMON['bodyFont']);radii=data.get('radius',COMMON['radius'])
  tokens={'color':{k:{'$type':'color','$value':v} for k,v in data['colors'].items()},
   'font':{'heading':{'$type':'fontFamily','$value':data['heading']},'body':{'$type':'fontFamily','$value':data.get('body_intent',body),'$description':('Intent; preview renderizzata in Helvetica Neue perché Forma DJR Text non è disponibile.' if t=='B' else 'Font effettivo della preview.')},'bodyPreview':{'$type':'fontFamily','$value':body}},
   'fontSize':{k:{'$type':'dimension','$value':f'{v}px'} for k,v in COMMON['typeScale'].items()},
   'lineHeight':{'body':{'$type':'dimension','$value':'24px'},'caption':{'$type':'dimension','$value':'20px'},'title':{'$type':'dimension','$value':'40px'}},
   'space':{str(v):{'$type':'dimension','$value':f'{v}px'} for v in COMMON['spacing']},
   'radius':{k:{'$type':'dimension','$value':f'{v}px'} for k,v in radii.items()},
   'size':{'controlHeight':{'$type':'dimension','$value':'48px'},'fieldHeight':{'$type':'dimension','$value':'52px'},'touchTargetRecommended':{'$type':'dimension','$value':'44px'},'passiveTagHeight':{'$type':'dimension','$value':'28px'},'filterHeight':{'$type':'dimension','$value':'44px'},'iconSize':{'$type':'dimension','$value':'24px'}},
   'border':{'width':{'$type':'dimension','$value':'1.5px'},'focusWidth':{'$type':'dimension','$value':'3px'},'focusOffset':{'$type':'dimension','$value':'3px'}},
   'fontWeight':{'heading':{'$type':'fontWeight','$value':data['heading_weight']},'body':{'$type':'fontWeight','$value':400},'strong':{'$type':'fontWeight','$value':700}},
   'motion':{'duration':{'$type':'duration','$value':'160ms'},'reduced':{'$type':'duration','$value':'0ms'}},
   '$description':f'{PRODUCT_NAME} variante {t}; provvisoria, non selezionata. JSON da mappare in importer/variabili Figma; import nativo non eseguito.'}
  (DS/f'tokens_{t}.json').write_text(json.dumps(tokens,ensure_ascii=False,indent=2)+'\n')
  common=dict(COMMON);common['bodyFont']=body;common['radius']=radii
  flat={'variant':t,'status':'provisional','headingFont':data['heading'],'headingWeight':data['heading_weight'],'bodyFont':body,'bodyFontIntent':data.get('body_intent',body),'fontAvailability':{'heading':'local TTF; SVG headings are glyph outlines' if t=='B' else 'local','body':'Helvetica Neue preview fallback; Forma DJR Text unavailable' if t=='B' else 'local'},'colors':data['colors'],'common':common}
  (DS/f'theme_{t}.json').write_text(json.dumps(flat,ensure_ascii=False,indent=2)+'\n')
  css=['/* '+PRODUCT_NAME+' '+t+': provvisorio, nessuna preferenza utenti acquisita */']
  if t=='B':css += ['/* Forma DJR Text è intent; Helvetica Neue è il fallback effettivamente disponibile. */','@font-face { font-family: "Boldonse"; src: url("../05_style_tiles/fonts/Boldonse-Regular.ttf") format("truetype"); font-style: normal; font-weight: 400; font-display: swap; }']
  css += [f'[data-theme="{t}"] {{']
  for k,v in data['colors'].items():css.append(f'  --{k}: {v};')
  css += [f'  --font-heading: "{data["heading"]}", '+('serif;' if t=='A' else 'sans-serif;'), ('  --font-body: "Forma DJR Text", "Helvetica Neue", Helvetica, sans-serif;' if t=='B' else '  --font-body: "Trebuchet MS", sans-serif;'),f'  --heading-weight: {data["heading_weight"]};','  --body-size: 16px;','  --body-line: 24px;',f'  --radius-card: {radii["card"]}px;',f'  --radius-control: {radii["control"]}px;',f'  --radius-field: {radii["field"]}px;',f'  --radius-passive-tag: {radii["passiveTag"]}px;','  --passive-tag-height: 28px;','  --filter-height: 44px;','  --icon-size: 24px;','  --icon-stroke: 1.8px;','  --control-height: 48px;','  --field-height: 52px;','  --focus-width: 3px;','  --focus-offset: 3px;','}']
  (DS/f'tokens_{t}.css').write_text('\n'.join(css)+'\n')

def luminance(h):
 vals=[int(h[i:i+2],16)/255 for i in (1,3,5)]
 lin=[v/12.92 if v<=0.04045 else ((v+.055)/1.055)**2.4 for v in vals]
 return .2126*lin[0]+.7152*lin[1]+.0722*lin[2]
def ratio(a,b):
 a,b=sorted((luminance(a),luminance(b)),reverse=True)
 return (a+.05)/(b+.05)

def contrasts(assets):
 """Registra coppie realmente usate e verifiche supplementari della palette.
 Le coppie duplicate aggregano gli usi; non sono nuovi test con persone.
 """
 pairs={}
 def add(theme,use,fg,bg,threshold,criterion,origin='actual'):
  key=(theme,fg.upper(),bg.upper(),threshold,criterion,origin)
  if key not in pairs:pairs[key]={'direzione':theme,'usi':[],'primo_piano':fg,'sfondo':bg,'soglia':threshold,'criterio':criterion,'origine':origin}
  if use not in pairs[key]['usi']:pairs[key]['usi'].append(use)
 for asset in assets:
  for r in asset['contrast_uses']:add(r['theme'],r['use'],r['fg'],r['bg'],r['threshold'],r['criterion'])
 for theme,t in THEMES.items():
  c=t['colors']
  for use,fg,bg in [('Bordo campo su superficie','border','surface'),('Bordo secondario su fondo pulsante','border','secondaryBg'),('Focus su superficie','focus','surface'),('Focus su sfondo','focus','background'),('Indicatore intensità rispetto al track','primary','surfaceMuted')]:add(theme,use,c[fg],c[bg],3,'1.4.11')
  add(theme,'Divider decorativo',c['divider'],c['surface'],0,'decorativo','supplementary')
  add(theme,'Testo disabilitato: leggibilità',c['muted'],c['surfaceMuted'],0,'eccezione inattivo','supplementary')
  if theme=='B':
   for name,key in [('rosa','accentPink'),('lime','accentGreen'),('viola','accentPurple'),('giallo','accentYellow'),('turchese','accentTurquoise')]:add(theme,'Palette: nero su '+name,c['text'],c[key],4.5,'1.4.3','brand_palette_supplementary')
 rows=[]
 for r in pairs.values():
  value=ratio(r['primo_piano'],r['sfondo']);r['rapporto']=round(value,3);r['esito']='PASS' if r['soglia'] and value>=r['soglia'] else 'FAIL' if r['soglia'] else 'NON_APPLICATO';r['uso']='; '.join(r.pop('usi'));rows.append(r)
 with (DS/'Contrasti.csv').open('w',newline='') as f:
  writer=csv.DictWriter(f,fieldnames=list(rows[0]));writer.writeheader();writer.writerows(rows)
 md=['# Contrasti delle due basi provvisorie','', 'Verifica tecnica sRGB della revisione UI 0.3, 11 ottobre 2026. Le coppie effettive sono raccolte durante il disegno dei testi e delle icone; una riga aggrega usi identici. Le verifiche supplementari dei cinque accenti B controllano testo nero sulla palette, senza affermare che ogni colore sia uno stato semantico. Nessun esito è un risultato di test con utenti o una certificazione WCAG generale.','', 'A: crema e terracotta, Georgia e Trebuchet MS. B: superfici bianche su turchese, Boldonse nei titoli e Helvetica Neue come fallback effettivo dell’intent Forma DJR Text. Palette B esatta: rosa #FD87BA, lime #ADE25D, viola #9E6CDA, giallo #FCEC52, turchese #80EFED. Successo, avviso, errore e informazione mantengono ruoli separati.','', '| Direzione | Uso / origine | Colori | Rapporto | Soglia | Esito |','|---|---|---|---:|---:|---|']
 for r in rows:
  uses=r['uso'].split('; ');display='; '.join(uses[:2])+(f' · altri {len(uses)-2} usi' if len(uses)>2 else '')
  md.append(f'| {r["direzione"]} | {display} / {r["origine"]} | {r["primo_piano"]} / {r["sfondo"]} | {r["rapporto"]:.3f}:1 | {r["soglia"] or "—"} | {r["esito"]} |')
 md += ['','Il CSV conserva tutti gli usi aggregati. La soglia è verificata sul rapporto non arrotondato. Formula: (L maggiore + 0,05) / (L minore + 0,05); L = 0,2126 R + 0,7152 G + 0,0722 B dopo linearizzazione sRGB, soglia 0,04045.','', 'Si controlla testo contro 4,5:1 anche quando il titolo potrebbe soddisfare la soglia del testo grande. Icone funzionali, bordi dei campi e focus sono controllati contro 3:1 nelle coppie pertinenti. Divider decorativi e testo inattivo sono registrati senza applicare una soglia obbligatoria. I fondi di stato includono simbolo e messaggio.','', 'I controlli hanno altezza 48 px, i campi 52 px, i filtri 44 px. I tag descrittivi passivi hanno altezza 28 px e non rappresentano pulsanti. Il bookmark mostra un’area di 44 × 44 px e un’icona su griglia 24 px. La raccomandazione 44 px si riferisce a WCAG 2.5.5 AAA; WCAG 2.2 AA 2.5.8 richiede 24 px o le condizioni/eccezioni equivalenti. Nessun target nativo è stato verificato in Figma.','', 'Il focus ha anello 3 px e distanza 3 px; segue il raggio del controllo, compresa la pillola. Ordine, occlusione, tastiera, ingrandimento, lettore di schermo e movimento ridotto richiedono verifiche nel prototipo. Le tavole sono statiche.','', 'Fonti primarie: [W3C contrasto testo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [contrasto non testuale](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [focus](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), [target enhanced](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html), [target minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).']
 (DS/'Contrasti.md').write_text('\n'.join(md)+'\n');return rows

def main():
 export_tokens()
 a=tile(Canvas(1440,1840,'A',THEMES,font,glyph_paths,'SNODO · style tile A · UI 0.3'),HERE)
 b=tile(Canvas(1440,1840,'B',THEMES,font,glyph_paths,'SNODO · style tile B · UI 0.3'),HERE)
 st=states(Canvas(1440,1920,'A',THEMES,font,glyph_paths,'SNODO · stati e controlli · UI 0.3'),DS)
 media=[]
 for theme in ('A','B'):
  scene=Canvas(360,200,theme,THEMES,font,glyph_paths,'SNODO · cortile dimostrativo · '+theme)
  courtyard(scene,0,0,360,200);media.append(scene.save(HERE/('Media_cortile_'+theme)))
 assets=[a,b,st,*media];rows=contrasts(assets)
 # Logical paragraphs are recorded before wrapping: equality is independent
 # of typography and SVG glyph count, while preserving order and duplicates.
 core_ids=['03','04','05','06','07','08','09']
 equality={id:a['logical_copy'][id]==b['logical_copy'][id] for id in core_ids}
 nine=sorted(x['id'] for x in a['component_areas'])==sorted(x['id'] for x in b['component_areas'])==[f'{i:02}' for i in range(1,10)]
 overflows=[{'asset':Path(asset['svg']).name,**o} for asset in assets for o in asset['overflows']]
 failures=[r for r in rows if r['esito']=='FAIL']
 report={'date':'2026-10-11','ui_revision':'0.3','product_name':'SNODO','product_name_status':'provisional','status':'proposed_no_selected_direction','regenerates_both_tiles':True,'rasterization':'Every PNG rasterized from its SVG through bundled Node.js/sharp','tile_dimensions':{'width':1440,'height':1840},'states_dimensions':{'width':1440,'height':1920},'mobile_component_width_px':360,'same_product_content':all(equality.values()),'logical_paragraph_equality_by_component':equality,'same_product_component_quantity':nine,'component_sections_each_tile':9,'allowed_content_differences':['Palette: cinque ruoli A / cinque accenti B e relativi codici HEX','Nomi direzione e descrizione visuale','Font e nota di fallback','Ritorni a capo dipendenti dai font','Decorazioni e impaginazione della direzione'],'overflow_checks':overflows,'contrast_failures':failures,'contrast_checks':{'pairs':len(rows),'pass':sum(r['esito']=='PASS' for r in rows),'not_applicable':sum(r['esito']=='NON_APPLICATO' for r in rows)},'font_rendering_B':{'heading':'Boldonse-Regular.ttf: SVG glyph outlines with Unicode in data-text and metadata','body_intent':'Forma DJR Text','body_actual':'Helvetica Neue','body_actual_file':'/System/Library/Fonts/HelveticaNeue.ttc','body_indices':{'regular':0,'bold':1},'Forma_DJR_Text_available':False},'brand_palette_B':{k:v for k,v in THEMES['B']['colors'].items() if k.startswith('accent') and k!='accentDecorative'},'component_geometry':{'card_radius_A':20,'card_radius_B':32,'control_height':48,'field_height':52,'field_radius_A':12,'field_radius_B':18,'passive_tag_height':28,'interactive_filter_height':44,'icon_grid':24,'icon_stroke':1.8,'bookmark_hit_area':[44,44],'navigation':[360,80],'active_icon_capsule':[48,32]},'assets':[{k:v for k,v in asset.items() if k not in ('logical_copy','contrast_uses')} for asset in assets],'runtime_dependencies':['Python 3','Pillow for font metrics','fontTools for Boldonse glyph outlines; install separately','Bundled Node.js and sharp for SVG-to-PNG rendering','Local Georgia/Trebuchet MS/Helvetica Neue; no Forma DJR Text supplied'],'limitations':['Static SVG components; no native Figma import or interactive component library verified','No real feedback, test outcome or selected direction','Product catalog, illustration, visit, contribution and intensity values are mock','Atmosphere intensity is not satisfaction or a questionnaire-derived score','Glyph outline headings retain Unicode in metadata; native text editability unverified','Geometry and contrast checks do not replace usability or accessibility testing']}
 report['font_svg_modes']={'A_heading':'native SVG text: Georgia','A_body':'native SVG text: Trebuchet MS','B_heading':'glyph outlines: Boldonse-Regular.ttf','B_body':'native SVG text: Helvetica Neue; Forma DJR Text unavailable'}
 (DS/'Controlli_build.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
 print(json.dumps({k:report[k] for k in ('ui_revision','same_product_content','same_product_component_quantity','overflow_checks','contrast_failures','contrast_checks')},ensure_ascii=False,indent=2))
 if overflows or failures or not all(equality.values()) or not nine:raise SystemExit(1)

if __name__=='__main__':main()
