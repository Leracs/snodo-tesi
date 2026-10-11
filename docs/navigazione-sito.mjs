// Un solo header per portali, documenti e dimostrazioni, anche nell’export Pages.
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const version = file => crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex').slice(0,12);
const escape = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function uniformaNavigazione(html, file) {
  file=file.replaceAll('\\','/');
  const relative = target => path.posix.relative(path.posix.dirname(file),target) || path.posix.basename(target);
  const area = file==='Contributi_tesi.html'||file.startsWith('10_contributi_tesi/') ? 'tesi' : file.startsWith('06_design_system/') ? 'design-system' : file.startsWith('07_prototipo/') ? 'prototipo' : ['Indice_consegne.html','index.html'].includes(file) ? 'home' : 'lavoro';
  const links=[['tesi','Contributi_tesi.html','Tesi'],['lavoro','Materiale_di_lavoro.html','Materiale di lavoro'],['design-system','06_design_system/index.html','Design system'],['prototipo','07_prototipo/index.html','Prototipo']];
  const header=`<header class="snodo-site-header" data-site-header><div class="snodo-site-header-inner"><a class="snodo-site-brand" href="${relative('Indice_consegne.html')}" aria-label="SNODO — Home"${area==='home'?' aria-current="page"':''}>SNODO</a><nav class="snodo-site-links" aria-label="Navigazione dei materiali">${links.map(([key,target,label])=>`<a href="${relative(target)}"${area===key?' aria-current="page"':''}>${label}</a>`).join('')}</nav><div class="snodo-site-utilities"><label class="site-theme-choice"><span>Stile</span><select data-site-theme-control aria-label="Stile del sito"><option value="B">Pop</option><option value="A">Calda · Mali</option></select></label><div class="snodo-site-session" data-snodo-access-actions></div></div></div></header>`;
  const oldHeader=html.match(/<header class="(?:reader-top|snodo-site-header)"[^>]*>[\s\S]*?<\/header>/);
  let toolbar='';
  if(oldHeader && !oldHeader[0].includes('data-site-header')) {
    const buttons=oldHeader[0].match(/<button\b[^>]*(?:data-print|data-review-toggle)[^>]*>[\s\S]*?<\/button>/g)||[];
    const back=oldHeader[0].match(/<a class="back-link"[^>]*>[\s\S]*?<\/a>/)?.[0]||'';
    if(back||buttons.length) toolbar=`<div class="snodo-document-tools" aria-label="Strumenti del documento">${back}<div>${buttons.join('')}</div></div>`;
  }
  if(oldHeader) html=html.replace(oldHeader[0],header);
  else if(/<nav class="site-nav"/.test(html)) html=html.replace(/<nav class="site-nav"[^>]*>[\s\S]*?<\/nav>/,header);
  else {
    if(!/<body\b/.test(html)) {
      // Alcune pagine di crediti inizialmente omettevano head e body espliciti.
      html=html.replace(/(<html[^>]*>)/,'$1<head>').replace(/(<\/style>)/,'$1</head><body>').replace('</html>','</body></html>');
    }
    html=html.replace(/(<body[^>]*>)/,'$1'+header);
  }
  if(toolbar) html=html.replace(/(<main\b[^>]*>)/,'$1'+toolbar);
  for(const asset of ['tema-sito.css','tema-sito.js']) {
    const url=relative(asset)+'?v='+version(asset);
    const regex=new RegExp(`((?:href|src)=")[^"\\s]*${asset.replace('.','\\.')}[^"\\s]*(")`,'g');
    if(regex.test(html)) html=html.replace(regex,`$1${url}$2`);
    else html=html.replace('</head>',(asset.endsWith('.css')?`<link rel="stylesheet" href="${url}">`:`<script src="${url}"></script>` )+'</head>');
  }
  if(file==='07_prototipo/index.html') html=html.replace(/(<body\b[^>]*)(>)/,(_,attrs,end)=>attrs.includes('data-site-layout')?attrs+end:attrs+' data-site-layout="prototype"'+end);
  else if(file==='06_design_system/Atmosfera_affluenza_demo.html'||file.endsWith('/Crediti_fotografie.html')) html=html.replace(/(<body\b[^>]*)(>)/,(_,attrs,end)=>attrs.includes('data-site-layout')?attrs+end:attrs+' data-site-layout="standalone"'+end);
  return html;
}
if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  if(process.argv[2]==='--all') {
    function walk(dir) { for(const item of fs.readdirSync(dir,{withFileTypes:true})) {const full=path.join(dir,item.name); if(item.isDirectory())walk(full);else if(item.name.endsWith('.html')) {const html=fs.readFileSync(full,'utf8');fs.writeFileSync(full,uniformaNavigazione(html,path.relative(root,full)));}} }
    walk(root);
  } else process.stdout.write(uniformaNavigazione(fs.readFileSync(0,'utf8'),process.argv[2]));
}
