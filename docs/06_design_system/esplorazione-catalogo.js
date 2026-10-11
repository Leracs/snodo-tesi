(function(){
 'use strict';
 const D=window.SnodoDiscovery,K=window.SnodoCore,C=window.SNODO_CATALOG;
 const $=id=>document.getElementById(id);
 const saved=new Set();
 const gallery={theme:window.SnodoSiteTheme?.get()||'B',criteria:{city:'Roma',query:'',budgetMax:null,noise:'',noiseMode:'required',outdoor:false},updateLinks(){document.querySelectorAll('[data-discovery-link]').forEach(link=>{link.href=`../07_prototipo/index.html?screen=${link.dataset.discoveryLink}&place=${encodeURIComponent($('discovery-place').value)}&theme=${gallery.theme}`;});}};
 window.SnodoDiscoveryGallery=gallery;
 const feedback=text=>{$('discovery-feedback').textContent=text;};
 const ordinal=p=>C.places.filter(x=>x.city===p.city).findIndex(x=>x.id===p.id)+1;
 function sync(){ $('discovery-budget').value=gallery.criteria.budgetMax??'';$('discovery-noise').value=gallery.criteria.noise;$('discovery-rule').value=gallery.criteria.noiseMode; }
 function render(){
  const actual=C.places.find(p=>p.id===$('discovery-place').value);
  const sample=JSON.parse(JSON.stringify(actual));
  if($('discovery-review').value==='none')sample.reviews=[];
  if($('discovery-review').value==='long'&&sample.reviews.length)sample.reviews[0].text='Durante la mia visita con gli amici riuscivamo a parlare, ma verso la fine della serata la musica è aumentata. Il cortile mi è piaciuto; avrei voluto sapere prima che la spesa poteva cambiare in base alla consumazione. Questo racconto lungo è un esempio predisposto per provare il componente, non una testimonianza raccolta.';
  gallery.criteria.city=actual.city;
  const part=K.partitionPlaces(C.places,gallery.criteria);
  $('place-preview').innerHTML=D.card(sample,{saved:saved.has(sample.id),ordinal:ordinal(sample)});
  $('review-preview').innerHTML=D.review(sample,{full:true});
  $('map-preview').innerHTML=part.all.length?D.map(part.all,{selected:actual.id,saved:[...saved],ordinal}):'<p class="sd-review">Nessun risultato. Modifica i criteri esplicitamente.</p>';
  $('discovery-results').textContent=`${part.matched.length} ${part.matched.length===1?"corrispondenza":"corrispondenze"} · ${part.unknown.length} da verificare · ${part.other.length} ${part.other.length===1?"altra alternativa":"altre alternative"}.`;
  $('criteria-preview').innerHTML=D.criteria(gallery.criteria);
  $('criteria-actions').innerHTML=`<div class="sd-ai-actions">${D.control('Annulla','cancel-filters','','sd-text-action')}${D.control('Applica','apply-filters','','sd-main')}</div>${D.control('Azzera la bozza','clear-filters','','sd-text-action')}`;
  const mode=$('discovery-context').value;
  $('dock-preview').innerHTML=D.dock({label:mode==='individual'?'Proponi al gruppo':'Preferisco questo luogo',action:mode==='individual'?'propose':'group-prefer',disabled:mode==='blocked',reason:mode==='blocked'?'Non corrisponde ai requisiti del gruppo.':mode==='group'?'Venerdì con Chiara e Matteo':''});
  const aiCriteria={...gallery.criteria,budgetMax:20,noise:'basso',noiseMode:'required'};
  $('ai-preview').innerHTML=D.aiSummary(`<ul class="sd-summary-list"><li>${D.E(actual.city)}</li><li>Budget necessario: fino a 20 €</li><li>Rumore necessario: fino a 2/5</li></ul>`,K.partitionPlaces(C.places,aiCriteria).matched.length);
  gallery.updateLinks();
 }
 $('discovery-place').addEventListener('change',()=>{render();feedback('Contesto aggiornato: lo stesso luogo è usato da card, recensione e link al prototipo.');});
 $('discovery-review').addEventListener('change',render);
 $('discovery-context').addEventListener('change',render);
 $('esplorazione').addEventListener('click',event=>{
  const button=event.target.closest('[data-action]');if(!button||button.disabled)return;
  const action=button.dataset.action;
  if(action==='card-save'){saved.has(button.dataset.id)?saved.delete(button.dataset.id):saved.add(button.dataset.id);render();feedback(saved.has(button.dataset.id)?'Salvato nell’anteprima; il marker conserva anche il numero.':'Salvataggio rimosso dall’anteprima.');}
  if(action==='pin'){
   const p=C.places.find(p=>p.id===button.dataset.id);let option=[...$('discovery-place').options].find(o=>o.value===p.id);
   if(!option){option=document.createElement('option');option.value=p.id;option.textContent=p.name+' · '+p.city;$('discovery-place').appendChild(option);}
   $('discovery-place').value=p.id;render();feedback('Marker selezionato: card e testimonianza mostrano lo stesso luogo.');
  }
  if(action==='quick-budget'||action==='quick-noise'){
   if(action==='quick-budget')gallery.criteria.budgetMax=gallery.criteria.budgetMax==null?20:null;
   else{gallery.criteria.noise=gallery.criteria.noise?'':'basso';gallery.criteria.noiseMode='required';}
   sync();render();feedback('Filtro rapido applicato: mappa e conteggio aggiornati.');
  }
  if(action==='apply-filters'){gallery.criteria.budgetMax=$('discovery-budget').value?Number($('discovery-budget').value):null;gallery.criteria.noise=$('discovery-noise').value;gallery.criteria.noiseMode=$('discovery-rule').value;render();feedback('Criteri applicati: corrispondenze, dati da verificare e altre alternative restano distinti.');}
  if(action==='cancel-filters'){sync();feedback('Bozza annullata; i criteri applicati restano invariati.');}
  if(action==='clear-filters'){ $('discovery-budget').value='';$('discovery-noise').value='';$('discovery-rule').value='required';feedback('Bozza azzerata; applica per cambiare i risultati oppure annulla.');}
  if(action==='filters'||action==='ai-correct'){$('discovery-budget').focus();feedback('Modifica la bozza dell’editor, poi applica o annulla.');}
  if(action==='ai-apply'){Object.assign(gallery.criteria,{budgetMax:20,noise:'basso',noiseMode:'required'});sync();render();feedback('Criteri AI applicati con il tuo gesto; la mappa mostra le corrispondenze della città corrente.');}
  if(action==='group-prefer'||action==='propose')feedback(action==='group-prefer'?'Preferenza espressa nell’anteprima. Non è una conferma né l’accordo degli amici.':'Luogo proposto nell’anteprima. Per percorrere gli inviti, apri il prototipo.');
  if(action==='place'||action==='card-reviews')window.location.href=`../07_prototipo/index.html?screen=${action==='place'?'S05':'S08'}&place=${encodeURIComponent(button.dataset.id)}&theme=${gallery.theme}`;
 });
 function applyTheme(value){gallery.theme=value;document.querySelectorAll('.ds-token-scope').forEach(scope=>scope.dataset.theme=value);document.querySelectorAll('[data-discovery-theme]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.discoveryTheme===value)));gallery.updateLinks();}
 document.addEventListener('snodo-theme-change',event=>applyTheme(event.detail.theme));
 document.querySelectorAll('[data-discovery-theme]').forEach(button=>button.addEventListener('click',()=>{window.SnodoSiteTheme?.set(button.dataset.discoveryTheme);applyTheme(button.dataset.discoveryTheme);}));
 sync();render();applyTheme(gallery.theme);
})();
