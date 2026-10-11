# Introduzione e metodo

## 1 Obiettivo del progetto

Scegliere un luogo richiede di mettere insieme informazioni diverse. Il prezzo e la distanza possono essere semplici da confrontare; capire se un ambiente sarà adatto all'occasione è meno immediato. Una fotografia mostra una parte dello spazio, mentre una recensione restituisce il punto di vista di chi lo ha frequentato, in un momento e con aspettative che possono essere diversi dai propri. Il progetto nasce dall'interesse per questa distanza tra ciò che si riesce a sapere prima di una visita e ciò che si scopre sul posto.

L'obiettivo della tesi è progettare un'applicazione che aiuti a confrontare luoghi attraverso informazioni pratiche, condizioni dell'ambiente e testimonianze contestualizzate. La copertura iniziale prevista è tutta Italia. Questo non richiede che il prototipo contenga già ogni città: il catalogo dimostrativo serve a mettere alla prova i percorsi, mentre la struttura deve permettere di cambiare città o zona senza confonderle con la posizione della persona.

Il progetto si concentra su due situazioni d'uso: esplorare individualmente e decidere dove andare con amici. Nel primo caso la persona cerca, confronta e sceglie; nel secondo deve anche rendere espliciti alcuni criteri e capire se gli altri hanno davvero aderito alla proposta. A questi percorsi si collega il contributo dopo una visita. La recensione non è soltanto l'ultima schermata: è una delle fonti che permettono alle altre persone di valutare un luogo.

L'assistente AI è previsto nei tre contesti, con compiti differenti. Nella ricerca aiuta a esprimere criteri e a leggere alternative; nella chat sostiene il confronto senza decidere per il gruppo; nella recensione propone una formulazione degli appunti senza aggiungere esperienze. L'interesse progettuale riguarda soprattutto il modo in cui la persona comprende, corregge o rifiuta l'aiuto. Le prestazioni di un modello reale non sono oggetto di verifica nel prototipo Figma, dove le risposte saranno predisposte.

La tesi non assume che l'app possa garantire sicurezza, benessere o appartenenza. Questi temi motivano l'attenzione all'esperienza dei luoghi, ma il lavoro può valutare compiti più circoscritti: trovare un'informazione, capire quali criteri sono applicati, distinguere un suggerimento da una decisione e controllare un contributo prima dell'invio. Risparmio di tempo, uso continuativo e impatto sociale restano obiettivi da studiare oltre questa fase.

## 2 Metodo progettuale

Ho impostato il progetto secondo un approccio centrato sulle persone. ISO 9241-210:2019 descrive la progettazione centrata sull'essere umano attraverso la comprensione di utenti, compiti e contesti, il loro coinvolgimento, la valutazione con gli utenti, l'iterazione, l'attenzione all'intera esperienza e il contributo di competenze diverse. Il riferimento utilizzato è la scheda ufficiale e la preview del testo, non la norma integrale. [ISO 9241-210:2019](https://www.iso.org/standard/77520.html).

L'attenzione precoce agli utenti, la misurazione empirica dell'uso e l'iterazione compaiono anche nel lavoro di Gould e Lewis. Li considero orientamenti del progetto, distinguendoli dalla formulazione della norma. Raccogliere opinioni su un concetto è utile per scegliere cosa esplorare, ma non sostituisce l'osservazione delle persone mentre provano a svolgere un compito. [Gould e Lewis, 1985](https://research.ibm.com/publications/designing-for-usability-key-principles-and-what-designers-think--1).

Il percorso è organizzato in Empathize, Define, Ideate e Prototype, seguite da Valutazione e Test. Il riferimento alle sei fasi, compresa Implement, appartiene al modello presentato da Sarah Gibbons; non è una divisione obbligatoria dell'intero Design Thinking. L'implementazione di un servizio funzionante rimane uno sviluppo futuro. L'ordine dei capitoli aiuta a leggere il lavoro, mentre le revisioni possono riportare da una schermata al requisito o dalla valutazione a una decisione precedente. [Gibbons, 2016](https://www.nngroup.com/articles/design-thinking/).

Nella ricerca distinguo dati numerici dei questionari, materiale discorsivo delle interviste e osservazioni del progettista. La valutazione del concetto e l'osservazione dei compiti hanno funzioni diverse: la prima orienta le scelte da esplorare, la seconda permette di verificare come vengono comprese e utilizzate.

## 3 Campioni e trattamento dei dati

La base quantitativa disponibile comprende due export. Il primo contiene 50 risposte, raccolte dal 22 dicembre 2025 al 21 gennaio 2026; il secondo 33, dal 25 maggio all'8 giugno 2026. Sono i periodi registrati nei file, con indicazioni EET/EEST: non permettono di ricostruire città e fuso effettivi dei partecipanti. I questionari non hanno un identificatore comune, perciò non posso appaiare le risposte, trattare il secondo come misura delle stesse persone o dichiarare un totale di 83 persone distinte.

Nel primo export 17 persone dichiarano di studiare, 30 di lavorare e tre nessuna delle due condizioni. Il modulo separa un ramo per gli studenti da un ramo per le altre 33 persone. Quest'ultimo contiene domande sul lavoro e sul co-working, ma comprende anche chi non lavora. Nell'analisi uso quindi «non studenti» per il ramo intero e «lavoratori» quando applico il filtro sulle 30 persone che dichiarano di lavorare. Tra gli studenti, nove sono fuorisede.

Il CSV contiene 66 colonne e alcune domande hanno intestazioni ripetute nei due rami. La lettura per posizione delle colonne conserva entrambi i percorsi, evitando che una risposta sovrascriva l'altra. Le celle vuote al di fuori del ramo assegnato sono vuoti strutturali. Il controllo non ha rilevato risposte mancanti nelle domande strutturate del ramo pertinente, né righe o vettori di risposte esattamente duplicati. Questo non dimostra, da solo, l'identità unica di ogni rispondente.

Calcolo le percentuali sulle risposte valide alla singola domanda. Per le domande multiple conto le persone che selezionano ciascuna opzione: la somma delle percentuali può superare il 100%. Nelle scale conservo tutti i valori da 1 a 5, anche quelli con frequenza zero. Quando accorpo 4 e 5 lo dichiaro; le medie descrivono le risposte del campione e non dimostrano differenze nella popolazione.

La ricerca qualitativa riguarda tre persone uniche, intervistate negli stessi due round. Il reclutamento è avvenuto attraverso conoscenze dirette e una rete indiretta di amici; Roma, Milano e Amsterdam sono i contesti citati. Amsterdam resta un contesto della ricerca, fuori dalla copertura iniziale del prodotto. I casi non rappresentano la popolazione delle tre città e i questionari non rappresentano tutta Italia. Non uso percentuali per presentare i temi delle tre persone o dichiarare una saturazione non documentata.

Le stesse tre persone sono previste per il confronto delle style tile e i test formativi. La familiarità con il progetto e il possibile apprendimento limitano l'indipendenza di queste valutazioni e devono essere considerati nella lettura dei risultati.
