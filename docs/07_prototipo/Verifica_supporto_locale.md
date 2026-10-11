# Verifica tecnica del supporto locale

11 ottobre 2026 · costruzione 0.1. Questa verifica riguarda il supporto HTML, non un file Figma e non sessioni con partecipanti. Luoghi, AI, amici, Maps e invio sono simulati.

## Controlli automatici eseguiti

| Livello | Esito | Che cosa controlla | Limite |
|---|---|---|---|
| `Verifiche_core.cjs` | 11/11 PASS | Città, dati mancanti, vincoli, inviti, preferenza/conferma, invalidazione delle conferme, giudizio nella recensione e nuovo tentativo di invio | Funzioni e dati; non misura comprensione né layout |
| `Verifiche_interazioni.cjs` | 12/12 PASS | Handler, campi conservati, correzione/annullamento dei criteri AI, bozze di luoghi diversi, appunti originali e invii distinti | DOM minimo simulato; non esegue un browser |

`QA_interazioni.json` conserva esiti e hash dei file eseguiti. Entrambi i controlli sono stati ripetuti dopo le correzioni. Non sono risultati di ricerca UX.

## Percorsi osservati nel browser

Verifica manuale nel browser integrato di Codex, con server esclusivamente locale su `server locale di origine`. Le osservazioni seguenti attestano gli stati letti nell'interfaccia; non equivalgono a una verifica completa delle 21 schermate.

| Passaggio | Stato osservato | Esito |
|---|---|---|
| Avvio manuale e mappa | Roma scelta senza GPS, quattro luoghi mock e riferimento di distanza esplicito | Verificato |
| Ricerca AI e città | Proposta Milano, budget 20 €, criteri espliciti; applicazione porta alla lista di Milano e alla scheda Cortile Due | Verificato |
| Correggi/annulla AI | Dopo l'annullamento la ricerca conserva Roma; la proposta non sostituisce i criteri senza applicazione | Verificato |
| Filtri e nessun risultato | Budget massimo 5 € a Roma produce zero risultati, con il vincolo ancora visibile | Verificato |
| Recupero ricerca | «Azzera i filtri, mantieni città» ripristina quattro risultati a Roma | Verificato |
| Scheda e Maps | Scheda coerente con il luogo scelto; apertura e ritorno sono dichiarati simulati | Verificato |
| Inviti e accordo provvisorio | Un invitato in attesa non viene contato come consenso | Verificato |
| Accordo esplicito | Preferenza distinta dalla conferma; dopo accettazione e conferma di tutti, S14 mostra il luogo concordato e le tre risposte esplicite | Verificato |
| Aiuto alla recensione | S16 presenta Prima/Dopo; resta la frase sui prezzi più alti del previsto; l'applicazione richiede un'azione dell'autore | Verificato |
| Anteprima e destinatari | S17 conserva testo, visita e nome; il gruppo non è selezionabile se manca una proposta | Verificato |
| Errore e nuovo tentativo | S18 mostra «Invio non riuscito»; «Riprova lo stesso invio» porta a «Contributo inviato», sempre nella demo | Verificato |
| Aspetto A/B | Entrambe le direzioni sono state visualizzate; nessuna è stata scelta in base a feedback | Verificato come anteprima |

La lettura dei log del browser al termine non ha restituito errori o avvisi nelle voci richieste. Non attesta che ogni percorso possibile sia privo di errori.

## Correzioni effettuate

Sono stati corretti la conservazione dei campi durante la navigazione, l'archiviazione delle bozze per luogo e ID, l'annullamento dei criteri AI, il budget personalizzato, lo snapshot degli appunti iniziali e l'invalidazione di un suggerimento dopo una modifica dell'autore. Il luogo già proposto resta visibile se nuovi criteri lo rendono incompatibile, con avviso e selezione bloccata. Le categorie d'affollamento sono coerenti con i valori mock predisposti.

## Limiti e controlli ancora da svolgere

Non sono state svolte sessioni con le tre persone, misurazioni di tempo, confronto delle tile o verifiche native Figma. Non sono conclusi i controlli su tastiera, lettore di schermo, tutti gli scroll, tutti i formati responsive e tutte le combinazioni di destinatari. Le specifiche descrivono anche stati non interamente eseguibili nel supporto. Nessuna dichiarazione di conformità WCAG complessiva deriva da questa verifica.

Il controllo dei duplicati e delle bozze multiple è coperto dalle verifiche automatiche; non si estende tale esito a tutti i comportamenti dei browser o alla persistenza tra dispositivi. La conservazione locale dipende dal browser. AI e catalogo non accedono a dati live.

`Anteprima_supporto.png` è la cattura della scheda S05 Cortile Uno nella direzione provvisoria B, con i controlli esterni della dimostrazione visibili. Mostra la prima costruzione, non un risultato di test.
