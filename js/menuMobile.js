const navMenu = document.querySelector('.menu-mobile__nav');
const bgBlack = document.querySelector('.bg-black');

const linksMenu = [
   document.getElementById('sobre'),
   document.getElementById('contato')
];

function openMenu() {
   navMenu.classList.add('menu-mobile__nav--active');
   linksMenu.forEach(link => link.addEventListener('click', () => closeMenu()));
   bgBlack.style.width = "100%";
}

function closeMenu() {
   navMenu.classList.remove('menu-mobile__nav--active');
   bgBlack.style.width = "0";
}
