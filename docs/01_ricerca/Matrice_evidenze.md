# Matrice delle evidenze e dei requisiti

Versione 11 ottobre 2026. La matrice collega fonti, interpretazioni e requisiti del blueprint. Le verifiche UX sono previste: nessun esito umano è compilato. Le basi dei questionari sono 50 e 33; tre persone uniche hanno partecipato alle interviste ripetute nei due round. Il CSV conserva i campi in forma filtrabile.

C = scelta confermata; D = dato disponibile; T = proposta nel testo originale; V = appunto vocale; H = ipotesi formulata nel progetto attuale; M = materiale mancante. La classe riguarda la natura dell’elemento, non il grado di efficacia della soluzione.

I requisiti R01–R17 e le schermate S01–S21 rimandano al blueprint. Le voci metodologiche non sono forzate su una schermata: producono controlli editoriali e di tracciabilità. Un dato D può motivare un requisito, ma la soluzione concreta resta una proposta da valutare.

## Registro completo

### E001 C

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Obiettivo e perimetro confermato.

**Elemento:** Copertura iniziale tutta Italia; Roma può essere città dimostrativa. **Misura/base:** Scelta dell’autore.

**Interpretazione:** Città/zona visibili e ricerca altrove senza GPS. **Limite:** Non è evidenza di rappresentatività del campione o catalogo completo.

**Collegamento:** R01/R02 → Selettore città; contesto ricerca; riferimento distanze → S01/S02/S03/S04/S10.

**Verifica prevista:** Persona identifica e modifica la città; distanze con origine esplicita. **Stato:** Verifica UX da svolgere.

### E002 C

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Due scenari e nessuna persona primaria.

**Elemento:** Esplorazione individuale e uscita con amici, senza gerarchia fra personas. **Misura/base:** Scelta dell’autore.

**Interpretazione:** Tre flussi comprendendo contributo trasversale. **Limite:** Non dedotta dall’item comfort ambiguo.

**Collegamento:** R01/R08 → Ricerca; proposta; contributo → S01–S18.

**Verifica prevista:** Tutti i flussi hanno ingresso, esito e recupero. **Stato:** Verifica UX da svolgere.

### E003 C

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Funzioni del chatbot.

**Elemento:** Ricerca/info, scelta nelle chat, supporto alla recensione. **Misura/base:** Scelta dell’autore.

**Interpretazione:** Assistente con ruoli contestuali distinti. **Limite:** Non è efficacia del modello o miglioramento misurato.

**Collegamento:** R09/R10/R11 → Criteri; messaggi AI; confronto bozza → S10/S13/S16.

**Verifica prevista:** Persona corregge, rifiuta o prosegue senza AI. **Stato:** Verifica UX da svolgere.

### E004 C

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Mock autorizzati.

**Elemento:** Catalogo, media e indicatori possono essere dimostrativi. **Misura/base:** Scelta dell’autore.

**Interpretazione:** Dichiarare simulazione e coerenza interna. **Limite:** I dati di ricerca e risultati umani restano reali.

**Collegamento:** R15 → Etichetta demo; script coerenti → Trasversale.

**Verifica prevista:** Stesso dato in card, scheda, chat e risposta AI. **Stato:** Verifica UX da svolgere.

### E005 C

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Partecipanti ai confronti futuri.

**Elemento:** Stesse tre persone intervistate per tile e test; due tile. **Misura/base:** 3 persone uniche.

**Interpretazione:** Protocollo formativo; ordine e familiarità annotati. **Limite:** Non validazione indipendente o rappresentativa.

**Collegamento:** R16 → Due pannelli; scheda osservazioni → Trasversale.

**Verifica prevista:** Registrare risposte reali e casi contrari; nessuna preferenza sintetica. **Stato:** Verifica UX da svolgere.

### E006 C

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Campione qualitativo.

**Elemento:** Tre persone uniche nei due round, rete di conoscenze/amici. **Misura/base:** 3 casi, interviste ripetute.

**Interpretazione:** Matrice per caso e round, senza % dei temi. **Limite:** Originali mancanti; sei sessioni non sono sei persone.

**Collegamento:** Metodo di ricerca → Matrice qualitativa → Capitoli Empathize/Define.

**Verifica prevista:** Attribuzioni verificabili con originali. **Stato:** Conferma dell’autore; originali da ricevere.

### E007 D

**Fonte:** SONDAGGIO TESI.csv; materiali/sondaggi/frequenze_domande.csv. **Riferimento:** S1_C05/S1_C06; diagnostica.json.

**Elemento:** 50 risposte, 17 studenti, 30 lavoratori, 3 nessuno dei due; 9 fuorisede. **Misura/base:** 50; rami 17/33; lavoratori 30.

**Interpretazione:** Usare basi distinte e non confondere ramo con lavoratori. **Limite:** Campione non rappresentativo; vuoti strutturali fuori ramo.

**Collegamento:** Metodo di ricerca → Basi; dizionario per posizione → Capitoli 1/2.

**Verifica prevista:** Ogni numero rinvia a base e colonna. **Stato:** Calcoli già verificati.

### E008 D

**Fonte:** Sondaggio2.csv; materiali/sondaggi/frequenze_domande.csv e statistiche_scale.csv. **Riferimento:** S2_C02; diagnostica.json.

**Elemento:** 33 risposte: 16 di 18–24, 16 di 25–34, una >=35. **Misura/base:** 33.

**Interpretazione:** Descrivere il campione separatamente. **Limite:** Nessun identificatore comune con S1; non 83 unici.

**Collegamento:** Metodo di ricerca → Basi; descrizione campione → Capitoli 1/2.

**Verifica prevista:** Non appaiare i round; nessuna etichetta generazionale impropria. **Stato:** Calcoli già verificati.

### E009 D

**Fonte:** SONDAGGIO TESI.csv; materiali/sondaggi/frequenze_domande.csv. **Riferimento:** S1_C10; S1_C06; S1_C40 filtrata S1_C05=Lavoro.

**Elemento:** Studio a casa 10/17, fuorisede 5/9; lavoro a casa 19/30. **Misura/base:** 17/9/30; risposte singole.

**Interpretazione:** Studio/lavoro sono occasioni, non prova di inadeguatezza esterna. **Limite:** Domande non misurano ragione della scelta.

**Collegamento:** R01 → Occasioni facoltative → S04.

**Verifica prevista:** Criteri non imposti nell’avvio. **Stato:** Calcoli verificati; UX da svolgere.

### E010 D

**Fonte:** SONDAGGIO TESI.csv; materiali/sondaggi/frequenze_domande.csv. **Riferimento:** S1_C12 + S1_C42; grafico S04.

**Elemento:** Atmosfera 37, distanza 30, budget 27 selezioni. **Misura/base:** N=50; multipla.

**Interpretazione:** Criteri condivisi da filtri e assistente. **Limite:** Le selezioni non definiscono disposizione o efficacia UI.

**Collegamento:** R02/R10 → Criteri visibili e modificabili → S02/S03/S04/S10/S13.

**Verifica prevista:** Correzione di un criterio conservata in risultati e scheda. **Stato:** Verifica UX da svolgere.

### E011 D

**Fonte:** SONDAGGIO TESI.csv; materiali/sondaggi/frequenze_domande.csv. **Riferimento:** S1_C26 + S1_C56; grafico S06.

**Elemento:** Servizi 45, prezzi 39, immagini 22, atmosfera 16, vincoli 13. **Misura/base:** N=50; multipla.

**Interpretazione:** Praticità reperibile insieme all’esperienza. **Limite:** Informazioni cercate non automaticamente mancanti.

**Collegamento:** R03 → Sezioni pratiche; media; testimonianze → S05/S07/S08.

**Verifica prevista:** Trovare informazione e riconoscerne la provenienza. **Stato:** Verifica UX da svolgere.

### E012 D

**Fonte:** SONDAGGIO TESI.csv; materiali/sondaggi/frequenze_domande.csv. **Riferimento:** S1_C19/49; S1_C20/50; S1_C21/51; S05.

**Elemento:** Sì: poche recensioni 18; simili 29; veridicità con richiamo AI 28. **Misura/base:** N=50; tre domande singole.

**Interpretazione:** Fiducia differenziata; origine e contesto leggibili. **Limite:** Non sfiducia universale o capacità di riconoscere falsità.

**Collegamento:** R04 → Fonte; conteggio; data → S05/S08/S09.

**Verifica prevista:** Distinguere testimonianza da garanzia. **Stato:** Verifica UX da svolgere.

### E013 D

**Fonte:** SONDAGGIO TESI.csv; materiali/sondaggi/frequenze_domande.csv. **Riferimento:** S1_C24 + S1_C54; S05.

**Elemento:** Delusione nonostante recensioni positive 33/50. **Misura/base:** N=50; singola.

**Interpretazione:** Rendere esplicito il contesto dell’esperienza. **Limite:** Delusione non prova di recensione falsa.

**Collegamento:** R04/R06 → Contesto visita; fonte media → S05/S07/S08/S09.

**Verifica prevista:** Persona comprende differenze e limiti. **Stato:** Verifica UX da svolgere.

### E014 D

**Fonte:** SONDAGGIO TESI.csv; materiali/sondaggi/frequenze_domande.csv. **Riferimento:** S1_C30 + S1_C60; statistiche_scale.csv; S07.

**Elemento:** Utilità concetto mappa: 45 valori 4–5; media 4,32. **Misura/base:** N=50; scala 1–5.

**Interpretazione:** Prototipare mappa/lista e valutarne uso. **Limite:** Giudizio sul concetto, non test dell’app.

**Collegamento:** R01/R07 → Mappa/lista; pannello → S02/S03/S05.

**Verifica prevista:** Compito autonomo, ritorno e selezione conservati. **Stato:** Verifica UX da svolgere.

### E015 D

**Fonte:** Sondaggio2.csv; materiali/sondaggi/frequenze_domande.csv e statistiche_scale.csv. **Riferimento:** S2_C05/C06/C07/C08; S08.

**Elemento:** Valori 4–5: diversa descrizione 8, uscita 4, esigenze non rispettate 6, evitamento 13. **Misura/base:** N=33; scale 1–5.

**Interpretazione:** Situazioni distinte, informazione insufficiente riconoscibile. **Limite:** Esigenze: base intera, anche chi non ne dichiara.

**Collegamento:** R04/R05 → Contesto; dato assente; nota origine → S05/S06/S09.

**Verifica prevista:** Non equiparare assenza del dato a vincolo soddisfatto. **Stato:** Verifica UX da svolgere.

### E016 D

**Fonte:** Sondaggio2.csv; materiali/sondaggi/frequenze_domande.csv e statistiche_scale.csv. **Riferimento:** S2_C19/C18; S08.

**Elemento:** Valori 4–5: disagio altri clienti 16; staff secondo gruppo/identità 11. **Misura/base:** N=33; scale 1–5.

**Interpretazione:** Testimonianze contestualizzate. **Limite:** Autodichiarazioni, non diagnosi o causalità verificata.

**Collegamento:** R04/R05 → Condizioni separate da giudizio → S06/S08/S15.

**Verifica prevista:** Dimensione, momento e limite comprensibili. **Stato:** Verifica UX da svolgere.

### E017 D

**Fonte:** Sondaggio2.csv; materiali/sondaggi/frequenze_domande.csv e statistiche_scale.csv. **Riferimento:** S2_C15; analisi_sondaggi.py; S09.

**Elemento:** Non torno 27; parlo con amici/familiari 22; recensione negativa 11; 9 entrambe mancato ritorno+recensione. **Misura/base:** N=33; multipla e incrocio record.

**Interpretazione:** Contributo guidato e controllo della visibilità. **Limite:** Non tornare non equivale a silenzio; azioni possono coesistere.

**Collegamento:** R11/R12 → Appunti; aiuto; anteprima/visibilità → S15/S16/S17.

**Verifica prevista:** Autore rifiuta AI e identifica destinatari. **Stato:** Verifica UX da svolgere.

### E018 D

**Fonte:** Sondaggio2.csv; materiali/sondaggi/frequenze_domande.csv e statistiche_scale.csv. **Riferimento:** S2_C09/C10/C14; S10.

**Elemento:** Medie sicurezza 4,21; accoglienza 4,18; info chiare 4,15. **Misura/base:** N=33; scala 1–5.

**Interpretazione:** Attenzione a testimonianze e chiarezza. **Limite:** Non superiorità generale di emotivo su pratico; no garanzie.

**Collegamento:** R03/R04/R05 → Informazioni e limiti → S05/S06/S08/S09.

**Verifica prevista:** Ricerca e lettura comprensibili, senza certificazioni. **Stato:** Verifica UX da svolgere.

### E019 D

**Fonte:** Sondaggio2.csv; materiali/sondaggi/frequenze_domande.csv e statistiche_scale.csv. **Riferimento:** S2_C13/C11/C12; S10.

**Elemento:** Medie tranquillità 3,45; alimentazione 3,06; animale 2,39. **Misura/base:** N=33; scala 1–5.

**Interpretazione:** Distinguere vincolo individuale da preferenza frequente. **Limite:** Media bassa non giustifica cancellazione di un bisogno.

**Collegamento:** R02 → Vincolo/preferenza → S04/S10/S13.

**Verifica prevista:** Un vincolo non viene allentato senza scelta esplicita. **Stato:** Verifica UX da svolgere.

### E020 D

**Fonte:** Sondaggio2.csv; materiali/sondaggi/frequenze_domande.csv e statistiche_scale.csv. **Riferimento:** S2_C21; S11.

**Elemento:** Compagnia abituale: amici 21, partner 11, famiglia 1. **Misura/base:** N=33; singola.

**Interpretazione:** Contesto utile per scenario amici. **Limite:** Non prova che chat o consenso siano soluzione ottimale.

**Collegamento:** R08 → Proposta; partecipanti; risposte → S11/S12/S13/S14.

**Verifica prevista:** Invito, preferenza e accordo distinguibili. **Stato:** Verifica UX da svolgere.

### E021 D

**Fonte:** Sondaggio2.csv; materiali/sondaggi/frequenze_domande.csv e statistiche_scale.csv. **Riferimento:** S2_C20, colonna 20 (include timestamp).

**Elemento:** Item comfort: valori 1..5 = 16,9,8,0,0; scala per niente/tanto. **Misura/base:** N=33; scala 1–5.

**Interpretazione:** Conservare distribuzione, sospendere interpretazione. **Limite:** Alternativa solo/compagnia non ancorata alla scala; non categorie1/2/3.

**Collegamento:** R01 → Nota metodologica → Capitolo2; F1/F2.

**Verifica prevista:** Nessuna graduatoria scenari da questo item. **Stato:** Ambiguità documentata, interpretazione esclusa.

### E022 D

**Fonte:** Sondaggio2.csv; materiali/sondaggi/frequenze_domande.csv e statistiche_scale.csv. **Riferimento:** S2_C16/C22; S12.

**Elemento:** Esperienza precedente 16 valori 4–5; fiducia piattaforma 26, media 4,12. **Misura/base:** N=33; scale 1–5.

**Interpretazione:** Motiva esplorazione del concetto. **Limite:** Domande diverse; fiducia descritta positivamente non adozione.

**Collegamento:** R15/R16 → Catalogo demo; protocollo → Trasversale.

**Verifica prevista:** Valutare compiti e motivi, senza prevedere adozione. **Stato:** Verifica UX da svolgere.

### E023 D

**Fonte:** materiali/roadmap/Risposte_aperte_sondaggi.md. **Riferimento:** S2-R10; note S2_C23.

**Elemento:** Nota richiama soggettività e contesto delle testimonianze. **Misura/base:** Un caso; nessuna %.

**Interpretazione:** Data/fascia e contesto visita leggibili. **Limite:** Non citazione d’intervista o prova di inaffidabilità generale.

**Collegamento:** R04 → Contesto visita → S08/S15.

**Verifica prevista:** Distinguere osservazione e giudizio. **Stato:** Verifica UX da svolgere.

### E024 D

**Fonte:** materiali/roadmap/Risposte_aperte_sondaggi.md. **Riferimento:** S2-R16; S2_C23.

**Elemento:** Scarso interesse personale per piattaforma, valore attribuito alla trasparenza. **Misura/base:** Caso contrario; nessuna %.

**Interpretazione:** Percorso ordinario e informazioni reperibili senza AI. **Limite:** Non prevedere uso universale.

**Collegamento:** R10/R15 → Ricerca manuale; fonti → S03/S05/S10.

**Verifica prevista:** Compito praticabile con AI indisponibile. **Stato:** Verifica UX da svolgere.

### E025 D

**Fonte:** materiali/roadmap/Risposte_aperte_sondaggi.md. **Riferimento:** S1-R22; S1_C42.

**Elemento:** Co-working poco pertinente al contesto attuale del rispondente. **Misura/base:** Un caso; nessuna %.

**Interpretazione:** Occasioni e criteri facoltativi. **Limite:** Non cancellare bisogno per tutti.

**Collegamento:** R01/R02 → Preferenze; occasioni → S01/S04.

**Verifica prevista:** Onboarding non impone lavoro/studio. **Stato:** Verifica UX da svolgere.

### E026 T

**Fonte:** Testa_ElaboratoScritto.pdf. **Riferimento:** pp.20–23.

**Elemento:** Vanessa/Jacopo a Milano, Ginevra a Roma; biografie ed empathy map. **Misura/base:** Tre personas della bozza.

**Interpretazione:** Riferimenti senza graduatoria; città conservate. **Limite:** Says/Thinks non citazioni verificate senza originali.

**Collegamento:** R01 → Scenari; note costruzione → F1/F2/F3.

**Verifica prevista:** Ricondurre attributi a evidenza o narrativa. **Stato:** Attribuzioni in attesa.

### E027 T

**Fonte:** Testa_ElaboratoScritto.pdf. **Riferimento:** pp.25–27.

**Elemento:** Atmosfera, tag, grafico temporale e punteggio di comfort. **Misura/base:** Proposta originale.

**Interpretazione:** Dimensioni separate con contesto; rinviare punteggio universale/live. **Limite:** Non misurazioni o efficacia.

**Collegamento:** R05 → Legenda; periodo; copertura → S06/S15.

**Verifica prevista:** Scala e assenza del dato comprese. **Stato:** Verifica UX da svolgere.

### E028 T

**Fonte:** Testa_ElaboratoScritto.pdf. **Riferimento:** pp.26–27.

**Elemento:** Badge verificato, confronto foto, segnalazione discordanza. **Misura/base:** Proposta originale.

**Interpretazione:** Fonte media e note sul dato, senza badge di garanzia. **Limite:** Origine non prova autenticità o sicurezza.

**Collegamento:** R04/R06 → Etichetta media; dettaglio fonte → S07/S09.

**Verifica prevista:** Fonte riconosciuta, nessuna garanzia falsa. **Stato:** Verifica UX da svolgere.

### E029 T

**Fonte:** Testa_ElaboratoScritto.pdf. **Riferimento:** p.27.

**Elemento:** Bassa esposizione sociale e contributo privato. **Misura/base:** Proposta originale.

**Interpretazione:** Anteprima con destinatari e identità mostrata. **Limite:** Pubblico/gruppo è scelta da sviluppare; non anonimato assoluto.

**Collegamento:** R12 → Visibilità; identità → S17/S20.

**Verifica prevista:** Persona sa chi legge e che identità appare. **Stato:** Verifica UX da svolgere.

### E030 T

**Fonte:** Testa_ElaboratoScritto.pdf. **Riferimento:** p.27.

**Elemento:** AI per scoperta e scrittura; notifica dopo permanenza. **Misura/base:** Proposta originale.

**Interpretazione:** AI nei compiti; permanenza rinviata. **Limite:** Nessuna soglia validata o infrastruttura esistente.

**Collegamento:** R10/R11/R17 → Aiuto facoltativo → S10/S16.

**Verifica prevista:** Nucleo completo senza rilevazione visite. **Stato:** Verifica UX da svolgere.

### E031 V

**Fonte:** materiali/trascrizione_vocale.md. **Riferimento:** 00:15–00:47; 01:09–01:40.

**Elemento:** Gruppi e AI chiamata nelle conversazioni. **Misura/base:** Appunto vocale.

**Interpretazione:** Proposta di uscita circoscritta. **Limite:** Identità/ruolo voce incerti; non verbale relatore.

**Collegamento:** R08/R09 → Invito; richiamo AI → S11–S14.

**Verifica prevista:** Distinguere suggerimento e decisione umana. **Stato:** Verifica UX da svolgere.

### E032 V

**Fonte:** materiali/trascrizione_vocale.md. **Riferimento:** 03:45–04:16.

**Elemento:** Togliere recensioni Home; rendere assistente riconoscibile; Maps esterne. **Misura/base:** Appunto vocale.

**Interpretazione:** Home orientamento e passaggio navigatore. **Limite:** Un nome prima di Home è incerto; no deduzione.

**Collegamento:** R06/R14 → Nav etichettata; handoff → S02/S05/S10/S21.

**Verifica prevista:** Ritorno al medesimo contesto. **Stato:** Verifica UX da svolgere.

### E033 V

**Fonte:** materiali/trascrizione_vocale.md. **Riferimento:** 04:18–05:10.

**Elemento:** Distinguere foto utenti/locale; card recensioni maggiori; scheda sopra mappa. **Misura/base:** Appunto vocale.

**Interpretazione:** Fonti e pannello a stati. **Limite:** Mappa sempre visibile è proposta, non requisito assoluto.

**Collegamento:** R06/R07 → Fonte media; pannello/scroll → S05/S07/S08.

**Verifica prevista:** Leggibilità e contesto con pannello espanso. **Stato:** Verifica UX da svolgere.

### E034 V

**Fonte:** materiali/trascrizione_vocale.md. **Riferimento:** 00:47–01:08; 01:41–02:02; 05:10–05:46.

**Elemento:** Notifiche da permanenza, revisita, wrapped e badge. **Misura/base:** Esempi verbali con soglie incerte.

**Interpretazione:** Rinviare al futuro. **Limite:** Otto minuti, riferimento incerto ai quindici e dieci visite non sono soglie provate.

**Collegamento:** R17 → Registro perimetro → Fuori nucleo.

**Verifica prevista:** Nessuna promessa di capacità nel prototipo. **Stato:** Verifica UX da svolgere.

### E035 H

**Fonte:** materiali/roadmap/Analisi_progetto_e_requisiti.md. **Riferimento:** Architettura proposta.

**Elemento:** Quattro aree Esplora/Salvati/Chat/Profilo e assistente trasversale. **Misura/base:** Ipotesi attuale.

**Interpretazione:** Oggetti condivisi, senza duplicare la scheda. **Limite:** Etichette e numero voci non prescrizioni del docente.

**Collegamento:** R01/R10 → Nav; card standard; oggetto luogo → S01–S21.

**Verifica prevista:** Stessa scheda in mappa, AI, gruppo e salvati. **Stato:** Verifica UX da svolgere.

### E036 H

**Fonte:** materiali/roadmap/Analisi_progetto_e_requisiti.md. **Riferimento:** Regole AI ricerca.

**Elemento:** Criteri visibili; vincolo non allentato in silenzio; città chiarita. **Misura/base:** Ipotesi attuale.

**Interpretazione:** Persona comprende e corregge interpretazione. **Limite:** AI simulata, non accuratezza modello verificata.

**Collegamento:** R02/R10 → Criteri; chiarimento; fonte → S04/S10.

**Verifica prevista:** Compito con interpretazione errata e nessun risultato. **Stato:** Verifica UX da svolgere.

### E037 H

**Fonte:** materiali/roadmap/Analisi_progetto_e_requisiti.md. **Riferimento:** FlussoF2.

**Elemento:** Accordo solo con risposte esplicite dei partecipanti attivi richiesti. **Misura/base:** Ipotesi attuale.

**Interpretazione:** Invito, partecipazione, preferenza, accordo separati. **Limite:** Regola da testare; silenzio non consenso.

**Collegamento:** R08/R09 → Stati partecipazione; riconferma → S12/S13/S14.

**Verifica prevista:** Persona identifica attesa/contestazione e riapre scelta. **Stato:** Verifica UX da svolgere.

### E038 H

**Fonte:** materiali/roadmap/Analisi_progetto_e_requisiti.md. **Riferimento:** FlussoF3.

**Elemento:** BozzaAI separata, confronto prima/dopo, applica e pubblica distinti. **Misura/base:** Ipotesi attuale.

**Interpretazione:** Controllo dell’esperienza e giudizio. **Limite:** Nessun fatto inventato o modello operativo.

**Collegamento:** R11/R13 → Bozza; confronto; anteprima → S15–S18.

**Verifica prevista:** Rifiuto/correzione e recupero errore senza perdita. **Stato:** Verifica UX da svolgere.

### E039 H

**Fonte:** materiali/roadmap/Analisi_progetto_e_requisiti.md. **Riferimento:** Base prototipo.

**Elemento:** 390×844px e demo Roma/Milano. **Misura/base:** Ipotesi reversibili.

**Interpretazione:** Frame comparabili e cambio città dimostrabile. **Limite:** Non piattaforma hardware confermata o catalogo nazionale reale.

**Collegamento:** R01/R15 → Frame; area corrente → Trasversale.

**Verifica prevista:** Contenuti lunghi e cambio area coerenti. **Stato:** Verifica UX da svolgere.

### E040 H

**Fonte:** materiali/roadmap/Analisi_progetto_e_requisiti.md. **Riferimento:** Atmosfera e fonti.

**Elemento:** Dato mancante distinto da negativo; no grafico senza periodo/legenda. **Misura/base:** Ipotesi attuale.

**Interpretazione:** Riepilogo comprensibile con limiti. **Limite:** Dati app mock, non grafici survey.

**Collegamento:** R04/R05 → Legenda; copertura; riepilogo testuale → S06/S09.

**Verifica prevista:** Persona interpreta assenza del dato. **Stato:** Verifica UX da svolgere.

### E041 M

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Originali delle interviste.

**Elemento:** Trascrizioni originali dei due round non disponibili. **Misura/base:** 3 partecipanti; due round.

**Interpretazione:** Sospendere nuove citazioni e sintesi definitive. **Limite:** Non blocca IA/flussi come ipotesi.

**Collegamento:** Metodo di ricerca → Matrice caso/round/estratto → Capitoli2/3.

**Verifica prevista:** Ricevere originali; attribuire e controllare citazioni. **Stato:** In attesa degli originali.

### E042 M

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Word originario.

**Elemento:** File Word nativo della tesi non disponibile. **Misura/base:** PDF conservato.

**Interpretazione:** Nuovo documento di sezioni, originale preservato. **Limite:** Non dichiarare integrazione nel file nativo.

**Collegamento:** Registro editoriale → Nuovo Word; confronto pagine → Tesi.

**Verifica prevista:** Autore integra e rivede proposta. **Stato:** Nuovo file; originale non modificato.

### E043 M

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Figma originario.

**Elemento:** File nativo Figma non disponibile. **Misura/base:** Tavole/statiche in costruzione.

**Interpretazione:** Asset importabili non equivalgono a interazioni native. **Limite:** Nessuna verifica nel file inesistente.

**Collegamento:** R15 → Tavole; script; inventari → Trasversale.

**Verifica prevista:** Importare, collegare e provare nel nativo. **Stato:** Accesso e verifica nativa da completare.

### E044 M

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Feedback tile e test.

**Elemento:** Nessun feedback o osservazione reale ricevuto. **Misura/base:** 3 persone previste.

**Interpretazione:** UI non selezionata e test senza esiti. **Limite:** Non produrre preferenze o successi sintetici.

**Collegamento:** R16 → Protocollo; registri vuoti → Trasversale.

**Verifica prevista:** Raccogliere sessioni reali e motivi. **Stato:** Non raccolto.

### E045 M

**Fonte:** materiali/Brief_progetto_confermato.md e Prompt_operativo_tesi_UX_UI.md. **Riferimento:** Disposizioni ufficiali AANT.

**Elemento:** AI consentita con dichiarazione secondo autore; testo ufficiale non fornito. **Misura/base:** Conferma sull’uso, non conformità accertata.

**Interpretazione:** Dichiarazione descrive attività effettive. **Limite:** Non certificare regole senza documento.

**Collegamento:** Registro editoriale → Registro usi → DichiarazioneAI.

**Verifica prevista:** Adattare alle disposizioni ricevute. **Stato:** Documento ufficiale non disponibile.

## Controlli effettuati

Sono stati ricontrollati sulle frequenze i conteggi dei criteri, le informazioni ricercate, le domande di fiducia, la delusione, l’interesse per la mappa, le reazioni e l’item comfort. La lettura conserva rami e valori zero. Gli incroci e le medie rimandano all’analisi riproducibile già preparata, senza nuovi filtri selezionati dopo i risultati.

La matrice non è una matrice definitiva delle interviste. Le parafrasi delle personas e le affermazioni qualitative del PDF restano T o M fino al controllo degli originali. Non contiene nuove citazioni delle tre persone.
