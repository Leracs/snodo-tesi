# Registro delle decisioni di costruzione

Versione 0.1 · 11 ottobre 2026. C = conferma dell'autore; H = ipotesi progettuale reversibile; D = dato disponibile. I riferimenti a R e S identificano requisiti e schermate, non risultati di test.

| ID | Decisione | Stato e motivo | Artefatti interessati | Condizione di revisione |
|---|---|---|---|---|
| DEC01 | Copertura iniziale tutta Italia | C; correzione più recente dell'autore | Obiettivo, IA, filtri, AI, testo | Nuova indicazione esplicita dell'autore |
| DEC02 | Quattro aree Esplora Salvati Chat Profilo | H; rendono accessibili i tre compiti | S02/S11/S19/S20 e barra DS | Comprensione e reperibilità nei compiti |
| DEC03 | Assistente trasversale con label esplicita | C ruolo; H punti d'ingresso | S10/S13/S16, R09–R11 | Aspettative e controllo osservati |
| DEC04 | Stesso ID di luogo in tutti gli accessi | H; evita versioni incoerenti della scheda | Catalogo, S03/S05/S13/S19 | Revisione modello se emerge necessità concreta |
| DEC05 | Città manuale e riferimento esplicito delle distanze | C copertura; H modalità | S01–S04/S10/S13, R01–R02 | Ricerca altrove senza GPS compresa |
| DEC06 | Formato mobile 390 × 844 | H, punto di partenza tecnico | 33 frame, supporto locale | Test di leggibilità e scroll nel file nativo |
| DEC07 | Roma e Milano come città dimostrative, otto luoghi fittizi | H; mostrano il cambio di città | Catalogo e scenari | Catalogo più utile ai compiti, senza cambiare ricerca originale |
| DEC08 | Nome SNODO provvisorio | C, proposto dall’autore; H, adozione definitiva | Tile e demo | Nome aggiornato su indicazione dell’autore; nessuna disponibilità del marchio verificata |
| DEC09 | Preferenza distinta da conferma | H; socialità circoscritta alla decisione | S13/S14, R08–R09 | Osservazione della regola e degli stalli |
| DEC10 | Esito completo richiede aderenti confermati e nessun invito in attesa | H; silenzio non consenso, declinati visibili senza voto | Flow F2 e simulazione | Comprensione e utilità della proposta provvisoria |
| DEC11 | Cambi a luogo città o vincoli riaprono le conferme | H; esito legato alla proposta corrente | S12/S13/S14 | Difficoltà del gruppo da osservare |
| DEC12 | Suggerimento AI separato da appunti e invio | C aiuto; H interazione | S16–S18, R11–R13 | Controllo di fatti giudizio e visibilità |
| DEC13 | Visibilità pubblica o gruppo esplicitamente individuato | H; destinatari leggibili | S17/profilo | Comprensione reale; protezioni future da implementare |
| DEC14 | Scale d'atmosfera separate 1–5, intensità | H; esempi della UI, non survey né comfort universale | Tile/catalogo/S06 | Definire rilevazione aggregazione e copertura prima di implementare |
| DEC15 | Due tile con stessa struttura e contenuti | C due proposte; H direzioni | 05_style_tiles | Feedback reale, leggibilità e motivazioni |
| DEC16 | DS provvisorio in due varianti; namespace C strutturale e DS visivo | H; consente riuso senza scegliere un vincitore | 40 C, 17 DS e crosswalk | Direzione adottata dopo confronto |
| DEC17 | AI amici e Maps simulati | C mock autorizzati; H script | Figma futuro e supporto HTML | Realizzazione o nuovi obiettivi documentati |
| DEC18 | Le stesse tre persone per valutazione formativa | C; familiarità e apprendimento dichiarati | Protocolli e capitolo 6 | Osservazioni reali; nessun campione indipendente presunto |
| DEC19 | Correzione quantitativa prima della revisione dello stile | D; CSV completi prevalgono sui vecchi valori | Metodo/survey/Define, tre figure nel Word | Nuovi originali o correzioni documentate |
| DEC20 | Risultati dei test e qualitativa definitiva restano aperti | M; non sono stati forniti | Matrice interviste, capitoli risultati | Trascrizioni e sessioni effettive |

## Correzioni emerse nella verifica tecnica

Il supporto locale conserva bozze diverse per luogo, crea un nuovo identificativo dopo un invio e salva data, fascia, destinatari e nome quando si lascia la composizione. L'AI usa criteri temporanei nella correzione, fino all'applicazione. Gli appunti iniziali restano recuperabili e un suggerimento diventato vecchio viene invalidato. Un luogo proposto dalla scheda rimane visibile anche se incompatibile con i vincoli: la persona sceglie se modificare i criteri o l'alternativa. Questi interventi derivano dal controllo del codice e dell'interfaccia, non da osservazioni di utenti.
