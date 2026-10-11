# Pubblicare il design system SNODO

Il pacchetto statico è in `docs`. La libreria è `docs/06_design_system/index.html`; la navigazione del sito, la Home e Materiale di lavoro la collegano. Le anteprime di Atmosfera/Affluenza e S05/S06 riusano gli stessi file.

Le modifiche sono preparate sul ramo `codex/atmosfera-affluenza`. Per aggiornare la pull request già aperta:

```sh
git push origin codex/atmosfera-affluenza
```

Dopo la revisione, unire la PR al ramo `codex/pubblicazione`. GitHub Pages è già configurato per pubblicare `docs` da quel ramo; il push del solo ramo di lavoro non aggiorna il sito pubblico.

Percorsi dopo la pubblicazione:

- Libreria: https://leracs.github.io/snodo-tesi/06_design_system/index.html
- Scheda del luogo: https://leracs.github.io/snodo-tesi/07_prototipo/index.html?screen=S05&place=luogo-roma-01&theme=B
- Dettaglio: https://leracs.github.io/snodo-tesi/07_prototipo/index.html?screen=S06&place=luogo-roma-01&theme=B

La raccolta include anche i materiali di benchmark già presenti nel workspace e collegati dalla documentazione. Gli originali locali sono conservati. L’export mantiene il gate esistente su tutte le pagine HTML; il manifest registra file e hash distribuiti.

Controlli tecnici: 31 regressioni PASS, ricerca e filtri del catalogo, temi A/B, stati dei dati, collegamenti diretti al prototipo e layout a 320/390/1280 px. I dettagli sono nei report `docs/06_design_system/QA_catalogo.json`, `QA_atmosfera_affluenza.json` e `docs/07_prototipo/QA_interazioni.json`. Non sono test con partecipanti.
