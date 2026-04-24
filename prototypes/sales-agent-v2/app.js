/* ── Render helpers ──────────────────────────────────────────────── */
function renderProspects(){
  document.getElementById('ptbody').innerHTML=prospects.map(p=>{
    const ini=p.f[0]+p.l[0];
    const sc=p.score>90?'#22C55E':p.score>80?'#7D62EC':'#F59E0B';
    return`<tr>
      <td><input type="checkbox"></td>
      <td><div style="display:flex;align-items:center;gap:9px"><div class="p-av" style="background:${p.c}">${ini}</div><div><div style="font-weight:600">${p.f} ${p.l}</div><div style="font-size:11px;color:var(--light)">${p.co}</div></div></div></td>
      <td>${p.co}</td>
      <td>${p.title}</td>
      <td>${p.ok?`<div style="display:flex;align-items:center;gap:5px"><div class="vdot"></div><span style="font-size:12px">${p.email}</span></div>`:'<span style="color:var(--light)">—</span>'}</td>
      <td><div class="score-wrap"><div class="score-track"><div class="score-fill" style="width:${p.score}%;background:${sc}"></div></div><span style="font-size:12px;font-weight:700;color:${sc}">${p.score}</span></div></td>
      <td>${p.ok?'<span class="badge badge-green">✓ Verified</span>':'<span class="badge badge-gray">Not found</span>'}</td>
      <td><button class="btn-icon-only" style="border:none"><svg width="14" height="14" fill="none" stroke="#8B96A5" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></button></td>
    </tr>`;
  }).join('');
}

function renderEnriched(){
  document.getElementById('egrid').innerHTML=enriched.map(e=>`
    <div class="enrich-card">
      <div style="display:flex;align-items:center;gap:9px;margin-bottom:10px">
        <div class="p-av" style="background:var(--purple);width:34px;height:34px;font-size:12px">${e.name.split(' ').map(n=>n[0]).join('')}</div>
        <div><div class="enrich-name">${e.name}</div><div class="enrich-title">${e.title}</div></div>
      </div>
      <div class="e-row"><span class="e-key">Email</span><span class="e-val" style="color:var(--green)">✓ ${e.email}</span></div>
      <div class="e-row"><span class="e-key">Phone</span><span class="e-val">${e.phone}</span></div>
      <div class="e-row"><span class="e-key">LinkedIn</span><span class="e-val" style="color:var(--purple);font-size:11px">${e.li}</span></div>
      <div class="e-row"><span class="e-key">Size</span><span class="e-val">${e.size}</span></div>
      <div class="e-row"><span class="e-key">Revenue</span><span class="e-val">${e.rev}</span></div>
      <div class="e-row"><span class="e-key">Tech</span><span class="e-val" style="font-size:11px;text-align:right">${e.tech}</span></div>
    </div>`).join('');
}

/* ── Screen routing ──────────────────────────────────────────────── */
const breadcrumbs={s0:'Sales Agent',s1:'Memory',s2:'Define Goal',s3:'Agent Q&A',s4:'Execution Plan',s5:'Running…',s6:'Results',s7:'Statistics'};

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('breadcrumb').innerHTML=`AI Sales Agent &rsaquo; <b>${breadcrumbs[id]||id}</b>`;
  if(id==='s6'){renderProspects();renderEnriched();}
}

function navTo(screenId, navId){
  showScreen(screenId);
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  if(navId) document.getElementById(navId)?.classList.add('active');
}

/* ── Memory import · live parse ──────────────────────────────────── */
function parseMemory(val){
  if(!val.trim()){return;}
  const l0=[],l1=[],l2=[],l3=[];
  if(/snov|company|product|b2b/i.test(val)) l0.push('Snov.io','B2B SaaS','Outbound platform');
  if(/icp|customer|target|industry/i.test(val)){l1.push('VP Sales','Head of Growth','CMO');if(/saas|software/i.test(val))l1.push('SaaS');}
  if(/usp|value|differenti|deliver/i.test(val)){l2.push('All-in-one platform','90%+ deliverability','AI personalization');}
  if(/hubspot|salesforce|gmail|mailbox|sequence/i.test(val)){l3.push('HubSpot','Campaign engine','Email warm-up');}
  const render=(items,id)=>{
    const el=document.getElementById(id);
    el.innerHTML=items.length?items.map(t=>`<span class="layer-tag">${t}</span>`).join(''):'<span style="font-size:12px;color:var(--light);font-style:italic">Not detected yet…</span>';
  };
  render(l0,'l0-items'); render(l1,'l1-items'); render(l2,'l2-items'); render(l3,'l3-items');
  document.getElementById('parsed-preview').querySelector('.parsed-header').innerHTML=`<svg width="14" height="14" fill="none" stroke="var(--green)" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> Parsing context…`;
  document.getElementById('parse-status').textContent=`Detected ${l0.length+l1.length+l2.length+l3.length} context signals`;
}

function confirmMemory(){
  showToast('Memory imported! Agent context updated.',true);
  setTimeout(()=>showScreen('s2'),800);
}

/* ── Intent / template ───────────────────────────────────────────── */
function selectTemplate(id){
  document.querySelectorAll('.template-chip').forEach(c=>c.classList.remove('selected'));
  const el=document.getElementById('tpl-'+id);
  if(el)el.classList.add('selected');
  const prefill={
    outbound:"I want to find 50 VP Sales contacts at SaaS companies in the US, enrich their data, and launch a personalized cold email campaign to book discovery calls.",
    linkedin:"I want to connect with 30 Head of Growth contacts on LinkedIn at Series B–C SaaS companies and start a warm outreach sequence.",
    warmup:"I need to warm up 3 new mailboxes before launching a cold email campaign next month.",
    analysis:"Analyze the performance of my last 3 campaigns and tell me which subject lines and personas performed best.",
    content:"Write a 5-email outbound sequence targeting CMOs at e-commerce companies, focusing on our AI personalization feature."
  };
  if(prefill[id])document.getElementById('goal-text').value=prefill[id];
}

function submitGoal(){
  const val=document.getElementById('goal-text').value.trim();
  if(!val)return showToast('Please describe your goal first');
  showScreen('s3');
}

/* ── Q&A flow ────────────────────────────────────────────────────── */
let qaStep=1;
const qaFlow=[
  {q:"<strong>2 of 4 — What geography should we target?</strong>",opts:["🇺🇸 United States only","🌎 US + Canada + UK","🌍 All English-speaking markets","✏️ Custom geographies…"],ctx:['ctx-icp','ctx-geo'],vals:['ICP: SaaS · VP Sales · 50–500 emp','Geo: US / CA / UK'],pct:50},
  {q:"<strong>3 of 4 — How many prospects do you need?</strong>",opts:["25 prospects","50 prospects","100 prospects","200+ prospects"],ctx:['ctx-geo'],vals:['50 prospects · confirmed'],pct:75},
  {q:"<strong>4 of 4 — What tone should the emails use?</strong>",opts:["Friendly & conversational","Professional & direct","Educational & consultative","Bold & challenger"],ctx:[],vals:[],pct:100},
];

function selectOpt(btn,q){
  if(btn.classList.contains('selected'))return;
  btn.closest('.opt-grid').querySelectorAll('.msg-opt').forEach(b=>b.disabled=true);
  btn.classList.add('selected');
  const thread=document.getElementById('chat-thread');
  const userMsg=document.createElement('div');
  userMsg.className='msg user';
  userMsg.innerHTML=`<div class="msg-avatar user-av">DK</div><div class="msg-bubble">${btn.textContent.trim()}</div>`;
  thread.appendChild(userMsg);
  if(qaStep-1<qaFlow.length){
    const step=qaFlow[qaStep-1];
    step.ctx.forEach((id,i)=>{
      const el=document.getElementById(id);
      if(el){el.classList.add('filled');el.textContent=step.vals[i]||el.textContent;}
    });
    document.getElementById('ctx-pct').textContent=step.pct+'%';
    document.getElementById('ctx-bar-fill').style.width=step.pct+'%';
    if(step.pct===100){document.getElementById('l1-status').textContent='Complete';document.getElementById('l1-status').style.cssText='background:var(--green-light);color:var(--green)';}
  }
  const typingWrap=document.createElement('div');
  typingWrap.className='msg agent';
  typingWrap.innerHTML=`<div class="msg-avatar agent-av">AI</div><div class="typing-indicator"><div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
  thread.appendChild(typingWrap);
  thread.scrollTop=thread.scrollHeight;
  setTimeout(()=>{
    thread.removeChild(typingWrap);
    if(qaStep<qaFlow.length){
      const next=qaFlow[qaStep];
      const agentMsg=document.createElement('div');
      agentMsg.className='msg agent';
      agentMsg.innerHTML=`<div class="msg-avatar agent-av">AI</div><div class="msg-bubble">${next.q}<div class="opt-grid">${next.opts.map(o=>`<button class="msg-opt" onclick="selectOpt(this,'q${qaStep+1}')">${o}</button>`).join('')}</div></div>`;
      thread.appendChild(agentMsg);
    } else {
      const done=document.createElement('div');
      done.className='msg agent';
      done.innerHTML=`<div class="msg-avatar agent-av">AI</div><div class="msg-bubble">✓ <strong>All set.</strong> I have everything I need. Your execution plan is ready — 5 tasks, all tools pre-configured. Ready to run?<div class="opt-grid"><button class="msg-opt" onclick="showScreen('s4')">📋 Review plan first</button><button class="msg-opt" onclick="startProcessing()">▶️ Run agent now</button></div></div>`;
      thread.appendChild(done);
    }
    qaStep++;
    thread.scrollTop=thread.scrollHeight;
  },1200);
}

function sendChatMsg(){
  const input=document.getElementById('chat-input');
  if(!input.value.trim())return;
  selectOpt({textContent:input.value,classList:{contains:()=>false,add:()=>{}},'closest':()=>({querySelectorAll:()=>[]}),'disabled':false},'custom');
  input.value='';
}

/* ── Processing ──────────────────────────────────────────────────── */
function startProcessing(){
  showScreen('s5');
  const steps=[
    {delay:1400,doneId:'pi2',nextId:'pi3',sub:null},
    {delay:3000,doneId:'pi3',nextId:'pi4',sub:'52 prospects found · 48 verified'},
    {delay:4600,doneId:'pi4',nextId:'pi5',sub:null},
    {delay:5800,doneId:'pi5',nextId:null,sub:null},
  ];
  let cur=2;
  steps.forEach((s,i)=>{
    setTimeout(()=>{
      const d=document.getElementById('pi'+cur);
      if(d){d.className='proc-ind done';d.innerHTML='✓';}
      if(s.sub)document.getElementById('ps2').textContent=s.sub;
      cur++;
      const n=document.getElementById('pi'+cur);
      if(n){n.className='proc-ind active';n.innerHTML='<div class="bouncing"><div class="b-dot"></div><div class="b-dot"></div><div class="b-dot"></div></div>';}
      if(i===steps.length-1){
        const last=document.getElementById('pi5');
        if(last){last.className='proc-ind done';last.innerHTML='✓';}
        setTimeout(()=>showScreen('s6'),700);
      }
    },s.delay);
  });
}

/* ── Tabs ────────────────────────────────────────────────────────── */
function switchTab(el,tabId){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  ['tr-prospects','tr-enriched','tr-campaign','tr-memory'].forEach(id=>{
    const el2=document.getElementById(id);
    if(el2)el2.style.display=id===tabId?'block':'none';
  });
}

/* ── Toast ───────────────────────────────────────────────────────── */
function showToast(msg,success=false){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.className='toast'+(success?' success':'');
  void t.offsetWidth;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}
