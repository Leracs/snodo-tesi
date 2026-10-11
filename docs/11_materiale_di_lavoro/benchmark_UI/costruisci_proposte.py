"""Tavole di proposta dopo il benchmark; non modifica tile, DS o wireframe v1.
Usa le primitive e i font della base v0.3. PNG rasterizzati dagli stessi SVG.
"""
from pathlib import Path
import sys
import json

HERE = Path(__file__).resolve().parent
BASE = HERE.parents[1]
sys.path.insert(0, str(BASE / '05_style_tiles'))
from build_style_tiles import THEMES, font, glyph_paths, ratio
from ui_canvas import Canvas
from ui_layout import button, field, filter_chip, navigation

def canvas(w,h,title,theme='A'):
    return Canvas(w,h,theme,THEMES,font,glyph_paths,title)

def thumb(s,x,y,w,h):
    """Illustrazione vettoriale autonoma di un luogo fittizio."""
    c=s.c
    s.rect(x,y,w,h,c.get('accentPink', c['primarySoft']),14)
    s.rect(x+10,y+26,w-20,h-40,c['surface'],4)
    s.path(f'M{x+w*.32} {y+h-14}V{y+55}a{w*.18} {w*.18} 0 0 1 {w*.36} 0V{y+h-14}Z',c['text'])
    s.circle(x+w-24,y+18,8,c.get('accentYellow',c['primary']))
    s.rect(x,y+h-14,w,14,c.get('accentGreen',c['text']),6)

def marker(s,x,y,n,state='default'):
    c=s.c
    s.rect(x,y,44,44,c['surface'],22,c['border'],1.5)
    if state=='selected':
        s.rect(x-4,y-4,52,52,c['surface'],26,c['focus'],3)
        s.circle(x+22,y+22,20,c['primary'])
        s.text(x+22,y+28,str(n),18,c['onPrimary'],700,anchor='middle',bg=c['primary'])
    elif state=='saved':
        s.text(x+20,y+29,str(n),18,c['text'],700,anchor='middle',bg=c['surface'])
        s.circle(x+34,y+10,10,c['surface'],c['border'],1)
        s.icon(x+27,y+3,'bookmark',c['text'],14,bg=c['surface'])
    else:s.text(x+22,y+28,str(n)+('?' if state=='missing' else ''),18,c['text'],700,anchor='middle',bg=c['surface'])

def compact(s,x,y,w=358,h=256,name='Cortile Uno',index=1):
    c=s.c
    s.rect(x,y,w,h,c['surface'],s.t['radius']['card'],c['divider'],1)
    thumb(s,x+16,y+16,104,112)
    s.heading(x+136,y+44,name,20 if s.theme=='A' else 16,maxw=w-196,bg=c['surface'])
    s.text(x+136,y+70,'Roma · San Lorenzo',14,c['muted'],maxw=w-172,bg=c['surface'])
    s.text(x+136,y+108,'12–18 €',20,c['text'],700,maxw=110,bg=c['surface'])
    s.text(x+136,y+131,'indicativi a persona',14,c['muted'],maxw=w-152,bg=c['surface'])
    s.rect(x+w-60,y+12,44,44,c['surface'],22)
    s.icon(x+w-50,y+22,'bookmark',c['text'],bg=c['surface'])
    s.text(x+16,y+166,'“Potevamo parlare senza alzare la voce.”',14,maxw=w-32,bg=c['surface'])
    s.text(x+16,y+192,'Luca · visita con amici · mock',14,c['muted'],maxw=w-32,bg=c['surface'])
    s.line(x+16,y+208,x+w-16,y+208)
    s.text(x+16,y+237,'Apri scheda',16,c['primary'],700,maxw=w-80,bg=c['surface'])
    s.icon(x+w-44,y+220,'arrow',c['primary'],bg=c['surface'])

def components():
    s=canvas(1440,1740,'SNODO — proposta di componenti A/B dopo il benchmark')
    s.rect(0,0,s.w,s.h,'#FFFFFF')
    s.text(48,66,'SNODO / Integrazioni proposte',32,'#28221F',700,family='Helvetica Neue',maxw=1320,bg='#FFFFFF')
    s.para(48,105,'Stessi compiti e contenuti nelle due direzioni. Ricerca più compatta, card confrontabili e stati leggibili.',1296,18,26,'#64544A',family='Helvetica Neue',bg='#FFFFFF')
    for theme,left in [('A',48),('B',744)]:
        s.theme=theme;c=s.c;px=left+153
        s.rect(left,168,648,1432,c['background'],32)
        s.heading(left+32,230,'Direzione '+theme,28,maxw=584,bg=c['background'])
        s.text(left+32,266,'Calda / Mali 600' if theme=='A' else 'Pop / principale',16,c['muted'],maxw=584,bg=c['background'])
        keys=['primary','primarySoft','background','text','surface'] if theme=='A' else ['accentPink','accentGreen','accentPurple','accentYellow','accentTurquoise']
        for i,key in enumerate(keys):s.rect(left+32+i*112,286,100,20,c[key],10,c['divider'],1)
        s.begin(theme+'-search','Ricerca e filtri rapidi',px,334,390,208)
        s.rect(px,334,390,208,c['surface'],24)
        s.text(px+16,368,'Roma · San Lorenzo',16,weight=700,maxw=242,bg=c['surface'])
        button(s,px+272,342,102,'Cambia','tertiary',h=44)
        field(s,px+16,410,358,'Un aperitivo con amici','Cosa cerchi?')
        filter_chip(s,px+16,478,114,'≤20 €',True)
        filter_chip(s,px+138,478,138,'Rumore ≤2',True)
        filter_chip(s,px+284,478,90,'Filtri · 2')
        s.end()
        s.text(px,571,'DS06 · card di lista compatta',16,c['text'],700,maxw=390,bg=c['background'])
        s.begin(theme+'-card','Card di lista proposta',px+16,590,358,256)
        compact(s,px+16,590);s.end()
        s.text(px,898,'DS18 · mappa e marker proposti',16,c['text'],700,maxw=390,bg=c['background'])
        s.begin(theme+'-markers','Stati del marker proposti',px,918,390,132)
        s.rect(px,918,390,132,c['surface'],24)
        for i,(n,state,label) in enumerate([(2,'default','Disponibile'),(1,'selected','Selezionato'),(3,'saved','Salvato')]):
            cx=px+65+i*130;marker(s,cx-22,943,n,state)
            s.text(cx,1021,label,14,c['muted'],anchor='middle',maxw=122,bg=c['surface'])
        s.end()
        s.begin(theme+'-source','Copertura e dato assente',px,1088,390,132)
        s.rect(px,1088,390,132,c['surface'],24)
        s.text(px+16,1120,'DS07 / DS08 · provenienza',16,weight=700,maxw=358,bg=c['surface'])
        s.text(px+16,1147,'Visite 18–21 · 2 contributi mock',14,c['muted'],maxw=358,bg=c['surface'])
        s.line(px+16,1164,px+374,1164)
        s.icon(px+16,1180,'info',c['muted'],20,bg=c['surface'])
        s.text(px+48,1197,'Luce: dato non disponibile',16,maxw=326,bg=c['surface'])
        s.end()
        s.begin(theme+'-ai','AI nel contesto della ricerca',px,1258,390,236)
        s.rect(px,1258,390,236,c['surface'],24)
        s.icon(px+16,1276,'sparkle',c['text'],24,bg=c['surface'])
        s.text(px+48,1295,'Assistente AI · demo',16,weight=700,maxw=326,bg=c['surface'])
        s.para(px+16,1334,'Ho mantenuto Roma e il budget di 20 €. Per il rumore ci sono pochi dati.',358,16,24,bg=c['surface'])
        s.text(px+16,1398,'Catalogo mock · criteri modificabili',14,c['muted'],maxw=358,bg=c['surface'])
        button(s,px+16,1424,358,'Vedi i 3 luoghi',icon='arrow')
        s.end()
        s.para(left+32,1534,'Mali SemiBold 600 nei titoli. Corpo: Helvetica Neue; Forma DJR Text previsto.' if theme=='A' else 'Boldonse per i titoli. Corpo: Helvetica Neue; Forma DJR Text resta il font previsto.',584,14,20,c['muted'],bg=c['background'])
    s.theme='A'
    s.para(48,1650,'Tavola di lavoro: varianti da costruire e provare in Figma. Luoghi, prezzi, immagini, visite e valori sono dimostrativi.',1344,16,24,'#64544A',family='Helvetica Neue',bg='#FFFFFF')
    s.text(48,1706,'Pop è principale; Calda usa Mali 600. Il catalogo corrente contiene DS01–DS22.',16,'#64544A',family='Helvetica Neue',maxw=1344,bg='#FFFFFF')
    return s.save(HERE/'Proposta_componenti_A_B')

def frame(s,x,y,title):
    s.rect(x,y,390,844,'#FFFFFF',20,'#777777',1.5)
    offset=60 if title=='Cortile Uno' else 16
    s.text(x+offset,y+42,title,24,'#151515',700,maxw=258 if offset==60 else 358,bg='#FFFFFF')
    if offset==60:s.path(f'M{x+32} {y+34}l-8 8l8 8M{x+24} {y+42}h16',stroke='#151515')

def search_header(s,x,y):
    s.text(x+16,y+77,'Roma · San Lorenzo',16,weight=700,maxw=238,bg='#FFFFFF')
    button(s,x+272,y+51,102,'Cambia','tertiary',h=44)
    field(s,x+16,y+110,358,'Aperitivo con amici','Cosa cerchi?')
    for dx,w,name,sel in [(16,114,'≤20 €',True),(138,138,'Rumore ≤2',True),(284,90,'Filtri · 2',False)]:filter_chip(s,x+dx,y+178,w,name,sel)

def mode(s,x,y,selected):
    s.rect(x+16,y+242,358,48,'#F3F3F3',14)
    for i,name in enumerate(['Mappa','Lista']):
        xx=x+20+i*177
        if name==selected:s.rect(xx,y+246,173,40,'#151515',10)
        s.text(xx+86.5,y+272,name,16,'#FFFFFF' if name==selected else '#151515',700 if name==selected else 400,anchor='middle',maxw=153,bg='#151515' if name==selected else '#F3F3F3')

def nav(s,x,y):navigation(s,x+15,y+764)

def list_card(s,x,y,name,n,noise,price):
    c=s.c;s.rect(x,y,358,194,'#FFFFFF',16,'#D0D0D0',1)
    s.rect(x+12,y+12,92,96,'#E8E8E8',10)
    s.icon(x+46,y+45,'pin','#555555',24,bg='#E8E8E8')
    s.text(x+120,y+38,str(n)+' · '+name,18,weight=700,maxw=174,bg='#FFFFFF')
    s.rect(x+302,y+12,44,44,'#FFFFFF',22)
    s.icon(x+312,y+22,'bookmark',bg='#FFFFFF')
    s.text(x+120,y+65,'Roma · San Lorenzo',14,'#4B4B4B',maxw=220,bg='#FFFFFF')
    s.text(x+120,y+95,price+' · indicativi',16,maxw=226,bg='#FFFFFF')
    s.text(x+16,y+134,noise,16,maxw=326,bg='#FFFFFF')
    s.text(x+16,y+157,'Visite 18–21 · dati mock limitati',14,'#4B4B4B',maxw=326,bg='#FFFFFF')
    s.text(x+16,y+182,'Apri scheda',16,'#151515',700,maxw=270,bg='#FFFFFF')
    s.icon(x+314,y+165,'arrow',bg='#FFFFFF')

def wireframes():
    themes=json.loads(json.dumps(THEMES))
    themes['A']['colors'].update({'background':'#FFFFFF','surface':'#FFFFFF','surfaceMuted':'#E8E8E8','text':'#151515','muted':'#4B4B4B','primary':'#151515','onPrimary':'#FFFFFF','primarySoft':'#E8E8E8','secondaryBg':'#FFFFFF','onSecondary':'#151515','border':'#777777','divider':'#D0D0D0','focus':'#151515'})
    themes['A']['body']='Helvetica Neue';themes['A']['heading']='Helvetica Neue';themes['A']['heading_weight']=700
    s=Canvas(1736,1160,'A',themes,font,glyph_paths,'SNODO — proposte di integrazione S02 S03 S04 S05')
    s.rect(0,0,s.w,s.h,'#F7F7F5')
    s.text(40,64,'Dal benchmark ai wireframe',32,weight=700,maxw=1656,bg='#F7F7F5')
    s.text(40,106,'Varianti proposte · frame 390 × 844 · contenuti e mappa schematici, tutti i dati di luogo sono mock.',18,'#4B4B4B',maxw=1656,bg='#F7F7F5')
    yy=192
    for i,(id,label) in enumerate([('S02','Mappa e selezione'),('S03','Lista confrontabile'),('S04','Criteri da applicare'),('S05','Scheda · contesto gruppo')]):
        xx=40+i*422;s.text(xx,164,id+' / '+label,18,weight=700,maxw=390,bg='#F7F7F5');s.begin(id,label,xx,yy,390,844);frame(s,xx,yy,'Filtri' if id=='S04' else 'Cortile Uno' if id=='S05' else 'Esplora')
        if id in ('S02','S03'):
            search_header(s,xx,yy);mode(s,xx,yy,'Mappa' if id=='S02' else 'Lista')
            s.text(xx+16,yy+316,'3 luoghi · 1 da verificare · demo',14,'#4B4B4B',maxw=358,bg='#FFFFFF')
        if id=='S02':
            s.rect(xx+16,yy+334,358,266,'#F0F0EC',16)
            for d in (70,156,244):s.line(xx+16,yy+334+d,xx+374,yy+334+d,'#D0D0C8',12)
            for d in (76,204,298):s.line(xx+16+d,yy+334,xx+16+d,yy+600,'#D0D0C8',12)
            s.text(xx+32,yy+363,'Mappa schematica',14,'#4B4B4B',maxw=310,bg='#F0F0EC')
            marker(s,xx+76,yy+390,2,'missing');marker(s,xx+202,yy+425,1,'selected');marker(s,xx+274,yy+485,3,'saved')
            s.text(xx+32,yy+520,'? = dato da verificare',14,'#4B4B4B',maxw=204,bg='#F0F0EC')
            button(s,xx+77,yy+540,236,'Cerca in questa zona','secondary',h=44)
            s.rect(xx+16,yy+616,358,130,'#FFFFFF',16,'#D0D0D0')
            s.text(xx+32,yy+648,'1 · Cortile Uno',18,weight=700,maxw=270,bg='#FFFFFF')
            s.text(xx+32,yy+678,'12–18 € · rumore: dati limitati',16,maxw=326,bg='#FFFFFF')
            button(s,xx+32,yy+694,326,'Apri scheda',h=44)
            nav(s,xx,yy)
        elif id=='S03':
            list_card(s,xx+16,yy+334,'Cortile Uno',1,'Rumore 2/5 · 2 contributi mock','12–18 €')
            s.text(xx+16,yy+550,'Da verificare · rumore non noto',14,'#4B4B4B',maxw=358,bg='#FFFFFF')
            list_card(s,xx+16,yy+564,'Sala Due',2,'Rumore: dato non disponibile','10–16 €')
            nav(s,xx,yy)
        elif id=='S04':
            s.text(xx+16,yy+88,'Roma · modifiche non applicate',14,'#4B4B4B',maxw=358,bg='#FFFFFF')
            s.text(xx+16,yy+136,'Budget massimo a persona',18,weight=700,maxw=358,bg='#FFFFFF')
            for j,v in enumerate(['10 €','20 €','30 €']):filter_chip(s,xx+16+122*j,yy+158,114,v,j==1)
            s.text(xx+16,yy+236,'Rumore',18,weight=700,bg='#FFFFFF')
            filter_chip(s,xx+16,yy+258,175,'Fino a 2/5',True);filter_chip(s,xx+199,yy+258,175,'Indifferente')
            s.para(xx+16,yy+336,'Intensità riferita alle visite disponibili. Non è una valutazione del locale.',358,16,24,'#4B4B4B',bg='#FFFFFF')
            filter_chip(s,xx+16,yy+376,175,'Preferenza',True);filter_chip(s,xx+199,yy+376,175,'Necessario')
            s.text(xx+16,yy+456,'Contesto dei dati',16,weight=700,maxw=358,bg='#FFFFFF')
            s.text(xx+16,yy+485,'Visite 18–21 · non è un filtro',14,'#4B4B4B',maxw=358,bg='#FFFFFF')
            s.rect(xx+16,yy+524,358,92,'#F3F3F3',14)
            s.para(xx+32,yy+554,'Dato assente: il luogo resta distinto da quelli che soddisfano il criterio.',326,16,24,bg='#F3F3F3')
            s.line(xx+16,yy+652,xx+374,yy+652)
            button(s,xx+16,yy+672,175,'Annulla','secondary');button(s,xx+199,yy+672,175,'Azzera','tertiary')
            button(s,xx+16,yy+736,358,'Applica 2 criteri',icon='check')
        else:
            s.rect(xx+330,yy+12,44,44,'#FFFFFF',22);s.icon(xx+340,yy+22,'bookmark',bg='#FFFFFF')
            s.text(xx+16,yy+76,'Roma · San Lorenzo',16,'#4B4B4B',maxw=358,bg='#FFFFFF')
            s.text(xx+16,yy+103,'Da chat “Venerdì” · dati demo',14,'#4B4B4B',maxw=358,bg='#FFFFFF')
            s.rect(xx+16,yy+126,358,144,'#E8E8E8',14)
            s.icon(xx+178,yy+166,'pin','#555555',32,bg='#E8E8E8')
            s.text(xx+195,yy+236,'Immagini del luogo',16,'#4B4B4B',anchor='middle',maxw=326,bg='#E8E8E8')
            s.text(xx+16,yy+310,'12–18 € indicativi a persona',18,weight=700,maxw=358,bg='#FFFFFF')
            s.text(xx+16,yy+339,'Gestore mock · 01/10/2026',14,'#4B4B4B',maxw=358,bg='#FFFFFF')
            s.line(xx+16,yy+360,xx+374,yy+360)
            s.text(xx+16,yy+399,'Atmosfera',20,weight=700,maxw=358,bg='#FFFFFF')
            s.text(xx+16,yy+428,'Visite 18–21 · settembre 2026',14,'#4B4B4B',maxw=358,bg='#FFFFFF')
            s.text(xx+16,yy+460,'Rumore',16,weight=700,bg='#FFFFFF');s.text(xx+374,yy+460,'2/5',16,anchor='end',bg='#FFFFFF')
            for j in range(5):s.rect(xx+16+j*73,yy+474,66,8,'#151515' if j<2 else '#E8E8E8',4)
            s.text(xx+16,yy+515,'Luca · visita con amici · mock',14,'#4B4B4B',maxw=358,bg='#FFFFFF')
            s.text(xx+16,yy+557,'Luce: dato non disponibile',16,maxw=358,bg='#FFFFFF')
            button(s,xx+16,yy+580,358,'Dettagli e recensioni','tertiary',icon='arrow',h=44)
            button(s,xx+16,yy+636,358,'Indicazioni','secondary',icon='pin',h=44)
            button(s,xx+16,yy+704,358,'Proponi al gruppo',icon='chat')
            nav(s,xx,yy)
        s.end()
    s.para(40,1080,'Mappa e lista condividono criteri e ID. “Salva”, “proponi” e “conferma” restano azioni distinte. Scroll, ritorni e stati da collegare in Figma.',1656,16,24,'#4B4B4B',bg='#F7F7F5')
    s.text(40,1136,'Proposte statiche aggiuntive: la baseline di 21 schermate e 12 varianti non è stata sostituita.',16,'#4B4B4B',maxw=1656,bg='#F7F7F5')
    return s.save(HERE/'Proposta_wireframe')

if __name__=='__main__':
    results=[components(),wireframes()]
    same={key:results[0]['logical_copy']['A-'+key]==results[0]['logical_copy']['B-'+key] for key in ['search','card','markers','source','ai']}
    failures=[{'asset':Path(r['svg']).name,**item} for r in results for item in r['overflows']]
    contrasts=[]
    for r in results:
        for item in r['contrast_uses']:
            value=ratio(item['fg'],item['bg'])
            contrasts.append({**item,'ratio':round(value,2),'pass':value>=item['threshold']})
    report={'date':'2026-10-11','status':'static_proposal_not_baseline','same_product_copy_A_B':same,'overflows':failures,'contrast_pairs_used':len(contrasts),'contrast_failures':[v for v in contrasts if not v['pass']],'checks_scope':'Text bounds, measured font wrapping, selected text/icon color pairs; not a usability or accessibility audit.','artifacts':[{'file':Path(r['svg']).name,'png':Path(r['png']).name,'width':r['width'],'height':r['height'],'components':r['component_areas']} for r in results],'mock_values':'All places, images, prices, contributions and atmosphere values. No user preference or native Figma import claimed.'}
    (HERE/'Controlli_proposte.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(report,ensure_ascii=False,indent=2))
    if failures or report['contrast_failures'] or not all(same.values()):raise SystemExit(1)
