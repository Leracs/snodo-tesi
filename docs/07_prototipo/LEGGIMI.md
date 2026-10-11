# Supporto interattivo e materiali per Figma

Versione 0.1. Aprire `index.html` nel browser mantenendo intatte le cartelle del pacchetto. Non servono account, backend, librerie da scaricare o API. Il supporto funziona anche come file locale; la conservazione della sessione dipende dal browser. Il pulsante Riparti azzera soltanto i dati dimostrativi della sessione corrente.

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
