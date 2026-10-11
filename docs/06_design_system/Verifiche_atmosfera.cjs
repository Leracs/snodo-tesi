const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const component = require('./atmosfera-affluenza.js');
const catalog = require('../07_prototipo/Catalogo_mock.json');
const tests = [];
const check = (name, action) => { action(); tests.push({ name, status: 'PASS' }); };
check('Ogni luogo conserva tre fasce compatibili con apertura 16–23', () => {
  for (const place of catalog.places) {
    const view = component.getView(place, 0);
    assert.equal(view.bands.length, 3);
    assert.deepEqual(view.bands.map(b => [b.start,b.end]), [['16:00','18:00'],['18:00','21:00'],['21:00','23:00']]);
    assert.equal(view.metrics.some(metric => metric.key === 'crowding'), false);
  }
});
check('Zero contributi non produce valori, riempimenti o raccomandazioni', () => {
  const place = catalog.places.find(p => p.id === 'luogo-roma-04');
  const view = component.getView(place, 0);
  assert.ok(view.metrics.every(metric => metric.value === null));
  assert.ok(view.bands.every(band => band.value === null));
  assert.equal(view.quiet.length, 0);
  assert.ok(!component.render(place).includes('snodo-context-mark"'));
  assert.ok(!component.render(place).includes('snodo-context-rating"'));
});
check('Copertura parziale esclude la fascia assente dal confronto', () => {
  const place = catalog.places.find(p => p.id === 'luogo-roma-02');
  const view = component.getView(place, 1);
  assert.equal(view.bands[2].value, null);
  assert.equal(view.bands[2].labelValue, 'Dato assente');
  assert.ok(view.quiet.every(band => band.id !== 'tarda-sera'));
});
check('Giorno assente non usa il profilo di un altro giorno', () => {
  const place = JSON.parse(JSON.stringify(catalog.places[0]));
  place.atmosphere.attendance.days = place.atmosphere.attendance.days.filter(profile => profile.day !== 1);
  assert.equal(component.getView(place,1).available.length,0);
});
check('Fascia chiusa è distinta da dato assente e da affluenza bassa', () => {
  const place = JSON.parse(JSON.stringify(catalog.places[0]));
  place.atmosphere.attendance.days[0].values[0].status = 'closed';
  const band = component.getView(place,0).bands[0];
  assert.equal(band.value,null);assert.equal(band.labelValue,'Chiuso');
});
check('Valori fuori scala e copertura zero non vengono mostrati', () => {
  const place = JSON.parse(JSON.stringify(catalog.places[0]));
  place.atmosphere.values.light = 6;
  place.atmosphere.metricCoverage.noise = 0;
  delete place.atmosphere.metricCoverage.comfort;
  place.atmosphere.attendance.days[0].values[0].value = 0;
  const view = component.getView(place,0);
  assert.equal(view.metrics[0].value,null);assert.equal(view.metrics[1].value,null);assert.equal(view.metrics[2].value,null);assert.equal(view.bands[0].value,null);
});
check('Anteprima del lunedì coerente; giorno non valido mantiene il profilo predefinito', () => {
  const place = catalog.places.find(p => p.id === 'luogo-roma-02');
  const monday = component.render(place, {initialDay: 1});
  assert.ok(monday.includes('Lunedì. Cambia giorno.'));
  assert.equal((monday.match(/class="snodo-context-mark"/g) || []).length, 2);
  assert.ok(monday.includes('Dato assente'));
  assert.equal(component.render(place, {initialDay: 99}), component.render(place));
});
const report={date:'2026-10-11',status:'PASS',type:'data_and_rendering_invariants',passed:tests.length,tests,limitations:['Non verifica browser, layout, tastiera o lettore di schermo.','Non è un test con partecipanti.'],browser:{status:'pending'},contrasts:{status:'pending'}};
fs.writeFileSync(path.join(__dirname,'QA_atmosfera_affluenza.json'),JSON.stringify(report,null,2)+'\n');
console.log(`${tests.length} verifiche di dati e assenze PASS.`);
