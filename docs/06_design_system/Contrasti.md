# Contrasti delle due basi provvisorie

Verifica tecnica sRGB della revisione UI 0.3, 11 ottobre 2026. Le coppie effettive sono raccolte durante il disegno dei testi e delle icone; una riga aggrega usi identici. Le verifiche supplementari dei cinque accenti B controllano testo nero sulla palette, senza affermare che ogni colore sia uno stato semantico. Nessun esito è un risultato di test con utenti o una certificazione WCAG generale.

A: crema #F6EDE0, verde scuro #022E21 e prugna #33173A, Mali SemiBold 600. B: superfici bianche su turchese, Boldonse nei titoli e Helvetica Neue come fallback effettivo dell’intent Forma DJR Text. Palette B esatta: rosa #FD87BA, lime #ADE25D, viola #9E6CDA, giallo #FCEC52, turchese #80EFED. Successo, avviso, errore e informazione mantengono ruoli separati.

| Direzione | Uso | Colori | Rapporto | Soglia | Esito |
|---|---|---|---:|---:|---|
| B | board: SNODO | #000000 / #80EFED | 15.487:1 | 4.5 | PASS |
| B | board: Pop / pastello | #4B4B4B / #80EFED | 6.434:1 | 4.5 | PASS |
| B | 05: Illustrazione dimostrativa | #000000 / #FFFFFF | 21.0:1 | 4.5 | PASS |
| B | 05: icona bookmark | #000000 / #FFFFFF | 21.0:1 | 3 | PASS |
| B | 05: icona pin | #4B4B4B / #FFFFFF | 8.724:1 | 3 | PASS |
| B | 05: Roma · San Lorenzo | #4B4B4B / #FFFFFF | 8.724:1 | 4.5 | PASS |
| B | 05: Cortile | #000000 / #ADE25D | 13.813:1 | 4.5 | PASS |
| B | 05: Aperitivo | #000000 / #FCEC52 | 17.259:1 | 4.5 | PASS |
| B | 05: icona arrow | #80EFED / #000000 | 15.487:1 | 3 | PASS |
| B | 05: Apri scheda | #80EFED / #000000 | 15.487:1 | 4.5 | PASS |
| B | 06: icona warning | #684900 / #FFF2CC | 7.407:1 | 3 | PASS |
| B | 06: Utenti · 01/10/2026 · dati limitati e | #684900 / #FFF2CC | 7.407:1 | 4.5 | PASS |
| B | 03: icona sparkle | #000000 / #80EFED | 15.487:1 | 3 | PASS |
| B | 03: icona check | #000000 / #ADE25D | 13.813:1 | 3 | PASS |
| B | 07: L | #000000 / #FD87BA | 9.351:1 | 4.5 | PASS |
| B | 08: icona sparkle | #000000 / #9E6CDA | 5.611:1 | 3 | PASS |
| B | 08: Simulato | #254E68 / #E7F1F7 | 7.737:1 | 4.5 | PASS |
| B | 09: icona check | #235B2E / #E8F6E8 | 7.202:1 | 3 | PASS |
| B | 09: Contributo inviato | #235B2E / #E8F6E8 | 7.202:1 | 4.5 | PASS |
| B | 09: icona error | #A42335 / #FDE8EB | 6.243:1 | 3 | PASS |
| B | 09: Invio non riuscito | #A42335 / #FDE8EB | 6.243:1 | 4.5 | PASS |
| B | 09: icona info | #254E68 / #E7F1F7 | 7.737:1 | 3 | PASS |
| B | board: icona arrow | #80EFED / #252525 | 11.305:1 | 3 | PASS |
| B | board: Esplora luoghi | #80EFED / #252525 | 11.305:1 | 4.5 | PASS |
| B | board: icona arrow | #80EFED / #111111 | 13.926:1 | 3 | PASS |
| B | board: Esplora luoghi | #80EFED / #111111 | 13.926:1 | 4.5 | PASS |
| B | board: icona arrow | #4B4B4B / #F2F2EE | 7.773:1 | 3 | PASS |
| B | board: Esplora luoghi | #4B4B4B / #F2F2EE | 7.773:1 | 4.5 | PASS |
| B | board: Scegli una città per vedere luoghi coerenti. | #A42335 / #FFFFFF | 7.316:1 | 4.5 | PASS |
| B | Indicatore intensità rispetto al track | #000000 / #F2F2EE | 18.711:1 | 3 | PASS |
| B | Divider decorativo | #BDBDB5 / #FFFFFF | 1.89:1 | 0 | NON_APPLICATO |
| B | Testo disabilitato: leggibilità | #4B4B4B / #F2F2EE | 7.773:1 | 0 | NON_APPLICATO |
| B | Palette: nero su rosa | #000000 / #FD87BA | 9.351:1 | 4.5 | PASS |
| B | Palette: nero su lime | #000000 / #ADE25D | 13.813:1 | 4.5 | PASS |
| B | Palette: nero su viola | #000000 / #9E6CDA | 5.611:1 | 4.5 | PASS |
| B | Palette: nero su giallo | #000000 / #FCEC52 | 17.259:1 | 4.5 | PASS |
| B | Palette: nero su turchese | #000000 / #80EFED | 15.487:1 | 4.5 | PASS |
| A | board: Gli stessi componenti, nei diversi stati. | #022E21 / #F6EDE0 | 12.795:1 | 4.5 | PASS |
| A | board: Specifiche statiche da verificare nel prototipo: nessun test con utenti già svolto. | #335449 / #F6EDE0 | 7.229:1 | 4.5 | PASS |
| A | board: Direzione A | #022E21 / #FFFCF7 | 14.498:1 | 4.5 | PASS |
| A | board: Componenti mobili · controllo 48 px · target raccomandato ≥44 px | #335449 / #FFFCF7 | 8.191:1 | 4.5 | PASS |
| A | board: icona arrow | #F6EDE0 / #33173A | 13.673:1 | 3 | PASS |
| A | board: Esplora luoghi | #F6EDE0 / #33173A | 13.673:1 | 4.5 | PASS |
| A | board: icona arrow | #F6EDE0 / #49264F | 10.821:1 | 3 | PASS |
| A | board: Esplora luoghi | #F6EDE0 / #49264F | 10.821:1 | 4.5 | PASS |
| A | board: icona arrow | #F6EDE0 / #24102A | 15.313:1 | 3 | PASS |
| A | board: Esplora luoghi | #F6EDE0 / #24102A | 15.313:1 | 4.5 | PASS |
| A | board: icona arrow | #335449 / #EEE5D9 | 6.724:1 | 3 | PASS |
| A | board: Esplora luoghi | #335449 / #EEE5D9 | 6.724:1 | 4.5 | PASS |
| A | board: Annulla | #33173A / #FFFCF7 | 15.493:1 | 4.5 | PASS |
| A | board: icona search | #335449 / #FFFCF7 | 8.191:1 | 3 | PASS |
| A | board: Scegli una città per vedere luoghi coerenti. | #A0302C / #FFFCF7 | 6.947:1 | 4.5 | PASS |
| A | board: icona check | #33173A / #E9DFEB | 12.246:1 | 3 | PASS |
| A | board: Fino a 20 € | #33173A / #E9DFEB | 12.246:1 | 4.5 | PASS |
| A | board: Cortile | #022E21 / #EEE5D9 | 11.902:1 | 4.5 | PASS |
| A | board: icona warning | #795000 / #FFF0CB | 6.276:1 | 3 | PASS |
| A | board: Rumore: pochi dati | #795000 / #FFF0CB | 6.276:1 | 4.5 | PASS |
| A | board: icona info | #022E21 / #E3ECE5 | 12.291:1 | 3 | PASS |
| A | board: Assistente AI non disponibile | #022E21 / #E3ECE5 | 12.291:1 | 4.5 | PASS |
| A | board: icona bookmark | #33173A / #FFFCF7 | 15.493:1 | 3 | PASS |
| A | board: Verde scuro | #F6EDE0 / #022E21 | 12.795:1 | 4.5 | PASS |
| A | board: icona arrow | #022E21 / #F6EDE0 | 12.795:1 | 3 | PASS |
| A | board: icona pin | #F6EDE0 / #022E21 | 12.795:1 | 3 | PASS |

Il CSV conserva tutti gli usi aggregati. La soglia è verificata sul rapporto non arrotondato. Formula: (L maggiore + 0,05) / (L minore + 0,05); L = 0,2126 R + 0,7152 G + 0,0722 B dopo linearizzazione sRGB, soglia 0,04045.

Si controlla testo contro 4,5:1 anche quando il titolo potrebbe soddisfare la soglia del testo grande. Icone funzionali, bordi dei campi e focus sono controllati contro 3:1 nelle coppie pertinenti. Divider decorativi e testo inattivo sono registrati senza applicare una soglia obbligatoria. I fondi di stato includono simbolo e messaggio.

I controlli hanno altezza 48 px, i campi 52 px, i filtri 44 px. I tag descrittivi passivi hanno altezza 28 px e non rappresentano pulsanti. Il bookmark mostra un’area di 44 × 44 px e un’icona su griglia 24 px. La raccomandazione 44 px si riferisce a WCAG 2.5.5 AAA; WCAG 2.2 AA 2.5.8 richiede 24 px o le condizioni/eccezioni equivalenti. Nessun target nativo è stato verificato in Figma.

Il focus ha anello 3 px e distanza 3 px; segue il raggio del controllo, compresa la pillola. Ordine, occlusione, tastiera, ingrandimento, lettore di schermo e movimento ridotto richiedono verifiche nel prototipo. Le tavole sono statiche.

Fonti primarie: [W3C contrasto testo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [contrasto non testuale](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [focus](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), [target enhanced](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html), [target minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
