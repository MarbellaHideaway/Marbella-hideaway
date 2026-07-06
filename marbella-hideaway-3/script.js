const header=document.querySelector('.site-header');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));
const slides=[...document.querySelectorAll('.hero-slide')];let current=0;setInterval(()=>{slides[current].classList.remove('active');current=(current+1)%slides.length;slides[current].classList.add('active')},5200);
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
