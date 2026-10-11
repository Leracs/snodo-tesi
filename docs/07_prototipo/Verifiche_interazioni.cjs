/*
 * Verifiche tecniche riproducibili del codice dell'app, con DOM minimo simulato.
 * Eseguire: node Verifiche_interazioni.cjs
 * Scrive soltanto QA_interazioni.json. Non è un test browser, accessibilità
 * o usabilità: il DOM serve a eseguire gli handler e conservare i campi.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const base = __dirname;
const catalog = JSON.parse(fs.readFileSync(path.join(base, 'Catalogo_mock.json'), 'utf8'));
const core = require('./core.js');
const application = fs.readFileSync(path.join(base, 'app.js'), 'utf8');
const results = [];
const decode = value => String(value || '').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const attribute = (tag, name) => {
  const found = new RegExp('\\b' + name + '="([^"]*)"').exec(tag);
  return found ? decode(found[1]) : null;
};
const plain = value => decode(value.replace(/<[^>]*>/g, ''));

function harness() {
  const page = new Map();
  const root = new Map();
  const listeners = new Map();
  const storage = new Map();
  let appHtml = '';
  const element = (id, initial = {}) => ({
    id, value: '', checked: false, textContent: '', innerHTML: '', scrollTop: 0,
    focus() {}, addEventListener() {},
    classList: { add() {}, remove() {} },
    remove() { page.delete('#' + id); },
    ...initial
  });
  const storeField = (tag, field) => {
    const id = attribute(tag, 'id');
    const name = attribute(tag, 'name');
    if (id) page.set('#' + id, field);
    if (name) page.set('[name=' + name + ']', field);
  };
  // Only inputs, textareas and selects used by the handlers are represented.
  function parseFields(html) {
    page.clear();
    for (const match of html.matchAll(/<[^>]+\bid="([^"]+)"[^>]*>/g)) {
      page.set('#' + match[1], element(match[1]));
    }
    for (const match of html.matchAll(/<input\b([^>]*)>/g)) {
      const tag = match[1];
      storeField(tag, element(attribute(tag, 'id'), {
        value: attribute(tag, 'value') || '', checked: /\bchecked\b/.test(tag)
      }));
    }
    for (const match of html.matchAll(/<textarea\b([^>]*)>([\s\S]*?)<\/textarea>/g)) {
      storeField(match[1], element(attribute(match[1], 'id'), { value: decode(match[2]) }));
    }
    for (const match of html.matchAll(/<select\b([^>]*)>([\s\S]*?)<\/select>/g)) {
      const options = Array.from(match[2].matchAll(/<option\b([^>]*)>([\s\S]*?)<\/option>/g), option => ({
        value: attribute(option[1], 'value') ?? plain(option[2]),
        selected: /\bselected\b/.test(option[1]), disabled: /\bdisabled\b/.test(option[1])
      }));
      const selected = options.find(option => option.selected) || options.find(option => !option.disabled);
      storeField(match[1], element(attribute(match[1], 'id'), { value: selected?.value ?? '', options }));
    }
  }
  for (const id of ['app', 'nav', 'toast', 'theme', 'reset', 'route-label']) root.set('#' + id, element(id));
  Object.defineProperty(root.get('#app'), 'innerHTML', {
    get: () => appHtml,
    set: html => { appHtml = html; parseFields(html); }
  });
  const document = {
    body: { dataset: { theme: 'A' } },
    querySelector: selector => root.get(selector) || page.get(selector) || null,
    querySelectorAll: () => [],
    addEventListener: (name, listener) => listeners.set(name, listener)
  };
  const context = {
    window: { SNODO_CATALOG: JSON.parse(JSON.stringify(catalog)), SnodoCore: core, SnodoAtmosfera: require('../06_design_system/atmosfera-affluenza.js') },
    document,
    sessionStorage: { getItem: key => storage.get(key) || null, setItem: (key, value) => storage.set(key, value) },
    setTimeout: () => 0, clearTimeout() {}, console
  };
  vm.createContext(context);
  vm.runInContext(application, context, { filename: 'app.js' });
  const run = code => vm.runInContext(code, context);
  function click(action, dataset = {}, injected = false) {
    const html = appHtml + root.get('#nav').innerHTML;
    if (!injected) {
      const buttons = Array.from(html.matchAll(/<button\b([^>]*)>/g), match => match[1]);
      assert.ok(buttons.some(tag => attribute(tag, 'data-action') === action &&
        Object.entries(dataset).every(([key, value]) => attribute(tag, 'data-' + key) === String(value))),
      'Controllo non presente: ' + action);
    }
    listeners.get('click')({ target: { closest: () => ({ dataset: { action, ...dataset } }) }, preventDefault() {} });
  }
  return {
    run, click,
    get: selector => document.querySelector(selector),
    html: () => appHtml,
    input: (selector, value) => {
      const field = document.querySelector(selector);
      assert.ok(field, 'Campo assente: ' + selector);
      field.value = value;
      listeners.get('input')({ target: field });
    }
  };
}

function test(id, name, check) {
  try {
    const evidence = check();
    results.push({ id, name, status: 'PASS', evidence });
    console.log('PASS ' + id + ' ' + name);
  } catch (error) {
    results.push({ id, name, status: 'FAIL', error: error.message });
    console.log('FAIL ' + id + ' ' + name + ': ' + error.message);
  }
}

test('I01', 'S15 conserva data, fascia e rumore uscendo dalla bozza', () => {
  const h = harness();
  h.run("state.selected='luogo-roma-01';route('S15')");
  h.get('#visit-date').value = '2026-09-21';
  h.get('#visit-slot').value = 'Pomeriggio';
  h.get('#visit-noise').value = 'alto';
  h.click('draft-exit');
  assert.equal(h.run('state.draft.visitDate'), '2026-09-21');
  assert.equal(h.run('state.draft.slot'), 'Pomeriggio');
  assert.equal(h.run('state.draft.noise'), 'alto');
  return 'I tre campi modificati rimangono nella bozza dopo S15 → S20.';
});

test('I02', 'S17 conserva visibilità e nome tornando a modificare il testo', () => {
  const h = harness();
  h.run("state.selected='luogo-roma-01';startDraft();state.draft.text='Il mio racconto.';newGroup('Roma');route('S17')");
  h.get('#visibility').value = 'group';
  h.get('#shown-name').value = 'Alias dello scenario';
  h.click('review-edit');
  h.click('review-preview');
  assert.equal(h.get('#visibility').value, 'group');
  assert.equal(h.get('#shown-name').value, 'Alias dello scenario');
  return 'Destinatario gruppo e nome sopravvivono a S17 → S16 → S17.';
});

test('I03', 'Correggi e annulla non applica il cambio città proposto dall’AI', () => {
  const h = harness();
  h.run("state.criteria.query='San Lorenzo';state.ai={state:'criteri',criteria:{city:'Milano',query:'',budgetMax:25,noise:'basso',outdoor:false}};route('S10')");
  h.click('ai-correct');
  assert.equal(h.get('#filter-city').value, 'Milano');
  assert.equal(h.run('state.criteria.city'), 'Roma');
  h.click('back');
  assert.equal(h.run('state.criteria.city'), 'Roma');
  assert.equal(h.run('state.criteria.query'), 'San Lorenzo');
  return 'La proposta Milano resta temporanea; annullando resta la ricerca Roma/San Lorenzo.';
});

test('I04', 'Applica conserva budget AI personalizzato e sostituisce query precedente', () => {
  const h = harness();
  h.run("state.criteria.query='San Lorenzo';state.ai={state:'criteri',criteria:{city:'Milano',query:'',budgetMax:25,noise:'basso',outdoor:false}};route('S10')");
  h.click('ai-correct');
  assert.equal(h.get('#budget').value, '25');
  h.click('apply-filters');
  assert.equal(h.run('state.criteria.city'), 'Milano');
  assert.equal(h.run('state.criteria.budgetMax'), 25);
  assert.equal(h.run('state.criteria.query'), '');
  assert.equal(h.run('K.filterPlaces(C.places,state.criteria).length'), 1);
  return 'Il budget 25 € è selezionato e conservato; la query romana non resta nascosta nei criteri di Milano.';
});

test('I05', 'Appunti originali conservati dopo applicazione, modifica e ripristino', () => {
  const h = harness();
  const original = 'Cortile piacevole. Con gli amici parlavamo senza alzare la voce. Prezzi più alti di quanto mi aspettassi.';
  h.run("state.selected='luogo-roma-01';route('S16')");
  h.input('#notes', original);
  h.click('review-ai');
  h.click('apply-suggestion');
  h.input('#notes', 'Una modifica personale successiva.');
  assert.equal(h.run('state.draft.originalNotes'), original);
  h.click('restore-notes');
  assert.equal(h.run('state.draft.text'), original);
  return 'Lo snapshot iniziale resta intatto; Ripristina recupera anche la critica sui prezzi.';
});

test('I06', 'Modifica dell’autore invalida il suggerimento AI precedente', () => {
  const h = harness();
  h.run("state.selected='luogo-roma-01';route('S16')");
  h.input('#notes', 'Appunti della mia visita.');
  h.click('review-ai');
  assert.ok(h.run('state.draft.suggestion'));
  h.input('#notes', 'Appunti corretti dall’autore.');
  assert.equal(h.run('state.draft.suggestion'), null);
  assert.equal(h.get('#ai-suggestion'), null);
  assert.equal(h.run('state.draft.text'), 'Appunti corretti dall’autore.');
  return 'Suggerimento invalidato e pannello rimosso dopo un input nuovo.';
});

test('I07', 'Richiesta AI a vuoto non congela uno snapshot originale vuoto', () => {
  const h = harness();
  h.run("state.selected='luogo-roma-01';route('S16')");
  h.click('review-ai');
  assert.equal(h.run('state.draft.originalNotes'), null);
  h.input('#notes', 'Appunti scritti dopo il tentativo vuoto.');
  h.click('review-ai');
  assert.equal(h.run('state.draft.originalNotes'), 'Appunti scritti dopo il tentativo vuoto.');
  return 'Un tentativo senza testo non diventa il contenuto da ripristinare.';
});

test('I08', 'Il luogo proposto incompatibile resta visibile e non confermabile', () => {
  const h = harness();
  h.run("newGroup('Roma','luogo-roma-03');route('S13')");
  assert.ok(h.html().includes('Sala Aperta'));
  assert.ok(h.html().includes('non corrisponde ai vincoli condivisi'));
  assert.ok(!/data-action="group-prefer"[^>]*data-id="luogo-roma-03"/.test(h.html()));
  h.click('group-prefer', { id: 'luogo-roma-03' }, true);
  assert.equal(h.run('state.group.choice'), null);
  assert.equal(h.run('state.group.criteria.budgetMax'), 20);
  assert.equal(h.run('state.group.criteria.noise'), 'basso');
  return 'Sala Aperta resta nella proposta con avviso; il guard rifiuta la selezione incompatibile senza allentare vincoli.';
});

test('I09', 'Categoria affollamento coerente con valore predisposto', () => {
  for (const p of catalog.places) {
    const value = p.atmosphere.values.crowding;
    const expected = value == null ? null : value <= 2 ? 'basso' : value === 3 ? 'medio' : 'alto';
    assert.equal(p.atmosphere.crowding, expected, p.id);
  }
  return 'Gli otto record usano categorie coerenti con i propri valori, incluse le assenze.';
});

test('I10', 'Cambio luogo archivia e recupera la bozza precedente', () => {
  const h = harness();
  h.run("state.selected='luogo-roma-01';route('S16')");
  h.input('#notes', 'Bozza Roma da conservare.');
  const id = h.run('state.draft.id');
  h.run("state.selected='luogo-milano-01';startDraft();state.draft.text='Bozza Milano';route('S20')");
  assert.equal(h.run('allDrafts().length'), 2);
  h.click('resume-draft', { id });
  assert.equal(h.run('state.selected'), 'luogo-roma-01');
  assert.equal(h.get('#notes').value, 'Bozza Roma da conservare.');
  return 'Due bozze visibili; ripresa per ID restituisce il testo e il luogo originali.';
});

test('I11', 'Nuova recensione sullo stesso luogo usa un ID distinto dopo invio', () => {
  const h = harness();
  h.run("state.selected='luogo-roma-01';startDraft();state.draft.text='Prima recensione';route('S17')");
  h.click('publish');
  const firstId = h.run('state.draft.id');
  h.click('place', { id: 'luogo-roma-01' });
  h.click('review-start');
  assert.notEqual(h.run('state.draft.id'), firstId);
  h.click('review-text');
  h.input('#notes', 'Seconda recensione distinta.');
  h.click('review-preview');
  h.click('publish');
  assert.equal(h.run('state.submissions.length'), 2);
  assert.equal(h.run('state.submissions[1].text'), 'Seconda recensione distinta.');
  return 'Due invii distinti, nessun riuso dell’ID della bozza già inviata.';
});

test('I12', 'Errore e retry preservano bozza, nome, visibilità e un solo invio', () => {
  const h = harness();
  h.run("state.selected='luogo-roma-01';startDraft();state.draft.text='Osservazione critica.';newGroup('Roma');route('S17');state.sendFail=true");
  h.get('#visibility').value = 'group';
  h.get('#shown-name').value = 'Nome dello scenario';
  h.click('publish');
  assert.equal(h.run('state.lastSend.ok'), false);
  assert.equal(h.run('state.submissions.length'), 0);
  assert.equal(h.run('state.draft.text'), 'Osservazione critica.');
  assert.equal(h.run('state.draft.visibility'), 'group');
  h.click('retry-publish');
  assert.equal(h.run('state.submissions.length'), 1);
  assert.equal(h.run('state.submissions[0].shownName'), 'Nome dello scenario');
  h.run('doPublish()');
  assert.equal(h.run('state.submissions.length'), 1);
  return 'Il recupero mantiene il contributo e le scelte; il retry duplicato non crea un altro invio.';
});

const sources = ['index.html', 'app.js', 'core.js', 'catalogo.js', 'Catalogo_mock.json', 'build_catalogo.py', 'Verifiche_core.cjs', 'Verifiche_interazioni.cjs'].map(file => ({
  file, sha256: crypto.createHash('sha256').update(fs.readFileSync(path.join(base, file))).digest('hex')
}));
const failures = results.filter(result => result.status === 'FAIL');
const report = {
  generatedAt: new Date().toISOString(),
  type: 'technical_code_harness_with_minimal_fake_DOM',
  executed: true,
  finiteRun: true,
  passed: results.length - failures.length,
  failed: failures.length,
  status: failures.length ? 'FAIL' : 'PASS',
  scope: 'Integrità dei dati e handler delle interazioni; regressioni delle correzioni segnalate.',
  limitations: [
    'Non esegue un browser né il motore di layout.',
    'Non verifica pixel, scroll, focus reale, tastiera o lettore di schermo.',
    'Non è una sessione con partecipanti e non dimostra comprensione o usabilità.',
    'I dati e i testi degli scenari sono mock.'
  ],
  appName: 'SNODO',
  storagePolicy: {
    key: 'altrove-demo-v01',
    behavior: 'Chiave storica conservata in lettura e scrittura; nessuna migrazione o cancellazione dei dati di prova della sessione.'
  },
  sources, results
};
fs.writeFileSync(path.join(base, 'QA_interazioni.json'), JSON.stringify(report, null, 2) + '\n');
console.log(`${report.passed}/${results.length} verifiche tecniche PASS; ${report.failed} FAIL.`);
if (failures.length) process.exitCode = 1;
