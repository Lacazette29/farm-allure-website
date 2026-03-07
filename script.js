const cur=document.getElementById('cur'),curR=document.getElementById('curR');
document.addEventListener('mousemove',e=>{
  cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';
  curR.style.left=e.clientX+'px';curR.style.top=e.clientY+'px';
});
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='20px';cur.style.height='20px';cur.style.background='var(--amber)';curR.style.width='52px';curR.style.height='52px'});
  el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';cur.style.background='var(--terra)';curR.style.width='36px';curR.style.height='36px'});
});
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',window.scrollY>60));
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)}});
},{threshold:0.08});
document.querySelectorAll('.sr').forEach(el=>obs.observe(el));

// Videos: lazy load + silent autoplay when visible
const vidObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    const v=e.target.querySelector('video');
    if(e.isIntersecting){v.src=v.dataset.src;v.load();v.play().catch(()=>{});}
    else{v.pause();}
  });
},{threshold:0.2});
document.querySelectorAll('.vid-wrap').forEach(w=>vidObs.observe(w));
