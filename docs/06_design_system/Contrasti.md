# Contrasti delle due basi provvisorie

Verifica tecnica sRGB della revisione UI 0.3, 11 ottobre 2026. Le coppie effettive sono raccolte durante il disegno dei testi e delle icone; una riga aggrega usi identici. Le verifiche supplementari dei cinque accenti B controllano testo nero sulla palette, senza affermare che ogni colore sia uno stato semantico. Nessun esito è un risultato di test con utenti o una certificazione WCAG generale.

A: crema e terracotta, Georgia e Trebuchet MS. B: superfici bianche su turchese, Boldonse nei titoli e Helvetica Neue come fallback effettivo dell’intent Forma DJR Text. Palette B esatta: rosa #FD87BA, lime #ADE25D, viola #9E6CDA, giallo #FCEC52, turchese #80EFED. Successo, avviso, errore e informazione mantengono ruoli separati.

| Direzione | Uso / origine | Colori | Rapporto | Soglia | Esito |
|---|---|---|---:|---:|---|
| A | board: SNODO; board: Direzione A · altri 9 usi / actual | #28221F / #F7F1E8 | 13.969:1 | 4.5 | PASS |
| A | board: Crema / editoriale; board: Luoghi, persone e informazioni da leggere con calma. · altri 15 usi / actual | #64544A / #F7F1E8 | 6.429:1 | 4.5 | PASS |
| A | 05: Illustrazione dimostrativa; 05: Cortile Uno · altri 26 usi / actual | #28221F / #FFFCF7 | 15.326:1 | 4.5 | PASS |
| A | 05: icona bookmark; 03: icona sparkle · altri 2 usi / actual | #9C432D / #FFFCF7 | 6.305:1 | 3 | PASS |
| A | 05: icona pin; 03: icona search · altri 4 usi / actual | #64544A / #FFFCF7 | 7.054:1 | 3 | PASS |
| A | 05: Roma · San Lorenzo; 05: a persona · altri 31 usi / actual | #64544A / #FFFCF7 | 7.054:1 | 4.5 | PASS |
| A | 05: Cortile; 05: Aperitivo · altri 2 usi / actual | #28221F / #EEE4D7 | 12.484:1 | 4.5 | PASS |
| A | 05: icona arrow; 03: icona arrow · altri 1 usi / actual | #FFFFFF / #9C432D | 6.453:1 | 3 | PASS |
| A | 05: Apri scheda; 03: Esplora luoghi · altri 1 usi / actual | #FFFFFF / #9C432D | 6.453:1 | 4.5 | PASS |
| A | 06: icona warning; 09: icona warning · altri 1 usi / actual | #795000 / #FFF0CB | 6.276:1 | 3 | PASS |
| A | 06: Utenti · 01/10/2026 · dati limitati e; 06: dimostrativi · altri 4 usi / actual | #795000 / #FFF0CB | 6.276:1 | 4.5 | PASS |
| A | 03: Chiedi all’AI; 04: Cambia · altri 5 usi / actual | #9C432D / #FFFCF7 | 6.305:1 | 4.5 | PASS |
| A | 03: icona check; 04: icona compass · altri 2 usi / actual | #9C432D / #F6DDD0 | 4.969:1 | 3 | PASS |
| A | 03: Fino a 20 €; board: Fino a 20 € / actual | #9C432D / #F6DDD0 | 4.969:1 | 4.5 | PASS |
| A | 03: icona plus / actual | #28221F / #FFFCF7 | 15.326:1 | 3 | PASS |
| A | 07: L / actual | #28221F / #F6DDD0 | 12.079:1 | 4.5 | PASS |
| A | 08: Simulato; 09: AI simulata · altri 3 usi / actual | #345968 / #E6EFF1 | 6.480:1 | 4.5 | PASS |
| A | 09: icona check / actual | #285844 / #E3F0E8 | 6.964:1 | 3 | PASS |
| A | 09: Contributo inviato; 09: Dopo l’invio esplicito / actual | #285844 / #E3F0E8 | 6.964:1 | 4.5 | PASS |
| A | 09: icona error / actual | #A0302C / #FBE4DF | 5.845:1 | 3 | PASS |
| A | 09: Invio non riuscito; 09: Bozza conservata / actual | #A0302C / #FBE4DF | 5.845:1 | 4.5 | PASS |
| A | 09: icona info; board: icona info / actual | #345968 / #E6EFF1 | 6.480:1 | 3 | PASS |
| B | board: SNODO; board: Direzione B · altri 12 usi / actual | #000000 / #80EFED | 15.487:1 | 4.5 | PASS |
| B | board: Pop / pastello; board: Luoghi, persone e informazioni da leggere con calma. · altri 11 usi / actual | #4B4B4B / #80EFED | 6.434:1 | 4.5 | PASS |
| B | 05: Illustrazione dimostrativa; 05: Cortile Uno · altri 29 usi / actual | #000000 / #FFFFFF | 21.000:1 | 4.5 | PASS |
| B | 05: icona bookmark; 03: icona plus · altri 3 usi / actual | #000000 / #FFFFFF | 21.000:1 | 3 | PASS |
| B | 05: icona pin; 03: icona search · altri 4 usi / actual | #4B4B4B / #FFFFFF | 8.724:1 | 3 | PASS |
| B | 05: Roma · San Lorenzo; 05: a persona · altri 30 usi / actual | #4B4B4B / #FFFFFF | 8.724:1 | 4.5 | PASS |
| B | 05: Cortile; 03: Fino a 20 € · altri 2 usi / actual | #000000 / #ADE25D | 13.813:1 | 4.5 | PASS |
| B | 05: Aperitivo; board: Aperitivo / actual | #000000 / #FCEC52 | 17.259:1 | 4.5 | PASS |
| B | 05: icona arrow; 03: icona arrow · altri 1 usi / actual | #80EFED / #000000 | 15.487:1 | 3 | PASS |
| B | 05: Apri scheda; 03: Esplora luoghi · altri 1 usi / actual | #80EFED / #000000 | 15.487:1 | 4.5 | PASS |
| B | 06: icona warning; 09: icona warning · altri 1 usi / actual | #684900 / #FFF2CC | 7.407:1 | 3 | PASS |
| B | 06: Utenti · 01/10/2026 · dati limitati e; 06: dimostrativi · altri 4 usi / actual | #684900 / #FFF2CC | 7.407:1 | 4.5 | PASS |
| B | 03: icona sparkle; 04: icona sparkle · altri 2 usi / actual | #000000 / #80EFED | 15.487:1 | 3 | PASS |
| B | 03: icona check; 04: icona compass · altri 1 usi / actual | #000000 / #ADE25D | 13.813:1 | 3 | PASS |
| B | 07: L / actual | #000000 / #FD87BA | 9.351:1 | 4.5 | PASS |
| B | 08: icona sparkle / actual | #000000 / #9E6CDA | 5.611:1 | 3 | PASS |
| B | 08: Simulato; 09: AI simulata · altri 3 usi / actual | #254E68 / #E7F1F7 | 7.737:1 | 4.5 | PASS |
| B | 09: icona check / actual | #235B2E / #E8F6E8 | 7.202:1 | 3 | PASS |
| B | 09: Contributo inviato; 09: Dopo l’invio esplicito / actual | #235B2E / #E8F6E8 | 7.202:1 | 4.5 | PASS |
| B | 09: icona error / actual | #A42335 / #FDE8EB | 6.243:1 | 3 | PASS |
| B | 09: Invio non riuscito; 09: Bozza conservata / actual | #A42335 / #FDE8EB | 6.243:1 | 4.5 | PASS |
| B | 09: icona info; board: icona info / actual | #254E68 / #E7F1F7 | 7.737:1 | 3 | PASS |
| A | board: icona arrow / actual | #FFFFFF / #843824 | 8.164:1 | 3 | PASS |
| A | board: Esplora luoghi / actual | #FFFFFF / #843824 | 8.164:1 | 4.5 | PASS |
| A | board: icona arrow / actual | #FFFFFF / #6E2F20 | 10.046:1 | 3 | PASS |
| A | board: Esplora luoghi / actual | #FFFFFF / #6E2F20 | 10.046:1 | 4.5 | PASS |
| A | board: icona arrow / actual | #64544A / #EEE4D7 | 5.746:1 | 3 | PASS |
| A | board: Esplora luoghi / actual | #64544A / #EEE4D7 | 5.746:1 | 4.5 | PASS |
| A | board: Scegli una città per vedere luoghi coerenti. / actual | #A0302C / #FFFCF7 | 6.947:1 | 4.5 | PASS |
| B | board: icona arrow / actual | #80EFED / #252525 | 11.305:1 | 3 | PASS |
| B | board: Esplora luoghi / actual | #80EFED / #252525 | 11.305:1 | 4.5 | PASS |
| B | board: icona arrow / actual | #80EFED / #111111 | 13.926:1 | 3 | PASS |
| B | board: Esplora luoghi / actual | #80EFED / #111111 | 13.926:1 | 4.5 | PASS |
| B | board: icona arrow / actual | #4B4B4B / #F2F2EE | 7.773:1 | 3 | PASS |
| B | board: Esplora luoghi / actual | #4B4B4B / #F2F2EE | 7.773:1 | 4.5 | PASS |
| B | board: Scegli una città per vedere luoghi coerenti. / actual | #A42335 / #FFFFFF | 7.316:1 | 4.5 | PASS |
| A | Bordo campo su superficie; Bordo secondario su fondo pulsante / actual | #8A7769 / #FFFCF7 | 4.168:1 | 3 | PASS |
| A | Focus su superficie / actual | #51366F / #FFFCF7 | 9.738:1 | 3 | PASS |
| A | Focus su sfondo / actual | #51366F / #F7F1E8 | 8.876:1 | 3 | PASS |
| A | Indicatore intensità rispetto al track / actual | #9C432D / #EEE4D7 | 5.136:1 | 3 | PASS |
| A | Divider decorativo / supplementary | #D7C9B9 / #FFFCF7 | 1.585:1 | — | NON_APPLICATO |
| A | Testo disabilitato: leggibilità / supplementary | #64544A / #EEE4D7 | 5.746:1 | — | NON_APPLICATO |
| B | Indicatore intensità rispetto al track / actual | #000000 / #F2F2EE | 18.711:1 | 3 | PASS |
| B | Divider decorativo / supplementary | #BDBDB5 / #FFFFFF | 1.890:1 | — | NON_APPLICATO |
| B | Testo disabilitato: leggibilità / supplementary | #4B4B4B / #F2F2EE | 7.773:1 | — | NON_APPLICATO |
| B | Palette: nero su rosa / brand_palette_supplementary | #000000 / #FD87BA | 9.351:1 | 4.5 | PASS |
| B | Palette: nero su lime / brand_palette_supplementary | #000000 / #ADE25D | 13.813:1 | 4.5 | PASS |
| B | Palette: nero su viola / brand_palette_supplementary | #000000 / #9E6CDA | 5.611:1 | 4.5 | PASS |
| B | Palette: nero su giallo / brand_palette_supplementary | #000000 / #FCEC52 | 17.259:1 | 4.5 | PASS |
| B | Palette: nero su turchese / brand_palette_supplementary | #000000 / #80EFED | 15.487:1 | 4.5 | PASS |

Il CSV conserva tutti gli usi aggregati. La soglia è verificata sul rapporto non arrotondato. Formula: (L maggiore + 0,05) / (L minore + 0,05); L = 0,2126 R + 0,7152 G + 0,0722 B dopo linearizzazione sRGB, soglia 0,04045.

Si controlla testo contro 4,5:1 anche quando il titolo potrebbe soddisfare la soglia del testo grande. Icone funzionali, bordi dei campi e focus sono controllati contro 3:1 nelle coppie pertinenti. Divider decorativi e testo inattivo sono registrati senza applicare una soglia obbligatoria. I fondi di stato includono simbolo e messaggio.

I controlli hanno altezza 48 px, i campi 52 px, i filtri 44 px. I tag descrittivi passivi hanno altezza 28 px e non rappresentano pulsanti. Il bookmark mostra un’area di 44 × 44 px e un’icona su griglia 24 px. La raccomandazione 44 px si riferisce a WCAG 2.5.5 AAA; WCAG 2.2 AA 2.5.8 richiede 24 px o le condizioni/eccezioni equivalenti. Nessun target nativo è stato verificato in Figma.

Il focus ha anello 3 px e distanza 3 px; segue il raggio del controllo, compresa la pillola. Ordine, occlusione, tastiera, ingrandimento, lettore di schermo e movimento ridotto richiedono verifiche nel prototipo. Le tavole sono statiche.

Fonti primarie: [W3C contrasto testo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [contrasto non testuale](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [focus](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), [target enhanced](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html), [target minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
