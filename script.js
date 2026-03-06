
const cur=document.getElementById('cur'),curR=document.getElementById('curR');
document.addEventListener('mousemove',e=>{
  cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';
  curR.style.left=e.clientX+'px';curR.style.top=e.clientY+'px';
});
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='20px';cur.style.height='20px';cur.style.background='var(--amber)';curR.style.width='52px';curR.style.height='52px'});
  el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';cur.style.background='var(--terra)';curR.style.width='36px';curR.style.height='36px'});
});
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>60));
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)}});
},{threshold:0.08});
document.querySelectorAll('.sr').forEach(el=>obs.observe(el));
document.querySelectorAll('.vid-wrap').forEach(wrap=>{
  const video=wrap.querySelector('video');
  const muteBtn=wrap.querySelector('.vid-mute-btn');
  const overlay=wrap.querySelector('.vid-overlay');
  const MUTE_ICON=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
  const VOL_ICON=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;
  video.muted=true;video.loop=true;
  overlay.addEventListener('click',()=>{video.play();wrap.classList.add('playing')});
  muteBtn.addEventListener('click',e=>{
    e.stopPropagation();video.muted=!video.muted;
    muteBtn.innerHTML=video.muted?MUTE_ICON:VOL_ICON;
  });
});
