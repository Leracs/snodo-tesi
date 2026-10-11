# Assemblaggio del prototipo Figma

Versione 0.1 · 11 ottobre 2026. La consegna attuale contiene asset SVG/PNG, specifiche e un supporto HTML. Non esiste ancora un file Figma nativo costruito e verificato in questa sessione. Il plugin Figma risulta disponibile ma non installato; nessun file di progetto è stato fornito.

## Pagine da creare nel file

1. **01 Architettura** — diagramma generale, oggetti, legenda C/D/T/V/H/M e matrice dei requisiti come riferimento.
2. **02 Flussi** — F1 individuale, F2 amici, F3 recensione; mantenere visibili i rami di recupero.
3. **03 Wireframe** — 21 schermate S01–S21 e 12 varianti. Formato proposto 390 × 844 px.
4. **04 Direzioni UI** — tile A e B con stessa struttura, componenti e contenuti.
5. **05 Componenti provvisori** — base DS01–DS17, separata dai componenti strutturali C01–C40. Il crosswalk collega i due cataloghi.
6. **06 Prototipo** — frame di scenario, catalogo mock e messaggi predisposti.
7. **07 Valutazione** — versione sottoposta alle persone e, solo dopo raccolta, problemi e revisioni.

## Importare e rendere modificabili gli asset

Figma consente l'importazione di immagini e vettori; la sua guida distingue questi asset dai file nativi `.fig` e `.sketch`. Gli SVG forniti sono vettori di progetto, non file nativi con componenti e interazioni già definiti. [Guida ufficiale alle importazioni](https://help.figma.com/hc/en-us/articles/360040027794-Guide-to-imports-in-Figma-Design).

Importare prima una schermata SVG di prova dal gruppo `04_wireframe/svg`. Verificare dimensioni, font, livelli e testo. Il comportamento dei testi dopo importazione non è stato controllato qui: se risultano tracciati o perdono l'editabilità, ricreare i livelli di testo nativi usando inventario, SVG e PNG come riferimento. Non appiattire l'intero progetto in PNG per presentarlo come design system nativo.

Inserire ogni schermata in un frame di primo livello 390 × 844 e assegnare il nome del manifest. Il gruppo SVG importato e il frame che lo contiene sono oggetti diversi. Usare i PNG solo per confronto visivo o impaginazione Word. Le tavole riassuntive non sostituiscono i singoli frame.

Ricostruire i componenti ricorrenti attraverso la base DS e applicare auto layout dove utile. I JSON sono specifiche di token e comportamenti: non è stata verificata una loro importazione automatica nelle variabili native. Creare le variabili dalla tabella e controllare i valori; un eventuale importatore richiede verificare schema e plugin usato.

## Collegamenti da costruire

La tabella `Collegamenti_Figma.csv` definisce ingressi, azioni e destinazioni; è una specifica da applicare, non la prova di collegamenti già funzionanti. Per ogni hotspot configurare trigger, azione e destinazione nel pannello Prototype. La guida Figma descrive queste tre parti della connessione. [Connessioni del prototipo](https://help.figma.com/hc/en-us/articles/360040315773-Connect-your-prototype).

Preparare tre punti di partenza: F1 su S01/S02, F2 su S11, F3 su S05 o S15. Le interazioni ordinarie possono usare On click → Navigate to; i ritorni contestuali Back. Per pannelli e chiarimenti usare overlay se conservano il contesto; mantenere una via di chiusura. Figma consente più flussi nella stessa pagina. [Guida alla prototipazione](https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma).

Nel pannello del luogo definire tre stati e il ritorno alla stessa mappa/selezione. Il dettaglio esteso può occupare la schermata. Dove il contenuto supera il viewport, costruire realmente il contenuto scorrevole: un rettangolo con la parola «recensioni» non rende verificabile la lettura di una recensione lunga.

## Script e reset

Usare gli otto luoghi di `Catalogo_mock.json` come fonte unica. Card, scheda e risposta AI devono riportare gli stessi prezzi, contesti e conteggi. Le tile mostrano lo stesso esempio Cortile Uno, con scala di intensità 1–5, tre visite e due risposte sul rumore. Sono valori illustrativi predisposti, non medie osservate.

AI: predisporre richiesta vaga, cambio città, nessuna corrispondenza, indisponibilità e prima/dopo del testo. Le richieste arbitrarie non sono un modello funzionante; nel test occorre indicare che le risposte sono simulate. Il percorso manuale deve restare raggiungibile.

Amici: predisporre inviti iniziali, accettazione di Chiara con Matteo ancora in attesa, accettazione degli altri, preferenza, conferme, incompatibilità e riapertura. Non usare un passaggio automatico per attribuire consenso al silenzio. Indicare al facilitatore quali eventi deve attivare; non mostrare questi controlli come funzioni del prodotto.

Recensione: predisporre appunti, proposta AI separata, applicazione/rifiuto, anteprima, visibilità, invio, fallimento e ripresa. Il reset deve ripristinare testo, criteri e stato del gruppo senza mescolare sessioni diverse. La navigazione Maps della demo simula il passaggio e il ritorno; non apre una destinazione fittizia come se fosse reale.

## Chiusura della consegna nativa

Controllare tutti e tre i compiti dal relativo inizio, i ritorni e almeno un recupero per ciascuno. Annotare file/link, versione, punto di partenza ed esito in `Verifica_Figma.csv`. Verificare font, viewport, scroll, sovrapposizioni e hotspot; non attestare una conformità generale sulla base dei soli contrasti delle tile. Il file nativo è consegnato soltanto dopo queste verifiche.
