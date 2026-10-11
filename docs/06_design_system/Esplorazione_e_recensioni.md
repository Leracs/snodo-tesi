# Esplorazione e recensioni — componenti integrati v0.6

11 ottobre 2026. [Prova le anteprime A/B](Esplorazione_demo.html) · [Apri il prototipo](../07_prototipo/index.html?screen=S05&place=luogo-roma-01&theme=B).

Questa revisione porta nel supporto HTML le proposte del benchmark e la richiesta di dare centralità alle recensioni. Catalogo e prototipo usano gli stessi renderer `esplorazione.js` e `esplorazione.css`. Le direzioni A/B conservano compiti e quantità di informazioni uguali; nessuna è stata scelta dagli utenti.

## La recensione entra nella card

DS06 diventa una card compatta con illustrazione, città e zona, nome, prezzo indicativo, rumore contestuale e una preview DS20. Il salvataggio ha un controllo autonomo da 44 px; Apri scheda e Leggi la recensione sono azioni distinte. Non si rende cliccabile tutta la card annidando altri pulsanti.

La preview presenta il testo della prima testimonianza nel catalogo, autore, data, compagnia e fascia della visita. Il criterio della demo è l’ordine del catalogo: non viene scelta automaticamente la recensione più favorevole. Nella card il testo occupa fino a tre righe, con accesso al racconto completo; in S05 il testo è visibile per intero prima dei grafici. Una visita non descrive tutte le condizioni future del luogo.

Questo pattern compare in mappa, lista, scheda, salvati e alternative del gruppo. Il catalogo permette di provare anche testo lungo e nessuna recensione. Questi ultimi sono stati di anteprima locali; non alterano i dati dell’app. In mancanza di testimonianze si mostra «Il primo racconto manca ancora», senza aggiungerne una fittizia per riempire la card. Nessun nome, data o contributo della demo attesta una visita reale.

## DS18 — Mappa e lista equivalente

DS18 è il nome definitivo del componente precedentemente chiamato DS-MAP. I marker hanno numero stabile all’interno della città, selezione annunciabile, salvataggio e indicazione `?` per rumore assente. La card porta lo stesso numero; mappa/lista usano lo stesso ID e la stessa ricerca. La selezione viene conservata nei ritorni, se il luogo rispetta ancora i criteri.

La mappa HTML è schematica. Non usa GPS, coordinate reali, distanze geografiche, pan o ricerca live entro confini. Quando verrà introdotto un SDK, il pattern «Cerca in quest’area» dovrà essere attivato dopo uno spostamento esplicito e applicare gli stessi bounds alla lista. Non è rappresentato da un pulsante inattivo in questa versione.

## DS21 — Filtri rapidi e regole

Budget e Rumore sono due controlli rapidi; Filtri mostra il numero di condizioni attive, escludendo città e periodo del dato. Attivare rapidamente Rumore imposta il requisito basso, fino a 2/5. Per cambiare la sua importanza si usa l’editor S04.

| Regola | Corrispondenze | Dati mancanti | Valori oltre il limite |
|---|---|---|---|
| Rumore necessario | Solo valori disponibili entro limite | Esclusi | Esclusi |
| Rumore preferito | Primo gruppo | Gruppo Da verificare | Gruppo Altre alternative |

Budget e all’aperto restano requisiti necessari. Nessuna alternativa oltre la preferenza viene chiamata corrispondenza. Il confronto usa il periodo mostrato nella scheda e valori predisposti; non promette il rumore presente al momento dell’arrivo.

In S04 i campi modificano una bozza. Applica sostituisce la ricerca; Annulla conserva la ricerca applicata; Azzera azzera solo la bozza, mantenendo città e query. Si può quindi azzerare e poi annullare senza perdere i criteri precedenti. Cambiare città mantiene i criteri dichiarati finché non vengono applicati o azzerati esplicitamente.

## DS22 — Una CTA contestuale

Nella scheda S05 una sola azione principale rimane sopra la navigazione. Da ricerca personale invita a Proponi al gruppo. Se esiste una proposta della stessa città, il luogo entra tra le alternative senza cancellare partecipanti e risposte. Dal confronto del gruppo la CTA è Preferisco questo luogo: registra una preferenza, poi torna al gruppo. La conferma rimane un’azione distinta.

Il luogo incompatibile con i requisiti condivisi mantiene la scheda leggibile e mostra il motivo per cui la preferenza non è disponibile. Salva resta un’icona autonoma, Indicazioni e Racconta una visita sono secondarie nel contenuto; in S08 la scrittura torna ad avere il proprio ingresso principale.

## DS10 — Criteri prima dei consigli

L’assistente di ricerca presenta criteri, numero di corrispondenze, fonti e limite della demo. Correggi apre una bozza nell’editor; Vedi i luoghi applica solo dopo un gesto dell’utente. Dopo la risposta, il pulsante per interpretare un nuovo messaggio diventa secondario. Nel gruppo l’ingresso AI rimane secondario rispetto alla decisione esplicita. Dalla scheda, l’accesso contestuale mantiene ID e città del luogo e può mostrare la sua testimonianza originale. Un luogo senza recensioni produce una dichiarazione di assenza, non un riepilogo inventato. Revisione prima/dopo, rifiuto, ripristino e invio della recensione mantengono i controlli già presenti.

## Come portare questi componenti in Figma

| Componente | Proprietà e varianti da costruire | Regole di Auto Layout |
|---|---|---|
| DS06 Card luogo | tema A/B, normale/gruppo, salvato, categoria, dati mancanti | Larghezza fill, padding 16, gap 12, immagine 76×84; testo flessibile e controllo Salva 44×44 |
| DS20 Preview recensione | card/scheda, breve/lunga/assente | Stack verticale, padding 14–16; citazione non sovrapposta ai metadati; card max 3 righe con ingresso completo |
| DS18 Marker | default/selezionato/salvato/rumore assente | Target 44×44, badge indipendente dal numero; lista alternativa sempre accessibile |
| DS21 Criteri | attivo/inattivo, necessario/preferenza, conteggio | Controlli min 44, wrap delle righe; editor separato con Applica/Annulla/Azzera |
| DS22 CTA | personale/gruppo/incompatibile | Slot persistente sopra nav, min 48; testo del destinatario e motivo se non disponibile |
| DS10 Riepilogo AI | corrispondenze/nessun risultato/correzione | Criteri e limiti prima delle azioni; una CTA principale; nessuna applicazione automatica |

La versione HTML consente di provare gli stati. Le style tile statiche e i 33 wireframe baseline restano le tavole della revisione precedente: non si devono scambiare per rappresentazioni già migrate. Il prossimo passaggio è ricostruire queste composizioni nel file Figma, confrontarle con le due direzioni e verificarle con persone reali. Le verifiche tecniche non sono risultati di ricerca o usabilità.
