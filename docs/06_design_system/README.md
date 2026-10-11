# Base di design system provvisoria

SNODO, v0.4 — 11 ottobre 2026. Questa revisione affina proporzioni, gerarchie e dettagli dei componenti nelle due direzioni A/B; **nessuna UI definitiva è selezionata**. Non esiste in questa cartella una libreria Figma nativa già costruita o verificata.

Materiali:

- `tokens_A.json` / `tokens_B.json`: colori e token tipografici, spaziatura, geometria, focus e movimento con `$type/$value`. Richiedono mappatura/importer compatibile; l’importazione non è stata eseguita.
- `theme_A.json` / `theme_B.json`: valori piatti e misure delle due direzioni per il prototipo locale.
- `tokens_A.css` / `tokens_B.css`: variabili CSS selezionate da `data-theme="A"` o `"B"`.
- [Componenti_e_comportamenti.md](https://leracs.github.io/snodo-tesi/06_design_system/Componenti_e_comportamenti.md) e JSON: stati, proprietà e transizioni proposte.
- [Corrispondenza_componenti_IA_DS.md](https://leracs.github.io/snodo-tesi/06_design_system/Corrispondenza_componenti_IA_DS.md) e JSON: mappatura compositiva dei componenti visivi (DS01–DS17, DS19) rispetto ai componenti funzionali C01–C40 dell’architettura. I due namespace non sono intercambiabili.
- [Stati_e_controlli.svg](https://leracs.github.io/snodo-tesi/06_design_system/Stati_e_controlli.svg) e PNG: campioni statici di default/hover/premuto/focus/loading/disabled, campi, tag e recuperi. I comportamenti annotati sono specifiche, non interazioni del file SVG.
- [Contrasti.csv](https://leracs.github.io/snodo-tesi/06_design_system/Contrasti.csv) e [Markdown](https://leracs.github.io/snodo-tesi/06_design_system/Contrasti.md): calcoli sRGB, coppie effettive, criteri e limiti.
- [Controlli_build.json](https://leracs.github.io/snodo-tesi/06_design_system/Controlli_build.json): comparabilità delle tile, larghezze e contrasti; nessun feedback umano.

Tipografia: A usa Georgia per i titoli e Trebuchet MS per il corpo; B usa Boldonse per i titoli e prevede Forma DJR Text per il corpo. Forma DJR Text non è disponibile localmente: l’anteprima B usa Helvetica Neue e dichiara la sostituzione. Boldonse è fornito in [Boldonse-Regular.ttf](https://leracs.github.io/snodo-tesi/05_style_tiles/fonts/Boldonse-Regular.ttf), con [OFL.txt](https://leracs.github.io/snodo-tesi/05_style_tiles/fonts/OFL.txt), dal [repository ufficiale Google Fonts](https://github.com/google/fonts/tree/main/ofl/boldonse). Corpo 16/24 px, metadati 14/20 px. I metadati non sono l’unica sede di un limite che influisce sulla decisione: messaggi di errore, dati assenti e azioni vanno mantenuti visibili anche nel contenuto principale.

Le dimensioni sono ipotesi reversibili. Restano comuni il frame mobile 390 × 844, il margine 16, la scala di spazi 4/8/12/16/24/32/40/48/64, l’altezza del pulsante 48 e del campo 52. Nelle tavole i campioni di prodotto hanno larghezza 360 px. A usa raggi di 20 px per le card e 12 px per pulsanti e campi; B usa 32 px per le card e i pulsanti, 18 px per i campi. I tag descrittivi sono alti 28 px, con raggio A 8 / B 14; i filtri interattivi hanno altezza 44 e raggio 22. Le icone sono disegnate su griglia 24 con tratto 1,8 px; mantenere target raccomandato 44 × 44 anche se l’icona è più piccola. Le quattro destinazioni restano Esplora/Salvati/Chat/Profilo; l’AI ha un’etichetta esplicita e accessi contestuali, senza una quinta destinazione nascosta dietro un simbolo.

La tavola degli stati misura 1440 × 1920 px. Mostra controlli con padding, allineamento delle icone, focus coerente con la forma del componente, indicatore di caricamento e recuperi espliciti. Le annotazioni tecniche sono esterne ai campioni. La card luogo separa media orizzontale, tag passivi, prezzo, provenienza e azioni; recensione e messaggio AI restano componenti distinti. Le superfici non hanno tutte lo stesso peso: il colore guida l’attenzione su azioni e selezioni, mentre la lettura del contenuto conserva spazio e contrasto.

La direzione A mantiene crema e terracotta. B riprende la tavola proposta dallo studente l’11 ottobre 2026 e usa la palette pop `#FD87BA`, `#ADE25D`, `#9E6CDA`, `#FCEC52`, `#80EFED`. Lo screenshot ricevuto è la guida precisa della B; la [board App su Pinterest](https://it.pinterest.com/resushitata/app/) è stata consultata come repertorio visivo nelle prime card. I token assegnano ruoli ai colori nei componenti dell’app, senza trasformare i motivi della moodboard in controlli. Le due direzioni mantengono quantità di informazioni e compiti confrontabili, con la selezione degli utenti ancora aperta.

I colori semanticamente funzionali hanno ruoli condivisi. Successo, limite dei dati, errore e informazione sono sempre accompagnati da testo; una scelta selezionata presenta anche un segno vettoriale. Divider e accenti decorativi non sono l’unica indicazione di un controllo o stato. Non usare opacity sui testi della base: cambia il contrasto e richiede un nuovo calcolo.

La superficie calma non deve nascondere gerarchia, dato mancante o azione. Il sistema privilegia informazioni pratiche prima della decisione, provenienza distinguibile, controlli correggibili e una testimonianza separata dal riepilogo AI. Nessun tag o indicatore certifica sicurezza, accoglienza o affidabilità universali.

## Atmosfera e affluenza: pattern integrato

La revisione v0.4 separa DS08 (luce, rumore, comfort) da DS19 (affluenza in tre fasce e giorno selezionabile). [Specifica e stati](Atmosfera_affluenza.md) · [Dimostrazione interattiva A/B](Atmosfera_affluenza_demo.html) · [Verifiche tecniche](QA_atmosfera_affluenza.json). La stessa implementazione è presente nella scheda S05 e nel dettaglio S06. Sono aggiunti quattro ruoli di colore accessibili; i font del progetto restano invariati. Il pattern è integrato in HTML; le tavole statiche e Figma non risultano migrate.

## Passaggio alla libreria definitiva

Prima raccogliere il confronto reale delle tile; poi registrare direzione e motivi, applicare eventuali revisioni, aggiornare i token e creare componenti nativi Figma con varianti/Auto Layout. Verificare testi lunghi, frame piccolo, espansione della scheda, scroll, ritorni e controlli. Il confronto visivo non dimostra usabilità o conformità WCAG generale. A può essere usata tecnicamente nel prototipo locale per costruire i flussi, purché sia dichiarata provvisoria e reversibile.
