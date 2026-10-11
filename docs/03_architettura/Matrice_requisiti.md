# Requisiti → componenti → schermate → verifiche
v1.0 — 11 ottobre 2026

C scelta confermata; D dato; T proposta nel testo; V appunto nel vocale; H scelta progettuale; M materiale mancante. Indici CSV a base zero; colonne a base uno. N50 S1, rami17/33; N33 S2. Le verifiche sotto sono predisposte, senza risultati di sessioni reali.

## R01 — Scelta individuale e con amici in Italia; città modificabile senza GPS

C: Brief/perimetro nazionale e due scenari; H: interfaccia geografica.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C01, C02, C03, C18, C21. Schermate: S01, S02, S03, S10, S12, S13.
Verifica: T1: cambia città senza posizione; chiarisci richiesta ambigua; riconosci area corrente. Priorità: nucleo.

## R02 — Atmosfera, budget e riferimento distanza modificabili

D: S1 indici11/41 (colonne12/42), N50 multiple: 37/30/27; C Italia; H filtri.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C01, C02, C04, C08, C24. Schermate: S02, S03, S04, S05, S10, S13.
Verifica: T1/T2: modifica criterio; ritrovalo nella lista, scheda e proposta; indica origine distanza. Priorità: nucleo.

## R03 — Praticità e media reperibili nella scheda

D: S1 indici25/55 (colonne26/56), N50 multiple: servizi45 prezzi39 regole13 immagini22.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C10, C13, C15. Schermate: S05, S07, S08, S09.
Verifica: T1: trova informazione pertinente e riconoscine la fonte. Priorità: nucleo.

## R04 — Provenienza, recenza, quantità e dato assente leggibili

D: S1 indici18/48 N50 fiducia18; S2 indice13 (col14) N33 4–5=26; H modalità UI.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C15, C19, C12, C14. Schermate: S05, S06, S08, S09, S10.
Verifica: T1: distingui dichiarazione/testimonianza/riepilogo; non scambiare assenza con valore negativo. Priorità: nucleo.

## R05 — Condizioni contestuali, nessuna garanzia universale

T: elaborato pp25–27; D:S2 indice12 (col13), N33 4–5=17; H dimensioni separate.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C12, C30, C15. Schermate: S06, S15, S09.
Verifica: T1/T3: interpreta scala, periodo, copertura e non applicabile. Priorità: nucleo.

## R06 — Media con origine e recensioni leggibili

V: vocale galleria/card; H layout.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C13, C14, C15. Schermate: S07, S08.
Verifica: Controllo testi/scroll e T1: distingue media gestore/utente, approfondisce testimonianza. Priorità: nucleo.

## R07 — Pannello e ritorni conservano il contesto

V: scheda su mappa; H ridotto/intermedio/espanso.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C09, C05, C39. Schermate: S02, S05.
Verifica: Controllo variante; T1: chiudi dettaglio e ritrova luogo, città, criteri e selezione. Priorità: nucleo.

## R08 — Invito, adesione, vincoli e risposte distinti

C: scelta amici/enfasi sociale; D:S2 indice20 (col21), amici21/33; H meccanismo.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C21, C22, C23, C24, C25, C27, C28. Schermate: S11, S12, S13, S14.
Verifica: T2: distingue quattro passaggi; silenzio rimane attesa; criterio privato non trasferito automaticamente. Priorità: nucleo.

## R09 — AI propone, persone decidono

C: chatbot nel gruppo; H regola invocazione/accordo.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C17, C18, C25, C28, C29. Schermate: S13, S14.
Verifica: T2: identifica autore, modifica proposta e riconosce chi deve ancora rispondere. Priorità: nucleo.

## R10 — AI, filtri e scheda usano lo stesso luogo/criterio

C: chatbot; H integrazione oggetti.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C04, C06, C08, C19, C25. Schermate: S03, S04, S05, S10, S13.
Verifica: Audit ID catalogo e script; T1/T2: corregge interpretazione senza contraddizioni. Priorità: nucleo.

## R11 — AI recensione controllabile, applicazione e invio separati

C: aiuto scrittura; T:elaborato pp20–27; H confronto prima/dopo.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C31, C32, C33, C34. Schermate: S15, S16, S17, S18.
Verifica: T3: rifiuta/modifica/applica; riconosce testo proprio; pubblica solo con comando esplicito. Priorità: nucleo.

## R12 — Visibilità e identità prima dell’invio

T:elaborato p27; D:S2 indice14 (col15), N33 multiple: privato22 recensione11; H UI.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C33, C36. Schermate: S17, S20.
Verifica: T3: identifica destinatari/gruppo e identità mostrata; nessun anonimato assoluto promesso. Priorità: nucleo.

## R13 — Bozza preservata, fallimenti recuperabili

H: controllo e completezza compito.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C31, C34, C38. Schermate: S15, S16, S17, S18, S20.
Verifica: T3: esce/riprende; fallimento conserva bozza; retry non duplicato. Priorità: nucleo/supporto.

## R14 — Maps esterne con ritorno al contesto

V: vocale; H handoff simulato.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C37, C39. Schermate: S21, S05, S14.
Verifica: T1/T2: riconosce uscita, annulla o ritorna alla scheda/proposta. Priorità: supporto.

## R15 — Mock e simulazioni dichiarati

C: autorizzazione mock; H script e metodo.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C40. Schermate: S01, S10, S13, S18, S21.
Verifica: Audit catalogo/script/test/tesi; nessuna capacità AI, multiutente o Maps nativa dichiarata. Priorità: trasversale.

## R16 — Due tile e tre test formativi con le stesse persone

C: due tile e tre casi già intervistati.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: C06, C08, C14, C18, C12. Schermate: S03, S04, S06, S08, S10.
Verifica: Protocollo confronto A/B e sessioni reali; ordine e familiarità registrati; esiti ancora mancanti. Priorità: supporto/metodo.

## R17 — Wrapped, badge e permanenza fuori dal nucleo

C: nessun obbligo ulteriore; V/T estensioni future.
Dati motivano il bisogno; H traduce in struttura, senza validazione di efficacia.
Componenti: nessuno nel nucleo. Schermate: nessuna nel nucleo.
Verifica: Audit assenza nel nucleo; estensioni rinviate senza soglie validate. Priorità: futuro.
