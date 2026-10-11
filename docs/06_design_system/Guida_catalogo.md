# Catalogo del design system SNODO

[Apri la libreria dei componenti](index.html). La sezione è collegata dalla navigazione principale del sito, dalla Home e dal materiale di lavoro. La documentazione precedente rimane raggiungibile dalla libreria.

## Registro e anteprime

`Componenti_e_comportamenti.json` è il registro delle componenti: ID, nome, proprietà, stati, comportamento e schermate. Il catalogo contiene DS01–DS17 e DS19. La proposta di mappa del benchmark conserva il proprio identificativo DS-MAP e non viene presentata come una componente adottata.

DS08 Atmosfera e DS19 Affluenza condividono `atmosfera-affluenza.js` e CSS con S05 e S06. Gli altri componenti hanno una scheda di specifica, senza fingere un’anteprima già implementata. L’anteprima del catalogo permette di cambiare direzione A/B e stato dei dati. Il giorno modifica solo l’affluenza.

## Aggiungere una componente

1. Aggiungere un ID unico e una descrizione nel registro JSON e nella specifica Markdown. Registrare gli stati, le schermate e i vincoli di utilizzo.
2. Aggiornare la corrispondenza IA/DS e assegnare una categoria in `costruisci_catalogo.mjs`. Non riusare un ID di una proposta già esistente.
3. Se esiste un’implementazione riutilizzabile, collegarla all’anteprima e al prototipo. Aggiornare la disponibilità solo dopo aver verificato il funzionamento.
4. Rigenerare con `node 06_design_system/costruisci_catalogo.mjs`, poi controllare ricerca, filtri, nomi accessibili, stati assenti e larghezze mobile.

## Prototipo e pubblicazione

I collegamenti al prototipo usano `screen=S05` o `screen=S06`, un ID luogo valido e `theme=A` o `theme=B`. Aprono il contesto scelto e conservano le bozze della sessione; parametri non validi non creano luoghi o schermate. Il link “Design system” nella cornice della dimostrazione torna al catalogo.

I file non richiedono servizi esterni o un fetch JSON: il catalogo e le anteprime funzionano da file locale e da un sito statico. L’esportazione per Pages mantiene percorsi relativi e il gate del sito. Pages usa `docs` del ramo `codex/pubblicazione`: preparare il commit sul ramo di lavoro, poi aggiornare il ramo di pubblicazione quando approvato.

## Verifiche

Le verifiche del catalogo sono registrate in [QA_catalogo.json](QA_catalogo.json). Per il componente condiviso restano disponibili [QA_atmosfera_affluenza.json](QA_atmosfera_affluenza.json) e i controlli di regressione del prototipo. Sono controlli tecnici; non risultati di test con persone.
