/* La lettura e i collegamenti funzionano anche senza JavaScript. */
const reviewModes = [...document.querySelectorAll('[data-review-mode]')];
if (reviewModes.length) {
  const comparisons = [...document.querySelectorAll('.original-comparison')];
  const changeNames = new Map([...document.querySelectorAll('.editorial-change')].map(change => [change, change.getAttribute('aria-label')]));
  const allOriginals = document.querySelector('[data-originals-toggle]');
  const quickToggle = document.querySelector('[data-review-toggle]');
  const status = document.querySelector('[data-review-status]');
  function updateOriginalsLabel() {
    if (allOriginals) allOriginals.textContent = comparisons.every(detail => detail.open) ? 'Chiudi tutti i confronti' : 'Apri tutti i confronti';
  }
  function setReviewMode(mode) {
    document.body.dataset.reviewView = mode;
    changeNames.forEach((name, change) => mode === 'clean' ? change.removeAttribute('aria-label') : change.setAttribute('aria-label', name));
    reviewModes.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.reviewMode === mode)));
    if (allOriginals) allOriginals.hidden = mode === 'clean';
    if (quickToggle) { quickToggle.hidden = false; quickToggle.textContent = mode === 'clean' ? 'Mostra interventi' : 'Nascondi interventi'; }
    if (status) status.textContent = mode === 'clean' ? 'Testo pulito: annotazioni e confronti nascosti.' : 'Vista di revisione attiva.';
  }
  reviewModes.forEach(button => button.addEventListener('click', () => setReviewMode(button.dataset.reviewMode)));
  quickToggle?.addEventListener('click', () => setReviewMode(document.body.dataset.reviewView === 'clean' ? 'review' : 'clean'));
  comparisons.forEach(detail => detail.addEventListener('toggle', updateOriginalsLabel));
  allOriginals?.addEventListener('click', () => {
    const open = !comparisons.every(detail => detail.open);
    comparisons.forEach(detail => detail.open = open);
    updateOriginalsLabel();
    if (status) status.textContent = open ? `${comparisons.length} confronti aperti.` : 'Confronti chiusi. Vista di revisione attiva.';
  });
  setReviewMode(new URLSearchParams(window.location.search).get('view') === 'clean' ? 'clean' : 'review');
}

document.querySelectorAll('[data-print]').forEach(button => {
  button.hidden = false;
  button.addEventListener('click', () => window.print());
});

const toc = document.querySelector('.toc details');
if (toc && window.matchMedia('(max-width: 780px)').matches) toc.open = false;

document.querySelectorAll('.table-wrap').forEach(region => {
  const hint = region.previousElementSibling;
  function updateHint() {
    if (hint?.classList.contains('table-hint')) hint.hidden = region.scrollWidth <= region.clientWidth + 1;
  }
  updateHint();
  if ('ResizeObserver' in window) new ResizeObserver(updateHint).observe(region);
});

const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')];
if ('IntersectionObserver' in window && tocLinks.length) {
  const visible = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target.id) : visible.delete(entry.target.id));
    const current = tocLinks.find(link => visible.has(decodeURIComponent(link.hash.slice(1))));
    tocLinks.forEach(link => {
      const active = link === current;
      link.classList.toggle('is-current', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }, {rootMargin: '-100px 0px -60% 0px', threshold: 0});
  tocLinks.forEach(link => {
    const heading = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (heading) observer.observe(heading);
  });
}

const search = document.querySelector('[data-document-search]');
if (search) {
  const rows = [...document.querySelectorAll('[data-document-title]')];
  const groups = [...document.querySelectorAll('.library-group')];
  const count = document.querySelector('[data-document-count]');
  const normalized = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('it');
  search.addEventListener('input', () => {
    const terms = normalized(search.value).trim().split(/\s+/).filter(Boolean);
    rows.forEach(row => {
      const title = normalized(row.dataset.documentTitle);
      row.hidden = !terms.every(term => title.includes(term));
    });
    groups.forEach(group => group.hidden = ![...group.querySelectorAll('[data-document-title]')].some(row => !row.hidden));
    const visibleCount = rows.filter(row => !row.hidden).length;
    if (count) count.textContent = visibleCount ? `${visibleCount} document${visibleCount === 1 ? 'o' : 'i'} visualizzat${visibleCount === 1 ? 'o' : 'i'}` : 'Nessun documento trovato. Prova un altro titolo o argomento.';
  });
}

/* Le immagini restano link agli asset: senza dialog supportato il browser
   continua ad aprire il file. SVG caricati come immagini, mai come DOM inline. */
(() => {
  const dialog = document.createElement('dialog');
  if (typeof dialog.showModal !== 'function') return;

  dialog.className = 'figure-viewer';
  dialog.setAttribute('aria-labelledby', 'figure-viewer-title');
  dialog.setAttribute('aria-describedby', 'figure-viewer-caption');

  const header = document.createElement('div');
  header.className = 'figure-viewer-header';
  const title = document.createElement('h2');
  title.id = 'figure-viewer-title';
  const controls = document.createElement('div');
  controls.className = 'figure-viewer-controls';
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.setAttribute('aria-controls', 'figure-viewer-viewport');
  const close = document.createElement('button');
  close.type = 'button';
  close.textContent = 'Chiudi';
  close.autofocus = true;
  controls.append(toggle, close);
  header.append(title, controls);

  const viewport = document.createElement('div');
  viewport.id = 'figure-viewer-viewport';
  viewport.className = 'figure-viewer-viewport';
  viewport.tabIndex = 0;
  viewport.setAttribute('role', 'region');
  viewport.setAttribute('aria-label', 'Immagine ingrandita, scorribile in dimensione originale');
  const image = document.createElement('img');
  image.className = 'figure-viewer-image';
  viewport.append(image);

  const footer = document.createElement('div');
  footer.className = 'figure-viewer-footer';
  const caption = document.createElement('p');
  caption.id = 'figure-viewer-caption';
  const status = document.createElement('p');
  status.className = 'figure-viewer-status';
  status.setAttribute('role', 'status');
  const original = document.createElement('a');
  original.textContent = 'Apri il file originale';
  footer.append(caption, status, original);
  dialog.append(header, viewport, footer);
  document.body.append(dialog);

  let sourceLink = null;
  let natural = false;
  function updateSize() {
    dialog.dataset.size = natural ? 'natural' : 'fit';
    toggle.textContent = natural ? 'Adatta alla finestra' : 'Dimensione originale';
    image.style.width = natural && image.naturalWidth ? `${image.naturalWidth}px` : '';
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
    if (image.naturalWidth) status.textContent = natural
      ? 'Dimensione originale. Usa lo scorrimento per leggere i dettagli.'
      : 'Immagine adattata alla finestra.';
  }
  image.addEventListener('load', () => {
    toggle.disabled = false;
    updateSize();
  });
  image.addEventListener('error', () => {
    toggle.disabled = true;
    status.textContent = 'Immagine non disponibile. Puoi provare ad aprire il file originale.';
  });
  toggle.addEventListener('click', () => {
    natural = !natural;
    updateSize();
  });
  close.addEventListener('click', () => dialog.close());
  // Escape usa il comportamento nativo di <dialog>; anche quel percorso
  // emette close e restituisce il focus al link che ha aperto la tavola.
  dialog.addEventListener('close', () => {
    document.body.classList.remove('figure-viewer-open');
    if (sourceLink?.isConnected) sourceLink.focus({ preventScroll: true });
    sourceLink = null;
  });

  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[data-figure-viewer]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey ||
      event.ctrlKey || event.shiftKey || event.altKey || link.hasAttribute('download')) return;
    let asset;
    try { asset = new URL(link.getAttribute('href'), window.location.href); }
    catch (_) { return; }
    const local = asset.protocol === 'file:' ||
      (['http:', 'https:'].includes(asset.protocol) && asset.origin === window.location.origin);
    if (!local || !/\.(svg|png)$/i.test(asset.pathname)) return;

    sourceLink = link;
    natural = false;
    title.textContent = link.dataset.figureTitle ||
      link.closest('figure')?.querySelector('.figure-title')?.textContent || 'Tavola del progetto';
    caption.textContent = link.dataset.figureCaption ||
      link.closest('figure')?.querySelector('figcaption p')?.textContent || '';
    image.alt = link.querySelector('img')?.alt ||
      link.closest('figure')?.querySelector('.figure-preview img')?.alt || title.textContent;
    original.href = asset.href;
    toggle.disabled = true;
    status.textContent = 'Caricamento immagine…';
    updateSize();
    image.src = asset.href;
    try { dialog.showModal(); }
    catch (_) { sourceLink = null; return; }
    event.preventDefault();
    document.body.classList.add('figure-viewer-open');
    close.focus({ preventScroll: true });
    if (image.complete && image.naturalWidth) {
      toggle.disabled = false;
      updateSize();
    }
  });
})();
