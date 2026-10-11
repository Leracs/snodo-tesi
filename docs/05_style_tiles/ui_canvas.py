"""Primitive SVG, tipografia misurata e icone 24 px per le tavole SNODO.
Le PNG vengono sempre rasterizzate dagli SVG con sharp, senza doppia scena.
"""
from html import escape
from pathlib import Path
import json
import math
import subprocess
import sys

class Canvas:
 def __init__(self,w,h,theme,themes,font,outliner,title):
  self.w=w;self.h=h;self.theme=theme;self.themes=themes;self.font=font;self.outliner=outliner
  self.parts=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title desc">',f'<title id="title">{escape(title)}</title>','<desc id="desc">SNODO, nome provvisorio. Componenti statici di progetto; luoghi, visite e contributi mock. Nessun risultato di test con utenti.</desc>', '<defs><filter id="card-shadow" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="5" stdDeviation="9" flood-color="#28221F" flood-opacity="0.075"/></filter></defs>']
  self.labels=[];self.copy={};self.component=None;self.areas=[];self.sources=[];self.overflows=[];self.contrast_uses=[];self.counter=0
 @property
 def c(self):return self.themes[self.theme]['colors']
 @property
 def t(self):return self.themes[self.theme]
 def begin(self,id,title,x,y,w,h):
  self.component=id;self.copy[id]=[];self.areas.append({'id':id,'title':title,'x':x,'y':y,'width':w,'height':h})
  self.parts.append(f'<g id="component-{id}" data-component-title="{escape(title,quote=True)}">')
 def end(self):self.parts.append('</g>');self.component=None
 def rect(self,x,y,w,h,fill,r=0,stroke=None,sw=1.5,shadow=False):
  self.parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}"'+(f' stroke="{stroke}" stroke-width="{sw}"' if stroke else '')+(' filter="url(#card-shadow)"' if shadow else '')+'/>')
 def line(self,x1,y1,x2,y2,color=None,sw=1):
  self.parts.append(f'<path d="M{x1} {y1}L{x2} {y2}" stroke="{color or self.c["divider"]}" stroke-width="{sw}" fill="none" stroke-linecap="round"/>')
 def path(self,d,fill='none',stroke=None,sw=1.8):
  self.parts.append(f'<path d="{d}" fill="{fill}"'+(f' stroke="{stroke}" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round"' if stroke else '')+'/>')
 def circle(self,x,y,r,fill,stroke=None,sw=1.5):
  self.parts.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}"'+(f' stroke="{stroke}" stroke-width="{sw}"' if stroke else '')+'/>')
 def width(self,s,size=16,weight=400,family=None):
  fam=family or self.t.get('body','Trebuchet MS');width=self.font(fam,size,weight).getlength(s)
  if fam in ('Boldonse','Mali'):width=max(width,self.outliner(s,size,fam,weight)[1])
  return width
 def text(self,x,y,s,size=16,color=None,weight=400,family=None,anchor='start',maxw=None,record=True,bg=None):
  fam=family or self.t.get('body','Trebuchet MS');color=color or self.c['text'];width=self.width(s,size,weight,fam)
  if maxw is not None and width>maxw+.25:self.overflows.append({'component':self.component,'text':s,'width':round(width,2),'available':maxw})
  left=x-width if anchor=='end' else x-width/2 if anchor=='middle' else x
  bbox=self.font(fam,size,weight).getbbox(s,anchor='ls')
  if left+min(0,bbox[0])<-.5 or left+width>self.w+.5 or y+bbox[1]<-.5 or y+bbox[3]>self.h+.5:self.overflows.append({'component':self.component,'text':s,'reason':'canvas bounds'})
  if fam in ('Boldonse','Mali'):
   paths,pw=self.outliner(s,size,fam,weight);px=x-pw if anchor=='end' else x-pw/2 if anchor=='middle' else x
   self.parts.append(f'<g transform="translate({px:.3f} {y})" fill="{color}" data-text="{escape(s,quote=True)}" data-font="{escape(fam,quote=True)}" data-size="{size}" data-weight="{weight}" aria-label="{escape(s,quote=True)}"><title>{escape(s)}</title>{paths}</g>')
   self.sources.append({'text':s,'x':x,'baseline':y,'size':size,'weight':weight,'font':fam,'svg':'glyph outlines from actual local font file'})
  else:self.parts.append(f'<text x="{x}" y="{y}" font-family="{escape(fam)}" font-size="{size}" font-weight="{weight}" text-anchor="{anchor}" fill="{color}">{escape(s)}</text>')
  if record:
   self.labels.append(s)
   if self.component:self.copy[self.component].append(s)
  if bg:self.contrast_uses.append({'theme':self.theme,'use':f'{self.component or "board"}: {s}','fg':color,'bg':bg,'threshold':4.5,'criterion':'1.4.3'})
 def para(self,x,y,s,w,size=16,line=24,color=None,weight=400,family=None,bg=None):
  fam=family or self.t.get('body','Trebuchet MS');lines=[]
  for p in s.split('\n'):
   current=''
   for word in p.split():
    candidate=(current+' '+word).strip()
    if current and self.width(candidate,size,weight,fam)>w:lines.append(current);current=word
    else:current=candidate
   lines.append(current)
  for i,l in enumerate(lines):self.text(x,y+i*line,l,size,color,weight,fam,maxw=w,record=False,bg=bg)
  self.labels.append(s)
  if self.component:self.copy[self.component].append(s)
  return y+(len(lines)-1)*line
 def heading(self,x,y,s,size=24,maxw=None,bg=None):self.text(x,y,s,size,family=self.t['heading'],weight=self.t['heading_weight'],maxw=maxw,bg=bg)
 def kicker(self,x,y,n,s):
  self.text(x,y,f'{n:02d}',13,self.c['primary'],700,record=False)
  self.text(x+32,y,s,13,self.c['muted'],700,record=False)
 def icon(self,x,y,name,color=None,size=24,bg=None):
  color=color or self.c['text'];self.parts.append(f'<g transform="translate({x} {y}) scale({size/24})" stroke="{color}" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round" data-icon="{name}">')
  paths={
   'search':['M10.5 17.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14','M16 16l5 5'],
   'bookmark':['M6 3h12v18l-6-4l-6 4Z'],
   'compass':['M12 22a10 10 0 1 1 0-20a10 10 0 0 1 0 20','M15.5 8.5l-2 5l-5 2l2-5Z'],
   'chat':['M5 4h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-8l-5 3v-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z'],
   'profile':['M12 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9','M3.5 21v-1a8.5 8.5 0 0 1 17 0v1'],
   'pin':['M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z','M12 12.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5'],
   'arrow':['M5 12h14','M14 7l5 5l-5 5'],
   'chevron':['M9 5l7 7l-7 7'],
   'check':['M5 12l4 4l10-10'],
   'plus':['M12 5v14','M5 12h14'],
   'sparkle':['M12 2l2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7Z'],
   'warning':['M12 3l10 18H2Z','M12 9v5','M12 17h.01'],
   'error':['M12 22a10 10 0 1 1 0-20a10 10 0 0 1 0 20','M8 8l8 8','M16 8l-8 8'],
   'info':['M12 22a10 10 0 1 1 0-20a10 10 0 0 1 0 20','M12 11v6','M12 7h.01']}
  for d in paths[name]:self.parts.append(f'<path d="{d}"/>')
  self.parts.append('</g>')
  if bg:self.contrast_uses.append({'theme':self.theme,'use':f'{self.component or "board"}: icona {name}','fg':color,'bg':bg,'threshold':3,'criterion':'1.4.11'})
 def star(self,x,y,r,color,points=8,inner=.43):
  pts=[(x+math.cos(-math.pi/2+i*math.pi/points)*(r if i%2==0 else r*inner),y+math.sin(-math.pi/2+i*math.pi/points)*(r if i%2==0 else r*inner)) for i in range(points*2)]
  self.parts.append('<polygon points="'+' '.join(f'{a:.3f},{b:.3f}' for a,b in pts)+f'" fill="{color}"/>')
 def swirl(self,x,y,size,color,sw=8):
  self.parts.append(f'<path d="M22 12C4 37 7 70 28 83C60 104 94 66 70 42C46 17 19 51 43 75C62 94 87 94 99 94" transform="translate({x} {y}) scale({size/110})" fill="none" stroke="{color}" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round"/>')
 def save(self,path):
  metadata={'typography_sources':self.sources,'logical_product_copy':self.copy,'component_areas':self.areas,'scale':'mobile components 1 CSS px = 1 SVG unit','status':'static_proposal_no_user_test'}
  self.parts.append('<metadata id="ui-source">'+escape(json.dumps(metadata,ensure_ascii=False))+'</metadata>');self.parts.append('</svg>')
  path=Path(path);path.with_suffix('.svg').write_text('\n'.join(self.parts)+'\n')
  node=Path(sys.executable).resolve().parents[2]/'node/bin/node';sharp=node.parent.parent/'node_modules/sharp'
  code='const sharp=require(process.argv[3]); sharp(process.argv[1]).png().toFile(process.argv[2]).catch(e=>{console.error(e.message);process.exit(1)});'
  subprocess.run([str(node),'-e',code,str(path.with_suffix('.svg')),str(path.with_suffix('.png')),str(sharp)],check=True)
  return {'svg':str(path.with_suffix('.svg')),'png':str(path.with_suffix('.png')),'width':self.w,'height':self.h,'component_areas':self.areas,'logical_copy':self.copy,'text_nodes':len(self.labels),'overflows':self.overflows,'heading_sources':self.sources,'contrast_uses':self.contrast_uses,'rasterization':'PNG from SVG via sharp'}
