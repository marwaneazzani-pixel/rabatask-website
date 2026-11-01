const toggle=document.getElementById('langToggle');
let currentLang='fr';

function setLanguage(lang){
  currentLang=lang;
  document.documentElement.lang=lang;
  document.body.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-fr]').forEach(el=>{
    const value=el.dataset[lang];
    if(value!==undefined) el.innerHTML=value;
  });
  if(toggle) toggle.textContent=lang==='fr'?'العربية':'Français';
}
if(toggle) toggle.addEventListener('click',()=>setLanguage(currentLang==='fr'?'ar':'fr'));

const menuButton=document.getElementById('menuToggle');
const nav=document.getElementById('mainNav');
const dropdown=document.getElementById('servicesDropdown');
const dropdownButton=document.getElementById('servicesMenuToggle');

function closeMobileMenu(){
  if(nav) nav.classList.remove('open');
  if(menuButton){
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Ouvrir le menu');
    menuButton.textContent='☰';
  }
}
if(menuButton && nav){
  menuButton.addEventListener('click',()=>{
    const opened=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(opened));
    menuButton.setAttribute('aria-label',opened?'Fermer le menu':'Ouvrir le menu');
    menuButton.textContent=opened?'×':'☰';
    if(!opened && dropdown){
      dropdown.classList.remove('dropdown-open');
      dropdownButton?.setAttribute('aria-expanded','false');
    }
  });
}
if(dropdown && dropdownButton){
  dropdownButton.addEventListener('click',event=>{
    event.preventDefault();
    event.stopPropagation();
    const opened=dropdown.classList.toggle('dropdown-open');
    dropdownButton.setAttribute('aria-expanded',String(opened));
  });
}
document.querySelectorAll('#mainNav a[href^="#"]').forEach(link=>{
  link.addEventListener('click',()=>{
    const target=link.getAttribute('href');
    if(target && target.length>1){
      document.querySelectorAll('#mainNav .nav-link').forEach(item=>item.classList.remove('active'));
      const parent=link.closest('.nav-dropdown');
      if(parent) parent.querySelector('.nav-link')?.classList.add('active');
      else if(link.classList.contains('nav-link')) link.classList.add('active');
    }
    closeMobileMenu();
    dropdown?.classList.remove('dropdown-open');
    dropdownButton?.setAttribute('aria-expanded','false');
  });
});
document.addEventListener('click',event=>{
  if(dropdown && !dropdown.contains(event.target)){
    dropdown.classList.remove('dropdown-open');
    dropdownButton?.setAttribute('aria-expanded','false');
  }
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    closeMobileMenu();
    dropdown?.classList.remove('dropdown-open');
    dropdownButton?.setAttribute('aria-expanded','false');
  }
});

const quoteForm=document.getElementById('quoteForm');
if(quoteForm) quoteForm.addEventListener('submit',event=>{
  event.preventDefault();
  const name=document.getElementById('clientName').value.trim();
  const phone=document.getElementById('clientPhone').value.trim();
  const service=document.getElementById('clientService').value;
  const message=document.getElementById('clientMessage').value.trim();
  const body='Bonjour RABATASK,\n\nNom : '+name+'\nTéléphone : '+phone+'\nService : '+service+'\nMessage : '+message;
  window.open('https://wa.me/212707927275?text='+encodeURIComponent(body),'_blank','noopener');
});
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();


/* Gentle scroll-in reveals; keeps all existing content and links unchanged */
(function initRabataskMotion(){
  const targets=document.querySelectorAll(
    '.section-kicker, .intro h2, .intro-grid p, .section-heading h2, .section-heading>p, .service-card, .promise h2, .promise-points, .contact-copy, .contact-form'
  );
  if(!targets.length) return;
  if(!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    targets.forEach(el=>el.classList.add('is-visible'));
    return;
  }
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -35px 0px'});
  targets.forEach(el=>{
    el.classList.add('rabatask-reveal');
    observer.observe(el);
  });
})();


/* Small bilingual switch in the hero artwork header */
document.querySelectorAll('.hero-language-switch [data-language]').forEach(button=>{
  button.addEventListener('click',()=>{
    const lang=button.dataset.language;
    if(typeof setLanguage==='function') setLanguage(lang);
    document.querySelectorAll('.hero-language-switch [data-language]').forEach(item=>{
      const active=item===button;
      item.classList.toggle('is-active',active);
      item.setAttribute('aria-pressed',String(active));
    });
  });
});
