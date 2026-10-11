(() => {
  'use strict';
  // Capture the already-rendered schematic SVGs: no external content or requests.
  const symbols = {};
  document.querySelectorAll('[data-lab]').forEach(lab => {
    const route = lab.dataset.lab;
    symbols[route] = [...document.querySelectorAll(`#${route} .variant-visual svg`)].map(svg => svg.outerHTML);
    const form = lab.querySelector('form');
    form.addEventListener('submit', event => event.preventDefault());
    function update() {
      const variant = Number(form.elements.variant.value);
      const mode = form.elements.mode.value;
      const background = form.elements.background.value;
      const size = form.elements.size.value;
      const canvas = lab.querySelector('.lab-canvas');
      canvas.dataset.mode = mode; canvas.dataset.background = background;
      lab.querySelector('.mark-symbol').innerHTML = symbols[route][variant];
      lab.querySelector('.lab-lockup').style.setProperty('--mark-size', size + 'px');
      lab.querySelectorAll('.size-strip span').forEach(span => span.innerHTML = symbols[route][variant]);
      if (route === 'dialogo') {
        const letters = lab.querySelectorAll('.word-o');
        letters[0].classList.toggle('accent-o', variant === 1);
        letters[1].classList.toggle('accent-o', variant !== 2);
      }
      const link = lab.querySelector('.lab-download');
      link.href = `assets/${route}-${variant + 1}.svg`;
      const names = {color:'colore', black:'nero', white:'bianco', paper:'bianco', turquoise:'turchese', dark:'scuro'};
      const invisible = (mode === 'white' && background === 'paper');
      const weak = (mode === 'black' && background === 'dark');
      lab.querySelector('.lab-status').textContent = `${form.elements.variant.selectedOptions[0].textContent} · ${names[mode]} · fondo ${names[background]} · ${size} px${invisible ? ' — Il segno bianco si confonde con il fondo.' : weak ? ' — Il segno nero si confonde con il fondo scuro.' : ''}`;
    }
    form.addEventListener('change', update); update();
  });
  document.querySelectorAll('[data-compare]').forEach(button => button.addEventListener('click', () => {
    document.querySelector('.compare-grid').dataset.compareMode = button.dataset.compare;
    document.querySelectorAll('[data-compare]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  }));
  const fields = [...document.querySelectorAll('[data-note]')];
  const key = 'snodo-identity-notes-v1';
  const status = document.querySelector('[data-note-status]');
  let storageAvailable = true;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    fields.forEach(field => { if (typeof saved[field.dataset.note] === 'string') field.value = saved[field.dataset.note]; });
  } catch (_) { storageAvailable = false; }
  function save() {
    const values = Object.fromEntries(fields.map(field => [field.dataset.note, field.value]));
    try { localStorage.setItem(key, JSON.stringify(values)); status.textContent = 'Appunti salvati in questo browser.'; }
    catch (_) { storageAvailable = false; status.textContent = 'Salvataggio non disponibile. Puoi scaricare gli appunti.'; }
  }
  fields.forEach(field => field.addEventListener('input', save));
  if (!storageAvailable) status.textContent = 'Salvataggio locale non disponibile. Usa il download.';
  document.querySelector('[data-clear-notes]').addEventListener('click', () => {
    fields.forEach(field => { field.value = ''; });
    try { localStorage.removeItem(key); } catch (_) {}
    status.textContent = 'Appunti azzerati.';
  });
  document.querySelector('[data-export-notes]').addEventListener('click', () => {
    const labels = {nodo:'Nodo S', incontro:'Punto d’incontro', dialogo:'Dialogo', scelta:'Direzione da approfondire', motivazione:'Motivo e modifiche'};
    const content = ['SNODO · Appunti sul confronto dei loghi', 'Appunti individuali, da contestualizzare rispetto a una sessione reale.', '', ...fields.map(field => `${labels[field.dataset.note]}\n${field.value || '(nessun appunto)'}\n`)].join('\n');
    const url = URL.createObjectURL(new Blob([content], {type:'text/plain;charset=utf-8'}));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'SNODO_appunti_identita.txt'; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = 'Appunti esportati.';
  });
  // Match sticky offsets to the actual shared header, including when fonts load.
  const header = document.querySelector('[data-site-header]');
  const jumps = document.querySelector('.brand-jumps');
  if (header && jumps && 'ResizeObserver' in window) {
    const resize = () => {
      const h = Math.ceil(header.getBoundingClientRect().height);
      jumps.style.top = `${h}px`;
      document.querySelectorAll('section[id]').forEach(section => section.style.scrollMarginTop = `${h + jumps.offsetHeight + 20}px`);
    };
    new ResizeObserver(resize).observe(header); resize();
  }
})();
