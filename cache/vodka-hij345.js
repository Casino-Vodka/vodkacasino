document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".nav-container"),t=document.querySelector(".scroll-btn.up"),n=document.querySelector(".scroll-btn.down"),o=document.querySelector(".menu-toggle");o&&o.addEventListener("click",(function(){toggleMenu()})),document.querySelectorAll(".nav-btn").forEach((e=>{e.addEventListener("click",(function(){toggleMenu(!0)}))})),t&&n&&e&&(t.addEventListener("click",(()=>{e.scrollBy({top:-50,behavior:"smooth"})})),n.addEventListener("click",(()=>{e.scrollBy({top:50,behavior:"smooth"})})))}));