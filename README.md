# SNODO · materiali della tesi UX/UI

Mini sito per consultare contributi testuali, grafici, architettura, wireframe, style tile e materiali di lavoro della tesi. SNODO è il nome provvisorio del progetto; catalogo e assistente della demo sono simulati.

**Sito:** https://leracs.github.io/snodo-tesi/

GitHub Pages pubblica `docs` dal ramo `codex/pubblicazione`. Il file `.nojekyll` conserva la struttura statica e tutti i percorsi sono relativi, compatibili con `/snodo-tesi/`.

## Design system

La sezione `docs/06_design_system/index.html` raccoglie le componenti, gli stati, i token e le anteprime A/B. È collegata dalla navigazione principale e dalla Home. Atmosfera e Affluenza riusano lo stesso codice delle schermate S05/S06 del prototipo; la libreria apre direttamente la schermata, il luogo e il tema selezionati.

Pop (B) è la direzione principale del sito, del catalogo e del prototipo; Calda (A) rimane alternativa. La scelta Stile si conserva tra le pagine. La sezione `#download-svg` offre 122 SVG dei componenti e delle varianti, anche in un archivio ZIP. Ogni scheda e il playground hanno un download coerente con il tema selezionato.

Il catalogo è generato da `Componenti_e_comportamenti.json` tramite `docs/06_design_system/costruisci_catalogo.mjs`. La guida per estenderlo è in `docs/06_design_system/Guida_catalogo.md`.

La pubblicazione avviene quando le modifiche di `docs` raggiungono il ramo `codex/pubblicazione`. Il ramo di lavoro può essere pushato e revisionato prima di aggiornare quel ramo.

## Gate d’ingresso

Tutte le pagine HTML caricano `accesso/gate.js` e `accesso/gate.css`. La password è verificata nel browser e non è salvata in chiaro nel repository. L’accesso dura per la sessione della scheda; il comando di uscita richiude il gate. Non vengono inviati dati a servizi di autenticazione.

Il gate è una cortesia di accesso, non un sistema di sicurezza: codice e allegati sono pubblici e restano scaricabili direttamente dal repository o dai loro URL. Non usare questa soluzione per contenuti riservati.

## Materiali distribuiti

La copia comprende le pagine, gli asset incorporati e i download collegati nel portale. Non include PDF/audio originali, risposte individuali dei questionari, trascrizioni grezze, directory di lavoro temporanee o credenziali. I percorsi personali del workspace sono stati normalizzati nella copia pubblica. Gli originali locali rimangono invariati.

Gli SVG e il supporto HTML non costituiscono un prototipo o una libreria di componenti nativa Figma. I report tecnici descrivono i controlli di origine e non risultati con partecipanti.

Boldonse è distribuito con la propria licenza OFL nella cartella `docs/05_style_tiles/fonts`. I font di sistema non sono incorporati; per Forma DJR Text è dichiarato il fallback dell’anteprima.
