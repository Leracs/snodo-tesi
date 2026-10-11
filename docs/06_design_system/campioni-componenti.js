/* Campioni illustrativi del registro. DS08/DS19 nel playground riusano il prototipo. */
(function () {
  'use strict';
  const variants = {
    DS01:['Primario','Secondario','Caricamento','Disabilitato'], DS02:['Compilato','Vuoto','Errore'],
    DS03:['Selezionato','Non selezionato'], DS04:['Esplora','Salvati'], DS05:['Corrente','Posizione negata'],
    DS06:['Standard','Nessuna recensione'], DS07:['Disponibile','Mancante','Vecchio'],
    DS08:['Dati limitati','Dati assenti'], DS09:['Breve','Senza testo'], DS10:['Risposta','Attesa','Nessun risultato'],
    DS11:['Intermedio','Ridotto'], DS12:['Proposto','Concordato','Da rivedere'], DS13:['Bozza','Proposta'],
    DS14:['Conferma','Avviso','Errore'], DS15:['Vuoto','Errore'], DS16:['Uscita esterna','App assente'],
    DS17:['Caricata','Assente'], DS18:['Default','Selezionato','Salvato','Rumore assente'], DS20:['Disponibile','Testo lungo','Nessuna recensione'], DS21:['Non selezionato','Requisito','Preferenza'], DS22:['Proponi al gruppo','Preferenza nel gruppo','Incompatibile'], DS19:['Dati limitati','Fascia assente il lunedì','Dati assenti']
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${({pin:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',heart:'<path d="M12 21 3 12C-2 5 7 0 12 7c5-7 14-2 9 5Z"/>',chat:'<path d="M21 11a9 9 0 0 1-9 9H3l2-5a9 9 0 1 1 16-4Z"/>',person:'<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>',check:'<path d="m5 12 4 4L19 6"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1"/><path d="m3 17 6-6 4 4 3-3 5 5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'})[name] || ''}</svg>`;
  const button = (text,kind='') => `<span class="sample-button ${kind}">${text}</span>`;
  const art = (label='Illustrazione dimostrativa') => `<div class="sample-art" role="img" aria-label="${label}"><span></span><i></i></div>`;
  const row = (title,text) => `<div class="sample-row"><strong>${title}</strong><span>${text}</span></div>`;
  function render(id,variant=variants[id]?.[0],compact=false) {
    let content='';
    const discovery=typeof window!=='undefined'?window.SnodoDiscovery:require('./esplorazione.js');
    const catalog=typeof window!=='undefined'?window.SNODO_CATALOG:require('../07_prototipo/Catalogo_mock.json');
    const place=JSON.parse(JSON.stringify(catalog.places[0]));
    const visual=html=>html.replace(/<button\b/g,'<span').replace(/<\/button>/g,'</span>').replace(/aria-pressed=/g,'data-selected=').replace(/ disabled/g,' data-disabled="true"').replace(/ aria-label="[^"]*"/g,'');
    switch(id) {
      case 'DS01': content=button(variant==='Caricamento'?'<i class="sample-spinner"></i>Salvataggio…': 'Salva il luogo', variant==='Secondario'?'secondary':variant==='Disabilitato'?'disabled':'')+(!compact?'<p class="sample-muted">Un’azione principale, un’etichetta chiara.</p>':'');break;
      case 'DS02': content=`<div class="sample-field"><strong>Cerca un posto</strong><div class="sample-input ${variant==='Errore'?'invalid':''}">${icon('search')}<span>${variant==='Vuoto'?'Nome o zona':variant==='Errore'?'…':'Trastevere'}</span></div><small class="${variant==='Errore'?'sample-error':'sample-muted'}">${variant==='Errore'?'Inserisci almeno due caratteri.':'Cerca per nome o quartiere.'}</small></div>`;break;
      case 'DS03': content=`<div class="sample-tags"><span class="sample-tag ${variant==='Selezionato'?'selected':''}">${variant==='Selezionato'?icon('check'):''}Silenzioso</span><span class="sample-tag">All’aperto</span></div><p class="sample-muted">Criteri per trovare il tuo posto</p>`;break;
      case 'DS04': content=`<div class="sample-nav">${[['search','Esplora'],['heart','Salvati'],['chat','Chat'],['person','Profilo']].map(([i,t])=>`<span class="${variant===t?'active':''}">${icon(i)}<strong>${t}</strong></span>`).join('')}</div>`;break;
      case 'DS05': content=`<div class="sample-context">${icon('pin')}<div><strong>Roma</strong><span>${variant==='Posizione negata'?'Scegli una zona manualmente':'Trastevere · cambia zona'}</span></div></div>`;break;
      case 'DS06': if(variant==='Nessuna recensione')place.reviews=[];content=visual(discovery.card(place));break;
      case 'DS07': content=`<div class="sample-source">${icon(variant==='Vecchio'?'clock':'check')}<div><strong>${variant==='Mancante'?'Fonte non disponibile':variant==='Vecchio'?'Da aggiornare':'Informazione del gestore'}</strong><span>${variant==='Mancante'?'Non abbiamo ancora conferme.':variant==='Vecchio'?'Ultimo aggiornamento: oltre 6 mesi fa':'Aggiornata di recente · dati mock'}</span></div></div>`;break;
      case 'DS08': content=`<div class="sample-metrics">${[['Luce','Luce moderata',3],['Rumore','Silenzioso',2],['Comfort','Alto',4]].map(([a,b,n])=>`<div><span><strong>${a}</strong><small>${variant==='Dati assenti'?'Non disponibile':b}</small></span><span>${variant==='Dati assenti'?'—':`<b>${n}/5</b><span class="sample-dots">${[1,2,3,4,5].map(i=>`<i class="${i<=n?'filled':''}"></i>`).join('')}</span>`}</span></div>`).join('')}</div>`;break;
      case 'DS09': content=`<div class="sample-review"><strong>Giulia · visita serale</strong>${variant==='Senza testo'?'<p>Nessun commento scritto.</p>':'<blockquote>“Tranquillo per parlare, con un cortile luminoso.”</blockquote>'}<small class="sample-muted">Esperienza personale · esempio</small></div>`;break;
      case 'DS10': content=variant==='Attesa'?'<div class="sample-ai"><strong>Assistente AI</strong><p>Attendo la richiesta per interpretare i criteri.</p><small>Stato illustrativo · nessuna chiamata reale.</small></div>':visual(discovery.aiSummary('<p>Roma · fino a 20 € · rumore necessario ≤2/5</p>',variant==='Nessun risultato'?0:1));break;
      case 'DS11': content=`<div class="sample-sheet"><i class="sample-grip"></i><strong>Cortile Uno</strong><p>Trastevere · Aperto fino alle 23</p>${variant==='Intermedio'?row('Atmosfera','Luminoso · silenzioso')+button('Apri il dettaglio','secondary'):''}</div>`;break;
      case 'DS12': content=`<div class="sample-group"><div class="sample-avatars"><span>G</span><span>M</span><span>L</span></div><strong>Cortile Uno · venerdì, 19:00</strong><p>${variant==='Concordato'?'✓ Tutti hanno confermato':variant==='Da rivedere'?'Una preferenza non è compatibile':'2 conferme · 1 persona in attesa'}</p><span class="sample-tag">${variant}</span></div>`;break;
      case 'DS13': content=`<div class="sample-draft"><strong>${variant==='Proposta'?'Proposta dell’assistente':'La tua recensione'}</strong><p>${variant==='Proposta'?'Ambiente tranquillo, ideale per una conversazione.':'Bel posto, tranquillo e comodo.'}</p><small class="sample-muted">${variant==='Proposta'?'Puoi modificare il testo prima di applicarlo.':'Bozza · visibile solo a te'}</small></div>`;break;
      case 'DS14': content=`<div class="sample-feedback ${variant==='Errore'?'danger':variant==='Avviso'?'warning':'success'}"><strong>${variant==='Errore'?'! Impossibile salvare':variant==='Avviso'?'! Connessione instabile':'✓ Luogo salvato'}</strong><span>${variant==='Errore'?'Riprova tra poco.':variant==='Avviso'?'Alcuni dati potrebbero non essere aggiornati.':'Lo trovi nella sezione Salvati.'}</span></div>`;break;
      case 'DS15': content=`<div class="sample-empty">${icon(variant==='Errore'?'clock':'heart')}<strong>${variant==='Errore'?'Non riesco a caricare i luoghi':'Ancora nessun luogo salvato'}</strong><p>${variant==='Errore'?'Controlla la connessione e riprova.':'Trova un posto che ti piace e salvalo qui.'}</p>${button(variant==='Errore'?'Riprova':'Esplora i luoghi','secondary')}</div>`;break;
      case 'DS16': content=`<div class="sample-dialog"><strong>${variant==='App assente'?'App non disponibile':'Apri la mappa?'}</strong><p>${variant==='App assente'?'Puoi continuare usando il browser.':'Stai per uscire da SNODO per vedere il percorso.'}</p><div class="sample-actions">${button('Annulla','secondary')}${button(variant==='App assente'?'Browser':'Continua')}</div></div>`;break;
      case 'DS17': content=`<div class="sample-gallery">${variant==='Assente'?`<div class="sample-image-missing">${icon('image')}Nessuna foto disponibile</div>`:art('Prima illustrazione dimostrativa')+art('Seconda illustrazione dimostrativa')}<small class="sample-muted">${variant==='Assente'?'Le informazioni del luogo restano disponibili.':'Galleria · immagini dimostrative'}</small></div>`;break;
      case 'DS18': {
        const places=JSON.parse(JSON.stringify(catalog.places.filter(p=>p.city===place.city).slice(0,4)));
        if(variant==='Rumore assente')places[0].atmosphere.noise=null;
        content=visual(discovery.map(places,{selected:variant==='Selezionato'?places[0].id:null,saved:variant==='Salvato'?[places[0].id]:[]}));break;
      }
      case 'DS20':
        if(variant==='Nessuna recensione')place.reviews=[];
        if(variant==='Testo lungo')place.reviews[0].text='Siamo arrivati nel tardo pomeriggio e abbiamo trovato un tavolo nel cortile. La luce era piacevole e abbiamo potuto parlare senza alzare la voce. Dopo cena il posto era più affollato: per me è meglio arrivare presto. Testimonianza dimostrativa.';
        content=visual(discovery.review(place));break;
      case 'DS21': content=visual(discovery.criteria({budgetMax:variant==='Non selezionato'?null:20,noise:variant==='Non selezionato'?null:'basso',noiseMode:variant==='Preferenza'?'preferred':'required'}));break;
      case 'DS22': content=visual(discovery.dock({label:variant==='Preferenza nel gruppo'?'Preferisco questo luogo':'Proponi al gruppo',disabled:variant==='Incompatibile',reason:variant==='Incompatibile'?'Il luogo non rispetta i requisiti del gruppo.':''}));break;
      case 'DS19': content=`<div class="sample-attendance"><div class="sample-row"><strong>Affluenza</strong><span>Domenica⌄</span></div><div class="sample-bars">${[['Pomeriggio','16–18',2,'Bassa'],['Sera','18–21',4,'Alta'],['Tarda sera','21–23',3,'Media']].map(([a,b,n,v])=>`<div><span>${a}</span><i>${variant==='Dati assenti'?'—':`<b style="height:${n*20}%"></b>`}</i><small>${b}</small><strong>${variant==='Dati assenti'?'Assente':v}</strong></div>`).join('')}</div></div>`;break;
      default: throw new Error('Campione sconosciuto: '+id);
    }
    return `<div class="snodo-sample ${compact?'sample-compact':''}" data-sample-id="${id}">${content}</div>`;
  }
  const api={variants,render};
  if(typeof window!=='undefined')window.SnodoCampioni=api;
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
})();
