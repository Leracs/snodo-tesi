# Corrispondenza tra componenti dell’architettura e design system

Due namespace distinti: **C01–C40** identificano responsabilità/componenti funzionali dell’architettura; **DS01–DS17 e DS19** identificano primitive e composizioni della base visiva. Non sono lo stesso catalogo e non va dedotta una corrispondenza numerica. Una responsabilità IA può usare più elementi DS.

Mappatura v0.1 sul file `03_architettura/Componenti.csv`, 11 ottobre 2026. Descrive come costruire le composizioni; non attesta componenti nativi già istanziati o comportamento testato.

| Nome dell’architettura | ID DS applicabili | ID IA |
|---|---|---|
| Contesto geografico | DS05 | C01 |
| Riferimento distanze | DS05 | C02 |
| Campo ricerca | DS02 | C03 |
| Criteri attivi | DS03 | C04 |
| Mappa e selezione | DS11, DS06, DS04 | C05 |
| Card luogo | DS06 | C06 |
| Controlli lista | DS01, DS03 | C07 |
| Filtri | DS02, DS03, DS01 | C08 |
| Scheda/pannello | DS11 | C09 |
| Informazioni pratiche | DS07, DS02 | C10 |
| Azioni luogo | DS01 | C11 |
| Atmosfera contestuale | DS08, DS19, DS01, DS16, DS07 | C12 |
| Galleria e viewer | DS17 | C13 |
| Card recensione | DS09 | C14 |
| Origine/limiti del dato | DS07 | C15 |
| Segnalazione semplice | DS02, DS01, DS14 | C16 |
| Ingresso assistente | DS01, DS10 | C17 |
| Conversazione AI | DS10, DS02, DS01 | C18 |
| Output ricerca AI | DS10, DS06, DS07 | C19 |
| Elenco proposte | DS12, DS06 | C20 |
| Contesto proposta | DS12, DS05, DS02 | C21 |
| Inviti | DS12, DS01 | C22 |
| Partecipanti e stato | DS12 | C23 |
| Vincoli condivisi | DS12, DS03 | C24 |
| Alternative comparabili | DS12, DS06 | C25 |
| Commenti nella proposta | DS12, DS02 | C26 |
| Preferenza alternativa | DS12, DS01 | C27 |
| Conferma decisione | DS12, DS01 | C28 |
| Esito e riapertura | DS12, DS14 | C29 |
| Visita e domande | DS13, DS02, DS03 | C30 |
| Bozza/appunti | DS13, DS02 | C31 |
| AI revisione prima/dopo | DS13, DS10 | C32 |
| Anteprima/visibilità | DS13, DS03 | C33 |
| Invio contributo | DS13, DS01, DS14 | C34 |
| Salvati | DS06, DS15, DS01 | C35 |
| Profilo e bozze | DS13, DS02, DS03 | C36 |
| Passaggio Maps | DS16 | C37 |
| Recupero e feedback | DS15, DS14 | C38 |
| Navigazione e ritorno | DS04, DS11 | C39 |
| Limite dimostrativo | DS07, DS10, DS14 | C40 |

La mappa schematica e i controlli lista richiedono una composizione di scheda/selezione, card, pulsanti e criteri: la base non include un SDK di mappe. Profilo/Salvati e inviti non sono disegnati come nuovi primitivi; riusano componenti e regole e devono essere costruiti nei rispettivi frame S01–S21. Il limite dimostrativo attraversa i componenti: nel prototipo resta esplicito anche fuori dall’interfaccia simulata.

I dettagli dei nomi DS e delle transizioni sono in [Componenti_e_comportamenti.md](https://leracs.github.io/snodo-tesi/06_design_system/Componenti_e_comportamenti.md).

DS08 presenta le condizioni del luogo; DS19 presenta l’affluenza per fasce. La distinzione mantiene C12 come responsabilità funzionale e compone il selettore del giorno con DS01/DS16. [Pattern integrato](Atmosfera_affluenza.md).
