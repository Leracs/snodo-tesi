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
