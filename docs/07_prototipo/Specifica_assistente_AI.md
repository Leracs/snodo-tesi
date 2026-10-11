# Assistente e integrazione nel prodotto

Versione 0.1 · 11 ottobre 2026. Specifica progettuale H, derivata dai compiti confermati C e dai requisiti R01–R15. Il prototipo usa risposte predisposte e un catalogo dimostrativo; questa specifica non descrive un modello già implementato.

## Ruolo e confini

L'assistente trasforma una richiesta in criteri che la persona può leggere e correggere. Cerca nello stesso catalogo usato dai filtri, apre la stessa scheda luogo e mantiene il contesto del compito. Nella proposta agli amici aiuta a confrontare alternative; nella recensione lavora sugli appunti forniti. Il percorso manuale resta disponibile in tutti e tre i casi.

Il prodotto è pensato inizialmente per tutta Italia. La demo contiene otto luoghi fittizi in due città. Un catalogo dimostrativo incompleto non corrisponde alla copertura prevista del prodotto. Nessuna informazione del catalogo costituisce una raccomandazione su un esercizio reale.

L'AI non attesta sicurezza, inclusività, autenticità di una recensione o disponibilità attuale. Non deduce condizioni personali sensibili e non interpreta una risposta mancante come consenso. L'obiettivo di ridurre lo sforzo di ricerca sarà valutabile soltanto attraverso attività osservate, con i limiti della simulazione.

## I tre contesti

| Contesto | Ingresso | Informazioni disponibili | Risultato | Conferma della persona | Uscita e recupero |
|---|---|---|---|---|---|
| Ricerca individuale S10 | Pulsante Assistente da Esplora, lista o scheda | Città e zona visibili; riferimento delle distanze; criteri della ricerca; richiesta corrente. Preferenze private solo se scelte esplicitamente | Criteri interpretati, corrispondenze del catalogo, motivazione, fonte e dati mancanti | Applicare criteri; scegliere una scheda; salvare o avviare navigazione | Chiudi e ritorna all'origine; modifica criteri; ricerca manuale se AI indisponibile |
| Proposta con amici S13 | Invocazione esplicita nella proposta | Città dell'uscita; vincoli volontariamente condivisi; stato inviti; alternative; risposte esplicite | Alternative compatibili e compromessi; incompatibilità e persone ancora in attesa | Il singolo risponde; l'esito si concorda soltanto con conferme esplicite dei partecipanti coinvolti | Rimuovi suggerimento; modifica proposta; riapri decisione. Le modifiche rilevanti annullano le conferme precedenti |
| Recensione S16 | Aiutami a rivedere il testo | Luogo della bozza; contesto della visita dichiarato; risposte e appunti scritti. Nessun testo altrui | Suggerimento separato dagli appunti con confronto prima e dopo | Applica, modifica o rifiuta. Successiva anteprima e invio esplicito | Conserva bozza; ritorna alla scrittura manuale; ripristina appunti |

## Contratto tra assistente e interfaccia

Ogni richiesta conserva un identificativo, il contesto di provenienza e una versione dei criteri. L'output riferisce identificativi dei luoghi, non crea schede parallele. La scheda raggiunta da AI, mappa, salvati o chat risolve lo stesso oggetto del catalogo. Quando il contesto cambia, una risposta precedente resta leggibile ma non si applica silenziosamente alla nuova ricerca.

L'output di ricerca comprende: stato; criteri interpretati; criteri da chiarire; identificativi dei luoghi; motivi collegati a campi del catalogo; informazioni non disponibili; provenienza e aggiornamento. I motivi non diventano un punteggio universale di benessere. Le condizioni ambientali sono descritte separatamente dal gradimento personale.

Per una distanza si mostra sempre il riferimento geografico. La ricerca in una città diversa non richiede GPS e non usa implicitamente la posizione corrente. Una richiesta ambigua chiede la città prima di proporre alternative. Se la città è esplicita, la proposta di cambio viene resa visibile nei criteri; applicandola si aggiornano mappa e lista insieme.

Il gruppo ha un proprio contesto: città, occasione, vincoli condivisi e partecipanti. La ricerca personale può avere un'altra città e preferenze private. Un salvataggio individuale è trasferito al gruppo soltanto tramite una proposta esplicita, che ne conserva la città. Una modifica a città, luogo scelto o vincolo obbligatorio richiede nuove conferme.

## Stati da rappresentare

| Stato | Comportamento dell'interfaccia | Azione successiva |
|---|---|---|
| Pronto | Mostra il contesto attuale e l'input | Scrivere o tornare al percorso manuale |
| Chiarimento | Domanda puntuale sul criterio mancante; nessun risultato prematuro | Scegliere città o specificare un vincolo |
| Criteri da controllare | Elenco modificabile di città, budget, condizioni, priorità | Correggere o applicare |
| Risultati | Card standard, motivi e informazioni mancanti | Aprire scheda o confrontare |
| Nessun risultato | Conserva i vincoli; spiega quale combinazione non ha corrispondenze | Persona sceglie che cosa modificare |
| Fonti insufficienti | Il dato mancante resta mancante; evita una conclusione certa | Aprire origine o scegliere un altro luogo |
| Fonti discordanti | Mostra i resoconti con contesto e data, senza nascondere la differenza | Approfondire o mantenere incertezza |
| Interpretazione errata | Permette correzione dei criteri senza perdere la richiesta | Rigenerare la ricerca dopo modifica esplicita |
| Indisponibile | Messaggio breve e accesso alla ricerca/scrittura manuale | Proseguire il compito senza AI |
| Fuori copertura | Spiega la copertura iniziale italiana | Modificare città; non simulare disponibilità in Amsterdam |

## Regole della proposta agli amici

Quattro stati distinti: invitato, partecipante, preferenza espressa e conferma. La preferenza per un'alternativa non equivale alla conferma dell'esito. La regola iniziale H richiede conferma dei partecipanti che hanno accettato l'invito; gli invitati in attesa restano visibili e impediscono di presentare l'esito come accordo dell'intero gruppo. Si può conservare una proposta provvisoria. Non è prevista la chiusura automatica a maggioranza.

Se un invitato declina, il suo stato resta indicato e non si attribuisce un voto. Una partecipazione rifiutata non va confusa con la bocciatura del luogo. Se due vincoli obbligatori sono incompatibili, l'assistente li espone e chiede quale modificare; non sceglie per il gruppo. Il test formativo deve verificare quanto la regola risulti comprensibile e se produca uno stallo inutile.

## Regole della recensione

Il suggerimento conserva i fatti, il tono e il giudizio degli appunti. Un testo negativo non viene reso positivo e non vengono aggiunti prezzi, servizi, visite, dialoghi o qualità non dichiarati dall'autore. Le osservazioni riferite a una specifica visita non diventano proprietà permanenti del luogo.

Appunti e suggerimento sono separati. La persona sceglie se applicare il testo. L'anteprima chiarisce visibilità e identità mostrata: recensione pubblica con nome mostrato oppure contributo al gruppo selezionato con identità nota ai partecipanti. Un alias pubblico è una scelta di presentazione e non una promessa di anonimato tecnico. Il prototipo non implementa account, moderazione o protezioni di identità.

L'invio avviene soltanto da S17. Un errore conserva la bozza; il nuovo tentativo usa lo stesso identificativo di invio, per evitare duplicati nella demo. Un messaggio di esito indica che la pubblicazione è simulata. Non vengono trasmessi dati a un servizio.

## Script e simulazioni

Gli script verificabili sono in `Scenari_AI.json`; il catalogo unico è `Catalogo_mock.json`. Il supporto HTML riconosce soltanto richieste predisposte, con una risposta di limite per le altre. Non è un chatbot generalista. I messaggi degli amici e i guasti si attivano da controlli di simulazione esterni all'app; il partecipante viene informato della simulazione prima del compito.

La città richiesta, il budget e la scelta delle condizioni possono essere modificati manualmente. I casi di recupero coprono ricerca senza risultati, inviti in attesa/incompatibilità e fallimento dell'invio. Le interazioni del supporto locale non provano il funzionamento del futuro prototipo Figma; il file nativo richiederà un controllo separato.

## Realizzazione futura

Un servizio reale richiederebbe catalogo aggiornato, provenienza dei campi, gestione dei contributi, account e permessi, moderazione e controllo degli output. Il flusso progettato deve mantenere tracciabile la relazione tra un'affermazione e i dati da cui deriva. Queste sono condizioni di realizzazione, non capacità già presenti nella demo.

## Verifiche previste

R01/R02: una richiesta in Milano da una ricerca iniziale Roma cambia il contesto in modo leggibile senza GPS. R04/R05: un dato ambientale con pochi contributi resta qualificato. R08/R09: preferenza, conferma e attesa non si confondono. R10: ogni card AI apre lo stesso luogo del catalogo. R11/R12: un suggerimento non viene applicato né pubblicato senza azioni separate. R13: errore e ripresa preservano gli appunti. Queste verifiche tecniche non sostituiscono le osservazioni delle persone.
