from pathlib import Path
import json

BASE = Path(__file__).resolve().parent
specs = [
    ('roma','01','Cortile Uno','San Lorenzo',12,18,'basso',3,True,True,0.8),
    ('roma','02','Spazio Lume','Ostiense',8,14,'medio',6,True,False,2.1),
    ('roma','03','Sala Aperta','Pigneto',18,24,'alto',5,False,True,1.4),
    ('roma','04','Giardino Piccolo','Garbatella',0,8,None,0,True,None,3.3),
    ('milano','01','Cortile Due','Isola',10,18,'basso',4,True,True,0.6),
    ('milano','02','Officina Chiara','Porta Venezia',16,22,'medio',7,True,True,2.0),
    ('milano','03','Casa del Suono','Navigli',20,28,'alto',8,False,True,3.1),
    ('milano','04','Sosta Verde','Lambrate',0,10,None,0,True,None,4.2),
]
photos={p['id']:p for p in json.loads((BASE/'media/Fotografie.json').read_text())['photos']}
photo_pairs=[('cafe-terrazza','cafe-verde'),('spazio-legno','spazio-galleria'),('cafe-luci','cafe-sala'),('giardino-panchina','giardino-sole'),('cafe-patio','cafe-verde'),('spazio-galleria','spazio-legno'),('cafe-sala','cafe-luci'),('giardino-sole','giardino-panchina')]
places=[]
for city,number,name,zone,low,high,noise,count,outdoor,accessible,distance in specs:
    places.append({
        'id':f'luogo-{city}-{number}','name':name,'city':city.title(),'zone':zone,
        'kind':'Spazio culturale' if number=='02' else 'Giardino' if number=='04' else 'Caffè',
        'budget':{'min':low,'max':high,'currency':'EUR','source':'Dichiarazione del gestore mock','updated':'2026-10-01'},
        'distance':{'km':distance,'reference':f'{city.title()} · riferimento centrale dimostrativo','kind':'schematic_mock'},
        'hours':{'text':'16:00–23:00','source':'Gestore mock','updated':'2026-10-01','live':False},
        'practical':{'outdoor':outdoor,'stepFreeReported':accessible,'source':'Gestore mock','updated':'2026-10-01'},
        'atmosphere':{'noise':noise,'crowding':'basso' if count else None,'light':'naturale' if outdoor else 'soffusa',
                      'period':'settembre 2026','slot':'18:00–21:00','visits':count,'contributions':count,
                      'noiseContributions':2 if city=='roma' and number=='01' else count,
                      'scale':{'min':1,'max':5,'lowLabel':'Intensità bassa','highLabel':'Intensità alta'},
                      'values':{'noise':{'basso':2,'medio':3,'alto':4}.get(noise),'light':3 if count else None,'crowding':2 if count else None,'comfort':4 if count else None},
                      'metricCoverage':{'noise':2 if city=='roma' and number=='01' else count,'light':count,'crowding':count,'comfort':count},
                      'attendance':{'bands':[
                          {'id':'pomeriggio','label':'Pomeriggio','start':'16:00','end':'18:00'},
                          {'id':'sera','label':'Sera','start':'18:00','end':'21:00'},
                          {'id':'tarda-sera','label':'Tarda sera','start':'21:00','end':'23:00'}],
                          'days':[{'day':day,'values':[
                              {'band':band,'value':(value if count and not (number=='02' and day==1 and band=='tarda-sera') else None),
                               'contributions':(max(1,count//3) if count and not (number=='02' and day==1 and band=='tarda-sera') else 0)}
                              for band,value in zip(['pomeriggio','sera','tarda-sera'],([2,4,3] if day in [0,6] else [2,3,2]))]} for day in range(7)],
                          'source':'Profili mock predisposti; non calcolati dai contributi',
                          'method':'Intensità illustrative 1–5 per giorno e fascia; non misure live né medie reali'},
                      'lastContribution':'2026-10-01' if count else None,'source':'Contributi mock','sufficient':False,
                      'valueMethod':'Valori illustrativi predisposti, non medie realmente calcolate; metodo futuro da definire'},
        'reviews':[] if count==0 else [{'id':f'rec-{city}-{number}-01','author':'Luca','visited':'2026-09-21' if city=='roma' and number=='01' else '2026-09-28',
                                      'slot':'19:00–21:00' if city=='roma' and number=='01' else '18:00–21:00','company':'Con amici',
                                      'text':'Potevamo parlare senza alzare la voce.' if noise=='basso' else 'Durante la mia visita il volume era più alto di quanto mi aspettassi.',
                                      'source':'Recensione mock'}],
        'photo':photos[photo_pairs[len(places)][0]],
        'media':[dict(photos[key],id=f'media-{city}-{number}-{i+1:02}',source=f"{photos[key]['author']} / Unsplash",kind='Fotografia stock dimostrativa') for i,key in enumerate(photo_pairs[len(places)])],
        'fictional':True,
    })
# Materiale dimostrativo della galleria unica: origine nel prodotto distinta
# dall'autore reale della fotografia stock. Non alimenta i grafici di atmosfera.
review_extras = {
    '01': [
        ('Chiara', '2026-09-25', '17:00–18:00', 'Da sola', 'Mi sono fermata per un caffè nel pomeriggio. Ho trovato un tavolino libero e sono rimasta a leggere; l’esperienza potrebbe essere diversa la sera.'),
        ('Matteo', '2026-09-30', '20:00–21:00', 'In coppia', 'Siamo arrivati dopo le otto. I tavoli più vicini erano occupati: per parlare abbiamo preferito sederci un po’ in disparte.')
    ],
    '02': [
        ('Sara', '2026-09-26', '16:00–18:00', 'Con un’amica', 'Siamo entrate per vedere l’esposizione e ci siamo fermate a commentare le opere. Nel pomeriggio gli spazi erano facili da attraversare.'),
        ('Elena', '2026-09-29', '19:00–20:00', 'Da sola', 'Ho preferito la sala più interna per guardare le opere con calma. All’ingresso c’erano più persone rispetto al resto dello spazio.')
    ],
    '03': [
        ('Giulia', '2026-09-24', '17:00–18:00', 'Con un’amica', 'Per una pausa veloce abbiamo trovato posto vicino alla finestra. Mi è piaciuto l’ambiente, ma non ho provato a lavorare qui.'),
        ('Andrea', '2026-09-29', '21:00–22:00', 'Con amici', 'Ci siamo fermati per stare insieme. Durante la visita la musica rendeva più difficile seguire la conversazione da un lato all’altro del tavolo.')
    ]
}
for p in places:
    city, number = p['id'].split('-')[1:]
    if p['reviews']:
        p['reviews'][0]['text'] += (' Ci siamo fermati all’aperto per una pausa.' if number=='01' else ' Ho preferito spostarmi nella sala interna.' if number=='02' else ' L’ambiente era vivace, soprattutto vicino ai tavoli centrali.')
        for n, (author, visited, slot, company, text) in enumerate(review_extras[number], 2):
            p['reviews'].append(dict(id=f'rec-{city}-{number}-{n:02}', author=author, visited=visited, slot=slot, company=company, text=text, source='Recensione mock'))
    elif city=='milano':
        p['reviews'] = [
            dict(id=f'rec-{city}-{number}-01', author='Francesca', visited='2026-09-24', slot='16:00–17:00', company='Da sola', text='Ho fatto una passeggiata e mi sono fermata su una panchina. Non ho osservato abbastanza a lungo per descrivere l’affluenza nelle altre ore.', source='Recensione mock'),
            dict(id=f'rec-{city}-{number}-02', author='Paolo', visited='2026-09-30', slot='17:00–18:00', company='Con amici', text='Abbiamo scelto il viale alberato per camminare insieme. La mia foto racconta solo il tratto che ho attraversato durante quella visita.', source='Recensione mock')
        ]
    venue_captions = ['Gli spazi', 'Un’altra prospettiva']
    for i, m in enumerate(p['media']):
        m.update(origin='venue', uploadedBy=p['name'], uploadedAt='2026-10-01', caption=venue_captions[i], mock=True, reviewId=None)
    if number in ['01','03']:
        extra = next(key for key in ['cafe-sala','cafe-luci','cafe-verde','cafe-patio'] if photos[key]['src'] not in [m['src'] for m in p['media']])
        p['media'].append(dict(photos[extra], id=f'media-{city}-{number}-03', origin='venue', uploadedBy=p['name'], uploadedAt='2026-10-01', caption='La sala', mock=True, reviewId=None))
        user_keys=['caffe-tazza','caffe-due-tazze',next(key for key in ['cafe-luci','cafe-sala','cafe-verde','cafe-patio'] if photos[key]['src'] not in [m['src'] for m in p['media']])]
        user_captions=['Una pausa al tavolo', 'Il caffè del pomeriggio', 'Il nostro punto di vista']
    elif number=='02':
        user_keys=['galleria-visita','galleria-persone'];user_captions=['Durante l’esposizione', 'La visita nella sala interna']
    else:
        p['media'].append(dict(photos['parco-viale'], id=f'media-{city}-{number}-03', origin='venue', uploadedBy=p['name'], uploadedAt='2026-10-01', caption='Il percorso alberato', mock=True, reviewId=None))
        user_keys=['parco-passeggiata'];user_captions=['Durante la passeggiata']
    for i, key in enumerate(user_keys if p['reviews'] else []):
        r=p['reviews'][min(i,len(p['reviews'])-1)]
        m=dict(photos[key], id=f'media-{city}-{number}-user-{i+1:02}', origin='reviews', uploadedBy=r['author'], uploadedAt=r['visited'], caption=user_captions[i], mock=True, reviewId=r['id'])
        p['media'].append(m)
    for r in p['reviews']:
        r['mock']=True
        r['mediaIds']=[m['id'] for m in p['media'] if m['reviewId']==r['id']]

catalog={'version':'0.1','productCoverage':'Italia','demoCities':['Roma','Milano'],
         'notice':'Luoghi, prezzi, orari, distanze, contributi sono fittizi. Le fotografie stock sono illustrative e non ritraggono i luoghi della demo. Nessun dato live.',
         'places':places}
(BASE/'Catalogo_mock.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2))
(BASE/'catalogo.js').write_text('window.SNODO_CATALOG = '+json.dumps(catalog,ensure_ascii=False,indent=2)+';\n')
scenarios=[
 {'id':'AI01','context':'ricerca','input':'Un posto tranquillo a Roma entro 20 euro','state':'risultati','city':'Roma','budgetMax':20,'noise':'basso','expectedIds':['luogo-roma-01'],'missing':'Pochi contributi sul rumore; non è una garanzia.'},
 {'id':'AI02','context':'ricerca','input':'Un posto tranquillo a Milano entro 20 euro','state':'cambio_citta','city':'Milano','budgetMax':20,'noise':'basso','expectedIds':['luogo-milano-01'],'applyRequired':True},
 {'id':'AI03','context':'ricerca','input':'Un posto tranquillo','state':'chiarimento','ask':'In quale città vuoi cercare?','expectedIds':[]},
 {'id':'AI04','context':'ricerca','input':'Un posto tranquillo a Roma entro 5 euro','state':'nessun_risultato','city':'Roma','budgetMax':5,'noise':'basso','expectedIds':[],'noSilentRelaxation':True},
 {'id':'AI05','context':'ricerca','input':'Un posto a Amsterdam','state':'fuori_copertura','expectedIds':[]},
 {'id':'AI06','context':'ricerca','input':'indisponibile','state':'indisponibile','fallback':'S03'},
 {'id':'AI07','context':'gruppo','state':'in_attesa','criteriaSource':'solo criteri condivisi','noImplicitConsent':True,'fallback':'confronto manuale'},
 {'id':'AI08','context':'gruppo','state':'conflitto','budgetMax':5,'noise':'basso','expectedIds':[],'noSilentRelaxation':True},
 {'id':'AI09','context':'recensione','input':'Cortile piacevole. Con gli amici parlavamo senza alzare la voce. Prezzi più alti di quanto mi aspettassi.',
  'suggestion':'Il cortile mi è piaciuto: con gli amici riuscivamo a parlare senza alzare la voce. I prezzi erano più alti di quanto mi aspettassi.',
  'applyRequired':True,'publishRequired':True},
 {'id':'AI10','context':'recensione','state':'indisponibile','preserveNotes':True,'fallback':'scrittura manuale'},
]
(BASE/'Scenari_AI.json').write_text(json.dumps({'version':'0.1','simulated':True,'scenarios':scenarios},ensure_ascii=False,indent=2))
print(f'Catalogo generato: {len(places)} luoghi fittizi; {len(scenarios)} scenari AI')
