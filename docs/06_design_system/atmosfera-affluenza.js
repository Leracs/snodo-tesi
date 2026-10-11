/* SNODO DS08 + DS19: condizioni e affluenza restano dati distinti. */
(function () {
  'use strict';
  const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const defaultBands = [
    { id: 'pomeriggio', label: 'Pomeriggio', start: '16:00', end: '18:00' },
    { id: 'sera', label: 'Sera', start: '18:00', end: '21:00' },
    { id: 'tarda-sera', label: 'Tarda sera', start: '21:00', end: '23:00' }
  ];
  const selection = new Map();
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const descriptions = {
    light: ['Buio', 'Poco luminoso', 'Luce moderata', 'Luminoso', 'Molto luminoso'],
    noise: ['Molto silenzioso', 'Silenzioso', 'Moderato', 'Rumoroso', 'Molto rumoroso'],
    comfort: ['Molto basso', 'Basso', 'Medio', 'Alto', 'Molto alto']
  };
  const paths = {
    light: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    noise: '<path d="M11 4 5 9H2v6h3l6 5ZM15 8a6 6 0 0 1 0 8"/>',
    comfort: '<path d="M6 11V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5M5 20v-3m14 3v-3M5 11a2 2 0 0 0-2 2v4h18v-4a2 2 0 0 0-4 0v1H7v-1a2 2 0 0 0-2-2Z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 2v6m10-6v6M3 11h18"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
  const validScore = value => Number.isInteger(value) && value >= 1 && value <= 5;
  const level = value => value <= 2 ? 'Bassa' : value === 3 ? 'Media' : 'Alta';

  function getView(place, day = 0) {
    const atmosphere = place.atmosphere || {};
    const attendance = atmosphere.attendance || {};
    const definitions = attendance.bands?.length === 3 ? attendance.bands : defaultBands;
    const profile = attendance.days?.find(profile => profile.day === day);
    const metrics = [['light', 'Luce'], ['noise', 'Rumore'], ['comfort', 'Comfort']].map(([key, label]) => {
      const count = atmosphere.metricCoverage?.[key];
      const raw = atmosphere.values?.[key];
      const value = !(count > 0) || !validScore(raw) ? null : raw;
      return { key, label, value, contributions: count ?? null, description: value == null ? 'Non disponibile' : descriptions[key][value - 1] };
    });
    const bands = definitions.map(definition => {
      const observation = profile?.values?.find(item => item.band === definition.id);
      const closed = observation?.status === 'closed';
      const value = !closed && observation?.contributions > 0 && validScore(observation?.value) ? observation.value : null;
      return { ...definition, value, closed, contributions: observation?.contributions ?? null, labelValue: closed ? 'Chiuso' : value == null ? 'Dato assente' : level(value) };
    });
    const available = bands.filter(band => band.value != null);
    const minimum = available.length ? Math.min(...available.map(band => band.value)) : null;
    return { day, metrics, bands, available, quiet: available.filter(band => band.value === minimum), atmosphere, attendance };
  }

  const range = band => `${band.start.slice(0, 2)}–${band.end.slice(0, 2)}`;
  function attendanceMarkup(view) {
    return `<div class="snodo-context-bands" role="list" aria-label="Affluenza in tre fasce">${view.bands.map(band => `<div class="snodo-context-band" role="listitem" aria-label="${escape(band.label)}, ${escape(band.start)}–${escape(band.end)}: ${escape(band.labelValue.toLowerCase())}${band.value == null ? '' : `, ${band.contributions} ${band.contributions === 1 ? 'contributo' : 'contributi'} mock`}"><span class="snodo-context-period">${escape(band.label)}</span>${band.value == null ? '<span class="snodo-context-no-mark" aria-hidden="true">—</span>' : `<span class="snodo-context-mark" aria-hidden="true"><span style="height:${band.value * 20}%"></span></span>`}<span class="snodo-context-time">${escape(range(band))}</span><strong class="snodo-context-level">${escape(band.labelValue)}</strong></div>`).join('')}</div>${view.available.length ? `<p class="snodo-context-best" aria-label="Fasce più tranquille tra quelle con dati">${icon('clock')}<span>Più tranquillo: ${view.quiet.map(band => escape(range(band))).join(' e ')}</span></p>` : `<p class="snodo-context-missing">Nessun dato di affluenza per ${escape(days[view.day])}. Le fasce senza dati non indicano poca affluenza.</p>`}`;
  }

  const attendanceCaption = view => view.attendance.source?.includes('mock') ? (view.available.length ? 'Dati dimostrativi · confronto tra fasce con dati.' : 'Dati dimostrativi · copertura assente.') : `${view.attendance.source || 'Profilo non disponibile'}.`;

  function render(place, options = {}) {
    const day = Number.isInteger(options.initialDay) && options.initialDay >= 0 && options.initialDay <= 6 ? options.initialDay : selection.get(place.id) ?? 0;
    const view = getView(place, day);
    const id = 'snodo-context-' + String(place.id).replace(/[^a-zA-Z0-9_-]/g, '-');
    return `<div class="snodo-context" data-place-context="${escape(place.id)}">
      <section class="snodo-context-atmosphere" aria-labelledby="${id}-atmosphere">
        <h2 id="${id}-atmosphere">Atmosfera</h2>
        <dl>${view.metrics.map(metric => `<div class="snodo-context-metric"><dt><span class="snodo-context-icon">${icon(metric.key)}</span><span>${metric.label}<span class="snodo-context-description">${escape(metric.description)}</span></span></dt><dd>${metric.value == null ? '<span class="snodo-context-unavailable">Dato assente</span>' : `<span class="snodo-context-rating" aria-label="${metric.value} su 5">${metric.value}<small>/5</small></span><span class="snodo-context-dots" aria-hidden="true">${[1, 2, 3, 4, 5].map(value => `<i class="${value <= metric.value ? 'filled' : ''}"></i>`).join('')}</span>`}</dd></div>`).join('')}</dl>
        <p class="snodo-context-caption">${escape(view.atmosphere.period || 'Periodo non disponibile')} · ${escape(view.atmosphere.slot || 'Fascia non disponibile')}</p>
      </section>
      <section class="snodo-context-attendance" aria-labelledby="${id}-attendance">
        <div class="snodo-context-heading"><h2 id="${id}-attendance">Affluenza</h2><button type="button" class="snodo-context-day" aria-haspopup="dialog" aria-controls="${id}-dialog" aria-expanded="false" aria-label="Giorno dell’affluenza: ${days[day]}. Cambia giorno.">${icon('calendar')}<span>${days[day]}</span>${icon('chevron')}</button></div>
        <p class="snodo-context-subtitle">Affluenza tipica per fascia oraria</p>
        <div class="snodo-context-data">${attendanceMarkup(view)}</div>
        <p class="snodo-context-status" role="status" aria-live="polite" aria-atomic="true"></p>
        <p class="snodo-context-caption snodo-context-attendance-caption">${escape(attendanceCaption(view))}</p>
      </section>
      <dialog id="${id}-dialog" class="snodo-context-dialog" aria-labelledby="${id}-day-title"><header><h2 id="${id}-day-title">Scegli il giorno</h2><button type="button" class="snodo-context-close" aria-label="Chiudi selezione del giorno">${icon('close')}</button></header><div class="snodo-context-days">${[1, 2, 3, 4, 5, 6, 0].map(value => `<button type="button" data-context-day="${value}" aria-pressed="${value === day}"><span>${days[value]}</span>${icon('check')}</button>`).join('')}</div></dialog>
    </div>`;
  }

  function mount(scope, place) {
    if (typeof scope?.querySelectorAll !== 'function') return;
    scope.querySelectorAll('.snodo-context').forEach(root => {
      if (root.dataset.contextMounted) return;
      root.dataset.contextMounted = 'true';
      const dialog = root.querySelector('dialog');
      const trigger = root.querySelector('.snodo-context-day');
      trigger.addEventListener('click', () => {
        dialog.showModal();
        trigger.setAttribute('aria-expanded', 'true');
        dialog.querySelector('[aria-pressed="true"]').focus();
      });
      dialog.addEventListener('keydown', event => {
        if (event.key !== 'Tab') return;
        const controls = [...dialog.querySelectorAll('button:not([disabled])')];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      });
      root.querySelector('.snodo-context-close').addEventListener('click', () => dialog.close());
      dialog.addEventListener('close', () => { trigger.setAttribute('aria-expanded', 'false'); trigger.focus(); });
      dialog.addEventListener('click', event => {
        if (event.target !== dialog) return;
        const box = dialog.getBoundingClientRect();
        if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
      });
      dialog.querySelectorAll('[data-context-day]').forEach(button => button.addEventListener('click', () => {
        const day = Number(button.dataset.contextDay);
        selection.set(place.id, day);
        const view = getView(place, day);
        trigger.querySelector('span').textContent = days[day];
        trigger.setAttribute('aria-label', `Giorno dell’affluenza: ${days[day]}. Cambia giorno.`);
        dialog.querySelectorAll('[data-context-day]').forEach(option => option.setAttribute('aria-pressed', String(Number(option.dataset.contextDay) === day)));
        root.querySelector('.snodo-context-data').innerHTML = attendanceMarkup(view);
        root.querySelector('.snodo-context-attendance-caption').textContent = attendanceCaption(view);
        root.querySelector('.snodo-context-status').textContent = `${days[day]}: ${view.bands.map(band => `${band.label} ${band.labelValue.toLowerCase()}`).join(', ')}.`;
        dialog.close();
      }));
    });
  }
  const api = { render, mount, getView, clearSelection: () => selection.clear() };
  if (typeof window !== 'undefined') window.SnodoAtmosfera = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})();
