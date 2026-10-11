(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.SnodoCore=api;})(typeof window!=='undefined'?window:globalThis,function(){
  const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  function filterPlaces(places,criteria){
    return places.filter(p=>norm(p.city)===norm(criteria.city)&&
      (!criteria.query||norm(p.name+' '+p.zone+' '+p.kind).includes(norm(criteria.query)))&&
      (criteria.budgetMax==null||p.budget.max<=Number(criteria.budgetMax))&&
      (!criteria.noise||p.atmosphere.noise===criteria.noise)&&
      (!criteria.outdoor||p.practical.outdoor===true));
  }
  // Preferenza esplicita: i dati assenti e le alternative fuori preferenza restano separati.
  function partitionPlaces(places,criteria){
    const base=filterPlaces(places,{...criteria,noise:''});
    const matched=[],unknown=[],other=[];
    for(const p of base){
      const value=p.atmosphere.values?.noise;
      const missing=p.atmosphere.noise==null||!Number.isFinite(value)||value<1||value>5||!p.atmosphere.noiseContributions;
      const limit=criteria.noise==='basso'?2:3;
      if(!criteria.noise||(!missing&&value<=limit))matched.push(p);
      else if(criteria.noiseMode==='preferred') (missing?unknown:other).push(p);
    }
    return{matched,unknown,other,all:[...matched,...unknown,...other]};
  }
  function interpretRequest(text,current){
    const t=norm(text),city=t.includes('milano')?'Milano':t.includes('roma')?'Roma':null;
    if(t.includes('amsterdam'))return{state:'fuori_copertura'};
    if(t.includes('indisponibile'))return{state:'indisponibile'};
    if(!city)return{state:'chiarimento',question:'In quale città vuoi cercare?',request:text};
    if(!/(posto|luogo|caffe|cafe|tranquill|parlare)/.test(t))return{state:'non_predisposto'};
    const budget=/\b(?:entro|fino a|massimo|max)\s*(\d+)\b/.exec(t);
    return{state:'criteri',criteria:{city,query:'',budgetMax:budget?Number(budget[1]):current.budgetMax,
      noise:/(tranquill|parlare)/.test(t)?'basso':current.noise,noiseMode:/(tranquill|parlare)/.test(t)?'required':(current.noiseMode||'required'),outdoor:t.includes('aperto')?true:current.outdoor},request:text};
  }
  function groupOutcome(group){
    const pending=group.members.filter(m=>m.invite==='invited');
    const active=group.members.filter(m=>m.invite==='accepted');
    const complete=active.length>0&&active.every(m=>m.confirmed===group.choice);
    return{pending:pending.map(m=>m.name),confirmed:active.filter(m=>m.confirmed===group.choice&&group.choice).map(m=>m.name),
      agreed:!!group.choice&&complete&&pending.length===0,state:!group.choice?'alternative':complete&&pending.length===0?'concordato':'provvisorio'};
  }
  function resetConfirmations(group){group.members.forEach(m=>{m.confirmed=null;});return group;}
  function chooseGroupPlace(group,id){if(group.choice!==id){group.choice=id;resetConfirmations(group);}return group;}
  function updateGroupCriteria(group,change){Object.assign(group.criteria,change);group.choice=null;resetConfirmations(group);return group;}
  function suggestionFor(notes){
    const text=String(notes||'').trim();
    if(!text)return null;
    if(text==='Cortile piacevole. Con gli amici parlavamo senza alzare la voce. Prezzi più alti di quanto mi aspettassi.')
      return 'Il cortile mi è piaciuto: con gli amici riuscivamo a parlare senza alzare la voce. I prezzi erano più alti di quanto mi aspettassi.';
    // Il solo trattamento generico della demo è la normalizzazione degli spazi.
    return text.replace(/\s+/g,' ');
  }
  function publishDraft(draft,submissions,fail){
    if(!draft.text.trim())return{ok:false,reason:'Testo mancante'};
    if(fail)return{ok:false,reason:'Invio non riuscito',draft};
    const previous=submissions.find(x=>x.id===draft.id);
    if(previous)return{ok:true,duplicateAvoided:true,submission:previous};
    const submission={id:draft.id,placeId:draft.placeId,text:draft.text,visibility:draft.visibility,
      shownName:draft.shownName,visitDate:draft.visitDate,slot:draft.slot,simulated:true};
    submissions.push(submission);return{ok:true,submission};
  }
  return{norm,filterPlaces,partitionPlaces,interpretRequest,groupOutcome,resetConfirmations,chooseGroupPlace,updateGroupCriteria,suggestionFor,publishDraft};
});
