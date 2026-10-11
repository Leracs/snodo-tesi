# Verifica dei materiali strutturali

11 ottobre 2026 · v1.0

Sono costruiti 21 frame base S01–S21 e 12 varianti, tutti con viewBox 390 × 844. Sono disponibili SVG autonomi, PNG a 2×, cinque tavole di consultazione, manifest JSON/CSV e builder riproducibile. Il formato mobile è H reversibile.

I tre user flow F1/F2/F3 e l’architettura generale sono disponibili in SVG/PNG. Inventario, oggetti/relazioni e matrice requisiti sono in Markdown/JSON/CSV. Il catalogo strutturale comprende 40 componenti C01–C40 e mantiene i 17 requisiti R01–R17. Questi C identificano componenti IA, non i componenti visivi DS del design system.

## Controlli effettuati

- Lettura del prompt operativo completo, blueprint consolidato, brief e risultati verificati dei questionari; journey originale letto come ricostruzione, senza trasformarlo in osservazione di una persona.
- Presenza dei 21 ID e dei 17 requisiti; riferimenti a schermate/componenti validi; 36 righe dei journey (tre scenari, due versioni, sei fasi confrontabili per coppia).
- Parsing XML dei 33 SVG mobile, dimensioni e PNG corrispondenti; controllo conservativo delle righe di testo e dell’altezza dei widget: nessun problema residuo registrato in Controllo_strutturale.json.
- Ispezione visiva dei quattro diagrammi e di tutti i 33 frame tramite le tavole; apertura individuale dei frame modificati quando utile. Corrette etichette dei criteri che uscivano dal proprio riquadro e aumentata la leggibilità dei testi dei diagrammi.
- F1: città italiana selezionabile senza posizione, riferimento esplicito delle distanze, chiarimento geografico, nessun risultato e alternativa manuale se AI indisponibile.
- F2: invito, adesione, preferenza e conferma distinti. Regola H allineata alla specifica AI: per il gruppo completo, concordato solo con aderenti confermati e nessun invito pendente; declinati visibili, senza voto né blocco. Maps accessibile anche dall’esito provvisorio.
- F3: percorso senza AI reso esplicito; appunti originali/suggerimento distinti; applicazione separata da anteprima e invio; bozza conservata in errore e retry controllato.
- Pannello S05 ridotto/intermedio/espanso: l’espanso può occupare la schermata; mappa e selezione conservate al ritorno. Nessun vincolo di mappa sempre visibile.
- Etichette di tipo per locali e testimonianze, senza contenuti specifici, numeri di atmosfera inventati, nuove citazioni o risultati di test. Copertura Italia; demo Roma/Milano H reversibile; città originali delle personas preservate; Amsterdam soltanto contesto di ricerca.

## Verifiche ancora da svolgere

Gli SVG sono statici: non sono un file Figma collegato. Non sono stati verificati interazioni native, scroll, tastiera, focus, screen reader, importazione e font nel file Figma. I controlli disegnati non hanno già target Figma assegnati. La verifica visiva non è una dichiarazione di conformità generale o di usabilità.

Non sono disponibili esiti dei test con le tre persone o feedback delle tile. AI, amici e Maps saranno simulati nel prototipo: il flusso di gruppo osserva comprensione individuale, non efficacia del coordinamento multiutente. Il catalogo concreto e i suoi script sono separati dagli asset strutturali.

Fonti e requisiti: i dati disponibili motivano bisogni; la traduzione in componenti e le regole operative sono ipotesi H da verificare. I test T1/T2/T3 della matrice sono verifiche predisposte, senza risultati compilati.

## Riproduzione

1. Eseguire costruisci_materiali.py con Python (standard library).
2. Eseguire rasterizza.mjs con Node e sharp del runtime bundled.
3. Ricontrollare Controllo_strutturale.json e le cinque tavole dopo cambiamenti al testo o alla disposizione.

Il builder scrive solo nelle cartelle 02_flussi, 03_architettura e 04_wireframe. Nessun Word o registro centrale viene modificato.
