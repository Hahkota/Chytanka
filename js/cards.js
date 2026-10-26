"use strict";
/* Картки — spaced-repetition flashcards.
   Card state: s 'l' (learning) | 'r' (review), st learning step, iv interval in days,
   e ease, d due day, lp lapses. Unseen words have no state and arrive in frequency order. */
const W=window.WORDS, N=W.length, KEY="chytanka.cards.v1";
const $=id=>document.getElementById(id);
const dayNum=(t=new Date())=>Math.floor(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())/864e5);
let S={c:{},np:10,ptr:0,day:0,newDone:0,extra:0,seen:0,ok:0,days:[]};
try{const o=JSON.parse(localStorage.getItem(KEY)||"null");if(o&&o.c)S=Object.assign(S,o)}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
let today=dayNum();
function rollDay(){today=dayNum();if(S.day!==today){S.day=today;S.newDone=0;S.extra=0;S.seen=0;S.ok=0;save()}}
rollDay();

const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const stress=s=>esc(s.normalize("NFD")).replace(/([^́])́/gu,'<span class="st">$1</span>').normalize("NFC");
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const fmtIv=d=>d<30?d+(d===1?" day":" days"):d<365?Math.round(d/30)+" mo":(d/365).toFixed(1).replace(/\.0$/,"")+" yr";

let q=[],revealed=false,ahead=0;
function unseen(k){const out=[];let i=S.ptr;while(out.length<k&&i<N){if(!S.c[i])out.push(i);i++}return out}
function build(){
  rollDay();
  const lim=today+ahead, rev=[], lrn=[];
  for(const k in S.c){const x=S.c[k];if(x.s==="l")lrn.push(+k);else if(x.d<=lim)rev.push(+k)}
  shuffle(rev);
  const news=unseen(Math.max(0,S.np+S.extra-S.newDone));
  // spread new words evenly through the reviews: old, old, new, old, old, new…
  const out=[...lrn], gap=news.length?Math.max(1,Math.floor(rev.length/news.length)):0;
  let n=0;
  rev.forEach((r,i)=>{out.push(r);if(gap&&(i+1)%gap===0&&n<news.length)out.push(news[n++])});
  while(n<news.length)out.push(news[n++]);
  q=out;
}
function putBack(i,after){q.splice(Math.min(after,q.length),0,i)}

function preview(x,g){
  if(!x||x.s==="l"){const st=x?x.st:0;
    if(g===1)return "in 2 cards";if(g===2)return "in 4 cards";
    if(g===3)return st===0?"in 8 cards":fmtIv(x&&x.lp?Math.max(1,x.iv):1);
    return fmtIv(x&&x.lp?Math.max(2,x.iv):3)}
  if(g===1)return "in 2 cards";
  if(g===2)return fmtIv(Math.max(x.iv+1,Math.round(x.iv*1.2)));
  if(g===3)return fmtIv(Math.max(x.iv+1,Math.round(x.iv*x.e)));
  return fmtIv(Math.max(x.iv+2,Math.round(x.iv*x.e*1.3)));
}
const fuzz=iv=>iv<5?iv:Math.round(iv*(0.95+Math.random()*0.1));
function grade(g){
  if(!q.length||!revealed)return;
  const i=q.shift();let x=S.c[i];
  if(!x){x=S.c[i]={s:"l",st:0,iv:0,e:2.5,d:today,lp:0};S.newDone++;while(S.ptr<N&&S.c[S.ptr])S.ptr++}
  if(x.s==="l"){
    if(g===1){x.st=0;putBack(i,2)}
    else if(g===2)putBack(i,4);
    else if(g===3&&x.st===0){x.st=1;putBack(i,8)}
    else{x.iv=g===4?(x.lp?Math.max(2,x.iv):3):(x.lp?Math.max(1,x.iv):1);x.s="r";x.st=0;x.d=today+x.iv}
  }else{
    if(g===1){x.lp++;x.e=Math.max(1.3,x.e-0.2);x.s="l";x.st=0;x.iv=Math.max(1,Math.round(x.iv*0.25));putBack(i,2)}
    else{
      if(g===2){x.iv=Math.max(x.iv+1,Math.round(x.iv*1.2));x.e=Math.max(1.3,x.e-0.15)}
      if(g===3)x.iv=Math.max(x.iv+1,Math.round(x.iv*x.e));
      if(g===4){x.iv=Math.max(x.iv+2,Math.round(x.iv*x.e*1.3));x.e+=0.15}
      x.iv=fuzz(x.iv);x.d=today+x.iv;
    }
  }
  S.seen++;if(g>1)S.ok++;
  if(!S.days.includes(today)){S.days.push(today);S.days=S.days.slice(-400)}
  save();revealed=false;
  if(!q.length&&ahead){ahead=0}
  show();
}

function streak(){const d=new Set(S.days);let t=d.has(today)?today:today-1,c=0;while(d.has(t)){c++;t--}return c}
function counts(){
  let due=0,lrn=0,known=0,mature=0,tomorrow=0;
  for(const k in S.c){const x=S.c[k];if(x.s==="l")lrn++;else{known++;if(x.iv>=21)mature++;if(x.d<=today)due++;else if(x.d===today+1)tomorrow++}}
  return {due,lrn,known,mature,tomorrow};
}
function header(){
  const c=counts(),nl=q.filter(i=>!S.c[i]).length;
  $("known").textContent=c.known+" / "+N+" learned";
  $("barfill").style.width=(c.known/N*100)+"%";
  const s=streak();$("streak").textContent=s+"-day streak";
  $("sDue").textContent=c.due+c.lrn;$("sNew").textContent=nl;$("sLeft").textContent=q.length;
  $("npVal").textContent=S.np;
  const pct=S.seen?Math.round(S.ok/S.seen*100)+"%":"–";
  $("stats").innerHTML=`<span>Seen today <b>${S.seen}</b></span><span>Right <b>${pct}</b></span><span>Learning <b>${c.lrn}</b></span><span>Mature (3 weeks+) <b>${c.mature}</b></span><span>Next new word <b>#${Math.min(S.ptr+1,N)}</b></span>`;
  return c;
}
function show(){
  const c=header();
  if(!q.length){
    $("deck").hidden=true;$("done").hidden=false;
    const pct=S.seen?Math.round(S.ok/S.seen*100):0;
    $("doneText").innerHTML=S.seen?`You went through <b>${S.seen}</b> cards today and got <b>${pct}%</b> right. <b>${c.tomorrow}</b> reviews are due tomorrow.`
      :`Nothing is due right now. ${c.tomorrow?`<b>${c.tomorrow}</b> reviews are due tomorrow.`:""}`;
    $("ahead").hidden=!c.tomorrow;$("more").hidden=S.ptr>=N;
    return;
  }
  $("deck").hidden=false;$("done").hidden=true;
  const i=q[0],w=W[i],x=S.c[i];
  const tag=$("cTag");tag.className=!x?"new":x.s==="l"?"lrn":"";tag.textContent=!x?"new word":x.s==="l"?"learning":"review";
  $("cRank").textContent="#"+(i+1)+" of "+N;
  $("cWord").innerHTML=stress(w[0]);$("cPos").textContent=w[1];
  $("cGloss").textContent=w[2];$("cTl").textContent=w[3];
  $("back").hidden=!revealed;$("reveal").hidden=revealed;$("grades").hidden=!revealed;
  if(revealed)for(let g=1;g<=4;g++)$("i"+g).textContent=preview(x,g);
}
function reveal(){if(!q.length)return;revealed=true;show();$("deck").focus({preventScroll:true})}

$("reveal").onclick=reveal;
document.querySelectorAll(".g").forEach(b=>b.onclick=()=>{grade(+b.dataset.g);$("deck").focus({preventScroll:true})});
$("npDown").onclick=()=>{S.np=Math.max(0,S.np-5);save();build();revealed=false;show()};
$("npUp").onclick=()=>{S.np=Math.min(50,S.np+5);save();build();revealed=false;show()};
$("more").onclick=()=>{S.extra+=10;save();build();revealed=false;show();$("deck").focus({preventScroll:true})};
$("ahead").onclick=()=>{ahead=1;build();revealed=false;show();$("deck").focus({preventScroll:true})};
$("deck").tabIndex=-1;
addEventListener("keydown",e=>{
  if(!$("app").classList.contains("on")||$("deck").hidden)return;
  const t=e.target;if(t&&(t.tagName==="BUTTON"||t.tagName==="INPUT"||t.tagName==="A"))return;
  if(e.key==="Enter"||e.key===" "){e.preventDefault();revealed?grade(3):reveal()}
  else if(revealed&&/^[1-4]$/.test(e.key)){e.preventDefault();grade(+e.key)}
});
addEventListener("visibilitychange",()=>{if(!document.hidden&&dayNum()!==today){build();revealed=false;show()}});
build();show();
window.__cardsReady=()=>$("deck").focus({preventScroll:true});

/* ---------- intro (from Terminal Velocity) ---------- */
(()=>{
  const cv=document.getElementById("rain"),ctx=cv.getContext("2d");
  const txt=document.getElementById("txt"),caret=document.getElementById("caret");
  const hint=document.getElementById("hint"),vig=document.getElementById("vig");
  const stage=document.getElementById("stage"),app=document.getElementById("app");
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MSG="Картки";
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
    window.__cardsReady&&window.__cardsReady();
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
