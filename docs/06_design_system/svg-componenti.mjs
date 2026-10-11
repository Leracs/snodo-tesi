/* Genera SVG autonomi da geometrie e stili letti nel browser (nessun raster). */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import crypto from 'node:crypto';
const root=path.dirname(fileURLToPath(import.meta.url));
const layouts=JSON.parse(fs.readFileSync(path.join(root,'svg/layouts.json'),'utf8'));
const font=fs.readFileSync(path.join(root,'../05_style_tiles/fonts/Boldonse-Regular.ttf')).toString('base64');
const mali=fs.readFileSync(path.join(root,'../05_style_tiles/fonts/Mali-SemiBold.ttf')).toString('base64');
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const N=n=>Number(n.toFixed(2));
const color=c=>c&&c!=='transparent'&&c!=='rgba(0, 0, 0, 0)';
const manifest=[];
const accents=Object.fromEntries(['A','B'].map(t=>[t,JSON.parse(fs.readFileSync(path.join(root,`theme_${t}.json`),'utf8')).colors.dataAccent]));
const cleanSVG=markup=>markup.replace(/<([a-z][\w:-]*)\s+([^>]*?)>/gi,(_,tag,body)=>{const attrs=new Map([...body.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m=>[m[1],m[2]]));return `<${tag} ${[...attrs].map(([k,v])=>`${k}="${v}"`).join(' ')}${body.endsWith('/')?'/':''}>`;});

for(const layout of layouts){
 let clips='',serial=0;
 function paint(node){
  if(node.type==='text')return `<text x="${N(node.x)}" y="${N(node.y)}" font-family="${E(node.family)}" font-size="${node.size}" font-weight="${node.weight}" font-style="${node.style}" letter-spacing="${E(node.spacing)}" fill="${E(node.color)}" xml:space="preserve">${E(node.text)}</text>`;
  if(node.type==='svg')return `<svg x="${N(node.x)}" y="${N(node.y)}" width="${N(node.width)}" height="${N(node.height)}" viewBox="${E(node.viewBox)}" preserveAspectRatio="${E(node.aspect)}">${cleanSVG(node.content)}</svg>`;
  const b=node.box;let out='';
  if(color(node.background))out+=`<rect x="${N(b.x)}" y="${N(b.y)}" width="${N(b.width)}" height="${N(b.height)}" rx="${N(node.radius)}" fill="${E(node.background)}"/>`;
  if(node.border.every(v=>v.width===node.border[0].width&&v.color===node.border[0].color)&&node.border[0].width>0){const w=node.border[0].width;out+=`<rect x="${N(b.x+w/2)}" y="${N(b.y+w/2)}" width="${N(Math.max(0,b.width-w))}" height="${N(Math.max(0,b.height-w))}" rx="${N(Math.max(0,node.radius-w/2))}" fill="none" stroke="${E(node.border[0].color)}" stroke-width="${w}"/>`;}
  else node.border.forEach((v,i)=>{if(!v.width||!color(v.color))return;const edges=[[b.x,b.y+v.width/2,b.x+b.width,b.y+v.width/2],[b.x+b.width-v.width/2,b.y,b.x+b.width-v.width/2,b.y+b.height],[b.x,b.y+b.height-v.width/2,b.x+b.width,b.y+b.height-v.width/2],[b.x+v.width/2,b.y,b.x+v.width/2,b.y+b.height]];const [x1,y1,x2,y2]=edges[i];out+=`<line x1="${N(x1)}" y1="${N(y1)}" x2="${N(x2)}" y2="${N(y2)}" stroke="${E(v.color)}" stroke-width="${v.width}"/>`;});
  let children=node.children.map(paint).join('');
  if(node.children[0]?.type==='text'&&node.children[0].text==='Atmosfera')children=`<rect x="${N(b.x)}" y="${N(b.y+(b.height-24)/2)}" width="4" height="24" rx="2" fill="${accents[layout.theme]}"/>`+children;
  if(['DS06','DS20'].includes(layout.id)&&node.clip&&node.border.every(v=>v.width===0)&&node.children.length&&node.children.every(c=>c.type==='text')&&node.children[0].x>b.x+3){const first=node.children[0],last=node.children.at(-1);children=paint({...first,text:'“',x:b.x})+children+paint({...last,text:'”',x:last.right});}

  if(node.clip){const id='clip-'+(++serial);clips+=`<clipPath id="${id}"><rect x="${N(b.x)}" y="${N(b.y)}" width="${N(b.width)}" height="${N(b.height)}" rx="${N(node.radius)}"/></clipPath>`;children=`<g clip-path="url(#${id})">${children}</g>`;}
  return `<g opacity="${node.opacity}">${out}${children}</g>`;
 }
 const drawing=paint(layout.tree);
 const title=`${layout.id} · ${layout.name} · ${layout.theme==='B'?'Pop':'Calda'} · ${layout.variant}`;
 const svg=`<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${Math.ceil(layout.width)}" height="${Math.ceil(layout.height)}" viewBox="0 0 ${Math.ceil(layout.width)} ${Math.ceil(layout.height)}" role="img" aria-labelledby="title desc"><title id="title">${E(title)}</title><desc id="desc">Componente SNODO, visuale statica con dati dimostrativi. Forme, icone e testi vettoriali. Layout HTML a 390 px.</desc><defs>${clips}${layout.theme==='B'?`<style>@font-face{font-family:Boldonse;src:url(data:font/ttf;base64,${font}) format('truetype');font-weight:400;font-style:normal}</style>`:`<style>@font-face{font-family:Mali;src:url(data:font/ttf;base64,${mali}) format('truetype');font-weight:600;font-style:normal}</style>`}</defs>${drawing}</svg>\n`;
 if(/foreignObject|<image\b|https?:\/\/(?!www.w3.org)/i.test(svg))throw new Error('SVG non autonomo: '+layout.file);
 fs.writeFileSync(path.join(root,'svg',layout.file),svg);
 manifest.push({id:layout.id,name:layout.name,theme:layout.theme,variant:layout.variant,file:'svg/'+layout.file,width:Math.ceil(layout.width),height:Math.ceil(layout.height),sha256:crypto.createHash('sha256').update(svg).digest('hex')});
}
fs.writeFileSync(path.join(root,'SVG_manifest.json'),JSON.stringify({default_theme:'B',format:'native_SVG_shapes_and_editable_text',font:'Mali SemiBold 600 and Boldonse embedded under OFL; body fonts use system fallbacks',entries:manifest},null,2)+'\n');
console.log(`${manifest.length} SVG vettoriali generati.`);
