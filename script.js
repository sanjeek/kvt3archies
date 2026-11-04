'use strict';
const asset=path=>`https://kvt3archies.com/wp-content/uploads/${path}`;
// These are editorial labels, not unverified project names or locations.
const projects=[
 {title:'Architecture in context',kind:'image',label:'Selected portfolio / 01',image:asset('2025/10/img-20251004-wa0009-1.jpg'),alt:'Selected architecture image from the KVT 3 Architects portfolio',description:'A selected image from our existing architecture portfolio. Speak with the practice about the project and the design experience relevant to your own brief.'},
 {title:'A different perspective',kind:'image',label:'Selected portfolio / 02',image:asset('2025/10/img-20251004-wa0010-2.jpg'),alt:'Architecture portfolio image from the KVT 3 Architects website',description:'Architecture responds to its setting as well as the needs of its users. This image is part of the practice’s existing portfolio; contact us for the project background.'},
 {title:'Form & detail',kind:'image',label:'Selected portfolio / 03',image:asset('2025/10/img-20251004-wa0011-2.jpg'),alt:'Selected project image from the KVT 3 Architects portfolio',description:'A closer look at work featured in the KVT 3 Architects portfolio. The practice can provide further information about this project and its architectural approach.'},
 {title:'A considered composition',kind:'image',label:'Selected portfolio / 04',image:asset('2025/10/img-20251004-wa0012-1.jpg'),alt:'Project photograph from the existing KVT 3 Architects collection',description:'An image from the practice’s published project collection. Discuss your site, brief and priorities with us to explore how our experience can inform your project.'},
 {title:'The language of design',kind:'drawing',label:'From the drawing board / 05',image:asset('2022/07/cad_elevation-1.png'),alt:'Architectural elevation drawing from the KVT 3 Architects portfolio',description:'Drawings help communicate the relationship between form, scale and detail. This elevation is reproduced from the practice’s existing sample works collection.'}
];
const inspirations=[
  {
    "title": "Modern lines, open living",
    "kind": "image",
    "label": "Reference photography",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=85",
    "alt": "Modern residence with clean architectural lines — reference photograph",
    "description": "Contemporary residential architecture. Reference image · Unsplash."
  },
  {
    "title": "Light & material",
    "kind": "image",
    "label": "Reference photography",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85",
    "alt": "Contemporary home with natural materials — reference photograph",
    "description": "Natural materials, generous openings and a restrained palette. Reference image · Unsplash."
  },
  {
    "title": "Space to unwind",
    "kind": "image",
    "label": "Reference photography",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85",
    "alt": "Light-filled contemporary living space — reference photograph",
    "description": "A contemporary study in light, space and calm. Reference image · Unsplash."
  }
];
const grid=document.querySelector('#project-grid');
projects.forEach((p,index)=>{
 const card=document.createElement('button');card.className='project-card';card.dataset.kind=p.kind;card.dataset.open=index;card.setAttribute('aria-label',`Explore ${p.title}`);
 const photo=document.createElement('div');photo.className='project-photo';
 const img=document.createElement('img');img.src=p.image;img.alt=p.alt;img.loading='lazy';img.decoding='async';
 const arrow=document.createElement('span');arrow.className='project-arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';photo.append(img,arrow);
 const caption=document.createElement('div');caption.className='project-caption';const copy=document.createElement('div');
 const label=document.createElement('p');label.className='eyebrow';label.textContent=p.label;const title=document.createElement('h3');title.textContent=p.title;const snippet=document.createElement('p');snippet.className='project-snippet';snippet.textContent='A dialogue between site, form and the people who use a space.';copy.append(label,title,snippet);
 const number=document.createElement('span');number.className='project-number';number.textContent=String(index+1).padStart(2,'0');caption.append(copy,number);card.append(photo,caption);grid.append(card);
});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
 let count=0;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.kind!==button.dataset.filter;if(!card.hidden)count++;});document.querySelector('#work-count').textContent=`Showing ${count} selected ${count===1?'work':'works'}`;
}));
const menuButton=document.querySelector('.menu-toggle'),menu=document.querySelector('#mobile-menu');
const pageMain=document.querySelector('main'),pageFooter=document.querySelector('footer');
function closeMenu(){pageMain.inert=false;pageFooter.inert=false;menu.hidden=true;menuButton.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');menuButton.firstChild.textContent='Menu ';}
menuButton.addEventListener('click',()=>{const opening=menu.hidden;menu.hidden=!opening;pageMain.inert=opening;pageFooter.inert=opening;menuButton.setAttribute('aria-expanded',String(opening));document.body.classList.toggle('menu-open',opening);menuButton.firstChild.textContent=opening?'Close ':'Menu ';});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{
 if(menu.hidden)return;
 if(e.key==='Escape'){closeMenu();menuButton.focus();}
 if(e.key==='Tab'){
  const links=Array.from(menu.querySelectorAll('a')),last=links[links.length-1];
  if(e.shiftKey&&document.activeElement===menuButton){e.preventDefault();last.focus();}
  if(!e.shiftKey&&document.activeElement===last){e.preventDefault();menuButton.focus();}
 }
});window.matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
const projectDialog=document.querySelector('#project-dialog'),privacyDialog=document.querySelector('#privacy-dialog');let projectIndex=0;let activeCollection=projects;
function setProject(index){projectIndex=(index+activeCollection.length)%activeCollection.length;const p=activeCollection[projectIndex];document.querySelector('#project-image').src=p.image;document.querySelector('#project-image').alt=p.alt;document.querySelector('#project-title').textContent=p.title;document.querySelector('#project-type').textContent=p.label;document.querySelector('#project-description').textContent=p.description;document.querySelector('#project-position').textContent=`${String(projectIndex+1).padStart(2,'0')} / ${String(activeCollection.length).padStart(2,'0')}`;}
function openProject(index,collection=projects){activeCollection=collection;setProject(index);projectDialog.showModal();document.body.classList.add('dialog-open');}
document.addEventListener('click',e=>{const reference=e.target.closest('[data-inspiration]');if(reference){openProject(Number(reference.dataset.inspiration),inspirations);return;}const opener=e.target.closest('[data-open]');if(opener)openProject(Number(opener.dataset.open));});document.querySelector('#project-prev').addEventListener('click',()=>setProject(projectIndex-1));document.querySelector('#project-next').addEventListener('click',()=>setProject(projectIndex+1));
projectDialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();setProject(projectIndex-1);}if(e.key==='ArrowRight'){e.preventDefault();setProject(projectIndex+1);}});document.querySelector('#project-enquire').addEventListener('click',()=>projectDialog.close());
[projectDialog,privacyDialog].forEach(dialog=>{dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});});
document.querySelector('#privacy-open').addEventListener('click',()=>{privacyDialog.showModal();document.body.classList.add('dialog-open');});
let slideIndex=0;const heroImage=document.querySelector('#hero-image'),heroOpen=document.querySelector('.hero-open');
function changeSlide(direction){slideIndex=(slideIndex+direction+3)%3;const p=inspirations[slideIndex];heroImage.src=p.image;heroImage.alt=p.alt;heroOpen.dataset.inspiration=slideIndex;document.querySelector('#slide-count').textContent=`${String(slideIndex+1).padStart(2,'0')} / 03`;}
document.querySelector('#slide-prev').addEventListener('click',()=>changeSlide(-1));document.querySelector('#slide-next').addEventListener('click',()=>changeSlide(1));
document.querySelector('#enquiry-form').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const data=new FormData(form),subject=`Website enquiry — ${data.get('service')}`,body=`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\nProject location: ${data.get('location')||'Not specified'}\n\n${data.get('message')}`;window.location.href=`mailto:kvt3archies@optusnet.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;document.querySelector('#form-status').textContent='Your email app should open with a draft. Review it and send it to complete your enquiry. If it does not open, email kvt3archies@optusnet.com.au directly.';});
document.querySelector('#year').textContent=new Date().getFullYear();

// Progressive enhancement: content stays visible if motion or observer support is unavailable.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window && !reducedMotion.matches){
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('entered');observer.unobserve(entry.target);}});
 },{threshold:0.12});
 document.querySelectorAll('.intro,.section-heading,.practice-copy,.statement h2,.expertise-intro,.process-grid article,.contact-heading').forEach(el=>observer.observe(el));
}
const progress=document.querySelector('.reading-progress');
let scrollQueued=false;
function updateScroll(){
 const max=document.documentElement.scrollHeight-window.innerHeight;
 progress.style.transform='scaleX('+(max>0?Math.min(1,Math.max(0,window.scrollY/max)):0)+')';
 scrollQueued=false;
}
window.addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;window.requestAnimationFrame(updateScroll);}},{passive:true});
updateScroll();

// Service links open the relevant panel before the browser scrolls to it.
document.querySelectorAll('.path-card').forEach(link=>link.addEventListener('click',()=>{
 const panel=document.querySelector(link.getAttribute('href'));
 if(panel)panel.open=true;
}));
