"""Composizione UI SNODO v0.3, componenti mobili 360 px in scala 1:1.
Nessun valore di ricerca: catalogo, contributo e intensità sono mock.
"""
from html import escape

def card(s,x,y,w,h):s.rect(x,y,w,h,s.c['surface'],s.t.get('radius',{'card':20})['card'],shadow=True)

def button(s,x,y,w,label,kind='primary',state='default',icon=None,h=48):
 c=s.c;radius=s.t['radius']['control'];fill=c['primary'] if kind=='primary' else c['secondaryBg'] if kind=='secondary' else 'none'
 fg=c['onPrimary'] if kind=='primary' else c['onSecondary'] if kind=='secondary' else c['primary']
 if state=='hover':fill=c['primaryHover'] if kind=='primary' else c['primarySoft']
 if state=='pressed':fill=c['primaryPressed'] if kind=='primary' else c['primarySoft']
 if state=='disabled':fill=c['surfaceMuted'];fg=c['muted']
 if state=='focus':
  s.rect(x-4.5,y-4.5,w+9,h+9,c['surface'],radius+4.5,c['focus'],3)
 if kind!='tertiary':s.rect(x,y,w,h,fill,radius,c['border'] if kind=='secondary' else None,1.5)
 textw=s.width(label,16,700);total=textw+(32 if icon or state=='loading' else 0);start=x+(w-total)/2
 if state=='loading':
  s.parts.append(f'<g transform="translate({start+10} {y+h/2})" stroke="{fg}" stroke-width="1.8" fill="none"><circle r="8" opacity=".3"/><path d="M0-8a8 8 0 0 1 8 8" stroke-linecap="round"/></g>')
  s.text(start+32,y+h/2+5,label,16,fg,700,maxw=w-64,bg=fill)
 elif icon:
  s.icon(start,y+(h-24)/2,icon,fg,bg=fill if fill!='none' else c['surface']);s.text(start+32,y+h/2+5,label,16,fg,700,maxw=w-64,bg=fill if fill!='none' else c['surface'])
 else:s.text(x+w/2,y+h/2+5,label,16,fg,700,anchor='middle',maxw=w-32,bg=fill if fill!='none' else c['surface'])

def field(s,x,y,w,value,label='Cosa cerchi?',state='default'):
 c=s.c;r=s.t['radius']['field'];s.text(x,y-14,label,14,c['text'],700,maxw=w,bg=c['surface'])
 if state=='focus':s.rect(x-4.5,y-4.5,w+9,61,c['surface'],r+4.5,c['focus'],3)
 border=c['danger'] if state=='error' else c['border'];s.rect(x,y,w,52,c['surface'],r,border,1.5)
 if value:s.icon(x+16,y+14,'search',c['muted'],bg=c['surface']);s.text(x+52,y+31,value,16,c['text'],maxw=w-68,bg=c['surface'])
 if state=='error':s.para(x,y+77,'Scegli una città per vedere luoghi coerenti.',w,14,20,c['danger'],bg=c['surface'])

def filter_chip(s,x,y,w,label,selected=False,more=False):
 c=s.c;bg=c['accentGreen'] if s.theme=='B' and selected else c['primarySoft'] if selected else c['surface'];fg=c['primary'] if selected else c['text']
 s.rect(x,y,w,44,bg,22,None if selected else c['border'],1.5)
 if selected or more:s.icon(x+12,y+10,'check' if selected else 'plus',fg,size=20,bg=bg)
 s.text(x+w/2+(12 if selected or more else 0),y+27,label,15,fg,700 if selected else 400,anchor='middle',maxw=w-(52 if selected or more else 24),bg=bg)

def tag(s,x,y,w,label,key=None):
 c=s.c;bg=c[key] if key and s.theme=='B' else c['surfaceMuted'];s.rect(x,y,w,28,bg,s.t['radius']['passiveTag'])
 s.text(x+w/2,y+19,label,14,c['text'],anchor='middle',maxw=w-20,bg=bg)

def navigation(s,x,y):
 c=s.c;s.rect(x,y,360,80,c['surface'],24,shadow=True)
 for i,(name,icon) in enumerate([('Esplora','compass'),('Salvati','bookmark'),('Chat','chat'),('Profilo','profile')]):
  cx=x+45+90*i;bg=c['accentGreen'] if s.theme=='B' else c['primarySoft'];fg=c['primary'] if i==0 else c['muted']
  if i==0:s.rect(cx-24,y+10,48,32,bg,16)
  s.icon(cx-12,y+14,icon,fg,bg=bg if i==0 else c['surface'])
  s.text(cx,y+63,name,14,fg,700 if i==0 else 400,anchor='middle',maxw=82,bg=c['surface'])

def courtyard(s,x,y,w=344,h=184):
 """Landscape di cortile con loggia, griglia prospettica e vegetazione.
 Illustrazione autonoma: non foto di un luogo reale né foto utente.
 """
 c=s.c;is_b=s.theme=='B';s.counter+=1;clip='media-'+str(s.counter)
 sky=c['accentPink'] if is_b else '#EBD6C8';wall='#FFFFFF' if is_b else '#FFF4E6';dark='#333333' if is_b else '#8A7769';floor='#F2F2EE' if is_b else '#E6D9CB';edge='#D5D5CE' if is_b else '#CAB8A8';green=c['accentGreen'] if is_b else '#6B7752';pot=c['accentPurple'] if is_b else c['primary']
 s.parts.append(f'<defs><clipPath id="{clip}"><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="16"/></clipPath></defs><g clip-path="url(#{clip})"><g transform="translate({x} {y}) scale({w/360} {h/190})">')
 s.rect(0,0,360,190,sky);s.circle(280,35,20,c['accentYellow'] if is_b else c['accentDecorative'])
 s.path('M0 131H360V190H0Z',floor);s.rect(35,36,290,107,wall);s.rect(28,32,304,8,c['accentPurple'] if is_b else '#C7AA94')
 s.path('M35 142H325',stroke=edge,sw=2)
 for xx in (60,145,230):
  s.path(f'M{xx} 142V89a25 25 0 0 1 50 0V142Z',dark)
  s.line(xx+25,76,xx+25,142,wall,1.5);s.line(xx+3,113,xx+47,113,wall,1.5)
  s.path(f'M{xx-6} 143V89a31 31 0 0 1 62 0V143',stroke=edge,sw=1.5)
 for yy in (155,172):s.line(0,yy,360,yy,edge,1)
 for xx in (-60,50,155,260,365,470):s.line(180,131,xx,190,edge,1)
 s.rect(158,155,119,8,c['primary'],3);s.line(171,163,171,180,c['primary'],3);s.line(264,163,264,180,c['primary'],3)
 s.path('M15 150H43L38 178H20Z',pot);s.path('M29 154V97',stroke=dark,sw=2)
 s.path('M29 120C5 120 3 93 12 90C25 85 31 108 29 120Z',green);s.path('M29 132C50 125 60 101 49 98C32 93 26 120 29 132Z',green);s.path('M29 105C16 97 20 76 30 72C44 79 43 97 29 105Z',green)
 if is_b:s.star(320,72,10,c['accentTurquoise'],points=4,inner=.24)
 s.parts.append('</g></g>')
 s.rect(x+12,y+h-36,198,24,c['surface'],6);s.text(x+22,y+h-19,'Illustrazione dimostrativa',14,c['text'],maxw=178,bg=c['surface'])

def feedback(s,x,y,w,label,kind,helper=None):
 c=s.c;fg=c[kind];bg=c[kind+'Bg'];height=96 if helper else 80;s.rect(x,y,w,height,bg,16)
 s.icon(x+16,y+18,{'success':'check','warning':'warning','danger':'error','info':'info'}[kind],fg,bg=bg)
 s.text(x+52,y+36,label,16,fg,700,maxw=w-68,bg=bg)
 if helper:s.text(x+16,y+71,helper,14,fg,maxw=w-32,bg=bg)

def tile(s,here):
 c=s.c;bg=c['background'];s.rect(0,0,1440,1840,bg)
 s.heading(80,145,'SNODO',76 if s.theme=='A' else 72,maxw=820,bg=bg)
 s.text(1356,83,'Direzione '+s.theme,14,c['text'],700,anchor='end',record=False,bg=bg)
 s.text(1356,108,'Crema / handwritten' if s.theme=='A' else 'Pop / pastello',14,c['muted'],anchor='end',record=False,bg=bg)
 s.heading(80,244,'Un posto per il tuo momento.',44 if s.theme=='A' else 38,maxw=980,bg=bg)
 s.text(80,288,'Luoghi, persone e informazioni da leggere con calma.',18,c['muted'],bg=bg)
 if s.theme=='B':s.swirl(1130,140,118,c['accentPurple'],10);s.star(1310,236,42,c['accentPink']);s.star(1288,162,17,c['accentYellow'],points=4,inner=.22)
 else:
  s.line(1120,170,1356,170,c['divider']);s.text(1120,198,'LUOGHI',13,c['muted'],700,record=False,bg=bg);s.text(1120,224,'PERSONE',13,c['muted'],700,record=False,bg=bg);s.text(1120,250,'MOMENTI',13,c['muted'],700,record=False,bg=bg)
 s.line(80,328,1356,328,c['divider'])
 s.begin('01','Palette e ruoli',80,356,760,144);s.kicker(80,371,1,'PALETTE E RUOLI')
 palettes=[('Rosa','accentPink'),('Lime','accentGreen'),('Viola','accentPurple'),('Giallo','accentYellow'),('Turchese','accentTurquoise')] if s.theme=='B' else [('Sfondo','background'),('Superficie','surface'),('Testo','text'),('Azione','primary'),('Dati limitati','warning')]
 for i,(name,key) in enumerate(palettes):
  xx=80+i*150;s.rect(xx,397,120,34,c[key],8,c['muted'] if key=='accentTurquoise' else c['divider'] if key in ('background','surface') else None)
  s.text(xx,459,name,14,c['text'],bg=bg);s.text(xx,482,c[key],14,c['muted'],bg=bg)
 s.end()
 s.begin('02','Tipografia e gerarchia',928,356,428,144);s.kicker(928,371,2,'TIPOGRAFIA E GERARCHIA')
 s.heading(928,428,'Dove ti va di andare?',24,maxw=428,bg=bg);s.text(928,463,'Le informazioni utili, prima di scegliere.',16,maxw=428,bg=bg)
 s.text(928,490,'Titolo 24 · corpo 16 / 24 · nota 14 / 20',14,c['muted'],maxw=428,bg=bg);s.end()
 s.rect(48,528,1344,1132,c['surface'],32)
 # Luogo, 360 px: titolo, prezzo, provenienza e CTA respirano in righe distinte.
 s.begin('05','Card luogo',80,550,360,550);s.kicker(80,556,5,'CARD LUOGO');card(s,80,590,360,510);courtyard(s,88,598)
 s.rect(376,612,44,44,c['surface'],22,shadow=True);s.icon(386,622,'bookmark',c['primary'],24,bg=c['surface'])
 s.heading(104,823,'Cortile Uno',26 if s.theme=='A' else 20,maxw=312,bg=c['surface'])
 s.icon(104,838,'pin',c['muted'],18,bg=c['surface']);s.text(130,853,'Roma · San Lorenzo',14,c['muted'],maxw=286,bg=c['surface'])
 tag(s,104,875,92,'Cortile','accentGreen');tag(s,204,875,104,'Aperitivo','accentYellow')
 s.text(104,947,'12–18 €',24,c['text'],700,maxw=130,bg=c['surface']);s.text(234,947,'a persona',14,c['muted'],maxw=150,bg=c['surface'])
 s.line(104,967,416,967);s.text(104,991,'Prezzo: gestore · 01/10/2026',14,c['muted'],maxw=312,bg=c['surface']);s.text(104,1014,'Dati dimostrativi',14,c['muted'],maxw=312,bg=c['surface'])
 button(s,104,1036,312,'Apri scheda',icon='arrow');s.end()
 # Intensità ambientale: barre a cinque segmenti, senza stelle o valutazione.
 s.begin('06','Atmosfera: intensità, non voto',80,1144,360,452);s.kicker(80,1150,6,'ATMOSFERA · INTENSITÀ');card(s,80,1180,360,414)
 s.text(104,1214,'Visite · 18–21 · settembre 2026',14,c['text'],700,maxw=312,bg=c['surface'])
 for i,(name,value) in enumerate([('Rumore',2),('Luce',3),('Affollamento',2)]):
  yy=1264+i*56;s.text(104,yy,name,16,maxw=248,bg=c['surface']);s.text(416,yy,f'{value}/5',14,c['muted'],anchor='end',bg=c['surface'])
  for j in range(5):s.rect(104+j*64,yy+13,56,7,c['primary'] if j<value else c['surfaceMuted'],3.5)
 s.text(104,1439,'Scala: 1 intensità bassa; 5 alta.',14,c['muted'],maxw=312,bg=c['surface'])
 s.para(104,1470,'Copertura: 3 visite mock; 2 risposte sul rumore.',312,14,20,c['muted'],bg=c['surface'])
 s.rect(104,1515,312,58,c['warningBg'],10);s.icon(116,1532,'warning',c['warning'],18,bg=c['warningBg']);s.para(146,1537,'Utenti · 01/10/2026 · dati limitati e dimostrativi',254,14,20,c['warning'],bg=c['warningBg']);s.end()
 # Azioni e ricerca: scala mobile; filtri con hit area diversa dai tag passivi.
 s.begin('03','Azioni, campo e criteri',528,550,360,368);s.kicker(528,556,3,'AZIONI E CRITERI');field(s,528,604,360,'Un aperitivo con amici')
 button(s,528,678,360,'Esplora luoghi',icon='arrow');button(s,528,740,360,'Chiedi all’AI','secondary',icon='sparkle')
 filter_chip(s,528,810,170,'Fino a 20 €',True);filter_chip(s,710,810,178,'Per parlare');filter_chip(s,528,866,170,'Altri criteri',more=True);s.end()
 s.begin('04','Orientamento e navigazione',528,960,360,372);s.kicker(528,976,4,'ORIENTAMENTO E NAVIGAZIONE')
 s.text(528,1020,'Roma · San Lorenzo',16,c['text'],700,maxw=244,bg=c['surface']);button(s,790,994,98,'Cambia','tertiary',h=44)
 s.text(528,1054,'Contesto di ricerca modificabile',14,c['muted'],maxw=360,bg=c['surface']);navigation(s,528,1082)
 button(s,528,1186,360,'Assistente AI','secondary',icon='sparkle');s.para(528,1264,'Accesso trasversale, sempre con nome.',360,14,20,c['muted'],bg=c['surface']);s.end()
 # Contributo umano e messaggio AI hanno identità e provenienza distinte.
 s.begin('07','Contributo di una persona',976,550,360,300);s.kicker(976,556,7,'CONTRIBUTO DI UNA PERSONA');card(s,976,590,360,260)
 avatar=c['accentPink'] if s.theme=='B' else c['primarySoft'];s.circle(1018,636,18,avatar);s.text(1018,642,'L',16,c['text'],700,anchor='middle',bg=avatar)
 s.text(1052,629,'Luca',16,c['text'],700,maxw=260,bg=c['surface']);s.para(1052,653,'Visita: 21 settembre 2026 · 19–21',260,14,20,c['muted'],bg=c['surface'])
 s.para(1000,715,'Potevamo parlare senza alzare la voce.',312,20,29,c['text'],bg=c['surface']);s.line(1000,768,1312,768)
 s.para(1000,800,'Contributo e visita dimostrativi · identità visibile',312,14,20,c['muted'],bg=c['surface']);s.end()
 s.begin('08','Messaggio dell’assistente',976,904,360,336);s.kicker(976,922,8,'MESSAGGIO DELL’ASSISTENTE');card(s,976,950,360,290)
 ai_accent=c['accentPurple'] if s.theme=='B' else c['primarySoft'];s.circle(1016,986,16,ai_accent);s.icon(1006,976,'sparkle',c['text'] if s.theme=='B' else c['primary'],20,bg=ai_accent)
 s.text(1042,992,'Assistente AI',16,c['text'],700,maxw=173,bg=c['surface']);s.rect(1234,974,78,24,c['infoBg'],12);s.text(1273,992,'Simulato',14,c['info'],700,anchor='middle',maxw=64,bg=c['infoBg'])
 s.para(1000,1045,'Ho mantenuto Roma e budget fino a 20 €. Il rumore ha dati limitati.',312,16,24,c['text'],bg=c['surface']);s.line(1000,1088,1312,1088)
 s.para(1000,1122,'Catalogo mock · scheda e contributi del luogo',312,14,20,c['muted'],bg=c['surface']);button(s,1000,1170,312,'Modifica criteri','secondary');s.end()
 # Quattro stati in griglia, accanto all'atmosfera: nessun blocco vuoto.
 s.begin('09','Feedback semantico',528,1344,808,292);s.kicker(528,1357,9,'IL COLORE HA UN RUOLO, IL MESSAGGIO RESTA ESPLICITO')
 for i,(label,kind,helper) in enumerate([('Contributo inviato','success','Dopo l’invio esplicito'),('Pochi dati','warning','Limite dei dati visibile'),('Invio non riuscito','danger','Bozza conservata'),('AI simulata','info','Origine dichiarata')]):feedback(s,528+(i%2)*448,1394+(i//2)*120,360,label,kind,helper)
 s.end()
 s.text(80,1712,'SNODO è un nome provvisorio. Tutti i luoghi, le visite e i valori dell’app in questa tavola sono mock.',16,c['muted'],maxw=1276,bg=bg)
 s.text(80,1746,'Style tile statica · stessa struttura A/B · direzione da confrontare con le tre persone',14,c['muted'],maxw=1276,bg=bg)
 s.text(80,1776,'Componenti a scala mobile 1:1 · tag descrittivi 28 px · filtri interattivi 44 px',14,c['muted'],maxw=1276,bg=bg)
 s.text(80,1806,'Mali SemiBold 600 · corpo Helvetica Neue (fallback); Forma DJR Text è l’intent.' if s.theme=='A' else 'Boldonse in contorni · corpo: Helvetica Neue (fallback); Forma DJR Text è l’intent non disponibile.',14,c['muted'],maxw=1276,record=False,bg=bg)
 return s.save(here/('Style_tile_'+s.theme))

def states(s,ds):
 s.rect(0,0,1440,1920,s.c['background']);s.heading(80,100,'Gli stessi componenti, nei diversi stati.',36,maxw=1276,bg=s.c['background'])
 s.text(80,143,'Specifiche statiche da verificare nel prototipo: nessun test con utenti già svolto.',16,s.c['muted'],maxw=1276,bg=s.c['background'])
 for theme,x in [('A',80),('B',752)]:
  s.theme=theme;c=s.c;s.rect(x-24,180,632,1652,c['surface'],28);s.heading(x,238,'Direzione '+theme,28,maxw=576,bg=c['surface']);s.text(x,273,'Componenti mobili · controllo 48 px · target raccomandato ≥44 px',14,c['muted'],maxw=576,bg=c['surface'])
  for i,(label,state) in enumerate([('Default','default'),('Hover','hover'),('Premuto','pressed'),('Focus','focus'),('Caricamento','loading'),('Disabilitato','disabled')]):
   yy=316+i*64;s.text(x,yy+30,label,14,c['muted'],maxw=128,bg=c['surface']);button(s,x+176,yy,360,'Esplora luoghi',state=state,icon='arrow' if state!='loading' else None)
  s.text(x,750,'Gerarchia',14,c['muted'],maxw=128,bg=c['surface']);button(s,x+176,720,214,'Chiedi all’AI','secondary');button(s,x+402,720,134,'Annulla','tertiary')
  s.line(x,801,x+576,801);s.text(x,838,'Campo: default, focus e errore',18,c['text'],700,maxw=576,bg=c['surface'])
  for i,(label,state) in enumerate([('Default','default'),('Focus','focus'),('Errore','error')]):
   yy=891+i*100;s.text(x,yy+30,label,14,c['muted'],maxw=128,bg=c['surface']);field(s,x+176,yy,360,'Un aperitivo con amici' if state!='error' else '',label='Città dell’uscita' if state=='error' else 'Cosa cerchi?',state=state)
  s.text(x,1224,'Filtri e tag: interazione distinta dall’informazione',18,c['text'],700,maxw=576,bg=c['surface'])
  s.text(x,1287,'Filtri · 44 px',14,c['muted'],maxw=140,bg=c['surface']);filter_chip(s,x+176,1260,170,'Fino a 20 €');filter_chip(s,x+358,1260,178,'Fino a 20 €',True)
  s.text(x,1359,'Tag · 28 px',14,c['muted'],maxw=140,bg=c['surface']);tag(s,x+176,1340,92,'Cortile','accentGreen');tag(s,x+276,1340,104,'Aperitivo','accentYellow')
  s.text(x,1420,'Informazione assente ≠ risposta negativa',18,c['text'],700,maxw=576,bg=c['surface'])
  s.rect(x+176,1444,360,88,c['warningBg'],14);s.icon(x+192,1462,'warning',c['warning'],20,bg=c['warningBg']);s.text(x+224,1477,'Rumore: pochi dati',16,c['warning'],700,maxw=294,bg=c['warningBg']);s.para(x+192,1503,'Leggi i contributi o modifica il criterio.',328,14,20,c['warning'],bg=c['warningBg'])
  s.text(x,1573,'AI indisponibile: il compito può continuare',18,c['text'],700,maxw=576,bg=c['surface'])
  s.rect(x+176,1596,360,92,c['infoBg'],14);s.icon(x+192,1612,'info',c['info'],20,bg=c['infoBg']);s.text(x+224,1627,'Assistente AI non disponibile',16,c['info'],700,maxw=294,bg=c['infoBg']);s.para(x+192,1653,'Usa ricerca e filtri. I criteri restano conservati.',328,14,20,c['info'],bg=c['infoBg'])
  s.text(x,1738,'Target a icona',14,c['muted'],maxw=140,bg=c['surface']);s.rect(x+176,1712,44,44,c['surface'],22,c['border'],1.5);s.icon(x+186,1722,'bookmark',c['primary'],24,bg=c['surface']);s.para(x+236,1733,'44 × 44 px · nome accessibile: “Salva luogo”',300,14,20,c['muted'],bg=c['surface'])
  s.text(x,1802,'Tab focus visibile · Invio/Spazio attiva · Esc chiude pannelli/dialoghi',14,c['muted'],maxw=576,bg=c['surface'])
 s.theme='A';s.text(80,1880,'Tavola statica: tastiera, scroll, ingrandimento e lettore di schermo richiedono verifiche nel prototipo.',14,s.c['muted'],maxw=1276,bg=s.c['background'])
 return s.save(ds/'Stati_e_controlli')
