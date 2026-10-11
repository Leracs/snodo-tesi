/* Pop è la direzione scelta dal progetto; Calda rimane un’alternativa. */
(function () {
  'use strict';
  const key='snodo-site-theme-v1', valid=value=>value==='A'||value==='B';
  let stored;try{stored=localStorage.getItem(key);}catch(_){}
  const query=new URLSearchParams(location.search).get('theme');
  let current=valid(query)?query:valid(stored)?stored:'B';
  function set(value,{persist=true}={}) {
    if(!valid(value))return;
    const changed=current!==value;current=value;
    document.documentElement.dataset.siteTheme=value;
    document.documentElement.dataset.theme=value;
    if(document.body?.hasAttribute('data-theme'))document.body.dataset.theme=value;
    document.querySelectorAll('[data-site-theme-control],#theme,#demo-theme').forEach(select=>select.value=value);
    if(persist)try{localStorage.setItem(key,value);}catch(_){}
    if(changed)document.dispatchEvent(new CustomEvent('snodo-theme-change',{detail:{theme:value}}));
  }
  window.SnodoSiteTheme={set,get:()=>current};set(current,{persist:false});
  document.addEventListener('DOMContentLoaded',()=>{
    set(current,{persist:false});
    document.querySelectorAll('[data-site-theme-control],#theme,#demo-theme').forEach(select=>select.addEventListener('change',()=>set(select.value)));
  });
})();
