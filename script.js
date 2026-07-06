const header=document.querySelector('.site-header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40));
document.querySelector('.nav-toggle').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const lb=document.querySelector('.lightbox'), lbImg=lb.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(btn=>btn.addEventListener('click',()=>{lbImg.src=btn.querySelector('img').src;lb.classList.add('open');lb.setAttribute('aria-hidden','false')}));
document.querySelector('.lightbox-close').addEventListener('click',()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true')});
lb.addEventListener('click',e=>{if(e.target===lb)document.querySelector('.lightbox-close').click()});
