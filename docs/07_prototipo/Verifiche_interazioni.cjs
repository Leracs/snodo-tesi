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

function harness(search = '') {
  const page = new Map();
  const root = new Map();
  const listeners = new Map();
  const storage = new Map();
  let appHtml = '';
  const element = (id, initial = {}) => ({
    id, dataset: {}, value: '', checked: false, textContent: '', innerHTML: '', scrollTop: 0,
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
  for (const id of ['app', 'nav', 'toast', 'theme', 'reset', 'route-label', 'place-dock']) root.set('#' + id, element(id));
  Object.defineProperty(root.get('#app'), 'innerHTML', {
    get: () => appHtml,
    set: html => { appHtml = html; parseFields(html); }
  });
  const document = {
    body: { dataset: { theme: 'B' } },
    querySelector: selector => root.get(selector) || page.get(selector) || null,
    querySelectorAll: () => [],
    addEventListener: (name, listener) => listeners.set(name, listener)
  };
  const context = {
    window: { location: {search}, SNODO_CATALOG: JSON.parse(JSON.stringify(catalog)), SnodoCore: core, SnodoDiscovery: require('../06_design_system/esplorazione.js'), SnodoAtmosfera: require('../06_design_system/atmosfera-affluenza.js') },
    document,
    sessionStorage: { getItem: key => storage.get(key) || null, setItem: (key, value) => storage.set(key, value) },
    URLSearchParams, setTimeout: () => 0, clearTimeout() {}, console
  };
  vm.createContext(context);
  vm.runInContext(application, context, { filename: 'app.js' });
  const run = code => vm.runInContext(code, context);
  function click(action, dataset = {}, injected = false) {
    const html = appHtml + root.get('#nav').innerHTML + root.get('#place-dock').innerHTML;
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
    submit: id => listeners.get('submit')({target:{id},preventDefault(){}}),
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

test('I13', 'Il catalogo apre S05/S06 con luogo e tema coerenti', () => {
 for (const screen of ['S05','S06']) {
  const h=harness('?screen='+screen+'&place=luogo-milano-02&theme=B');
  assert.equal(h.run('state.screen'),screen);assert.equal(h.run('state.selected'),'luogo-milano-02');
  assert.equal(h.run('state.criteria.city'),'Milano');assert.equal(h.run('document.body.dataset.theme'),'B');
  assert.ok(h.html().includes('snodo-context'));
 }
 return 'Entrambe le schermate aprono lo stesso oggetto e i componenti condivisi, senza creare un luogo nuovo.';
});
test('I14', 'Parametri non validi non creano schermate, luoghi o temi', () => {
 const h=harness('?screen=S06&place=inesistente&theme=inesistente');
 assert.equal(h.run('state.screen'),'S01');assert.equal(h.run('state.selected'),null);
 assert.equal(h.run('document.body.dataset.theme'),'B');
 return 'La sessione conserva il normale avvio quando la destinazione non è valida.';
});

test('I15', 'Recensione visibile in mappa, lista, scheda, gruppo e salvati', () => {
 const h=harness();h.run("state.selected='luogo-roma-01';state.saved=['luogo-roma-01'];newGroup('Roma')");
 for(const screen of ['S02','S03','S05','S13','S19']){
  h.run("route('"+screen+"')");
  assert.ok(h.html().includes('Potevamo parlare senza alzare la voce.'),screen);
  assert.ok(h.html().includes('21.09.2026'),screen);
  assert.ok(h.html().includes('19:00–21:00'),screen);
 }
 h.run("state.selected='luogo-roma-04';route('S05')");
 assert.ok(h.html().includes('Il primo racconto manca ancora.'));
 assert.ok(!h.html().includes('Potevamo parlare senza alzare la voce.'));
 return 'Una testimonianza e il suo contesto sono visibili nei cinque accessi; nessuna testimonianza inventata nello stato assente.';
});
test('I16', 'Preferenza separa assenze e alternative senza allentare il budget', () => {
 const h=harness();h.run("state.criteria={city:'Roma',query:'',budgetMax:20,noise:'basso',noiseMode:'preferred',outdoor:false};route('S03')");
 const groups=h.run('K.partitionPlaces(C.places,state.criteria)');
 assert.equal(groups.matched.length,1);assert.equal(groups.unknown.length,1);assert.equal(groups.other.length,1);
 assert.equal(groups.unknown[0].id,'luogo-roma-04');assert.equal(groups.other[0].id,'luogo-roma-02');
 assert.ok(h.html().includes('Da verificare'));assert.ok(h.html().includes('Altre alternative'));assert.ok(!h.html().includes('Sala Aperta'));
 h.run("state.criteria.noiseMode='required';render()");assert.equal(h.run('K.partitionPlaces(C.places,state.criteria).all.length'),1);
 return 'Budget 20 € invariato: un match, una assenza e una alternativa; il requisito necessario mostra solo il match.';
});
test('I17', 'Azzera in editor e annulla preservano i criteri applicati', () => {
 const h=harness();h.run("state.criteria.budgetMax=20;state.criteria.noise='basso';route('S03')");h.click('filters');h.click('clear-filters');
 assert.equal(h.run('state.criteria.budgetMax'),20);assert.equal(h.get('#budget').value,'');h.click('back');
 assert.equal(h.run('state.criteria.budgetMax'),20);assert.equal(h.run('state.criteria.noise'),'basso');
 h.click('filters');h.get('#noise-mode').value='preferred';h.click('apply-filters');assert.equal(h.run('state.criteria.noiseMode'),'preferred');
 return 'Reset resta nella bozza; annullamento conserva budget/rumore; applicazione registra la preferenza.';
});
test('I18', 'Salva e mappa/lista conservano ID, numero e selezione', () => {
 const h=harness();h.run("route('S02')");h.click('pin',{id:'luogo-roma-02'});h.click('card-save',{id:'luogo-roma-02'});
 assert.ok(h.html().includes('sd-marker-saved'));h.click('search');assert.equal(h.run('state.mapSelected'),'luogo-roma-02');
 assert.ok(h.html().includes('data-place-card="luogo-roma-02"'));h.click('map');assert.equal(h.run('state.mapSelected'),'luogo-roma-02');
 h.click('place',{id:'luogo-roma-02'});h.click('back');assert.equal(h.run('state.mapSelected'),'luogo-roma-02');
 return 'Il luogo 2 resta salvato e selezionato tra marker, lista, dettaglio e ritorno.';
});
test('I19', 'CTA dal gruppo esprime preferenza e lascia le conferme aperte', () => {
 const h=harness();h.run("newGroup('Roma');route('S13')");h.click('place',{id:'luogo-roma-01'});
 assert.ok(h.get('#place-dock').innerHTML.includes('Preferisco questo luogo'));
 h.click('group-prefer',{id:'luogo-roma-01'});assert.equal(h.run('state.screen'),'S13');
 assert.equal(h.run('state.group.members[0].preference'),'luogo-roma-01');assert.equal(h.run('state.group.members[0].confirmed'),null);
 assert.equal(h.run('K.groupOutcome(state.group).agreed'),false);
 return 'La CTA torna al confronto, non trasforma preferenza o silenzio in accordo.';
});
test('I20', 'Proponi dalla ricerca conserva la proposta esistente della città', () => {
 const h=harness();h.run("newGroup('Roma');state.group.title='Venerdì';state.group.members[1].invite='accepted';state.selected='luogo-roma-02';state.placeContext='individual';route('S05')");
 h.click('propose');assert.equal(h.run('state.group.title'),'Venerdì');assert.equal(h.run('state.group.members[1].invite'),'accepted');assert.equal(h.run('state.group.initial'),'luogo-roma-02');assert.equal(h.run('state.group.choice'),null);
 return 'Titolo e partecipazione conservati; luogo aggiunto come proposta senza scelta o conferma automatica.';
});
test('I21', 'Ingresso recensione dal catalogo apre il luogo e mantiene il ritorno valido', () => {
 const h=harness('?screen=S08&place=luogo-milano-01&theme=A');assert.equal(h.run('state.screen'),'S08');assert.ok(h.html().includes('Cortile Due'));h.click('back');assert.equal(h.run('state.screen'),'S02');assert.equal(h.run('state.criteria.city'),'Milano');
 return 'Recensioni collegate all’ID corretto e back verso il contesto Milano.';
});

test('I22', 'Assistente contestuale reperisce la testimonianza del luogo aperto', () => {
 const h=harness();h.run("state.selected='luogo-milano-01';route('S05')");h.click('assistant');assert.ok(h.html().includes('Cortile Due'));h.click('ai-place');assert.ok(h.html().includes('Recensione di Luca su Cortile Due'));assert.ok(!h.html().includes('Recensione di Luca su Cortile Uno'));
 h.run("state.selected='luogo-roma-04';route('S05')");h.click('assistant');h.click('ai-place');assert.ok(h.html().includes('Non ci sono testimonianze'));assert.ok(!h.html().includes('Potevamo parlare senza alzare la voce.'));
 return 'Il reperimento usa l’ID della scheda, anche in un’altra città; l’assenza non genera una recensione.';
});

test('I23', 'Ricerca diretta in mappa e lista conserva città, filtri e salvati', () => {
 const h=harness();
 h.run("state.criteria={city:'Roma',query:'',budgetMax:20,noise:'basso',noiseMode:'preferred',outdoor:false};state.saved=['luogo-roma-01'];route('S02')");
 h.input('[name=query]',' San Lorenzo ');h.submit('search-form');
 assert.equal(h.run('state.screen'),'S02');assert.equal(h.run('state.criteria.query'),'San Lorenzo');
 assert.equal(h.run('state.mapSelected'),'luogo-roma-01');assert.ok(!h.html().includes('Seleziona Spazio Lume'));
 h.click('search');assert.equal(h.get('[name=query]').value,'San Lorenzo');
 h.input('[name=query]','');h.click('do-search');h.click('map');
 assert.equal(h.run('state.criteria.query'),'');assert.equal(h.run('state.criteria.city'),'Roma');
 assert.equal(h.run('state.criteria.budgetMax'),20);assert.equal(h.run('state.criteria.noiseMode'),'preferred');
 assert.equal(h.run('state.saved[0]'),'luogo-roma-01');assert.ok(h.html().includes('Seleziona Spazio Lume'));
 return 'Submit del form sulla mappa e pulsante Cerca nella lista applicano la query senza cambiare vista, città, vincoli o salvati.';
});

test('I24', 'Mappa aperta: selezione, dettaglio e ritorno conservano il luogo', () => {
 const h=harness();h.run("route('S02')");h.click('open-map');assert.equal(h.run('state.screen'),'S22');
 h.click('pin',{id:'luogo-roma-02'});assert.ok(h.html().includes('data-map-preview="luogo-roma-02"'));
 assert.ok(h.html().includes('Durante la mia visita il volume era più alto'));h.click('card-save',{id:'luogo-roma-02'});
 h.click('place',{id:'luogo-roma-02'});assert.equal(h.run('state.selected'),'luogo-roma-02');assert.equal(h.run('state.screen'),'S05');
 h.click('back');assert.equal(h.run('state.screen'),'S22');assert.equal(h.run('state.mapSelected'),'luogo-roma-02');assert.equal(h.run('state.saved[0]'),'luogo-roma-02');
 h.click('pin',{id:'luogo-roma-04'});assert.ok(h.html().includes('Nessuna recensione disponibile per questo luogo.'));
 h.click('back');assert.equal(h.run('state.screen'),'S02');assert.equal(h.run('state.mapSelected'),'luogo-roma-04');
 return 'Selezione di due luoghi, anteprima coerente, salvataggio, scheda e back; assenza di recensione esplicita.';
});
test('I25', 'Mappa aperta: query e stato vuoto non lasciano dettagli estranei', () => {
 const h=harness('?screen=S22');h.input('[name=query]','Luogo inesistente');h.submit('search-form');
 assert.equal(h.run('state.screen'),'S22');assert.equal(h.run('state.mapSelected'),null);
 assert.ok(!h.html().includes('data-map-preview'));assert.ok(h.html().includes('Nessun luogo con questi criteri'));
 h.click('pin',{id:'luogo-roma-01'},true);assert.equal(h.run('state.mapSelected'),null);
 h.click('clear-filters');assert.equal(h.run('state.screen'),'S22');assert.equal(h.run('state.criteria.city'),'Roma');assert.ok(h.html().includes('data-map-preview="luogo-roma-01"'));
 return 'La ricerca resta nella mappa aperta; lo stato vuoto rimuove l’anteprima e Azzera recupera i luoghi della città.';
});
test('I26', 'Ingresso diretto nella mappa aperta di Milano', () => {
 const h=harness('?screen=S22&place=luogo-milano-02&theme=A');
 assert.equal(h.run('state.criteria.city'),'Milano');assert.equal(h.run('state.mapSelected'),'luogo-milano-02');
 assert.ok(h.html().includes('data-map-preview="luogo-milano-02"'));assert.ok(!h.html().includes('data-id="luogo-roma-01"'));
 h.click('back');assert.equal(h.run('state.screen'),'S02');assert.equal(h.run('state.criteria.city'),'Milano');
 return 'Link diretto validato: città e selezione coerenti, con ritorno all’esplorazione.';
});

test('I27', 'Applica filtri torna alla mappa aperta senza perdere la selezione valida', () => {
 const h=harness('?screen=S22');h.click('pin',{id:'luogo-roma-02'});h.click('filters');
 h.get('#budget').value='20';h.click('apply-filters');assert.equal(h.run('state.screen'),'S22');assert.equal(h.run('state.mapSelected'),'luogo-roma-02');
 h.click('city');h.get('#filter-city').value='Milano';h.click('apply-filters');
 assert.equal(h.run('state.screen'),'S22');assert.equal(h.run('state.criteria.city'),'Milano');assert.ok(!h.html().includes('data-id="luogo-roma-02"'));
 h.click('back');assert.equal(h.run('state.screen'),'S02');
 return 'Budget applicato nella vista aperta, selezione conservata finché valida; cambio città aggiorna i segnaposto e non lascia l’editor nello storico.';
});

test('I28', 'Fotografie locali, crediti e galleria seguono il luogo selezionato', () => {
 for(const p of catalog.places){assert.ok(p.photo.illustrative);assert.ok(p.photo.alt.includes('foto d’esempio'));assert.ok(p.photo.sourceUrl.startsWith('https://unsplash.com/photos/'));assert.ok(fs.existsSync(path.resolve(base,p.photo.src)));for(const m of p.media)assert.ok(fs.existsSync(path.resolve(base,m.src)));}
 const h=harness('?screen=S05&place=luogo-roma-01');assert.ok(h.html().includes('cafe-terrazza.jpg'));assert.ok(h.html().includes('Masha / Unsplash'));
 h.click('gallery');h.click('media',{id:'media-roma-01-02'});assert.ok(h.html().includes('Thamy N. / Unsplash'));assert.ok(h.html().includes('cafe-verde.jpg'));h.click('media-close');assert.ok(!h.html().includes('photo-view'));
 return 'Otto copertine distinte e foto locali con alt, crediti originali e natura illustrativa; apertura e chiusura della seconda foto della galleria.';
});
test('I29', 'Variante del dettaglio indipendente dal tema e dal luogo', () => {
 const h=harness('?screen=S05&place=luogo-milano-02&theme=A&detail=aqua');assert.equal(h.run('state.detailSurface'),'aqua');assert.equal(h.run('document.body.dataset.detailSurface'),'aqua');
 h.click('gallery');h.click('back');assert.equal(h.run('state.selected'),'luogo-milano-02');assert.equal(h.run('state.detailSurface'),'aqua');
 const light=harness('?screen=S05&place=luogo-milano-02&theme=B&detail=light');assert.equal(light.run('state.detailSurface'),'light');assert.ok(light.html().includes('spazio-galleria.jpg'));
 const invalid=harness('?detail=invalid');assert.equal(invalid.run('state.detailSurface'),'aqua');
 return 'Parametri light/aqua validati; cambio vista conserva luogo e variante, senza creare una terza direzione UI.';
});

test('I30', 'Le foto degli utenti appartengono a recensioni dello stesso luogo', () => {
 let photos=0,reviewPhotos=0,reviews=0;
 for(const p of catalog.places){
  const ids=new Set();for(const m of p.media){assert.ok(!ids.has(m.id));ids.add(m.id);assert.ok(['venue','reviews'].includes(m.origin));assert.ok(m.mock);assert.ok(m.illustrative);assert.ok(fs.existsSync(path.resolve(base,m.src)));photos++;
   if(m.origin==='reviews'){const r=p.reviews.find(r=>r.id===m.reviewId);assert.ok(r);assert.equal(m.uploadedBy,r.author);assert.equal(m.uploadedAt,r.visited);assert.ok(r.mediaIds.includes(m.id));reviewPhotos++;}
   else assert.equal(m.reviewId,null);
  }
  for(const r of p.reviews){reviews++;assert.ok(r.mock);for(const id of r.mediaIds){const m=p.media.find(m=>m.id===id);assert.ok(m);assert.equal(m.reviewId,r.id);}}
 }
 assert.ok(photos>=35);assert.ok(reviewPhotos>=15);assert.ok(reviews>=18);
 const park=catalog.places.find(p=>p.id==='luogo-milano-04');assert.ok(park.reviews.length);assert.equal(park.atmosphere.values.noise,null);assert.equal(park.atmosphere.noiseContributions,0);
 return `${photos} fotografie nelle gallerie, ${reviewPhotos} legate ai racconti, ${reviews} recensioni mock; nessuna nuova misura di atmosfera dedotta dai testi.`;
});
test('I31', 'Galleria unica con tag e navigazione tra locale e utenti', () => {
 const h=harness('?screen=S05&place=luogo-roma-01');assert.ok(!h.html().includes('album-previews'));assert.ok(h.html().includes('Dal locale'));assert.ok(h.html().includes('Luca'));assert.ok(h.html().includes('Tutte le foto (6)'));
 h.click('gallery');assert.ok(h.html().includes('data-id="media-roma-01-01"'));assert.ok(h.html().includes('data-id="media-roma-01-user-01"'));assert.ok(!h.html().includes('gallery-origin'));
 h.click('media',{id:'media-roma-01-03'});assert.ok(!h.html().includes('Leggi questa recensione'));h.click('media-next');assert.equal(h.run('state.mediaSelected'),'media-roma-01-user-01');assert.ok(h.html().includes('La visita di Luca'));assert.ok(h.html().includes('4 / 6'));
 h.click('media-prev');assert.equal(h.run('state.mediaSelected'),'media-roma-01-03');assert.ok(h.html().includes('Dal locale'));
 h.click('media',{id:'media-roma-01-user-03'},true);h.click('media-next',{},true);assert.equal(h.run('state.mediaSelected'),'media-roma-01-user-03');
 h.click('media-close');h.click('media',{id:'media-roma-01-01'});h.click('media-prev',{},true);assert.equal(h.run('state.mediaSelected'),'media-roma-01-01');h.click('back');assert.equal(h.run('state.screen'),'S07');assert.equal(h.run('state.mediaSelected'),null);
 h.click('media',{id:'media-milano-01-user-01'},true);assert.equal(h.run('state.mediaSelected'),null);
 assert.ok(h.run("photoOrigin({origin:'reviews',uploadedBy:'Luca',username:'@luca'})")==='@luca');
 return 'Un’unica raccolta con tag Dal locale/nome, priorità allo username, passaggio tra origini e limiti agli estremi; ID di altro luogo rifiutato.';
});
test('I32', 'Foto e recensione permettono un percorso di andata e ritorno', () => {
 const h=harness('?screen=S08&place=luogo-roma-01&detail=aqua');h.click('media',{id:'media-roma-01-user-02'});assert.equal(h.run('state.screen'),'S07');assert.ok(h.html().includes('La visita di Chiara'));
 h.click('photo-review',{id:'rec-roma-01-02'});assert.equal(h.run('state.screen'),'S08');assert.equal(h.run('state.reviewSelected'),'rec-roma-01-02');assert.ok(h.html().includes('review-highlight'));
 h.click('back');assert.equal(h.run('state.screen'),'S07');assert.equal(h.run('state.mediaSelected'),'media-roma-01-user-02');h.click('media-close');assert.ok(h.html().includes('Tutte le foto'));assert.ok(h.html().includes('data-id="media-roma-01-01"'));h.click('back');assert.equal(h.run('state.screen'),'S08');assert.equal(h.run('state.selected'),'luogo-roma-01');assert.equal(h.run('state.detailSurface'),'aqua');
 return 'Dalla recensione allo scatto e ritorno, conservando foto, luogo e variante; chiusura dello scatto nella raccolta completa.';
});
test('I33', 'Assenza di foto utenti e vecchi link non nascondono le immagini del locale', () => {
 const h=harness('?screen=S07&place=luogo-roma-04&gallery=reviews');assert.ok(h.html().includes('data-id="media-roma-04-01"'));assert.ok(!h.html().includes('Il primo scatto manca ancora'));
 const milano=harness('?screen=S07&place=luogo-milano-04&gallery=reviews');assert.equal(milano.run('state.criteria.city'),'Milano');assert.ok(milano.html().includes('Francesca'));assert.ok(milano.html().includes('data-id="media-milano-04-01"'));assert.ok(!milano.html().includes('data-id="media-roma-04-01"'));
 const empty=h.run('galleryPage({...place(),media:[]})');assert.ok(empty.includes('Il primo scatto manca ancora'));assert.ok(!empty.includes('data-action="media"'));
 const invalid=harness('?screen=S07&place=luogo-roma-01&gallery=invalid');assert.ok(invalid.html().includes('data-id="media-roma-01-01"'));assert.ok(invalid.html().includes('data-id="media-roma-01-user-01"'));
 return 'Vecchi parametri ignorati; senza foto utenti resta la galleria del luogo; stato vuoto solo se non esiste alcuno scatto.';
});

const sources = ['index.html', 'app.js', 'core.js', 'catalogo.js', 'Catalogo_mock.json', 'build_catalogo.py', 'Verifiche_core.cjs', 'Verifiche_interazioni.cjs', '../06_design_system/esplorazione.js', '../06_design_system/esplorazione.css'].map(file => ({
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
