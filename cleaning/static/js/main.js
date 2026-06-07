const ham=document.querySelector('.hamburger');
const menu=document.querySelector('.mobile-menu');
if(ham){ham.addEventListener('click',()=>menu.classList.toggle('active'));}