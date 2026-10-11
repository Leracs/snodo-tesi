# Tre user flow costruiti
v1.0 — 11 ottobre 2026

Tre percorsi strutturali con rami di recupero. I diagrammi descrivono il progetto; non riportano azioni osservate né risultati di test. La simulazione di AI, amici e Maps deve essere dichiarata nel contesto delle sessioni.

## F1 — Scegliere un luogo individualmente

**Inizio:** Bisogno/occasione e criteri da esplicitare. **Fine:** Luogo scelto e salvato oppure passaggio consapevole a Maps.

1. S01: Scegli città/zona italiana. Scelta manuale o posizione autorizzata; origine distanza visibile.
2. S02 / S03 / S04 / S10: Cerca per criteri o usa AI. AI facoltativa; città ambigua chiarita prima della ricerca.
3. S03 / S02: Confronta lista o mappa. Area, criteri e riferimento delle distanze restano riconoscibili.
4. S05: Apri la stessa scheda luogo. Praticità, fonti, atmosfera, media e contributi.
5. S06–S09: Approfondisci dato decisivo. Distinzione dichiarazione/contributo/riepilogo; assenza non è garanzia.
6. S05 / S19 / S21: Scegli, salva o avvia Maps. Conserva contesto; il tragitto è verificato nel servizio esterno.

**Recuperi:**

- Dopo il passo 1: Posizione negata. S01-R → città manuale → S02.
- Dopo il passo 2: Città ambigua o AI indisponibile. S10-C chiarisce; S10-U → ricerca ordinaria S03.
- Dopo il passo 3: Nessun risultato. S03-R → modifica esplicita S04 → S03; nessun vincolo allentato da sola AI.
- Dopo il passo 5: Dato insufficiente/discordante. S09 → fonti/limite → S05; torna a criteri se decisivo.
- Dopo il passo 6: Maps non disponibile. S21 → annulla o servizio alternativo; ritorno alla stessa scheda.

## F2 — Proporre e scegliere con amici

**Inizio:** Occasione condivisa con persone note. **Fine:** Esito concordato oppure attesa/decisione aperta leggibile.

1. S11 / S12: Definisci proposta e città. Occasione, data/fascia, area condivisa; luogo iniziale facoltativo.
2. S12 / S12-I: Invita e distingui adesioni. Invio invito distinto da accettazione/rifiuto del partecipante.
3. S13: Condividi criteri volontari. Vincoli e preferenze espliciti; motivazioni personali non richieste.
4. S13 / S05: Confronta alternative. AI quando chiamata; stessi luoghi e fonti; compromessi dichiarati.
5. S13 / S13-C: Esprimi preferenza, poi conferma. Preferenza per card separata da Accetto/Non va bene/Da valutare.
6. S14 / S14-W: Leggi esito umano. H: aderenti confermati e nessun invito pendente per l’accordo completo.
7. S05 / S21: Apri scheda e navigatore. Ogni persona verifica il proprio tragitto esternamente.

**Recuperi:**

- Dopo il passo 2: Invito rifiutato o scaduto. S12-I: stato distinto, correggi invito o prosegui con aderenti.
- Dopo il passo 3: Vincoli incompatibili. S13-R → chiedi quale vincolo modificare volontariamente; no cambi taciti.
- Dopo il passo 5: Risposta o invito in attesa. S13-C → S14-W: esito provvisorio; nessun voto implicito; Maps resta accessibile.
- Dopo il passo 6: Cambia luogo/città/vincolo. S14 → riapri S13; conferme precedenti da riconfermare.

## F3 — Raccontare una visita con AI facoltativa

**Inizio:** Visita dichiarata o bozza da riprendere. **Fine:** Contributo inviato con destinatari scelti oppure bozza conservata.

1. S05 / S20 → S15: Dichiara visita e rispondi. Data/fascia; condizioni e giudizio distinti; non so/non applicabile.
2. S16: Scrivi appunti o testo. Percorso manuale completo; bozza conservata.
3. S16 / S16-A: Invoca AI se desiderato. Senza AI: S16 → S17. Con AI: originale e proposta separati.
4. S16-A: Controlla prima/dopo. Modifica, rifiuta o applica. Applicazione non è invio.
5. S17: Anteprima e destinatari. Pubblico o gruppo scelto; identità mostrata; modifica/ritorno.
6. S17 → S18: Invia esplicitamente. Esito dimostrativo; nessuna pubblicazione automatica dell’AI.

**Recuperi:**

- Dopo il passo 1: Non applicabile / uscita. S15 → risposta non applicabile oppure salva bozza S20.
- Dopo il passo 2: Percorso senza AI. S16 → S17: vai direttamente all’anteprima con il testo dell’autore.
- Dopo il passo 3: AI errata o indisponibile. S16-A rifiuta/modifica → S16 manuale; appunti preservati.
- Dopo il passo 5: Cambio visibilità / ripensamento. S17 → modifica o torna a S16; bozza conservata.
- Dopo il passo 6: Invio fallito. S18-R → controlla stato → retry singolo oppure salva bozza S20.

