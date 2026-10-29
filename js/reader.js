"use strict";
/* Швидкочитання: one-word (or 2–3-word) speed reader. */
const $=id=>document.getElementById(id);
const KEY="chytanka.reader.v1", TKEY="chytanka.reader.t.";
const SAMPLE_ID="sample";
const SAMPLE_TITLE="Мурко і дощ (sample)";
const SAMPLE=`Мурко і дощ

Був звичайний осінній вечір. У Львові йшов дощ, а Тарас сидів удома біля вікна і читав книжку. Мурко спав на столі, як завжди.

Раптом хтось подзвонив. Це була Олена.

«Привіт, Тарасе! Що ти робиш?» — запитала вона.

«Читаю. А ти?»

«Я щойно повернулася з роботи. Хочеш піти в кав'ярню? Там тепло і є гарячий шоколад.»

Тарас подивився на вулицю. Дощ не закінчувався. Мурко відкрив одне око, ніби питав: «Ти справді хочеш вийти?»

«Добре, — сказав Тарас. — Зустрінемося біля Ратуші за пів години.»

Він узяв шапку і парасольку. Мурко знову заснув. Для нього найкраще місце — вдома, на теплому столі.`;

/* ---------- settings + library ---------- */
let S={wpm:300,chunk:1,bright:100,size:2,cur:SAMPLE_ID,items:[],log:[]};
try{const o=JSON.parse(localStorage.getItem(KEY)||"null");if(o&&typeof o==="object")S=Object.assign(S,o)}catch(e){}
if(!Array.isArray(S.items))S.items=[];if(!Array.isArray(S.log))S.log=[];
if(!S.items.some(x=>x.id===SAMPLE_ID))S.items.push({id:SAMPLE_ID,title:SAMPLE_TITLE,pos:0,len:0,last:0});
const saveS=()=>{try{localStorage.setItem(KEY,JSON.stringify(S));return true}catch(e){return false}};
const getText=id=>{if(id===SAMPLE_ID)return SAMPLE;try{return localStorage.getItem(TKEY+id)}catch(e){return null}};
function putText(id,text){
  for(let tries=0;tries<12;tries++){
    try{localStorage.setItem(TKEY+id,text);return true}catch(e){
      const old=S.items.filter(x=>x.id!==id&&x.id!==SAMPLE_ID).sort((a,b)=>a.last-b.last)[0];
      if(!old)return false;
      try{localStorage.removeItem(TKEY+old.id)}catch(_){}
      S.items=S.items.filter(x=>x!==old);
    }
  }
  return false;
}

/* ---------- text → tokens ---------- */
let T=[],sentStart=[],memText=null;   // T: [{w, end:'s'|'c'|'p'|'' , long:bool}]
const SENT=/[.!?…]["»”)\]]*$/, COMMA=/[,;:—–]["»”)\]]*$/;
function tokenize(text){
  text=text.replace(/^﻿/,"").replace(/\r\n?/g,"\n").replace(/­/g,"");
  const out=[];
  for(const para of text.split(/\n\s*\n+/)){
    const raw=para.split(/\s+/).filter(Boolean);
    const words=[];
    for(let k=0;k<raw.length;k++){
      const w=raw[k];
      // a lone dash or quote joins the next word so it doesn't flash on its own
      if(/^[—–\-«»„“”"']+$/.test(w)&&k+1<raw.length){raw[k+1]=w+(/[—–\-]/.test(w)?" ":"")+raw[k+1];continue}
      if(/^[»”"')\].,!?…:;]+$/.test(w)&&words.length){words[words.length-1]+=w;continue}
      words.push(w);
    }
    words.forEach((w,k)=>out.push({w,end:k===words.length-1?"p":SENT.test(w)?"s":COMMA.test(w)?"c":"",long:w.length>9}));
  }
  return out;
}
function buildSentences(){sentStart=[];T.forEach((t,i)=>{if(i===0||T[i-1].end==="s"||T[i-1].end==="p")sentStart.push(i)})}

/* ---------- state ---------- */
let pos=0,playing=false,timer=null,item=null,shown=0;
let sess={words:0,ms:0,since:0,startPos:0};
function curItem(){return S.items.find(x=>x.id===S.cur)}
function load(id){
  const it=S.items.find(x=>x.id===id);let text=it?getText(id):null;
  if(id===memText?.id)text=memText.text;
  if(!it||text==null){S.cur=SAMPLE_ID;return load(SAMPLE_ID)}
  pause();item=it;S.cur=id;T=tokenize(text);buildSentences();
  it.len=T.length;it.last=Date.now();pos=Math.min(it.pos||0,Math.max(0,T.length-1));
  saveS();$("scrub").max=Math.max(0,T.length-1);render();renderLib();
}
function addText(title,text){
  const toks=tokenize(text);
  if(!toks.length){msg("That file has no readable text.",true);return}
  const id="t"+Date.now().toString(36);
  const it={id,title:title.slice(0,80)||"Untitled",pos:0,len:toks.length,last:Date.now()};
  S.items.unshift(it);
  if(putText(id,text)&&saveS()){msg("Opened “"+it.title+"” · "+toks.length.toLocaleString("en-GB")+" words.")}
  else{memText={id,text};saveS();msg("Opened “"+it.title+"”, but it is too large for this browser to remember after you close the page.",true)}
  load(id);
}
function msg(t,warn){const m=$("srcMsg");m.textContent=t;m.className="msg"+(warn?"":" ok")}

/* ---------- chunking + timing ---------- */
function chunkAt(i){const n=S.chunk;let j=i;while(j<T.length&&j-i<n){j++;if(T[j-1].end==="s"||T[j-1].end==="p")break}return j-i||1}
function delayFor(i,len){
  const base=60000/S.wpm,last=T[i+len-1];
  let d=base*len;
  if(last.end==="p")d+=base*1.6;else if(last.end==="s")d+=base*1.1;else if(last.end==="c")d+=base*0.5;
  for(let k=i;k<i+len;k++)if(T[k].long)d+=base*0.2;
  return d;
}

/* ---------- rendering ---------- */
let charW=0.6;
function measure(){const c=document.createElement("canvas").getContext("2d");c.font="400 100px "+getComputedStyle(document.body).fontFamily;charW=c.measureText("ж").width/100||0.6}
const SIZES=[30,38,46,56,68];
const esc=s=>s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
function orpIndex(w){
  const m=w.match(/[\p{L}\p{N}]/u);const lead=m?m.index:0;
  const core=w.slice(lead).replace(/[^\p{L}\p{N}'’ʼ-]+$/u,"");const n=core.length;
  return lead+(n<=1?0:n<=5?1:n<=9?2:n<=13?3:4);
}
function render(){
  const el=$("rWord"),st=$("rStage"),W=st.clientWidth;
  if(!T.length){el.textContent="";return}
  const len=chunkAt(pos);shown=len;
  const multi=len>1||S.chunk>1;st.classList.toggle("multi",multi);
  let text,k,fx;
  if(!multi){text=T[pos].w;k=orpIndex(text);fx=0.38}
  else{text=T.slice(pos,pos+len).map(t=>t.w).join(" ");k=Math.floor(text.length/2);fx=0.5}
  let fs=SIZES[S.size];
  const leftCh=k+0.5,rightCh=text.length-k-0.5;
  fs=Math.min(fs,(W*fx-12)/(leftCh*charW),(W*(1-fx)-12)/(rightCh*charW));
  fs=Math.max(14,fs);
  el.style.fontSize=fs+"px";
  el.style.left=(W*fx-leftCh*charW*fs)+"px";
  el.innerHTML=multi?esc(text):esc(text.slice(0,k))+'<span class="p">'+esc(text[k]||"")+"</span>"+esc(text.slice(k+1));
  // meta
  const done=pos+len;
  $("rPos").textContent=done.toLocaleString("en-GB");$("rTotal").textContent=T.length.toLocaleString("en-GB");
  const mins=(T.length-done)/S.wpm;$("rLeft").textContent=mins<1?"<1 min":Math.round(mins)+" min";
  $("scrub").value=pos;
  const pct=T.length?Math.round(done/T.length*100):0;$("hdrPct").textContent=pct+"% read";$("barfill").style.width=pct+"%";
  $("rTitle").textContent=item?item.title:"—";
  // context: the current sentence plus a little either side
  let s=0;for(const x of sentStart){if(x<=pos)s=x;else break}
  const a=Math.max(0,Math.min(s,pos-12)),b=Math.min(T.length,Math.max(pos+len+14,a+28));
  let h=a>0?"… ":"";
  for(let q=a;q<b;q++){const w=esc(T[q].w);h+=(q>=pos&&q<pos+len)?'<span class="now">'+w+"</span>":w;h+=T[q].end==="p"&&q<b-1?" ¶ ":" "}
  $("rCtx").innerHTML=h+(b<T.length?"…":"");
  $("rState").textContent=playing?"":(done>=T.length?"end":"paused");
  $("playBtn").textContent=playing?"Pause":(done>=T.length?"Restart":"Play");
}
function controls(){
  $("wpmVal").textContent=S.wpm;$("hdrWpm").textContent=S.wpm+" wpm";
  document.querySelectorAll("[data-chunk]").forEach(b=>b.setAttribute("aria-pressed",String(+b.dataset.chunk===S.chunk)));
  $("bright").value=S.bright;$("brightVal").textContent=S.bright+"%";
  $("dimmable").style.filter=S.bright===100?"":"brightness("+S.bright/100+")";
  $("smaller").disabled=S.size<=0;$("bigger").disabled=S.size>=SIZES.length-1;
}

/* ---------- playback ---------- */
function step(){
  if(!playing)return;
  const len=chunkAt(pos),d=delayFor(pos,len);
  timer=setTimeout(()=>{
    sess.words+=len;
    if(pos+len>=T.length){pos=T.length-1;pause();render();return}
    pos+=len;savePos();render();step();
  },d);
}
function play(){
  if(!T.length||playing)return;
  if(pos+chunkAt(pos)>=T.length&&pos>0)pos=0;
  playing=true;sess.since=performance.now();if(!sess.ms&&!sess.words)sess.startPos=pos;
  render();step();
}
function pause(){
  if(!playing)return;
  playing=false;clearTimeout(timer);
  sess.ms+=performance.now()-sess.since;savePos(true);logLine();render();
}
const toggle=()=>playing?pause():play();
let lastSave=0;
function savePos(force){if(!item)return;item.pos=pos;item.last=Date.now();const t=Date.now();if(force||t-lastSave>2000){lastSave=t;saveS()}}
function jump(p){const was=playing;pause();pos=Math.max(0,Math.min(T.length-1,p));savePos(true);render();if(was)play()}
function back(){const n=S.chunk;let p=pos-1;// step to the start of the previous chunk
  let s=0;for(const x of sentStart){if(x<=p)s=x;else break}
  p=Math.max(s,pos-n);if(p===pos)p=Math.max(0,pos-1);jump(p)}
const fwd=()=>{if(pos+shown<T.length)jump(pos+shown)};
function sentBack(){let prev=0;for(const x of sentStart){if(x<pos-1)prev=x;else break}
  const cur=sentStart.filter(x=>x<=pos).pop()||0;jump(pos-cur>2?cur:prev)}
function sentFwd(){const nx=sentStart.find(x=>x>pos);if(nx!=null)jump(nx)}
function speed(d){S.wpm=Math.max(60,Math.min(1000,S.wpm+d));saveS();controls();render()}

/* ---------- reading log ---------- */
const fmtT=ms=>{const s=Math.round(ms/1000),m=Math.floor(s/60);return m+":"+String(s%60).padStart(2,"0")};
const today=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
function logLine(){
  const act=sess.ms?Math.round(sess.words/(sess.ms/60000)):0;
  $("sessLine").innerHTML=`<span>This session <b>${sess.words.toLocaleString("en-GB")}</b> words</span><span>Time <b>${fmtT(sess.ms)}</b></span><span>Actual <b>${act||"–"}</b> wpm</span><span>Set <b>${S.wpm}</b> wpm</span>`;
}
function commitSession(){
  if(playing)pause();
  if(sess.words<20){return}
  const act=Math.round(sess.words/(sess.ms/60000));
  S.log.unshift({d:today(),t:item?item.title:"",w:sess.words,ms:Math.round(sess.ms),set:S.wpm,act});
  S.log=S.log.slice(0,60);saveS();sess={words:0,ms:0,since:0,startPos:pos};renderHist();logLine();
}
function renderHist(){
  const h=$("hist");
  if(!S.log.length){h.innerHTML='<p class="empty">Sessions of 20 words or more appear here when you pause for over two minutes, switch texts or leave the page.</p>';return}
  const tot=S.log.reduce((a,x)=>a+x.w,0);
  h.innerHTML=`<table><thead><tr><th>Date</th><th>Words</th><th>Time</th><th>Set</th><th>Actual</th></tr></thead><tbody>`+
    S.log.slice(0,12).map(x=>`<tr><td>${x.d.slice(5).split("-").reverse().join("/")}</td><td>${x.w.toLocaleString("en-GB")}</td><td>${fmtT(x.ms)}</td><td>${x.set}</td><td>${x.act}</td></tr>`).join("")+
    `</tbody></table><p class="empty" style="margin-top:8px">${tot.toLocaleString("en-GB")} words logged in total.</p>`;
}
let idleTimer=null;
function armIdle(){clearTimeout(idleTimer);idleTimer=setTimeout(()=>{if(!playing)commitSession()},120000)}

/* ---------- library list ---------- */
function renderLib(){
  const L=$("lib");
  const items=[...S.items].sort((a,b)=>(b.id===S.cur)-(a.id===S.cur)||b.last-a.last);
  L.innerHTML=items.map(x=>{const pct=x.len?Math.round(Math.min(x.len,x.pos+1)/x.len*100):0;
    return `<div class="li${x.id===S.cur?" cur":""}"><button class="open" type="button" data-open="${x.id}"><b>${esc(x.title)}</b><small>${(x.len||0).toLocaleString("en-GB")} words · ${pct}% read${x.id===S.cur?" · open now":""}</small></button>`+
      (x.id===SAMPLE_ID?"<span></span>":`<button class="rm" type="button" data-rm="${x.id}" aria-label="Remove ${esc(x.title)}">Remove</button>`)+`</div>`}).join("");
  L.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>{if(b.dataset.open!==S.cur){commitSession();load(b.dataset.open)}});
  L.querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>{
    if(!b.classList.contains("sure")){b.classList.add("sure");b.textContent="Remove?";setTimeout(()=>{if(b.isConnected){b.classList.remove("sure");b.textContent="Remove"}},4000);return}
    const id=b.dataset.rm;try{localStorage.removeItem(TKEY+id)}catch(e){}
    S.items=S.items.filter(x=>x.id!==id);if(S.cur===id){commitSession();S.cur=SAMPLE_ID;saveS();load(SAMPLE_ID)}else{saveS();renderLib()}
  });
}

/* ---------- file input ---------- */
function decode(buf){
  const b=new Uint8Array(buf);
  if(b[0]===0xFF&&b[1]===0xFE)return new TextDecoder("utf-16le").decode(buf);
  if(b[0]===0xFE&&b[1]===0xFF)return new TextDecoder("utf-16be").decode(buf);
  try{return new TextDecoder("utf-8",{fatal:true}).decode(buf)}catch(e){}
  try{return new TextDecoder("windows-1251").decode(buf)}catch(e){}
  return new TextDecoder("utf-8").decode(buf);
}
$("fileIn").onchange=e=>{
  const f=e.target.files&&e.target.files[0];if(!f)return;
  if(f.size>8*1024*1024){msg("That file is over 8 MB. Split it into smaller parts and open them one at a time.",true);e.target.value="";return}
  const r=new FileReader();
  r.onload=()=>{commitSession();addText(f.name.replace(/\.[^.]+$/,""),decode(r.result));e.target.value=""};
  r.onerror=()=>msg("The file couldn't be read. Check it's a plain .txt file and try again.",true);
  r.readAsArrayBuffer(f);
};
$("pasteGo").onclick=()=>{const t=$("pasteIn").value.trim();if(!t){msg("Paste some text into the box first.",true);return}
  const first=t.split(/\s+/).slice(0,5).join(" ");commitSession();addText(first+(t.split(/\s+/).length>5?"…":""),t);$("pasteIn").value="";$("pasteBox").open=false};

/* ---------- controls ---------- */
$("playBtn").onclick=toggle;$("rStage").onclick=toggle;
$("wordBack").onclick=back;$("wordFwd").onclick=fwd;$("sentBack").onclick=sentBack;$("sentFwd").onclick=sentFwd;
$("slower").onclick=()=>speed(-10);$("faster").onclick=()=>speed(10);
document.querySelectorAll("[data-chunk]").forEach(b=>b.onclick=()=>{S.chunk=+b.dataset.chunk;saveS();controls();render()});
$("smaller").onclick=()=>{S.size=Math.max(0,S.size-1);saveS();controls();render()};
$("bigger").onclick=()=>{S.size=Math.min(SIZES.length-1,S.size+1);saveS();controls();render()};
$("bright").oninput=e=>{S.bright=+e.target.value;saveS();controls()};
let scrubWas=false;
$("scrub").addEventListener("pointerdown",()=>{scrubWas=playing;pause()});
$("scrub").oninput=e=>{pause();pos=+e.target.value;render()};
$("scrub").onchange=e=>{pos=+e.target.value;savePos(true);render();if(scrubWas){scrubWas=false;play()}};
addEventListener("keydown",e=>{
  if(!$("app").classList.contains("on"))return;
  const t=e.target;if(t&&(t.tagName==="TEXTAREA"||(t.tagName==="INPUT"&&t.type!=="range")))return;
  if(t&&t.tagName==="INPUT"&&t.type==="range"&&e.key.startsWith("Arrow"))return;
  if(e.key===" "){if(t&&(t.id==="playBtn"||t.tagName==="SUMMARY"||t.closest?.(".li")))return;e.preventDefault();toggle()}
  else if(e.key==="ArrowRight"){e.preventDefault();e.shiftKey?sentFwd():fwd()}
  else if(e.key==="ArrowLeft"){e.preventDefault();e.shiftKey?sentBack():back()}
  else if(e.key==="ArrowUp"){e.preventDefault();speed(10)}
  else if(e.key==="ArrowDown"){e.preventDefault();speed(-10)}
  else if(/^[123]$/.test(e.key)&&!e.ctrlKey&&!e.metaKey&&!e.altKey){S.chunk=+e.key;saveS();controls();render()}
  else if(e.key==="Home"&&!t.closest?.("input")){e.preventDefault();jump(0)}
});
document.addEventListener("click",()=>armIdle(),true);
addEventListener("keydown",()=>armIdle(),true);
document.addEventListener("visibilitychange",()=>{if(document.hidden){pause();commitSession()}});
addEventListener("pagehide",()=>{pause();commitSession();saveS()});
addEventListener("resize",()=>render());

/* ---------- start ---------- */
(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>{measure();render()});
measure();controls();load(S.cur);logLine();renderHist();
window.__readerReady=()=>{render();$("playBtn").focus({preventScroll:true})};

/* ---------- intro (from Terminal Velocity) ---------- */
(()=>{
  const cv=document.getElementById("rain"),ctx=cv.getContext("2d");
  const txt=document.getElementById("txt"),caret=document.getElementById("caret");
  const hint=document.getElementById("hint"),vig=document.getElementById("vig");
  const stage=document.getElementById("stage"),app=document.getElementById("app");
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MSG="Швидкочитання";
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
    window.__readerReady&&window.__readerReady();
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
