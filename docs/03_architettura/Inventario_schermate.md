# Inventario strutturale delle 21 schermate
v1.0 — 11 ottobre 2026

ID invariati dal blueprint. La gerarchia è l’ordine di lettura; uno stato può essere variante/overlay, non una nuova destinazione. Le uscite «ritorno al chiamante» conservano luogo, città, criteri e selezione.

## S01 — Avvio/città e zona

**Area:** Esplora. **Scopo:** Scegliere dove cercare in Italia senza rendere obbligatoria la posizione.
**Ingressi:** apertura; cambio città da S02/S03/S10. **Azione primaria:** Esplora nella città scelta.
**Uscite:** S02.

**Gerarchia:** 1. Contesto geografico → 2. Riferimento distanze → 3. Ingresso assistente → 4. Recupero e feedback → 5. Limite dimostrativo → 6. Navigazione e ritorno.
**Componenti:** C01, C02, C17, C38, C40, C39.
**Stati:** primo uso; ritorno; posizione negata; scelta manuale; altra città italiana.
**Flussi/priorità:** F1 / nucleo.

## S02 — Esplora mappa

**Area:** Esplora. **Scopo:** Orientarsi nell’area scelta e aprire un luogo.
**Ingressi:** S01; ritorno da S05; navigazione. **Azione primaria:** Apri luogo selezionato.
**Uscite:** S03; S04; S05; S10; S01.

**Gerarchia:** 1. Contesto geografico → 2. Riferimento distanze → 3. Campo ricerca → 4. Criteri attivi → 5. Mappa e selezione → 6. Card luogo → 7. Ingresso assistente → 8. Navigazione e ritorno.
**Componenti:** C01, C02, C03, C04, C05, C06, C17, C39.
**Stati:** nessuna selezione; selezione; cambio città; caricamento; errore; nessun risultato.
**Flussi/priorità:** F1 / nucleo.

## S03 — Ricerca/lista

**Area:** Esplora. **Scopo:** Cercare e confrontare risultati nella stessa area.
**Ingressi:** S02; S10; S04. **Azione primaria:** Apri risultato.
**Uscite:** S05; S04; S02; S01; S10.

**Gerarchia:** 1. Contesto geografico → 2. Riferimento distanze → 3. Campo ricerca → 4. Criteri attivi → 5. Controlli lista → 6. Card luogo → 7. Ingresso assistente → 8. Recupero e feedback → 9. Navigazione e ritorno → 10. Filtri → 11. Conversazione AI.
**Componenti:** C01, C02, C03, C04, C07, C06, C17, C38, C39, C08, C18.
**Stati:** campo vuoto; ricerca; città/luogo ambiguo; altra città senza GPS; risultati; nessun risultato; errore.
**Flussi/priorità:** F1 / nucleo.

## S04 — Filtri

**Area:** Esplora. **Scopo:** Modificare criteri e applicarli esplicitamente.
**Ingressi:** S02; S03; S10. **Azione primaria:** Applica criteri.
**Uscite:** S03; ritorno al contesto chiamante.

**Gerarchia:** 1. Contesto geografico → 2. Riferimento distanze → 3. Filtri → 4. Criteri attivi → 5. Recupero e feedback → 6. Navigazione e ritorno → 7. Ingresso assistente.
**Componenti:** C01, C02, C08, C04, C38, C39, C17.
**Stati:** default; selezione; cambio città; riferimento da scegliere; combinazione senza risultati; dato non disponibile.
**Flussi/priorità:** F1, F2 / nucleo.

## S05 — Scheda su mappa

**Area:** Esplora. **Scopo:** Valutare lo stesso oggetto luogo da qualsiasi ingresso.
**Ingressi:** S02; S03; S10; S13; S14; S19. **Azione primaria:** Decidi: salva/proponi/naviga.
**Uscite:** S06; S07; S08; S09; S10; S12; S15; S21; ritorno al chiamante.

**Gerarchia:** 1. Scheda/pannello → 2. Contesto geografico → 3. Riferimento distanze → 4. Informazioni pratiche → 5. Azioni luogo → 6. Atmosfera contestuale → 7. Galleria e viewer → 8. Card recensione → 9. Origine/limiti del dato → 10. Ingresso assistente → 11. Navigazione e ritorno → 12. Mappa e selezione.
**Componenti:** C09, C01, C02, C10, C11, C12, C13, C14, C15, C17, C39, C05.
**Stati:** ridotto; intermedio; espanso; scroll; dato insufficiente; dato vecchio/discordante; ritorno conservato.
**Flussi/priorità:** F1, F2, F3 / nucleo.

## S06 — Atmosfera

**Area:** Esplora. **Scopo:** Leggere condizioni con contesto e limiti.
**Ingressi:** S05. **Azione primaria:** Approfondisci fonte.
**Uscite:** S09; S05.

**Gerarchia:** 1. Atmosfera contestuale → 2. Origine/limiti del dato → 3. Recupero e feedback → 4. Navigazione e ritorno → 5. Ingresso assistente.
**Componenti:** C12, C15, C38, C39, C17.
**Stati:** periodo disponibile; dati insufficienti; variabile mancante; nessun dato; discordanza.
**Flussi/priorità:** F1 / nucleo.

## S07 — Galleria/viewer

**Area:** Esplora. **Scopo:** Confrontare media distinguendone la provenienza.
**Ingressi:** S05. **Azione primaria:** Apri media.
**Uscite:** viewer interno; S05.

**Gerarchia:** 1. Galleria e viewer → 2. Origine/limiti del dato → 3. Recupero e feedback → 4. Navigazione e ritorno → 5. Ingresso assistente.
**Componenti:** C13, C15, C38, C39, C17.
**Stati:** una fonte; entrambe le fonti; nessun media; media non caricato; viewer.
**Flussi/priorità:** F1 / nucleo.

## S08 — Recensioni/dettaglio

**Area:** Esplora. **Scopo:** Approfondire testimonianze senza garanzie universali.
**Ingressi:** S05. **Azione primaria:** Leggi contributo.
**Uscite:** dettaglio interno; S09; S05.

**Gerarchia:** 1. Card recensione → 2. Origine/limiti del dato → 3. Controlli lista → 4. Segnalazione semplice → 5. Navigazione e ritorno → 6. Ingresso assistente.
**Componenti:** C14, C15, C07, C16, C39, C17.
**Stati:** lista; testo lungo; nessun contributo; testimonianze differenti; dettaglio.
**Flussi/priorità:** F1 / nucleo.

## S09 — Origine/nota sul dato

**Area:** Trasversale. **Scopo:** Distinguere provenienza, aggiornamento e limite.
**Ingressi:** S05; S06; S08; S10; S13. **Azione primaria:** Comprendi e torna al contesto.
**Uscite:** ritorno al chiamante.

**Gerarchia:** 1. Origine/limiti del dato → 2. Segnalazione semplice → 3. Recupero e feedback → 4. Navigazione e ritorno → 5. Ingresso assistente.
**Componenti:** C15, C16, C38, C39, C17.
**Stati:** dichiarato; riportato; discordante; insufficiente; segnalazione ricevuta.
**Flussi/priorità:** F1, F2 / nucleo.

## S10 — Assistente individuale

**Area:** AI trasversale. **Scopo:** Chiarire la richiesta e cercare con criteri controllabili.
**Ingressi:** navigazione AI; S02; S03; S05. **Azione primaria:** Applica criteri o apri risultato.
**Uscite:** S03; S04; S05; S09; ritorno al chiamante.

**Gerarchia:** 1. Contesto geografico → 2. Riferimento distanze → 3. Ingresso assistente → 4. Conversazione AI → 5. Criteri attivi → 6. Output ricerca AI → 7. Card luogo → 8. Origine/limiti del dato → 9. Recupero e feedback → 10. Navigazione e ritorno → 11. Campo ricerca.
**Componenti:** C01, C02, C17, C18, C04, C19, C06, C15, C38, C39, C03.
**Stati:** inizio; città ambigua; altra città senza GPS; attesa; risposta; interpretazione errata; nessun risultato; dato mancante; AI indisponibile.
**Flussi/priorità:** F1 / nucleo.

## S11 — Chat/proposte

**Area:** Chat. **Scopo:** Creare o riprendere una decisione circoscritta.
**Ingressi:** navigazione. **Azione primaria:** Nuova proposta.
**Uscite:** S12; S13; S14.

**Gerarchia:** 1. Elenco proposte → 2. Partecipanti e stato → 3. Navigazione e ritorno → 4. Limite dimostrativo → 5. Ingresso assistente.
**Componenti:** C20, C23, C39, C40, C17.
**Stati:** vuoto; attiva; in attesa; concordata; archiviata.
**Flussi/priorità:** F2 / nucleo.

## S12 — Crea proposta/invita

**Area:** Chat. **Scopo:** Definire contesto e invitare persone note.
**Ingressi:** S11; S05; S19. **Azione primaria:** Invia inviti e crea proposta.
**Uscite:** S13; S11.

**Gerarchia:** 1. Contesto proposta → 2. Inviti → 3. Partecipanti e stato → 4. Alternative comparabili → 5. Recupero e feedback → 6. Navigazione e ritorno → 7. Limite dimostrativo → 8. Ingresso assistente.
**Componenti:** C21, C22, C23, C25, C38, C39, C40, C17.
**Stati:** bozza; inviato; accettato; rifiutato; invito errato/scaduto; annulla.
**Flussi/priorità:** F2 / nucleo.

## S13 — Proposta di gruppo

**Area:** Chat. **Scopo:** Confrontare e rispondere senza inferire accordo dai silenzi.
**Ingressi:** S12; S11; ritorno da S14/S05. **Azione primaria:** Conferma o contesta la proposta scelta.
**Uscite:** S14; S05; S09; S04; S12.

**Gerarchia:** 1. Contesto proposta → 2. Partecipanti e stato → 3. Vincoli condivisi → 4. Riferimento distanze → 5. Alternative comparabili → 6. Preferenza alternativa → 7. Commenti nella proposta → 8. Ingresso assistente → 9. Conversazione AI → 10. Conferma decisione → 11. Recupero e feedback → 12. Navigazione e ritorno → 13. Esito e riapertura.
**Componenti:** C21, C23, C24, C02, C25, C27, C26, C17, C18, C28, C38, C39, C29.
**Stati:** vincoli aperti; incompatibili; attesa risposta; modifica città/criteri; nessuna alternativa; AI simulata; preferenza distinta dalla conferma.
**Flussi/priorità:** F2 / nucleo.

## S14 — Esito condiviso

**Area:** Chat. **Scopo:** Mostrare conferme, attese ed eventuale accordo umano del gruppo completo.
**Ingressi:** S13; S11. **Azione primaria:** Apri luogo o riapri decisione.
**Uscite:** S05; S21; S13.

**Gerarchia:** 1. Esito e riapertura → 2. Partecipanti e stato → 3. Contesto proposta → 4. Card luogo → 5. Azioni luogo → 6. Navigazione e ritorno → 7. Conferma decisione → 8. Ingresso assistente.
**Componenti:** C29, C23, C21, C06, C11, C39, C28, C17.
**Stati:** provvisorio se invito o conferma in attesa; concordato: aderenti confermati e nessun invito pendente; contestato; modifica richiede riconferma.
**Flussi/priorità:** F2 / nucleo.

## S15 — Recensione guidata

**Area:** Contributo. **Scopo:** Descrivere una visita dichiarata e distinguere condizioni/giudizio.
**Ingressi:** S05; S20 bozza. **Azione primaria:** Continua alla scrittura.
**Uscite:** S16; S20 bozza; S05.

**Gerarchia:** 1. Visita e domande → 2. Bozza/appunti → 3. Recupero e feedback → 4. Navigazione e ritorno → 5. Ingresso assistente.
**Componenti:** C30, C31, C38, C39, C17.
**Stati:** nuova; parziale; non applicabile; errore; bozza recuperata.
**Flussi/priorità:** F3 / nucleo.

## S16 — Testo/aiuto AI

**Area:** Contributo. **Scopo:** Scrivere e controllare eventuali modifiche AI.
**Ingressi:** S15; S20 bozza. **Azione primaria:** Vai all’anteprima.
**Uscite:** S17; S15; S20 bozza.

**Gerarchia:** 1. Bozza/appunti → 2. Ingresso assistente → 3. Conversazione AI → 4. AI revisione prima/dopo → 5. Recupero e feedback → 6. Navigazione e ritorno → 7. Anteprima/visibilità → 8. Invio contributo.
**Componenti:** C31, C17, C18, C32, C38, C39, C33, C34.
**Stati:** senza AI; attesa; suggerimento separato; rifiuto; correzione; applicato; AI indisponibile.
**Flussi/priorità:** F3 / nucleo.

## S17 — Anteprima/visibilità

**Area:** Contributo. **Scopo:** Controllare destinatari, identità e testo prima dell’invio.
**Ingressi:** S16. **Azione primaria:** Pubblica o invia al gruppo scelto.
**Uscite:** S18; S16; S20 bozza.

**Gerarchia:** 1. Anteprima/visibilità → 2. Bozza/appunti → 3. Invio contributo → 4. Navigazione e ritorno → 5. Ingresso assistente.
**Componenti:** C33, C31, C34, C39, C17.
**Stati:** pubblico; gruppo scelto; nome non mostrato pubblicamente; nome mostrato; ritorno a bozza; errore invio.
**Flussi/priorità:** F3 / nucleo.

## S18 — Esito contributo

**Area:** Contributo. **Scopo:** Confermare esito e recuperare un invio fallito senza duplicarlo.
**Ingressi:** S17. **Azione primaria:** Torna al luogo / recupera invio.
**Uscite:** S05; S20; S17 in errore.

**Gerarchia:** 1. Invio contributo → 2. Bozza/appunti → 3. Recupero e feedback → 4. Navigazione e ritorno → 5. Anteprima/visibilità → 6. Profilo e bozze → 7. Ingresso assistente.
**Componenti:** C34, C31, C38, C39, C33, C36, C17.
**Stati:** inviato; attesa; fallimento; retry senza doppio invio.
**Flussi/priorità:** F3 / nucleo.

## S19 — Salvati

**Area:** Salvati. **Scopo:** Riprendere luoghi e proporli agli amici.
**Ingressi:** navigazione; S05 salva. **Azione primaria:** Apri luogo salvato.
**Uscite:** S05; S12.

**Gerarchia:** 1. Salvati → 2. Card luogo → 3. Contesto geografico → 4. Navigazione e ritorno → 5. Ingresso assistente.
**Componenti:** C35, C06, C01, C39, C17.
**Stati:** vuoto; popolato; luogo non disponibile; rimozione.
**Flussi/priorità:** F1, F2 / supporto.

## S20 — Profilo/bozze

**Area:** Profilo. **Scopo:** Controllare preferenze e riprendere contributi.
**Ingressi:** navigazione; salva bozza. **Azione primaria:** Riprendi bozza.
**Uscite:** S15; S16; S17.

**Gerarchia:** 1. Profilo e bozze → 2. Bozza/appunti → 3. Anteprima/visibilità → 4. Navigazione e ritorno → 5. Ingresso assistente.
**Componenti:** C36, C31, C33, C39, C17.
**Stati:** primo uso; bozza; contributo; modifica preferenza.
**Flussi/priorità:** F3 / supporto.

## S21 — Uscita e ritorno Maps

**Area:** Trasversale. **Scopo:** Aprire consapevolmente un navigatore e conservare il ritorno.
**Ingressi:** S05; S14. **Azione primaria:** Apri servizio esterno scelto.
**Uscite:** servizio esterno simulato; ritorno al chiamante.

**Gerarchia:** 1. Passaggio Maps → 2. Recupero e feedback → 3. Navigazione e ritorno → 4. Ingresso assistente.
**Componenti:** C37, C38, C39, C17.
**Stati:** scelta; annulla; servizio non disponibile; ritorno conservato.
**Flussi/priorità:** F1, F2 / supporto.
