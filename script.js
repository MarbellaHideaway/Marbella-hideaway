const header=document.querySelector('.site-header');
const onScroll=()=>header.classList.toggle('scrolled',window.scrollY>40);
window.addEventListener('scroll',onScroll);onScroll();
const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lb=document.querySelector('.lightbox');
const lbImg=lb.querySelector('img');
document.querySelectorAll('.gallery-item img').forEach(img=>{img.parentElement.addEventListener('click',()=>{lbImg.src=img.src;lbImg.alt=img.alt;lb.classList.add('open');lb.setAttribute('aria-hidden','false')})});
lb.querySelector('button').addEventListener('click',()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true')});
lb.addEventListener('click',e=>{if(e.target===lb){lb.classList.remove('open');lb.setAttribute('aria-hidden','true')}});

const calendarGrid=document.getElementById('calendarGrid');
const calendarTitle=document.getElementById('calendarTitle');
const calendarStatus=document.getElementById('calendarStatus');
const prevMonth=document.getElementById('prevMonth');
const nextMonth=document.getElementById('nextMonth');
const selectedDatesText=document.getElementById('selectedDatesText');
const datesInput=document.getElementById('datesInput');
const messageInput=document.getElementById('messageInput');
const whatsappDates=document.getElementById('whatsappDates');
let busyEvents=[];
let viewDate=new Date();
let selection=[];
const fmt=(d)=>d.toISOString().slice(0,10);
const nice=(d)=>d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
const atMid=(d)=>new Date(d.getFullYear(),d.getMonth(),d.getDate());
const parseISO=(s)=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
function isBusy(date){const iso=fmt(new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())));return busyEvents.some(e=>iso>=e.start&&iso<e.end)}
function isInSelection(date){if(!selection.length)return false;const t=atMid(date).getTime();if(selection.length===1)return t===atMid(selection[0]).getTime();const a=atMid(selection[0]).getTime(),b=atMid(selection[1]).getTime();return t>=Math.min(a,b)&&t<=Math.max(a,b)}
function renderCalendar(){if(!calendarGrid)return;calendarGrid.innerHTML='';const year=viewDate.getFullYear(),month=viewDate.getMonth();calendarTitle.textContent=new Date(year,month,1).toLocaleDateString('en-GB',{month:'long',year:'numeric'});['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].forEach(d=>{const el=document.createElement('div');el.className='day-name';el.textContent=d;calendarGrid.appendChild(el)});let first=new Date(year,month,1);let offset=(first.getDay()+6)%7;for(let i=0;i<offset;i++){const e=document.createElement('div');e.className='calendar-day empty';calendarGrid.appendChild(e)}const days=new Date(year,month+1,0).getDate();const today=atMid(new Date());for(let day=1;day<=days;day++){const date=new Date(year,month,day);const el=document.createElement('button');el.type='button';el.className='calendar-day';el.textContent=day;const past=atMid(date)<today;if(past)el.classList.add('past');if(isBusy(date))el.classList.add('booked');if(isInSelection(date))el.classList.add(selection.length===1?'selected':'range');el.disabled=past||isBusy(date);el.addEventListener('click',()=>selectDate(date));calendarGrid.appendChild(el)}}
function selectDate(date){if(!selection.length||selection.length===2){selection=[date]}else{if(date<selection[0])selection=[date,selection[0]];else selection.push(date)}updateSelected();renderCalendar()}
function updateSelected(){if(!selectedDatesText)return;if(!selection.length){selectedDatesText.textContent='Select an arrival and departure date on the calendar.';return}if(selection.length===1){selectedDatesText.textContent=`Arrival selected: ${nice(selection[0])}. Now choose your departure date.`;datesInput.value=nice(selection[0]);return}const [a,b]=selection;const nights=Math.round((atMid(b)-atMid(a))/86400000);const label=`${nice(a)} to ${nice(b)} (${nights} night${nights===1?'':'s'})`;selectedDatesText.textContent=label;datesInput.value=label;messageInput.value=`Hi Simon, I’d like to enquire about Marbella Hideaway from ${nice(a)} to ${nice(b)}.`;const wa=`Hi Simon, I’d like to enquire about Marbella Hideaway from ${nice(a)} to ${nice(b)}.`;whatsappDates.href=`https://wa.me/34672249724?text=${encodeURIComponent(wa)}`}
async function loadAvailability(){if(!calendarGrid)return;try{const res=await fetch('/api/availability');if(!res.ok)throw new Error('Calendar unavailable');const data=await res.json();busyEvents=data.events||[];calendarStatus.textContent=`Synced ${busyEvents.length} booking${busyEvents.length===1?'':'s'}`;renderCalendar()}catch(e){calendarStatus.textContent='Calendar preview loaded — live sync needs Vercel API deployment';busyEvents=[];renderCalendar()}}
prevMonth&&prevMonth.addEventListener('click',()=>{viewDate=new Date(viewDate.getFullYear(),viewDate.getMonth()-1,1);renderCalendar()});
nextMonth&&nextMonth.addEventListener('click',()=>{viewDate=new Date(viewDate.getFullYear(),viewDate.getMonth()+1,1);renderCalendar()});
loadAvailability();
