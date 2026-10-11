# Atmosfera e affluenza — pattern SNODO

Revisione v0.4, 11 ottobre 2026. Pattern approvato dal committente per l’integrazione nel progetto; la scelta generale della direzione A/B resta aperta. Questa approvazione di progetto non è un risultato di ricerca con utenti.

[Apri la dimostrazione interattiva](Atmosfera_affluenza_demo.html). La stessa implementazione è utilizzata nella scheda del luogo S05 e nel dettaglio S06 del [supporto interattivo](../07_prototipo/index.html).

DS19 è assegnato all’affluenza per evitare collisioni con le proposte di componenti del benchmark.

## Due componenti distinti

**DS08 Atmosfera** presenta luce, rumore e comfort: icona, nome della dimensione, descrizione testuale, intensità da 1 a 5 e periodo/fascia dei contributi. Le tre righe mantengono la stessa struttura. Il rumore alto non è un voto positivo; il comfort resta una percezione soggettiva. Non calcolare un punteggio complessivo o un indice di benessere.

**DS19 Affluenza per fasce** si trova sotto l’atmosfera, su una superficie di lettura separata. Presenta esattamente **tre fasce**, con nome, intervallo e livello Bassa/Media/Alta. La versione a quattro fasce è esclusa. Gli intervalli sono configurabili per luogo e devono essere coerenti con gli orari di apertura. Il catalogo demo dichiara 16–23: gli esempi usano Pomeriggio 16–18, Sera 18–21 e Tarda sera 21–23. Non attribuire dati a fasce esterne all’orario dichiarato.

La parte superiore usa la superficie calma derivata dal turchese della direzione B, icone leggibili e punteggi allineati. Le barre usano un viola più scuro del viola decorativo. Il sistema conserva Boldonse e il corpo Forma DJR Text con fallback Helvetica Neue della B; non importa Anton dall’esplorazione iniziale. La direzione A applica la stessa struttura con i propri font e colori.

## Selettore del giorno

Un pulsante arrotondato con calendario, nome completo del giorno e freccia apre un pannello dal basso realizzato con `dialog`. È una composizione di DS01 e DS16, non una nuova navigazione dell’app.

- Apertura con clic, Invio o Spazio; focus sul giorno selezionato.
- Sette pulsanti con nomi completi, segno di spunta e stato `aria-pressed`.
- Selezione: aggiorna solo l’affluenza, chiude il pannello e restituisce il focus al pulsante.
- Escape, chiusura esplicita e clic sullo sfondo chiudono senza cambiare il giorno.
- Il giorno rimane associato al luogo nel passaggio S05/S06. Riparti azzera le selezioni della demo.
- Pannello con altezza limitata e scorrimento, per non rendere irraggiungibili i giorni con testo ingrandito.

## Dati e assenze

`atmosphere.values` e `metricCoverage` descrivono le tre condizioni. Il sotto-oggetto distinto `atmosphere.attendance` contiene definizioni delle fasce, profili per giorno, valori, quantità dei contributi e provenienza. Il selettore non modifica luce, rumore o comfort e non ricalcola la loro scala.

I valori del catalogo sono esempi predisposti. Il nuovo comfort e i profili giornalieri non provengono dai questionari, non sono misure ambientali e non sono medie calcolate. Prima del prodotto reale definire raccolta, aggregazione, copertura minima e recenza. Nel frattempo non descrivere questa implementazione come stima live.

- Valore mancante, invalido o zero contributi: testo esplicito e nessuna barra riempita. Non convertire in zero o Bassa.
- Fascia chiusa: etichetta Chiuso, distinta da Dato assente.
- Giorno privo di un profilo: tutte le fasce sono assenti; non usare il profilo di un altro giorno.
- Dati parziali: restano visibili tutte le fasce. La raccomandazione confronta solo quelle disponibili e dichiara il confronto limitato.
- Per dimensioni mancanti, non mostrare punteggi o segmenti vuoti che suggeriscano un’intensità bassa.
- Periodo, fascia di riferimento, natura dimostrativa e limite del confronto restano visibili; la provenienza completa è documentata nel catalogo e nella pagina del pattern; DS07 apre gli approfondimenti.

## Token aggiunti

| Ruolo | Direzione A | Direzione B |
|---|---|---|
| `atmosphereBg` | `#EEE4D7` | `#E4FAF6` |
| `atmosphereIconBg` | `#F6DDD0` | `#ADEDE6` |
| `dataAccent` | `#9C432D` | `#713799` |
| `dataAccentSoft` | `#F6DDD0` | `#E9DDF0` |

I colori originali della palette B restano disponibili come accenti del brand. `dataAccent` è il ruolo del viola per grafici e testo funzionale: non utilizzare automaticamente `accentPurple` come colore di testo. I nuovi ruoli sono presenti nei token CSS/JSON e nei due `theme` JSON.

## Accessibilità e limiti delle verifiche

Corpo 16/24, metadati 14/20, controlli alti 48 px, focus con spessore e distanza di 3 px. La forma, le altezze e il testo rendono comprensibili i livelli anche senza colore. Le icone e i segni quantitativi duplicati sono decorativi per il lettore di schermo; l’elenco annuncia fascia, livello e contributi.

Le barre usano una scala comune 1–5 anche se il livello visibile è qualitativo. Nessuna area minima artificiale viene attribuita a un dato assente. Sotto 270 px di larghezza del componente, le tre fasce diventano tre righe complete con nome, orario, barra e livello: evitare una disposizione 2+1. I titoli e le descrizioni possono andare a capo.

Le verifiche sono registrate in [QA_atmosfera_affluenza.json](QA_atmosfera_affluenza.json). Distinguere controlli dei dati, contrasti e browser da test con persone o verifica completa di conformità. Questa integrazione non crea componenti nativi Figma né aggiorna le vecchie tavole SVG come se fossero già migrate.

## File riutilizzabili

- [atmosfera-affluenza.css](atmosfera-affluenza.css): geometria e comportamento visivo, con token A/B.
- [atmosfera-affluenza.js](atmosfera-affluenza.js): rendering, stati dei dati, selezione del giorno e dialogo.
- [Verifiche_atmosfera.cjs](Verifiche_atmosfera.cjs): controlli di assenze e copertura.

Caricare prima i token, poi CSS e JavaScript del pattern. Inserire `SnodoAtmosfera.render(place)` nel contenitore e chiamare `SnodoAtmosfera.mount(container, place)` dopo il rendering. La demo e il prototipo riusano questi file; non hanno una copia separata del componente.
