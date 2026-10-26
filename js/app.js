"use strict";
const L=window.LESSONS;

/* ---------- state ---------- */
const KEY="chytanka.v1";
let S={done:{},early:{}};
try{const raw=localStorage.getItem(KEY);if(raw){const o=JSON.parse(raw);if(o&&o.done)S={done:o.done||{},early:o.early||{}}}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const pad=n=>String(n).padStart(2,"0");
const iso=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const today=()=>iso(new Date());
const fmt=s=>{const[y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})};
const tomorrowStr=()=>{const d=new Date();d.setDate(d.getDate()+1);return iso(d)};
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const st=s=>esc(s).replace(/\+(.)/gu,'<span class="st">$1</span>');
const plain=s=>s.replace(/\+/g,"");

const isDone=n=>!!S.done[n];
const avail=n=>n===1||(isDone(n-1)&&(S.done[n-1]<today()||S.early[n]));
const status=n=>isDone(n)?"done":avail(n)?"open":(isDone(n-1)?"tomorrow":"locked");
const current=()=>{for(let n=1;n<=L.length;n++)if(!isDone(n)&&avail(n))return n;return null};
const lastDone=()=>{let m=0;for(let n=1;n<=L.length;n++)if(isDone(n))m=n;return m};
function streak(){const ds=new Set(Object.values(S.done));const d=new Date();if(!ds.has(iso(d)))d.setDate(d.getDate()-1);let c=0;while(ds.has(iso(d))){c++;d.setDate(d.getDate()-1)}return c}

let view="lesson",sel=current()||lastDone()||1,answers={},showAll=false,lexHide=false,lexQ="";
const V=document.getElementById("view");

function header(){
  const done=Object.keys(S.done).length,cur=current();
  document.getElementById("lvl").textContent=(cur?"Lesson "+cur:"Lessons done "+done)+" / "+L.length;
  document.getElementById("barfill").style.width=(done/L.length*100)+"%";
  const s=streak();document.getElementById("streak").textContent=s+"-day streak · "+done+" complete";
  const info=document.getElementById("info");
  if(cur&&!isDone(cur))info.innerHTML="Today <b>Урок "+cur+"</b>";
  else if(done<L.length)info.innerHTML="Next <b>"+fmt(tomorrowStr())+"</b>";
  else info.innerHTML="<b>All "+L.length+" done</b>";
  document.querySelectorAll(".tab").forEach(t=>t.setAttribute("aria-selected",t.dataset.v===view?"true":"false"));
}

function renderLesson(){
  const n=sel,l=L[n-1],stt=status(n);
  const a=answers[n]||(answers[n]={});
  const allOk=l.q.every((q,i)=>a[i]===q.a);
  let h=`<div class="lhead"><span class="eyebrow">Урок ${pad(n)} · ${esc(l.g)}${isDone(n)?" · completed "+fmt(S.done[n]):""}</span><h2>${esc(l.ua)}</h2><span class="en">${esc(l.en)}</span></div>`;
  h+=`<div class="sec"><h3 class="lbl">Grammar <span>${esc(l.g)}</span></h3><div class="gram">${l.gram}</div></div>`;
  h+=`<div class="sec"><div class="row" style="justify-content:space-between"><h3 class="lbl">Read</h3><button class="opt" id="toggleAll" type="button">${showAll?"Hide":"Show"} all English</button></div><div class="passage">`;
  l.p.forEach((s,i)=>{h+=`<button class="sent" type="button" data-i="${i}" aria-expanded="${showAll}"><span class="uk">${esc(s[0])}</span><span class="tr"${showAll?"":" hidden"}>${esc(s[1])}</span></button>`});
  h+=`</div></div>`;
  h+=`<div class="sec"><h3 class="lbl">New words <span>${l.v.length}</span></h3><div class="voc">`;
  l.v.forEach(w=>{h+=`<span class="w">${st(w[0])}</span><span class="g">${st(w[1])}</span>`});
  h+=`</div></div>`;
  if(l.r.length){h+=`<div class="sec"><h3 class="lbl">Back again from earlier lessons</h3><div class="chips">${l.r.map(w=>`<span class="chip">${esc(w)}</span>`).join("")}</div></div>`}
  h+=`<div class="sec"><h3 class="lbl">Check</h3><div class="qs">`;
  l.q.forEach((q,qi)=>{h+=`<div class="q"><p>${pad(qi+1)} ${esc(q.q)}</p><div class="opts">`;
    q.o.forEach((o,oi)=>{let c="";if(a[qi]===oi)c=oi===q.a?" ok":" no";h+=`<button class="opt${c}" type="button" data-q="${qi}" data-o="${oi}">${esc(o)}</button>`});
    h+=`</div></div>`});
  h+=`</div></div>`;
  if(isDone(n)){
    const nx=n+1;
    if(nx<=L.length&&!isDone(nx)){
      h+=status(nx)==="open"?`<div class="banner">Урок ${nx} is open. <button class="opt" type="button" id="goNext" style="margin-left:8px">Go to lesson ${nx}</button></div>`
      :`<div class="banner">Done for today. <b>Урок ${nx} · ${esc(L[nx-1].ua)}</b> unlocks ${fmt(tomorrowStr())}. Re-read today's passage once more before bed.</div>`;
    } else if(nx>L.length){h+=`<div class="banner"><b>Молодець!</b> You've finished all ${L.length} lessons.</div>`}
  } else {
    h+=`<div class="row"><button class="go" id="complete" type="button"${allOk?"":" disabled"}>Complete lesson ${n}</button><span class="small">${allOk?"All correct.":"Answer all three checks correctly to finish."}</span></div>`;
  }
  V.innerHTML=h;
  V.querySelectorAll(".sent").forEach(b=>b.onclick=()=>{const t=b.querySelector(".tr");t.hidden=!t.hidden;b.setAttribute("aria-expanded",String(!t.hidden))});
  document.getElementById("toggleAll").onclick=()=>{showAll=!showAll;renderLesson()};
  V.querySelectorAll(".opt[data-q]").forEach(b=>b.onclick=()=>{a[+b.dataset.q]=+b.dataset.o;const y=document.getElementById("app").scrollTop;renderLesson();document.getElementById("app").scrollTop=y});
  const c=document.getElementById("complete");if(c)c.onclick=()=>{S.done[n]=today();save();header();renderLesson()};
  const g=document.getElementById("goNext");if(g)g.onclick=()=>{sel=n+1;showAll=false;renderLesson();document.getElementById("app").scrollTop=0;header()};
}

function renderPath(){
  const cur=current();
  let h=`<div class="lhead"><span class="eyebrow">Path · ${Object.keys(S.done).length} of ${L.length} complete</span><h2>${L.length} days</h2><span class="en">Short sentences first, then short stories. Olena, Taras, Oksana and Murko appear throughout, so earlier words keep coming back.</span></div><div class="path">`;
  L.forEach((l,i)=>{const n=i+1,s=status(n);
    let lab=s==="done"?"done "+fmt(S.done[n]):s==="open"?"open now":s==="tomorrow"?"unlocks "+fmt(tomorrowStr()):"locked";
    const early=s==="tomorrow"?`<span class="early" role="button" tabindex="0" data-early="${n}">open early</span>`:"";
    h+=`<button class="pr ${s==="tomorrow"?"locked":s}${n===cur?" cur":""}" type="button" data-n="${n}"${s==="locked"||s==="tomorrow"?" disabled":""}><span class="n">${pad(n)}</span><span class="t"><b>${esc(l.ua)}</b><small>${esc(l.g)}</small></span><span class="s">${lab}${early}</span></button>`});
  h+=`</div>`;
  V.innerHTML=h;
  V.querySelectorAll(".pr").forEach(b=>b.onclick=()=>{if(b.disabled)return;sel=+b.dataset.n;view="lesson";showAll=false;render();document.getElementById("app").scrollTop=0});
  V.querySelectorAll("[data-early]").forEach(e=>{const f=ev=>{ev.stopPropagation();S.early[+e.dataset.early]=true;save();sel=+e.dataset.early;view="lesson";render()};
    e.onclick=f;e.onkeydown=ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();f(ev)}};
    e.parentElement.parentElement.disabled=false;e.parentElement.parentElement.onclick=null});
}

function renderLexicon(){
  const max=Math.max(current()||0,lastDone(),1);
  const words=[];for(let n=1;n<=max;n++)L[n-1].v.forEach(w=>words.push([w[0],w[1],n]));
  let h=`<div class="lhead"><span class="eyebrow">Lexicon · ${words.length} words from lessons 1–${max}</span><h2>Словник</h2><span class="en">Hide the English to test yourself. Tap a row to reveal it.</span></div>
  <div class="lexbar"><input id="lexq" type="search" placeholder="Filter in Ukrainian or English" value="${esc(lexQ)}" aria-label="Filter words"><button class="opt" id="lexhide" type="button" aria-pressed="${lexHide}">${lexHide?"Show":"Hide"} English</button></div>
  <div class="lex${lexHide?" hide":""}" id="lex"></div>`;
  V.innerHTML=h;
  const box=document.getElementById("lex");
  const draw=()=>{const q=lexQ.trim().toLowerCase();
    box.innerHTML=words.filter(w=>!q||plain(w[0]).toLowerCase().includes(q)||plain(w[1]).toLowerCase().includes(q))
      .map(w=>`<button class="lr" type="button"><span class="w">${st(w[0])}</span><span class="g">${st(w[1])}</span><span class="n">${pad(w[2])}</span></button>`).join("")||`<p class="small">No words match “${esc(lexQ)}”.</p>`;
    box.querySelectorAll(".lr").forEach(r=>r.onclick=()=>r.classList.toggle("shown"))};
  draw();
  const inp=document.getElementById("lexq");inp.oninput=()=>{lexQ=inp.value;draw()};
  document.getElementById("lexhide").onclick=()=>{lexHide=!lexHide;renderLexicon()};
}

function render(){header();if(view==="lesson")renderLesson();else if(view==="path")renderPath();else renderLexicon()}
document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{view=t.dataset.v;if(view==="lesson"&&!sel)sel=current()||1;render();document.getElementById("app").scrollTop=0});
render();

/* ---------- intro (from Terminal Velocity) ---------- */
(()=>{
  const cv=document.getElementById("rain"),ctx=cv.getContext("2d");
  const txt=document.getElementById("txt"),caret=document.getElementById("caret");
  const hint=document.getElementById("hint"),vig=document.getElementById("vig");
  const stage=document.getElementById("stage"),app=document.getElementById("app");
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MSG="Ласкаво просимо";
  const GLYPHS="ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789Z:.=*+-<>¦";
  let W,H,size,cols,drops,speed,raf,last=0,dim=0,dimTarget=0,state="rain",timers=[];

  function resize(){
    const dpr=Math.min(devicePixelRatio||1,2);
    W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    size=W<500?14:18;cols=Math.ceil(W/size);
    drops=Array.from({length:cols},()=>Math.random()*-H/size);
    speed=Array.from({length:cols},()=>.35+Math.random()*.65);
    ctx.fillStyle="#000";ctx.fillRect(0,0,W,H);
  }
  function frame(t){
    raf=requestAnimationFrame(frame);
    if(t-last<33)return; last=t;
    dim+=(dimTarget-dim)*.05;
    ctx.fillStyle="rgba(0,0,0,"+(0.08+dim*.12)+")";ctx.fillRect(0,0,W,H);
    ctx.font="600 "+size+"px "+getComputedStyle(document.body).fontFamily;
    for(let i=0;i<cols;i++){
      const y=drops[i]*size,x=i*size;
      const ch=GLYPHS[Math.random()*GLYPHS.length|0];
      ctx.fillStyle="rgba(0,255,65,"+(0.85-dim*.6)+")";
      ctx.fillText(GLYPHS[Math.random()*GLYPHS.length|0],x,y-size);
      ctx.fillStyle="rgba(234,255,239,"+(1-dim*.6)+")";
      ctx.fillText(ch,x,y);
      drops[i]+=speed[i];
      if(y>H&&Math.random()>.975)drops[i]=Math.random()*-20;
    }
  }
  const later=(fn,ms)=>timers.push(setTimeout(fn,ms));

  function intro(){
    timers.forEach(clearTimeout);timers=[];
    state="rain";txt.textContent="";caret.className="caret";hint.classList.remove("on");vig.classList.remove("on");
    app.classList.remove("on");app.setAttribute("aria-hidden","true");stage.style.opacity=1;stage.style.pointerEvents="";
    dimTarget=0;dim=0;resize();
    if(!raf)raf=requestAnimationFrame(frame);
    stage.focus({preventScroll:true});
    if(reduce){
      cancelAnimationFrame(raf);raf=0;ctx.fillStyle="#000";ctx.fillRect(0,0,W,H);
      txt.textContent=MSG;caret.className="caret on";hint.classList.add("on");state="ready";return;
    }
    later(()=>{dimTarget=1;vig.classList.add("on")},2600);
    later(()=>{caret.className="caret on blink"},3300);
    later(()=>{caret.className="caret on";type(0)},4400);
  }
  function type(i){
    state="typing";
    if(i>MSG.length){caret.className="caret on blink";later(()=>hint.classList.add("on"),700);state="ready";return}
    txt.textContent=MSG.slice(0,i);
    const ch=MSG[i-1],gap=ch===" "?150:55+Math.random()*95;
    later(()=>type(i+1),i===0?0:gap);
  }
  function enter(){
    if(state==="app")return;
    timers.forEach(clearTimeout);timers=[];state="app";
    stage.style.opacity=0;stage.style.pointerEvents="none";hint.classList.remove("on");vig.classList.remove("on");
    dimTarget=1.6;
    later(()=>{cancelAnimationFrame(raf);raf=0;ctx.fillStyle="#000";ctx.fillRect(0,0,W,H)},500);
    app.classList.add("on");app.removeAttribute("aria-hidden");
    document.getElementById("tab-lesson").focus({preventScroll:true});
  }
  addEventListener("keydown",e=>{
    if(e.key==="Enter"&&state==="ready"){e.preventDefault();enter()}
  });
  stage.addEventListener("click",()=>{if(state==="ready")enter()});
  hint.addEventListener("click",()=>{if(state==="ready")enter()});
  document.getElementById("skip").addEventListener("click",enter);
  document.getElementById("replay").addEventListener("click",intro);
  addEventListener("resize",()=>{if(state!=="app")resize()});
  (document.fonts?document.fonts.ready:Promise.resolve()).then(intro);
})();

/* offline support */
if("serviceWorker" in navigator&&location.protocol==="https:"){
  addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
