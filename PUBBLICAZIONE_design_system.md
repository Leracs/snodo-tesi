# Pubblicare il design system SNODO

Il pacchetto statico è in `docs`. GitHub Pages pubblica `docs` dal ramo `codex/pubblicazione`; il solo push di un ramo di lavoro non aggiorna il sito. Gli originali sono in `materiali/costruzione`, fuori da questo checkout.

Pop (B) è la direzione principale di sito, catalogo e prototipo. Calda (A) rimane alternativa nel selettore Stile; la scelta si conserva tra le pagine. I link con `theme=A` o `theme=B` aprono la variante richiesta.

Il catalogo contiene 22 componenti e 122 SVG: tutti gli stati in Pop e Calda, la composizione Atmosfera/Affluenza e il selettore del giorno. Ogni scheda e il playground hanno il download del componente; la sezione `#download-svg` offre lo ZIP e l’elenco completo. Gli SVG usano forme, icone e testi vettoriali modificabili, con Boldonse incorporato sotto OFL. Sono visuali statici; importazione Figma non verificata.

- Libreria e download: https://leracs.github.io/snodo-tesi/06_design_system/index.html#download-svg
- Scheda del luogo: https://leracs.github.io/snodo-tesi/07_prototipo/index.html?screen=S05&place=luogo-roma-01&theme=B

Per rigenerare gli SVG: acquisire i layout aggiornati in `svg/layouts.json`, eseguire `node docs/06_design_system/svg-componenti.mjs` e `python3 docs/06_design_system/pacchetto_svg.py`. La guida è `docs/06_design_system/Guida_catalogo.md`.

Controlli tecnici: 41 regressioni PASS (7 dati, 11 core, 23 interazioni), 122 SVG validati con XML e SHA256, download reali nel browser, tema persistente e layout mobili. Report in `QA_pop_svg.json`, `QA_catalogo.json` e `docs/07_prototipo/QA_interazioni.json`. Non sono test con partecipanti. L’export conserva il gate esistente su tutte le pagine HTML; il manifest registra file e hash distribuiti.
