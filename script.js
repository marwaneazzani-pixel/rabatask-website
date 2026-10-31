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
  toggle.textContent=lang==='fr'?'العربية':'Français';
}
toggle.addEventListener('click',()=>setLanguage(currentLang==='fr'?'ar':'fr'));
document.getElementById('menuToggle').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));
document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('clientName').value.trim();
  const phone=document.getElementById('clientPhone').value.trim();
  const service=document.getElementById('clientService').value;
  const message=document.getElementById('clientMessage').value.trim();
  const body=`Bonjour RABATASK,%0A%0ANom : ${encodeURIComponent(name)}%0ATéléphone : ${encodeURIComponent(phone)}%0AService : ${encodeURIComponent(service)}%0AMessage : ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/212707927275?text=${body}`,'_blank','noopener');
});
document.getElementById('year').textContent=new Date().getFullYear();
