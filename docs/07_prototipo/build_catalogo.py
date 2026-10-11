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
                      'values':{'noise':{'basso':2,'medio':3,'alto':4}.get(noise),'light':3 if count else None,'crowding':2 if count else None},
                      'metricCoverage':{'noise':2 if city=='roma' and number=='01' else count,'light':count,'crowding':count},
                      'lastContribution':'2026-10-01' if count else None,'source':'Contributi mock','sufficient':False,
                      'valueMethod':'Valori illustrativi predisposti, non medie realmente calcolate; metodo futuro da definire'},
        'reviews':[] if count==0 else [{'id':f'rec-{city}-{number}-01','author':'Luca','visited':'2026-09-21' if city=='roma' and number=='01' else '2026-09-28',
                                      'slot':'19:00–21:00' if city=='roma' and number=='01' else '18:00–21:00','company':'Con amici',
                                      'text':'Potevamo parlare senza alzare la voce.' if noise=='basso' else 'Durante la mia visita il volume era più alto di quanto mi aspettassi.',
                                      'source':'Recensione mock'}],
        'media':[{'id':f'media-{city}-{number}-01','source':'Gestore mock','date':'2026-10-01','kind':'Illustrazione dimostrativa'},
                 {'id':f'media-{city}-{number}-02','source':'Utente mock','date':'2026-09-28','kind':'Illustrazione dimostrativa'}],
        'fictional':True,
    })
catalog={'version':'0.1','productCoverage':'Italia','demoCities':['Roma','Milano'],
         'notice':'Luoghi, prezzi, orari, distanze, contributi e illustrazioni sono fittizi. Nessun dato live.',
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
