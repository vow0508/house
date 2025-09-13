// Slider
const slides=document.querySelectorAll('.slide');let idx=0;
function show(i){slides.forEach(s=>s.classList.remove('active'));slides[i].classList.add('active');}
function next(){idx=(idx+1)%slides.length;show(idx);} setInterval(next,5000); window.addEventListener('load',()=>show(idx));

// Shuffle bronze daily; silver weekly; PR fixed
function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}}
const bronzeWrap=document.getElementById('tierBronze'); const bronze=Array.from(bronzeWrap.children);
const dayKey=new Date().toISOString().slice(0,10);
if(localStorage.getItem('brzKey')!==dayKey){shuffle(bronze); bronze.forEach(el=>bronzeWrap.appendChild(el)); localStorage.setItem('brzKey',dayKey);}

const silverWrap=document.getElementById('tierSilver'); const silver=Array.from(silverWrap.children);
const d=new Date(); const weekKey=d.getFullYear()+'-W'+Math.ceil((d.getDate())/7);
if(localStorage.getItem('slvKey')!==weekKey){shuffle(silver); silver.forEach(el=>silverWrap.appendChild(el)); localStorage.setItem('slvKey',weekKey);}


document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if(toggle && menu){
    toggle.addEventListener("click", () => {
      menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });
  }
});




<script>
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.mh-btn');
  const drawer = document.getElementById('mhDrawer');
  const closeBtn = document.querySelector('.mh-close');
  if(!btn || !drawer) return;

  const open = () => {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden','false');
    btn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden','true');
    btn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  };

  btn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  drawer.addEventListener('click', e => { if(e.target === drawer) close(); });
});
</script>
