# Architettura costruita e oggetti informativi
v1.0 — 11 ottobre 2026

La copertura iniziale è tutta Italia (C). Le quattro aree e la disposizione sono H reversibili. Diagrammi e wireframe sono materiali costruiti e importabili; le interazioni native Figma e i test reali non sono verificati. Nessun catalogo concreto è contenuto in questi asset.

## Mappa generale

Esplora / Salvati / Chat / Profilo sono le quattro destinazioni. AI, recensione, provenienza e Maps sono percorsi trasversali. Città e zona sono contesto, non una quinta area.

## Oggetti

| ID | Oggetto | Campi strutturali | Regola |
|---|---|---|---|
| O01 | Luogo | id, città, zona, posizione, categoria, informazioni pratiche | Unico ID da mappa/lista/AI/salvati/gruppo |
| O02 | Contesto geografico | città, zona, riferimento distanze, origine manuale/posizione autorizzata | Ricerca altrove senza GPS; copertura Italia |
| O03 | Informazione sul luogo | tipo, valore o assente, fonte, aggiornamento, contesto temporale | Dichiarazione/contributo/riepilogo distinti |
| O04 | Media | tipo, origine, data, contesto | Locale/utente etichettati; origine non certifica veridicità |
| O05 | Visita dichiarata | luogo_id, data, fascia, occasione facoltativa | Dichiarata dalla persona; nessun rilevamento obbligatorio |
| O06 | Recensione | visita, risposte, appunti, testo applicato, visibilità, identità mostrata, stato | AI suggerisce; autore applica e invia esplicitamente |
| O07 | Indicatore atmosfera | dimensione, periodo, scala, quantità, recenza, incertezza | Condizioni separate; nessun comfort universale/live |
| O08 | Criterio | dimensione, valore, vincolo/preferenza, origine, area di applicazione | Correggibile; AI non allenta un vincolo da sola |
| O09 | Salvataggio | luogo_id, raccolta facoltativa | Collegamento; non duplica dati del luogo |
| O10 | Conversazione | contesto, messaggi, autori, invocazioni AI | AI individuale o chat di una proposta; nessun feed |
| O11 | Proposta di uscita | città/zona, occasione, data/fascia, alternative, risposte, stato | Decisione umana; cambi importanti richiedono riconferma |
| O12 | Partecipazione | invito, adesione, vincoli condivisi, preferenza, conferma | Invito/adesione/preferenza/accordo non coincidono |
| O13 | Preferenza personale | criterio esplicito, modifica | Privata finché non condivisa volontariamente |

## Relazioni

| Da | A | Cardinalità proposta | Relazione |
|---|---|---|---|
| O01 | O03 | 1:N | ha informazioni |
| O01 | O04 | 1:N | ha media |
| O01 | O05 | 1:N | riceve visite dichiarate |
| O05 | O06 | 1:0..1 | sostiene contributo |
| O06 | O07 | N:N | può contribuire al riepilogo |
| O02 | O08 | 1:N | definisce area/riferimento dei criteri |
| O08 | O01 | N:N | filtra o descrive compatibilità, anche incerta |
| O09 | O01 | N:1 | riferisce senza copia |
| O10 | O11 | 1:0..1 | chat associata alla proposta |
| O11 | O01 | N:N | confronta alternative |
| O11 | O12 | 1:N | raccoglie stati delle persone |
| O12 | O08 | 1:N | condivide criteri volontari |
| O11 | O02 | N:1 | ha contesto condiviso esplicito |
| O13 | O08 | 1:1 | conserva criterio personale |

## Invarianti e riuso

- Italia confermata; demo Roma/Milano reversibile.
- Nessuna città implicita dal GPS.
- Distanza dal riferimento esplicito, non durata.
- Luogo e contesto unici tra mappa/lista/AI/gruppo/salvati.
- Preferenze private condivise solo volontariamente.
- Invito, adesione, preferenza e accordo distinti; silenzio non consenso; H gruppo completo concordato solo con aderenti confermati e nessun invito pendente.
- Inviti declinati visibili: non votano e non bloccano; inviti pendenti non sono voti ma lasciano provvisorio il gruppo completo; Maps accessibile anche da esito provvisorio.
- AI recensione: proposta, applicazione, anteprima, invio espliciti.
- Mappa sempre visibile non vincolo; stato espanso ammesso a schermata intera.

La tabella di coerenza del catalogo concreto è preparata separatamente. Gli ID di luogo previsti sono luogo-roma-01..04 e luogo-milano-01..04; qui compaiono solo etichette di tipo. Amsterdam è un contesto della ricerca e rimane fuori dalla copertura italiana iniziale.

L’AI usa gli stessi oggetti e i criteri visibili. L’output non è una seconda scheda né una decisione autonoma. Nel gruppo si usano criteri condivisi volontariamente; nella recensione si usano soltanto informazioni fornite dall’autore.

Fonte di progetto: Prompt operativo consolidato e Analisi_progetto_e_requisiti.md, 11 ottobre 2026; ricerca disponibile nei CSV e nell’analisi verificata. H non significa dato osservato.
