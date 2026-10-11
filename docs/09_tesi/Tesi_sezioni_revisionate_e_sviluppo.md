# Sezioni revisionate e sviluppo della tesi UX UI

Testo di lavoro del 11 ottobre 2026. Queste sezioni sono proposte per l'integrazione nell'elaborato, conservato nel PDF originale. Comprendono introduzione e metodo, risultati dei due questionari, sintesi di Define e sviluppo di Ideate e Prototype. La desk research e il confronto dei competitor restano nell'originale e richiedono le correzioni indicate nel registro delle fonti. Le interviste non sono riscritte in assenza delle trascrizioni. La direzione UI e i risultati dei test rimangono aperti.

## 1 Introduzione

### 1.1 Obiettivo del progetto

Scegliere un luogo richiede di mettere insieme informazioni diverse. Il prezzo e la distanza possono essere semplici da confrontare; capire se un ambiente sarà adatto all'occasione è meno immediato. Una fotografia mostra una parte dello spazio, mentre una recensione restituisce il punto di vista di chi lo ha frequentato, in un momento e con aspettative che possono essere diversi dai propri. Il progetto nasce dall'interesse per questa distanza tra ciò che si riesce a sapere prima di una visita e ciò che si scopre sul posto.

L'obiettivo della tesi è progettare un'applicazione che aiuti a confrontare luoghi attraverso informazioni pratiche, condizioni dell'ambiente e testimonianze contestualizzate. La copertura iniziale prevista è tutta Italia. Questo non richiede che il prototipo contenga già ogni città: il catalogo dimostrativo serve a mettere alla prova i percorsi, mentre la struttura deve permettere di cambiare città o zona senza confonderle con la posizione della persona.

Ho mantenuto due situazioni d'uso: esplorare individualmente e decidere dove andare con amici. Nel primo caso la persona cerca, confronta e sceglie; nel secondo deve anche rendere espliciti alcuni criteri e capire se gli altri hanno davvero aderito alla proposta. A questi percorsi si collega il contributo dopo una visita. La recensione non è soltanto l'ultima schermata: è una delle fonti che permettono alle altre persone di valutare un luogo.

L'assistente AI è previsto nei tre contesti, con compiti differenti. Nella ricerca aiuta a esprimere criteri e a leggere alternative; nella chat sostiene il confronto senza decidere per il gruppo; nella recensione propone una formulazione degli appunti senza aggiungere esperienze. L'interesse progettuale riguarda soprattutto il modo in cui la persona comprende, corregge o rifiuta l'aiuto. Le prestazioni di un modello reale non sono oggetto di verifica nel prototipo Figma, dove le risposte saranno predisposte.

La tesi non assume che l'app possa garantire sicurezza, benessere o appartenenza. Questi temi motivano l'attenzione all'esperienza dei luoghi, ma il lavoro può valutare compiti più circoscritti: trovare un'informazione, capire quali criteri sono applicati, distinguere un suggerimento da una decisione e controllare un contributo prima dell'invio. Risparmio di tempo, uso continuativo e impatto sociale restano obiettivi da studiare oltre questa fase.

### 1.2 Metodo progettuale

Ho impostato il progetto secondo un approccio centrato sulle persone. ISO 9241-210:2019 descrive la progettazione centrata sull'essere umano attraverso la comprensione di utenti, compiti e contesti, il loro coinvolgimento, la valutazione con gli utenti, l'iterazione, l'attenzione all'intera esperienza e il contributo di competenze diverse. Non attribuisco alla norma l'elenco a tre principi presente nella prima stesura. Per questa revisione il riferimento è alla scheda ufficiale e alla preview del testo, non alla consultazione della norma integrale. [ISO 9241-210:2019](https://www.iso.org/standard/77520.html).

L'attenzione precoce agli utenti, la misurazione empirica dell'uso e l'iterazione compaiono anche nel lavoro di Gould e Lewis. Li considero orientamenti del progetto, distinguendoli dalla formulazione della norma. Raccogliere opinioni su un concetto è utile per scegliere cosa esplorare, ma non sostituisce l'osservazione delle persone mentre provano a svolgere un compito. [Gould e Lewis, 1985](https://research.ibm.com/publications/designing-for-usability-key-principles-and-what-designers-think--1).

Per organizzare il racconto della tesi mantengo Empathize, Define, Ideate e Prototype, seguite da Valutazione e Test. Il riferimento alle sei fasi, compresa Implement, appartiene al modello presentato da Sarah Gibbons; non è una divisione obbligatoria dell'intero Design Thinking. L'implementazione di un servizio funzionante rimane uno sviluppo futuro. L'ordine dei capitoli aiuta a leggere il lavoro, mentre le revisioni possono riportare da una schermata al requisito o dalla valutazione a una decisione precedente. [Gibbons, 2016](https://www.nngroup.com/articles/design-thinking/).

Nella ricerca distinguo dati numerici dei questionari, materiale discorsivo delle interviste e osservazioni del progettista. Il benchmark originale usa sei criteri scelti per il confronto dei tre servizi; i punteggi e le affermazioni sul loro uso richiedono una traccia delle osservazioni. Non li considero misure dell'efficacia della nuova applicazione. Anche le personas e i journey devono rendere riconoscibile ciò che deriva dai materiali e ciò che serve a costruire uno scenario.

### 1.3 Campioni e trattamento dei dati

La base quantitativa disponibile comprende due export. Il primo contiene 50 risposte, raccolte dal 22 dicembre 2025 al 21 gennaio 2026; il secondo 33, dal 25 maggio all'8 giugno 2026. Sono i periodi registrati nei file, con indicazioni EET/EEST: non permettono di ricostruire città e fuso effettivi dei partecipanti. I questionari non hanno un identificatore comune, perciò non posso appaiare le risposte, trattare il secondo come misura delle stesse persone o dichiarare un totale di 83 persone distinte.

Nel primo export 17 persone dichiarano di studiare, 30 di lavorare e tre nessuna delle due condizioni. Il modulo separa un ramo per gli studenti da un ramo per le altre 33 persone. Quest'ultimo contiene domande sul lavoro e sul co-working, ma comprende anche chi non lavora. Nell'analisi uso quindi «non studenti» per il ramo intero e «lavoratori» quando applico il filtro sulle 30 persone che dichiarano di lavorare. Tra gli studenti, nove sono fuorisede.

Il CSV contiene 66 colonne e alcune domande hanno intestazioni ripetute nei due rami. La lettura per posizione delle colonne conserva entrambi i percorsi, evitando che una risposta sovrascriva l'altra. Le celle vuote al di fuori del ramo assegnato sono vuoti strutturali. Il controllo non ha rilevato risposte mancanti nelle domande strutturate del ramo pertinente, né righe o vettori di risposte esattamente duplicati. Questo non dimostra, da solo, l'identità unica di ogni rispondente.

Calcolo le percentuali sulle risposte valide alla singola domanda. Per le domande multiple conto le persone che selezionano ciascuna opzione: la somma delle percentuali può superare il 100%. Nelle scale conservo tutti i valori da 1 a 5, anche quelli con frequenza zero. Quando accorpo 4 e 5 lo dichiaro; le medie descrivono le risposte del campione e non dimostrano differenze nella popolazione.

La ricerca qualitativa riguarda tre persone uniche, intervistate negli stessi due round. Il reclutamento è avvenuto attraverso conoscenze dirette e una rete indiretta di amici; Roma, Milano e Amsterdam sono i contesti citati. Amsterdam resta un contesto della ricerca, fuori dalla copertura iniziale del prodotto. I casi non rappresentano la popolazione delle tre città e i questionari non rappresentano tutta Italia. Non uso percentuali per presentare i temi delle tre persone o dichiarare una saturazione non documentata.

Le trascrizioni originali delle interviste non sono ancora disponibili per questa revisione. Le sintesi del PDF descrivono il lavoro precedente, ma non permettono di controllare ogni citazione e attribuzione. Per questo mantengo separata la verifica qualitativa dalla revisione dei questionari. Le stesse tre persone sono previste per il confronto delle style tile e i test formativi: la familiarità con il progetto e il possibile apprendimento vanno dichiarati come limiti.

## 2 Empathize

### 2.1 Primo questionario

Dopo l'analisi dei competitor ho raccolto 50 risposte a un primo questionario, per capire come le persone scelgono i luoghi e quali informazioni usano prima di andarci. Il reclutamento attraverso conoscenze dirette e rete di amici ha fornito indicazioni per il progetto, senza permettere di descrivere tutti i giovani o tutti gli abitanti di una città. Il percorso dedicato allo studio e quello dedicato alle altre persone sono stati mantenuti distinti nell'analisi.

Dieci studenti su 17 preferiscono studiare a casa e sette fuori. Tra i nove fuorisede, cinque scelgono la casa. Tra i 30 lavoratori, 19 preferiscono la casa, sei un luogo esterno e cinque dichiarano indifferenza. La preferenza non ne spiega la ragione: può riguardare comodità, tipo di attività o condizioni disponibili altrove. Non ne deduco che gli spazi esterni siano inadeguati, né che ogni studente abbia gli stessi bisogni di chi si è trasferito per studiare.

Atmosfera, distanza da casa e budget sono i criteri più selezionati, rispettivamente da 37, 30 e 27 persone su 50. La domanda permette più risposte. Accoglienza e possibilità di co-working sono indicate da 12 e 10 persone; le aggiunte libere comprendono anche rumore, affollamento e pertinenza del co-working nel proprio contesto. Il progetto deve poter mostrare condizioni concrete e lasciare che la persona scelga quali contano per l'occasione, senza imporre una graduatoria unica.

![Criteri di scelta del primo sondaggio](workspace/materiali/sondaggi/grafici/S04.png)

Figura 1. Criteri di scelta dichiarati nel primo questionario. Fonte e basi sono riportate nel grafico S04; la domanda ammette risposte multiple.

Nelle recensioni si cercano soprattutto qualità dei servizi, prezzi e immagini: 45, 39 e 22 persone su 50 selezionano queste opzioni. Atmosfera e accoglienza sono indicate da 16, i vincoli da 13. Questo mi aiuta a definire la gerarchia della scheda luogo: praticità e condizioni dell'esperienza devono restare leggibili insieme. La domanda riguarda ciò che viene cercato nelle recensioni; non misura automaticamente ciò che manca nei servizi esistenti.

La fiducia cambia secondo la situazione. Con meno di dieci recensioni si fidano 18 persone su 50; quando i testi sono molto simili, 29. Alla domanda sulla veridicità, che richiama anche recensioni scritte con AI, rispondono positivamente in 28. I risultati non descrivono una sfiducia condivisa da tutti. Sono invece 33 le persone che dichiarano una delusione dopo aver visitato un luogo con recensioni positive. Il dato suggerisce di approfondire contesto e aspettative, ma non dimostra che quelle recensioni fossero false.

La proposta di una mappa per trovare luoghi in base alle attività possibili riceve 45 valutazioni nei valori 4–5, con media 4,32 su 5. È un interesse verso un concetto descritto nel modulo. Lo uso per motivare la prototipazione; il funzionamento di mappa, lista e scheda dovrà essere osservato in compiti concreti. Il questionario non misura l'uso di un'interfaccia e non verifica il ruolo di un chatbot.

### 2.2 Secondo questionario

Nel secondo questionario ho approfondito la distanza tra le informazioni disponibili prima della visita e l'esperienza vissuta. Le 33 risposte riguardano episodi di disagio, criteri di scelta, reazioni a un'esperienza negativa e fiducia verso una piattaforma descritta nel modulo. Sedici persone hanno 18–24 anni, 16 hanno 25–34 anni e una almeno 35. Questo dato descrive il campione; non consente di sostituire età e attività con etichette generazionali.

Tredici persone su 33 scelgono 4–5 per l'evitamento di un posto che temono possa non essere adatto. Sono otto per la differenza tra descrizione e luogo visitato, sei per esigenze pubblicizzate ma non rispettate e quattro per l'uscita anticipata dovuta al disagio. Sedici indicano 4–5 per il disagio legato agli altri clienti e 11 per il cambiamento di comportamento dello staff secondo gruppo o identità. Sono domande distinte: non riassumo questi episodi in una frequenza unica del disagio.

La domanda sulle esigenze non rispettate è compilata da tutti, anche da chi non dichiara esigenze particolari. Il risultato riguarda quindi le 33 risposte e non soltanto un sottogruppo con bisogni specifici. Anche la formulazione delle domande limita la lettura: un punteggio alto riferisce l'esperienza dichiarata, senza verificare dall'esterno il comportamento del locale o le sue cause.

Le azioni dopo un'esperienza negativa possono coesistere. Ventisette persone selezionano il mancato ritorno, 22 il racconto ad amici o familiari e 11 la recensione negativa. Nove selezionano sia «non ci torno più» sia la recensione. Non posso quindi chiamare il mancato ritorno «silenzio» o dire che tutte queste esperienze siano invisibili. Due risposte combinano «nulla» con altre azioni: le conservo, segnalando l'incoerenza senza eliminare i partecipanti.

![Reazioni dopo un esperienza negativa](workspace/materiali/sondaggi/grafici/S09.png)

Figura 2. Azioni dichiarate dopo un'esperienza negativa. Il grafico S09 mantiene le opzioni multiple; il mancato ritorno non esclude una recensione.

Tra i sei fattori proposti, le medie maggiori riguardano sentirsi al sicuro, 4,21 su 5, sentirsi accolti e non giudicati, 4,18, e informazioni chiare e oneste, 4,15. Seguono tranquillità, 3,45, esigenze alimentari, 3,06, e possibilità di portare un animale, 2,39. Il confronto vale per questi fattori e questo campione. Non dimostra che tutti gli aspetti emotivi contino più di tutti quelli pratici. Un bisogno meno selezionato può essere un vincolo decisivo per una singola persona.

![Importanza dei fattori di scelta nel secondo sondaggio](workspace/materiali/sondaggi/grafici/S10.png)

Figura 3. Distribuzioni dei sei fattori proposti nel secondo questionario. Il grafico S10 affianca distribuzioni e medie descrittive.

La compagnia abituale più indicata è quella degli amici, con 21 risposte, seguita dal partner, con 11, e dalla famiglia, con una. Questo contesto sostiene l'esplorazione di un percorso per scegliere con amici. Non misura il comfort da soli o in compagnia. L'item dedicato a questa alternativa usa la scala «per niente»–«tanto», ma non chiarisce quale delle due condizioni venga valutata. I punteggi 1, 2 e 3 osservati non sono categorie; conservo la distribuzione 16, 9, 8, 0, 0 e non la uso per ricavare una preferenza.

La piattaforma dedicata a benessere e inclusività riceve 26 valutazioni nei valori 4–5, con media 4,12 su 5. Sono invece 16 i valori 4–5 alla domanda sull'aver scelto un posto basandosi su recensioni di questo tipo. Una domanda riguarda la fiducia in un concetto presentato positivamente, l'altra richiama scelte precedenti. Nessuna delle due dimostra adozione futura o superiorità rispetto ai servizi esistenti.

### 2.3 Risposte aperte e verifica qualitativa

Ho mantenuto le risposte aperte come materiale descrittivo, separato dalle interviste. Nel primo export le aggiunte precisano condizioni come tavoli, silenzio e quantità di persone, oppure spiegano che il co-working interessa solo in determinate situazioni. Nel secondo una nota richiama la soggettività delle esperienze e un'altra attribuisce alla compagnia un ruolo nel sentirsi accolti. Questi casi aiutano a formulare requisiti più precisi, senza diventare frequenze dei temi.

È presente anche un caso contrario all'interesse universale per la piattaforma: una persona dichiara scarso interesse personale, pur attribuendo valore alla trasparenza di immagini e atmosfera. Lo mantengo nella lettura perché impedisce di trasformare un giudizio favorevole sul concetto in una previsione di uso per tutti. Le note prive di contenuto UX o le valutazioni commerciali non motivate restano negli originali, senza essere convertite in testimonianze del catalogo.

Per le interviste il passaggio successivo consiste nel collegare ciascun tema alla persona, al round e all'estratto originale. Le citazioni riportate nel PDF e nelle empathy map richiedono questo controllo. In assenza delle trascrizioni non aggiungo frasi dei partecipanti né attribuisco a tutti una reazione multisensoriale, una sfiducia o una causa del comportamento. Le formulazioni che seguono utilizzano soltanto dati verificabili e proposte riconoscibili.

## 3 Define

### 3.1 Personas e scenari

Vanessa, Jacopo e Ginevra restano i riferimenti del progetto. La prima vive a Milano e cerca di conoscere una città nuova; Jacopo, anch'egli a Milano, affronta la scelta con un gruppo di amici; Ginevra vive a Roma e valuta spesso da sola se un luogo valga la trasferta. Le città e i dettagli dei profili non vengono riscritti per adattarli al catalogo del prototipo. L'applicazione inizialmente nazionale è una decisione di prodotto, distinta dalla provenienza dei casi.

Le personas raccolgono situazioni e bisogni già presenti nella bozza, senza una graduatoria. Le frasi in Says e i pensieri in Thinks sono da trattare come parafrasi o costruzioni narrative finché non risultano collegati agli originali. Non diventano citazioni perché racchiusi tra virgolette. Anche le emozioni nei journey sono interpretazioni qualitative quando non derivano da un estratto verificato.

Per delimitare il prototipo ho scelto i compiti, senza imporre una persona primaria. Lo scenario individuale riguarda scoperta e confronto; quello con amici aggiunge criteri condivisi e risposte alla proposta. Studio e lavoro fuori casa rimangono occasioni possibili, ma non sono il compito principale attuale. La recensione attraversa entrambi gli scenari perché permette di raccontare una visita e rendere quel contributo disponibile ad altri.

### 3.2 Dalle evidenze ai requisiti

La prima sintesi riguarda la leggibilità dei criteri. Atmosfera, distanza e budget sono frequentemente selezionati nel primo questionario, mentre servizi, prezzi e immagini sono cercati nelle recensioni. Per il progetto propongo di renderli reperibili nella scheda e utilizzabili nella ricerca. Il dato sostiene l'attenzione a queste informazioni; la loro disposizione e la distinzione fra vincolo e preferenza sono decisioni da verificare.

La seconda riguarda il contesto delle testimonianze. La fiducia cambia secondo la domanda e 33 persone dichiarano delusione nonostante recensioni positive. Per questo propongo di distinguere informazioni del gestore, contributi degli utenti e riepiloghi, mostrando quando e in quale situazione si riferiscono all'esperienza. Non prometto di eliminare le recensioni false né considero una fotografia dell'utente una verifica automatica della realtà.

La terza riguarda il passaggio dall'esperienza al contributo. Il racconto a persone vicine è più selezionato della recensione negativa, ma le due azioni possono coesistere. Un percorso breve e un aiuto facoltativo alla scrittura potrebbero ridurre l'impegno richiesto per contribuire. È una proposta: il questionario non dimostra che la lunghezza del flusso sia la causa della mancata recensione o che ogni persona desideri essere sollecitata.

Sul piano sociale, gli amici sono la compagnia abituale più indicata nel secondo questionario. La richiesta di maggiore enfasi sociale ha orientato il progetto verso una proposta di uscita circoscritta. Chat, inviti e regola di conferma sono il modo scelto per esplorare questa direzione; non sono prescrizioni tecniche del relatore e non risultano validati dal dato sulla compagnia.

La matrice delle evidenze conserva questi passaggi. Ogni elemento è classificato come dato disponibile, scelta confermata, proposta del testo, appunto vocale, ipotesi attuale o materiale mancante. Collega fonte e limite all'interpretazione, poi al requisito, al componente, alla schermata e alla verifica prevista. Non confonde la presenza di un numero con la prova di una soluzione.

### 3.3 Domanda di progetto

La domanda che guida questa versione è: come può un'app aiutare una persona o un gruppo di amici a confrontare luoghi in Italia usando informazioni pratiche ed esperienziali comprensibili, mantenendo il controllo sui criteri e sulla scelta?

Il problema viene delimitato alla decisione e al contributo. Non richiede che il servizio risolva isolamento, mobilità urbana o accessibilità reale degli spazi. Può rendere visibile una condizione o un'informazione mancante; non può garantire che una persona si sentirà a proprio agio. Questo limite aiuta a progettare azioni verificabili e a formulare conclusioni proporzionate ai materiali raccolti.

## 4 Ideate

### 4.1 Domande e alternative considerate

In questa fase riprendo le proposte delle pp. 25–27 del PDF e ne rivedo la selezione alla luce dei dati completi e del perimetro attuale. È un'attività di sviluppo successiva alla prima stesura, assistita da Codex. Non la presento come un Round Robin già svolto con altre persone. Le alternative vengono confrontate per il compito che sostengono, la dipendenza dai dati e la possibilità di rappresentarle nel prototipo.

La prima domanda è come rendere leggibili le condizioni di un ambiente prima della visita. La bozza propone tag, grafici per fascia oraria, un punteggio di comfort e affollamento in tempo reale. Per il nucleo mantengo dimensioni separate, come rumore, luce e affollamento, accompagnate da periodo e provenienza. Un punteggio unico mescolerebbe condizioni e gradimento: un ambiente molto vivace può essere desiderabile per un'occasione e inadatto per un'altra. L'affollamento live rimane uno sviluppo futuro, perché richiede raccolta e aggiornamento che il prototipo non realizza.

La seconda domanda riguarda la comprensione di accoglienza e sicurezza percepita. Le domande guidate alla recensione possono aiutare a raccontare un episodio concreto; un badge di «sicurezza verificata» rischia invece di presentare una garanzia che le testimonianze non possono offrire. Mantengo contributi contestualizzati e tag con significato descritto. Non assegno certificazioni di inclusività sulla base di pochi giudizi o di una media.

La terza domanda è come confrontare informazioni dichiarate e vissute. La galleria distingue media del luogo e degli utenti, con fonte visibile anche quando l'immagine viene ingrandita. Il confronto può aiutare la lettura, ma non verifica autenticità o attualità. Le informazioni discordanti restano distinguibili: se un servizio è dichiarato dal gestore e un contributo racconta un'eccezione, l'interfaccia espone i due elementi e il loro contesto, invece di risolverli con un indicatore di affidabilità inventato.

La quarta riguarda il contributo dopo una visita. Il nucleo comprende domande brevi, appunti, bozza, aiuto AI facoltativo e controllo prima dell'invio. La scelta dell'identità mostrata non viene chiamata anonimato assoluto: il nome può non apparire pubblicamente senza che il servizio rinunci a collegare il contributo a un account. Promemoria da permanenza, reputazione automatica e badge di frequenza non sono necessari per completare questo compito e restano fuori dal prototipo iniziale.

### 4.2 Concept e perimetro

Il concept collega scoperta, valutazione e confronto, usando lo stesso luogo come riferimento in mappa, lista, assistente, salvati e proposta agli amici. Non occorre ricominciare la ricerca quando si apre una scheda o si aggiunge un'alternativa alla chat. Il contesto conserva città, criteri e punto da cui sono riferite eventuali distanze. La persona può esplorare un'altra città italiana senza autorizzare la posizione.

Ho concentrato il nucleo su tre esiti: scegliere un luogo individualmente, riconoscere lo stato di una scelta con amici e controllare un contributo. Feed generale, follower, incontro con sconosciuti, pagamenti e prenotazioni non entrano in questi percorsi. Anche il riepilogo periodico delle visite e le notifiche citate nel vocale vengono rinviati. La loro esclusione non è un giudizio sul valore futuro: evita di attribuire al prototipo capacità non necessarie ai compiti scelti.

Il catalogo può essere dimostrativo. Roma è una possibile città per costruire gli esempi e Roma insieme a Milano è una proposta reversibile per mostrare il cambio di area. Le personas non diventano osservazioni di questo catalogo. Ogni informazione mock deve coincidere tra card, scheda, risposta AI e chat; indicatori d'atmosfera interni all'app restano separati dai grafici reali dei questionari.

### 4.3 Assistente per la ricerca

Nella ricerca l'assistente parte da ciò che la persona dichiara e dal contesto geografico visibile. Una richiesta come «un posto tranquillo dove stare con due amici» non basta a definire città, budget o significato di tranquillo. Il sistema deve chiedere solo il chiarimento necessario e rendere visibile l'interpretazione, per esempio traducendo la richiesta in criteri modificabili. La conversazione non sostituisce filtri e lista: li usa come rappresentazione controllabile della stessa ricerca.

Le risposte aprono le normali card del catalogo, con motivi di corrispondenza e limiti. Se manca il dato sul rumore, il luogo non viene presentato come sicuramente silenzioso. Se nessuna alternativa rispetta un vincolo, l'assistente chiede quale criterio la persona vuole modificare. Il vincolo non viene allentato per produrre comunque una risposta. Quando una città è ambigua, il chiarimento viene prima dei risultati; fuori dalla copertura italiana il sistema espone il limite.

Il passaggio a lista, scheda o filtri conserva i criteri. La persona può correggere un valore, annullare una richiesta o continuare senza AI. L'indisponibilità del chatbot non rende impossibile la ricerca. Nel prototipo questi comportamenti sono scenari predisposti: permettono di osservare comprensione e controllo, non la precisione di un modello aperto a qualsiasi richiesta.

### 4.4 Assistente nella scelta con amici

Nella proposta di uscita il contesto appartiene al gruppo: città, occasione e criteri condivisi volontariamente. Le preferenze private o le conversazioni individuali non entrano automaticamente nella richiesta. Un partecipante può dichiarare un vincolo utile senza spiegare la ragione personale. L'assistente interviene quando chiamato e il suo autore rimane distinguibile da quello dei messaggi umani.

La risposta mette a confronto alternative e compromessi, senza scegliere per gli amici. Invito, partecipazione, preferenza per un luogo e conferma dell'uscita sono stati diversi. La regola proposta richiede una risposta esplicita dei partecipanti attivi necessari alla decisione. Finché qualcuno è in attesa o contesta la proposta, l'esito resta provvisorio. Il silenzio non viene interpretato come accordo; un cambiamento importante del luogo o dei criteri riapre la conferma.

Questa regola è da verificare. Le risposte simulate degli amici nel test individuale consentiranno di osservare se la persona capisce chi ha risposto e come riaprire la scelta. Non dimostrano che un gruppo reale si coordini meglio o che la conversazione richieda meno tempo. Il confronto non include l'ottimizzazione dei tragitti dalle case di tutti: ogni partecipante può poi aprire la destinazione nel proprio navigatore.

### 4.5 Assistente per la recensione

L'aiuto alla recensione parte da appunti, risposte guidate e visita dichiarata dall'autore. Può proporre una domanda neutra o riordinare il testo, ma non completare con fatti plausibili, copiare esperienze altrui o attenuare una critica per renderla più gradevole. La proposta viene mostrata separatamente dalla bozza, così che si possano confrontare contenuto iniziale e modifica.

Applicare il suggerimento e pubblicare sono azioni distinte. La persona può rifiutare, correggere o continuare manualmente; l'anteprima mantiene visibilità e identità mostrata comprensibili prima dell'invio. L'uscita conserva una bozza e un errore non deve perdere gli appunti o produrre un doppio invio. Nel prototipo l'esito dell'invio è simulato e dichiarato durante la valutazione.

Il ruolo dell'AI cambia quindi nei tre contesti, ma mantiene un limite comune: propone sulla base dei dati disponibili e lascia riconoscibile la decisione umana. Una risposta convincente non è, da sola, prova di correttezza. Fonti, incertezza e possibilità di correzione devono essere parti dell'interazione, non una nota lontana dal punto in cui la persona sceglie.

## 5 Prototype

### 5.1 Architettura delle informazioni

L'architettura proposta organizza quattro aree: Esplora, Salvati, Chat e Profilo. Esplora contiene mappa, lista e accessi al luogo; Salvati permette di riprendere una scelta; Chat raccoglie proposte di uscita circoscritte; Profilo ospita preferenze, contributi e bozze. L'assistente è trasversale e ha anche richiami contestuali. Queste etichette sono scelte di lavoro: il perimetro confermato riguarda i compiti, non il numero definitivo di voci.

Distinguo gli oggetti dalle schermate e dalle azioni. Il luogo è l'oggetto condiviso; una card lo rappresenta; la ricerca è una funzione; il campo di ricerca è un componente. L'inventario descrive le strutture della schermata senza compilare ora i contenuti dei singoli locali. Questa distinzione permette di progettare gerarchia e relazioni prima di usare il catalogo dimostrativo.

Il contesto geografico contiene città o comune, zona e riferimento delle eventuali distanze. Il criterio può essere una preferenza oppure un vincolo. Le informazioni sul luogo distinguono dichiarazione, testimonianza, riepilogo e dato assente. La proposta di uscita collega partecipanti, alternative e risposte; la recensione collega visita, contenuto, visibilità e stato della bozza. In questo modo la stessa scheda può essere aperta dalla mappa, dall'AI o dal gruppo senza duplicare il luogo.

### 5.2 Inventario delle schermate e gerarchia

Il blueprint comprende 21 schermate strutturali. Gli identificativi sono riferimenti di lavoro: filtri, galleria o dettaglio possono essere overlay o varianti senza richiedere una pagina autonoma. L'inventario completo specifica per ciascuna scopo, componenti, ingresso, azione primaria, uscita e stati. La sintesi seguente ne rende leggibile il rapporto con i compiti.

| Gruppo | Schermate | Gerarchia e relazione con il compito |
|---|---|---|
| Avvio e ricerca | S01–S04 | Città/zona, ricerca, criteri, mappa/lista e filtri; scelta dell'area anche senza GPS |
| Valutazione del luogo | S05–S09 | Praticità, azioni, atmosfera, media, recensioni e origine del dato; approfondimenti sulla stessa scheda |
| Assistente individuale | S10 | Messaggi, chiarimenti, criteri correggibili e card standard; ritorno alla ricerca |
| Scelta con amici | S11–S14 | Proposte, invito, criteri condivisi, alternative, risposte ed esito; decisione distinta dall'AI |
| Contributo | S15–S18 | Visita e domande, appunti, aiuto, anteprima/visibilità ed esito; bozza recuperabile |
| Ripresa e uscita | S19–S21 | Salvati, profilo/bozze e navigazione esterna; conservazione del contesto |

Nella scheda S05 prezzi, servizi e condizioni pratiche non devono scomparire dietro il racconto dell'atmosfera. Le azioni di salvare, proporre e navigare sono reperibili senza confonderle con l'accesso alle recensioni. La galleria S07 espone la provenienza dei media; le recensioni S08 mostrano contesto della visita e identità scelta. S09 rende leggibile perché un'informazione è insufficiente, vecchia o discordante.

Gli indicatori di atmosfera in S06 separano dimensioni, fascia oraria, periodo e copertura dei contributi. Un'assenza di osservazioni resta «dato non disponibile», non uno zero di rumore o un giudizio negativo sul luogo. La scala deve spiegare cosa misura; il riepilogo testuale permette di leggere il significato senza dipendere soltanto da un grafico o da un colore.

### 5.3 Flussi e ritorni

Il percorso individuale comincia dalla scelta dell'area, prosegue con ricerca o assistente, passa al confronto dei risultati e alla scheda. Termina con una scelta salvata o con l'apertura consapevole della navigazione esterna. La visita soddisfacente non è l'esito che il prototipo può garantire. Il recupero principale riguarda nessun risultato o un criterio interpretato male: la persona modifica il criterio e torna a una lista coerente senza perdere il contesto geografico.

Il percorso con amici parte da una proposta nuova o da un luogo già trovato. Dopo l'invito si condividono soltanto i criteri scelti, si confrontano alternative e si risponde al luogo proposto. L'esito distingue accordo e attesa. Un vincolo incompatibile o una proposta contestata richiede una modifica esplicita; la conferma precedente non continua a valere automaticamente. Il partecipante può sempre aprire la stessa scheda usata nella ricerca.

Il contributo parte dalla visita dichiarata o dalla ripresa di una bozza. Domande e appunti precedono l'aiuto facoltativo; confronto, anteprima e visibilità precedono l'invio. Il recupero riguarda uscita, suggerimento errato o fallimento simulato dell'invio. La sequenza rende possibile completare il contributo senza AI e vedere il proprio giudizio prima di renderlo disponibile agli altri.

Nei journey prima/dopo mantengo stessi bisogno iniziale, occasione, vincoli e punto di arrivo. Il percorso proposto rappresenta un'esperienza attesa, non osservata. Trasporti e coordinamento reale non vengono eliminati dal racconto perché l'app conserva la scelta: restano condizioni esterne. Non disegno curve emotive numeriche o risparmi di tempo senza misurazioni.

### 5.4 Wireframe e stati problematici

L'immagine iniziale costituisce una base per mappa, lista, scheda e recensione. Nello sviluppo mantengo queste strutture e ne rendo espliciti i controlli. La Home serve a orientarsi: le testimonianze vengono approfondite nella scheda, anziché comparire come piccole anteprime nel punto iniziale. La barra di navigazione usa etichette leggibili e l'assistente ha un accesso riconoscibile; il solo segno più non ne spiega la funzione.

Il pannello sulla mappa ha stati ridotto, intermedio ed espanso. Il cambio di stato conserva selezione e criteri. La mappa rimane nel contesto di provenienza, ma l'espansione può occupare la schermata se serve a leggere un testo lungo. La proposta vocale di mantenerla sempre visibile non diventa un vincolo assoluto prima della verifica. Scroll, chiusura e ritorno devono avere un comportamento coerente anche quando il contenuto occupa più spazio.

Per ciascun flusso considero almeno un problema recuperabile, oltre al percorso ordinario: posizione negata e scelta manuale, nessun risultato, informazione insufficiente, errore d'interpretazione, partecipante in attesa, AI indisponibile o bozza non ancora inviata. Non occorre rappresentare ogni combinazione possibile, ma gli stati che impediscono il compito o cambiano una decisione non possono essere lasciati impliciti.

Il passaggio a Maps esterne è un'uscita riconoscibile. Il prototipo simulerà la scelta del navigatore e il ritorno alla scheda o alla proposta, mantenendo luogo e area. Non realizza itinerari reali, disponibilità dei mezzi o calcolo dei tempi di viaggio. Una distanza riferita a un punto dichiarato non viene trasformata in durata del tragitto senza una fonte adeguata.

### 5.5 Due style tile e design system

Le due style tile confrontano direzioni visive usando gli stessi contenuti e componenti: palette con ruoli, gerarchia tipografica, pulsanti, campo di ricerca, tag, card luogo e recensione, messaggio AI e campione di atmosfera. Mantengo quantità d'informazione e complessità confrontabili, così che il giudizio non dipenda dal fatto che una proposta contiene più funzioni o meno testo. I pannelli sono proposte statiche, non un prototipo testato.

La scelta della direzione rimane aperta. Il confronto con le tre persone dovrà raccogliere chiarezza, fiducia percepita, accoglienza, adeguatezza e motivi, oltre alla preferenza. L'ordine A/B verrà alternato dove possibile e registrato; con tre partecipanti non può essere perfettamente bilanciato. Anche «nessuna» e i giudizi contrari verranno conservati. La preferenza estetica non dimostra usabilità o affidabilità del servizio.

La proposta A usa una base crema e terracotta, con Georgia e Trebuchet; la proposta B usa neutri e petrolio, con Verdana e Trebuchet. Sono due direzioni di lavoro, non preferenze attribuite agli utenti. Il nome SNODO usato nei pannelli rimane provvisorio. Le due versioni mantengono gli stessi contenuti e comportamenti: cambia il trattamento visivo, non la funzione dei controlli.

Il design system ha una base provvisoria mentre si attende il confronto. Token A/B e specifiche comuni descrivono ruoli di colore, testo, spaziature, bordi, varianti e stati. La versione definitiva dipenderà sia dal feedback sia dai bisogni dei flussi. Il controllo di contrasti o dimensioni è riferito agli elementi controllati; non viene presentato come conformità generale del prodotto. Gli asset statici sono modificabili e importabili, ma non implementano da soli tastiera, lettore di schermo o collegamenti nativi Figma.

### 5.6 Catalogo e prototipo

Il prototipo Figma deve collegare i tre percorsi, con punto iniziale e reset per ciascun compito. Il catalogo contiene dati dimostrativi dichiarati: nomi, orari, recensioni, immagini e indicatori non costituiscono informazioni aggiornate di locali reali. Le risposte AI e gli eventi degli amici sono predisposti. L'interazione dimostra uno scenario progettato, senza far credere che un backend, un modello o un sistema multiutente siano già funzionanti.

La costruzione comprende una mappa generale, un inventario delle 21 schermate, i tre user flow e 21 wireframe base con 12 varianti di recupero. Sono tavole statiche e specifiche modificabili. Non cambiano gli identificativi o i 17 requisiti del blueprint; precisano stati, ritorni e componenti necessari ai compiti. La presenza dei file permette di discutere la proposta concreta, senza equivalere a una verifica delle interazioni.

Le tavole importabili, gli inventari e gli script costituiscono materiali di costruzione. Il file nativo Figma e i suoi collegamenti devono essere verificati prima di dichiarare concluso il prototipo. Finché tale verifica non è avvenuta, il testo descrive struttura e comportamenti proposti; non attribuisce a questi artefatti un test con persone o una selezione UI già raccolta.

## 6 Valutazione prevista e limiti

La valutazione formativa coinvolgerà le stesse tre persone delle interviste. Ogni persona proverà i tre compiti con istruzioni neutrali e scenari dimostrativi. Il facilitatore annoterà versione, ordine, esito autonomo o con aiuto, difficoltà e interpretazioni. Non assegnare una persona a un solo flusso aiuta a non confondere differenze individuali e differenze fra percorsi; eventuali compiti non svolti verranno comunque registrati.

Nel compito individuale osserverò se città e criteri sono compresi e correggibili, come viene letto un dato mancante e quale informazione sostiene la scelta. Nel compito sociale osserverò distinzione fra invito, proposta e accordo, risposta in attesa e modifica di un vincolo. Nel contributo osserverò controllo degli appunti, rifiuto o applicazione dell'AI, comprensione della visibilità e recupero della bozza. Sono verifiche previste, senza risultati compilati.

Se le risposte degli amici sono simulate, il test individuale riguarda la comprensione del flusso. Un'eventuale attività delle tre persone insieme andrà descritta separatamente, senza contarle come tre nuovi partecipanti. I tempi rilevati saranno riferimenti delle sessioni, non una prova causale del vantaggio dell'AI. La familiarità con il progetto e la piccola base limitano l'estensione dei risultati.

Per ogni problema emerso occorrerà collegare l'osservazione alla modifica e all'eventuale verifica successiva. Una modifica non ritestata rimarrà tale. A oggi non sono stati forniti feedback sulle tile o osservazioni di test: la direzione UI, gli esiti dei compiti e i benefici d'uso non vengono dichiarati acquisiti.

## 7 Stato del lavoro e conclusioni provvisorie

La revisione dei dati rende più preciso il problema: non una sfiducia universale o l'assenza assoluta di informazioni, ma la necessità di confrontare criteri, contesto e testimonianze senza confonderne il significato. La struttura proposta collega i tre compiti e rende l'aiuto AI correggibile, mantenendo praticabile il percorso ordinario. È la base per produrre e verificare gli artefatti successivi, non la dimostrazione del loro successo.

Restano da verificare gli originali qualitativi, raccogliere il confronto delle tile e osservare il prototipo nativo. Costi di realizzazione, gestione dei dati e moderazione potranno essere stimati dichiarando ipotesi e voci; non sono spese già sostenute o prezzi verificati in questo documento. L'impatto sociale sarà discusso come potenziale e con condizioni necessarie, senza attribuire al prototipo una riduzione osservata dell'isolamento o un miglioramento della salute.

### Uso dell intelligenza artificiale in questa revisione

Queste sezioni sono state sviluppate con Codex a partire dal PDF, dagli export e dalle analisi di lavoro. Codex ha contribuito all'analisi dei questionari, ai grafici, al controllo delle interpretazioni, alla critica dell'elaborato, alla matrice delle evidenze e alla produzione editoriale e progettuale. I contributi devono essere descritti nella dichiarazione finale in base a ciò che viene effettivamente adottato. Questa versione non attesta una revisione personale già conclusa da parte dell'autore.

Il PDF annota ChatGPT per brainstorming, Perplexity per rielaborazione e chiarificazione concettuale e Claude per rielaborazione. La trascrizione degli appunti vocali è stata prodotta localmente con Parakeet v3, mantenendo i dubbi, senza una verifica integrale parola per parola tramite ascolto. Non risulta documentata una generazione di immagini con AI per queste sezioni: i grafici derivano da codice e dati, mentre le tavole progettuali sono artefatti grafici di lavoro. La conformità a disposizioni ufficiali AANT richiede il testo delle disposizioni e non viene certificata qui.

## Riferimenti utilizzati nelle sezioni

- ISO. 2019. ISO 9241-210 Ergonomics of human system interaction Part 210 Human centred design for interactive systems. [Scheda ufficiale](https://www.iso.org/standard/77520.html). Consultata anche la [preview della norma](https://cdn.standards.iteh.ai/sist-preview/77520/33cc3cf17e5e4f1894ee872ed4f54fb6/ISO-9241-210-2019.pdf), §5.1 e tabella 1; non il testo integrale.
- Gould, J. D. e Lewis, C. 1985. Designing for usability Key principles and what designers think. Communications of the ACM, 28(3), 300–311. [Abstract originale IBM Research](https://research.ibm.com/publications/designing-for-usability-key-principles-and-what-designers-think--1).
- Gibbons, S. 2016. Design Thinking 101. Nielsen Norman Group, 31 luglio. [Articolo dell'autrice](https://www.nngroup.com/articles/design-thinking/).
- Ricerca di progetto. SONDAGGIO TESI.csv, 50 risposte; Sondaggio2.csv, 33 risposte. Dizionario per colonna, frequenze e statistiche nella cartella materiali/sondaggi; grafici S04, S09 e S10 richiamati in queste sezioni. Export conservati nei file originali.
- Materiali progettuali. Elaborato PDF, pp. 12–28; journey PDF di sette pagine; immagine wireframe e appunti vocali dell'11 ottobre 2026. Nuova matrice delle evidenze e blueprint nella cartella di lavoro; citazioni delle interviste in attesa degli originali.
