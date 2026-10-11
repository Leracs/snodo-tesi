/* Filtra il catalogo statico e monta il componente condiviso con S05/S06. */
(function () {
  'use strict';
  const search = document.getElementById('component-search');
  const group = document.getElementById('component-group');
  const status = document.getElementById('component-status');
  const cards = [...document.querySelectorAll('[data-component-card]')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function filter() {
    const query = normalize(search.value.trim());
    let visible = 0;
    cards.forEach(card => {
      card.hidden = !(normalize(card.dataset.search).includes(query) && (!group.value || card.dataset.group === group.value) && (!status.value || card.dataset.status === status.value));
      if (!card.hidden) visible++;
    });
    document.getElementById('component-count').textContent = `${visible} ${visible === 1 ? 'componente visualizzato' : 'componenti visualizzati'} su ${cards.length}`;
    document.getElementById('component-empty').hidden = visible !== 0;
  }
  search.addEventListener('input', filter);
  group.addEventListener('change', filter);
  status.addEventListener('change', filter);
  document.getElementById('component-reset').addEventListener('click', () => { search.value = ''; group.value = ''; status.value = ''; filter(); search.focus(); });
  const themeButtons = [...document.querySelectorAll('[data-library-theme]')];
  function theme(value) {
    document.querySelectorAll('.ds-token-scope').forEach(scope => { scope.dataset.theme = value; });
    themeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.libraryTheme === value)));
    document.querySelectorAll('[data-prototype-link]').forEach(link => {
      const place = document.getElementById('example-place').value;
      link.href = `../07_prototipo/index.html?screen=${link.dataset.prototypeLink}&place=${encodeURIComponent(place)}&theme=${value}`;
    });
    const tokens = window.SNODO_DESIGN_TOKENS[value];
    document.querySelectorAll('[data-token-color]').forEach(item => {
      const color = tokens[item.dataset.tokenColor];
      item.querySelector('.ds-swatch').style.backgroundColor = color;
      item.querySelector('code').textContent = color;
    });
    document.getElementById('font-heading-name').textContent = value === 'B' ? 'Boldonse' : 'Georgia';
    document.getElementById('font-body-name').textContent = value === 'B' ? 'Forma DJR Text · fallback Helvetica Neue' : 'Trebuchet MS';
  }
  themeButtons.forEach(button => button.addEventListener('click', () => theme(button.dataset.libraryTheme)));
  const container = document.getElementById('atmosphere-preview');
  const sample = document.getElementById('example-place');
  function render() {
    const place = window.SNODO_CATALOG.places.find(place => place.id === sample.value);
    container.innerHTML = window.SnodoAtmosfera.render(place);
    window.SnodoAtmosfera.mount(container, place);
    theme(themeButtons.find(button => button.getAttribute('aria-pressed') === 'true').dataset.libraryTheme);
  }
  sample.addEventListener('change', render);
  render(); filter();
})();
