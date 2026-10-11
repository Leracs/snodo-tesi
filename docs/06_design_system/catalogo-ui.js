/* Catalogo visivo: filtri indipendenti dal playground, temi e varianti. */
(function () {
  'use strict';
  const search=document.getElementById('component-search'), group=document.getElementById('component-group'), status=document.getElementById('component-status');
  const cards=[...document.querySelectorAll('[data-component-card]')];
  const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  function filter() {
    let visible=0;
    cards.forEach(card=>{card.hidden=!(normalize(card.dataset.search).includes(normalize(search.value.trim()))&&(!group.value||card.dataset.group===group.value)&&(!status.value||card.dataset.status===status.value));if(!card.hidden)visible++;});
    document.getElementById('component-count').textContent=`${visible} ${visible===1?'componente visualizzato':'componenti visualizzati'} su ${cards.length}`;
    document.getElementById('component-empty').hidden=visible!==0;
  }
  search.addEventListener('input',filter);group.addEventListener('change',filter);status.addEventListener('change',filter);
  document.getElementById('component-reset').addEventListener('click',()=>{search.value='';group.value='';status.value='';filter();search.focus();});
  const selector=document.getElementById('preview-component'), variant=document.getElementById('preview-variant'), container=document.getElementById('component-preview');
  const themeButtons=[...document.querySelectorAll('[data-library-theme]')];
  let currentTheme=window.SnodoSiteTheme?.get()||'B';
  const placeId=()=>variant.value==='Dati assenti'?'luogo-roma-04':variant.value==='Fascia assente il lunedì'?'luogo-roma-02':'luogo-roma-01';
  const svgPath=(id,theme,variant)=>`svg/${id==='pattern'?'DS08-DS19':id}-${theme}-${variant.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}.svg`;
  function downloads(){
    document.getElementById('preview-svg').href=svgPath(selector.value,currentTheme,variant.value);
    document.querySelectorAll('[data-svg-component]').forEach(link=>{const id=link.dataset.svgComponent;link.href=svgPath(id,currentTheme,window.SnodoCampioni.variants[id][0]);});
  }
  function theme(value) {
    if(window.SnodoDiscoveryGallery)window.SnodoDiscoveryGallery.theme=value;
    currentTheme=value;downloads();
    document.querySelectorAll('.ds-token-scope').forEach(scope=>{scope.dataset.theme=value;});
    themeButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.libraryTheme===value)));
    document.getElementById('preview-theme-label').textContent=value==='B'?'B · Pop':'A · Calda';
    document.querySelectorAll('[data-prototype-link]').forEach(link=>{link.href=`../07_prototipo/index.html?screen=${link.dataset.prototypeLink}&place=${placeId()}&theme=${value}`;});
    const tokens=window.SNODO_DESIGN_TOKENS[value];
    document.querySelectorAll('[data-token-color]').forEach(item=>{const color=tokens[item.dataset.tokenColor];item.querySelector('.ds-swatch').style.backgroundColor=color;item.querySelector('code').textContent=color;});
    if(window.SnodoDiscoveryGallery)window.SnodoDiscoveryGallery.updateLinks();
    document.getElementById('font-heading-name').textContent=value==='B'?'Boldonse':'Georgia';
    document.getElementById('font-body-name').textContent=value==='B'?'Forma DJR Text · fallback Helvetica Neue':'Trebuchet MS';
  }
  function render() {
    const id=selector.value, combined=id==='pattern', shared=combined||id==='DS08'||id==='DS19';
    const component=window.SNODO_DESIGN_COMPONENTS.find(c=>c.id===id);
    document.getElementById('preview-name').textContent=combined?'Atmosfera e affluenza':`${component.id} · ${component.name}`;
    document.getElementById('preview-description').textContent=combined?'Luce, rumore e comfort sopra; affluenza sotto, in tre fasce orarie e con giorno selezionabile.':component.properties_and_variants;
    const badge=document.getElementById('preview-status');badge.textContent=shared?'Nel prototipo':'Campione visivo';badge.classList.toggle('ready',shared);
    document.getElementById('preview-note').textContent=shared?'Codice condiviso con S05/S06 · dati dimostrativi.':'Campione illustrativo della specifica. Le azioni rappresentate non sono attive.';
    document.getElementById('preview-prototype-links').hidden=!shared;
    document.getElementById('preview-spec').href=shared?'Atmosfera_affluenza.html':'Componenti_e_comportamenti.html';
    if(shared) {
      const place=window.SNODO_CATALOG.places.find(p=>p.id===placeId());
      container.innerHTML=window.SnodoAtmosfera.render(place,variant.value==='Fascia assente il lunedì'?{initialDay:1}:{});
      if(id==='DS08') {container.querySelector('.snodo-context-attendance').remove();container.querySelector('dialog').remove();}
      if(id==='DS19')container.querySelector('.snodo-context-atmosphere').remove();
      if(id!=='DS08')window.SnodoAtmosfera.mount(container,place);
    } else container.innerHTML=window.SnodoCampioni.render(id,variant.value);
    theme(currentTheme);
    document.getElementById('preview-announcement').textContent=`${document.getElementById('preview-name').textContent}: ${variant.value}.`;
  }
  function choose(id) {
    selector.value=id;
    variant.replaceChildren(...(window.SnodoCampioni.variants[id==='pattern'?'DS19':id]).map(label=>new Option(label,label)));
    render();
  }
  selector.addEventListener('change',()=>choose(selector.value));variant.addEventListener('change',render);
  document.querySelectorAll('[data-show-component]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();choose(link.dataset.showComponent);document.getElementById('anteprima').scrollIntoView({block:'start'});document.getElementById('preview-title').focus({preventScroll:true});}));
  document.addEventListener('snodo-theme-change',event=>theme(event.detail.theme));
  themeButtons.forEach(button=>button.addEventListener('click',()=>{window.SnodoSiteTheme?.set(button.dataset.libraryTheme);theme(button.dataset.libraryTheme);}));
  choose('pattern');filter();
})();
