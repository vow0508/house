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


// 新しいモバイルメニュー開閉処理
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".mh-btn");
  const drawer = document.getElementById("mhDrawer");
  const close = drawer.querySelector(".mh-close");

  if(btn && drawer){
    btn.addEventListener("click", () => {
      drawer.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-expanded", "true");
    });
    close.addEventListener("click", () => {
      drawer.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-expanded", "false");
    });
  }
});



nav.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (a && window.matchMedia('(max-width: 768px)').matches) {
    setTimeout(closeNav, 300); // ← ページ遷移が走った後に閉じる
  }
});

// メニュー内リンクをタップしたら閉じる（SP時）
nav.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (a && window.matchMedia('(max-width: 768px)').matches) {
    setTimeout(() => {
      closeNav();
    }, 400); // ← 0.4秒遅らせて閉じる（リンク遷移が優先される）
  }
});




















