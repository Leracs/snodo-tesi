# Supporto interattivo e materiali per Figma

Versione 0.6. Aprire `index.html` nel browser mantenendo intatte le cartelle del pacchetto. Non servono account, backend, librerie da scaricare o API. Il supporto funziona anche come file locale; la conservazione della sessione dipende dal browser. Il pulsante Riparti azzera soltanto i dati dimostrativi della sessione corrente.

Questa copia è consultabile online da GitHub Pages. La verifica originaria della demo è stata eseguita con un server locale sul computer dell’autore. Il pulsante Riparti riguarda soltanto la sessione dimostrativa, non il gate d’ingresso.

## Che cosa funziona nel supporto

Ricerca manuale e città senza GPS, filtri, mappa schematica e lista, stessa scheda da vari accessi, salvataggi, informazioni/fonte/atmosfera, galleria dimostrativa, inviti e proposta, preferenza/conferma/esito, recensione manuale o assistita, anteprima, bozza, errore e nuovo tentativo. Due temi provvisori permettono di visualizzare le direzioni A/B senza scegliere un vincitore.

La barra laterale esterna contiene scenari e eventi del facilitatore. AI, amici, Maps, segnalazioni e invio sono simulati. Il chatbot riconosce solo richieste predisposte; le altre ricevono un messaggio di limite. Nessun testo viene inviato a persone o servizi. Le otto schede sono fittizie; il prodotto è pensato per tutta Italia, la demo contiene Roma e Milano.

## Limiti della prima versione

Il supporto locale non sostituisce Figma e non attesta interazioni native. Mappa, posizioni e distanze sono schematiche; il riferimento è centrale e dimostrativo. Non si calcolano percorsi, tempi o dati live. La variante scelta per avviare la pagina è tecnica e provvisoria, non una preferenza degli utenti.

Questa versione non implementa account, moderazione, creazione di inviti reali, riferimenti di distanza arbitrari o catalogo nazionale completo. La ricerca di una città fuori dal catalogo produce uno stato della demo, non una conclusione sull'offerta reale. Gli stati di fonte discordante e i controlli dei destinatari multipli sono descritti nelle specifiche e nei wireframe; il supporto non li esegue tutti.

Gli indicatori di atmosfera usano valori illustrativi predisposti. Il metodo di aggregazione futuro rimane da definire; nessuna soglia di contributi certifica un dato affidabile. Il confronto delle tre dimensioni descrive intensità, non gradimento né sicurezza.

## Riproduzione e verifiche

`build_catalogo.py` genera JSON e JavaScript dal catalogo unico; `Verifiche_core.cjs` controlla dati mancanti, città, vincoli, accordo esplicito, giudizio della recensione e invii non duplicati. `Verifica_supporto_locale.md` riporta i percorsi verificati nell'interfaccia: è una verifica tecnica, non un test con persone.

Per la consegna Figma seguire `Assemblaggio_Figma.md` e `Collegamenti_Figma.csv`; compilare `Verifica_Figma.csv` solo dopo controlli effettuati nel file nativo.

## Atmosfera e affluenza — revisione v0.4

Le schede S05/S06 riusano il [pattern DS08/DS19](../06_design_system/Atmosfera_affluenza.md): luce, rumore e comfort separati dall’affluenza in tre fasce, selettore del giorno con pannello accessibile. Gli intervalli della demo rispettano apertura 16–23; comfort e profili aggiunti sono mock predisposti. La [demo del design system](../06_design_system/Atmosfera_affluenza_demo.html) mostra anche assenza completa e fascia mancante. I controlli dedicati sono distinti dai precedenti test generali della demo.

## Libreria dei componenti

Il [design system](../06_design_system/index.html) raccoglie i componenti e le anteprime A/B. Le azioni “Prova nella scheda” e “Apri il dettaglio” aprono direttamente S05/S06 con luogo e direzione selezionati. La cornice della demo offre il link di ritorno al catalogo, anche su mobile. I parametri di ingresso sono validati e le bozze della sessione sono conservate.

## Esplorazione e recensioni — integrazione v0.6

Mappa/lista condividono città, query, filtri, numeri e selezione. Le card compatte hanno una preview della recensione con autore, data, compagnia e fascia; la stessa testimonianza è visibile prima dell’atmosfera nella scheda. I luoghi senza recensioni mostrano l’assenza esplicita. Il salvataggio è disponibile direttamente nella card.

Budget e rumore sono filtri rapidi. S04 mantiene una bozza fino ad Applica: Annulla conserva la ricerca e Azzera modifica solo la bozza. Il rumore può essere necessario o preferito; in quest’ultimo caso dati mancanti e alternative oltre preferenza sono gruppi distinti, non corrispondenze certe. Budget e all’aperto restano requisiti. La scheda ha una sola CTA principale persistente: proposta personale oppure preferenza nella proposta di gruppo esistente.

[Componenti e regole](../06_design_system/Esplorazione_e_recensioni.md). La mappa rimane schematica: non implementa pan geografico, bounds o ricerca live in un’area. I grafici DS08/DS19 restano separati dalle recensioni e dal gradimento.

## Mappa aperta — S22

Da Esplora, «Apri mappa» apre una vista dedicata: selezionando un segnaposto cambia l’anteprima in basso. L’anteprima mostra luogo, spesa indicativa o limite del criterio, recensione mock (oppure assenza), salvataggio e «Apri dettaglio». Dalla scheda, Indietro torna alla mappa con lo stesso luogo selezionato. Ricerca, città e filtri restano condivisi con la lista. Lo scenario «Mappa aperta» è disponibile nei controlli esterni; il link diretto è `index.html?screen=S22`.

La mappa e le posizioni restano schematiche; questa vista non introduce cartografia, geolocalizzazione o percorsi reali.

## Fotografie e variante verde acqua

Le otto schede hanno fotografie stock locali, con testo alternativo e crediti Unsplash. Le immagini sono esempi visivi: non ritraggono i luoghi fittizi del catalogo, né provano i servizi o le recensioni. Le fonti sono in [Crediti delle fotografie](media/Crediti_fotografie.html).

Il controllo esterno «Sfondo del dettaglio» permette di confrontare Chiaro e Verde acqua, indipendentemente dalla direzione A/B. Lo sfondo acqua è #80EFED; il testo principale è #102D2B e il secondario #315452. Recensioni e dati mantengono superfici chiare; le foto non hanno testo sovrapposto. Il link diretto accetta `detail=aqua` o `detail=light`. Il controllo riguarda soltanto S05 e conserva luogo, filtri, salvataggi e ritorno alla mappa.

I controlli tecnici di contrasto riguardano colori e interazioni verificati nel browser; non attestano una verifica completa di conformità WCAG con tecnologie assistive.

## Galleria unica e racconti di visita

S05 e S07 usano un unico componente a carosello, con una fotografia alla volta e tag sovrapposti in alto: «Dal locale» per gli scatti del luogo, nome o username per quelli degli utenti. Frecce, tasti direzionali e scorrimento touch permettono di passare tra tutte le foto senza griglie o card. Il contatore indica la posizione; didascalia e crediti restano sotto l’immagine. La scheda del luogo conserva la foto selezionata quando si apre la galleria. Per gli scatti degli utenti, S07 mostra il contesto e il collegamento alla recensione corretta; S08 permette il percorso inverso.

Il catalogo contiene 39 inserimenti fotografici, 17 legati alle recensioni, e 20 racconti mock su otto luoghi. Le immagini stock possono essere riutilizzate tra luoghi diversi: non sono fotografie di luoghi reali del catalogo. L’origine gestore/utente è simulata e resta distinta dall’autore reale Unsplash. Roma · Giardino Piccolo conserva l’assenza di recensioni e foto utenti, per verificare lo stato vuoto. I nuovi racconti non modificano le intensità o la copertura dei grafici.

Link diretto: `index.html?screen=S07&place=luogo-roma-01` (il vecchio parametro `gallery` è ignorato, senza separare le fotografie). I controlli I30–I33 verificano i collegamenti fra foto e racconti, la navigazione tra origini diverse, il ritorno e lo stato vuoto dell’intera galleria; non costituiscono validazione con utenti.
