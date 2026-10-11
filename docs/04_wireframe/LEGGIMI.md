# Wireframe importabili — 21 schermate e varianti
v1.0 — 11 ottobre 2026

Formato mobile 390 × 844 px: ipotesi reversibile, nessuna piattaforma nativa implicita. Le etichette fra parentesi quadre sono tipi di informazione, non nomi o dati di locali reali. Mappe e scale sono schematiche; non mostrano distanze o valori di atmosfera inventati.

## File e importazione

- Ogni SVG in `svg/` è autonomo, con viewBox 390×844; i PNG in `png/` sono anteprime a 2×.
- Importare gli SVG in una pagina Figma «Wireframe v1». Creare/confermare frame 390×844 e mantenere gli ID S01–S21. Le varianti conservano l’ID principale.
- SVG e JSON/CSV sono materiali modificabili; verificare nel file Figma font e struttura dei livelli dopo l’importazione. Non è stata verificata l’editabilità nativa di ciascun testo importato.
- Assegnare interazioni secondo User_flow.json; i controlli disegnati non sono già collegamenti Figma. Impostare ritorni contestuali, scroll verticale dove previsto e reset degli scenari.
- AI, risposte amici e passaggio Maps sono simulazioni da collegare con script predisposti, non servizi nativi implementati.

## Varianti e recuperi

| ID | Schermata | Stato |
|---|---|---|
| S01-R | S01 | Posizione negata |
| S03-R | S03 | Nessun risultato |
| S05-RID | S05 | Pannello ridotto |
| S05-ESP | S05 | Pannello espanso |
| S10-C | S10 | Chiarimento della città |
| S10-U | S10 | Assistente indisponibile |
| S12-I | S12 | Invito e adesione |
| S13-R | S13 | Vincoli incompatibili |
| S13-C | S13 | Conferma esplicita |
| S14-W | S14 | Decisione in attesa |
| S16-A | S16 | AI: confronto prima/dopo |
| S18-R | S18 | Invio fallito |

## Regole d’interazione da realizzare

F1: S03-R torna a S04 mantenendo città e criteri. S10-C chiede città prima della ricerca; S10-U permette il percorso manuale. S01-R usa scelta manuale e riferimento esplicito. S05 ha tre stati; l’espanso può riempire la schermata e conserva mappa/sele­zione al ritorno.
F2: S12 invia; S12-I distingue adesione del destinatario. S13 esprime preferenza; S13-C risponde alla proposta selezionata. Regola H allineata alla specifica AI: esito «concordato per il gruppo completo» soltanto con conferma esplicita di tutti gli aderenti e nessun invito pendente. I declinati non votano né bloccano e restano visibili; gli inviti pendenti non sono voti, ma mantengono provvisorio l’esito del gruppo completo. S14-W resta aperto e permette comunque scheda/Maps. S13-R richiede modifica volontaria del vincolo. Cambiare luogo/città/criterio riapre le conferme.
F3: S16 può proseguire manualmente. S16-A conserva originale e proposta distinti; applicare aggiorna soltanto la bozza. S17 controlla destinatari e identità, poi invia con comando esplicito. S18-R conserva la bozza e richiede controllo dello stato prima del retry, senza doppio invio.
Visibilità H: Pubblico oppure Gruppo scelto; se gruppo, selettore esplicito obbligatorio. «Nome non mostrato pubblicamente» non significa anonimato per il servizio. I controlli e l’interpretazione devono essere verificati con le tre persone.
I quattro controlli della barra hanno label visibili. L’AI ha label propria ed è trasversale; non equivale a creare recensioni. Per composizione e dettaglio il ritorno è contestuale, senza perdere bozza o oggetto.
I widget sono strutturali: alcune viste mostrano una porzione delle informazioni e richiedono scroll/detail. Nessun grafico delle statistiche dei questionari entra nelle schermate dell’app. Il catalogo concreto è separato e usa gli ID di luogo condivisi.

## Stato di verifica

Verificati nel builder: 21 ID base invariati, requisiti e componenti referenziati, frame 390×844, altezza disponibile e assenza di clipping SVG. PNG e tavole vengono ispezionati visivamente. Usabilità, scroll, tastiera, focus, screen reader e comportamento Figma richiedono verifiche successive; non viene dichiarata conformità generale.

## Riproduzione

Eseguire costruisci_materiali.py con Python, poi rasterizza.mjs con Node e sharp. Il builder scrive esclusivamente nelle cartelle 02_flussi, 03_architettura e 04_wireframe. Font delle tavole: Arial/Helvetica/sans-serif; SVG vettoriali, PNG per Word.
