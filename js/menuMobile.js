const screen_menu = document.getElementById('screen-menu');
const icon_mobile = document.getElementById('icon-mobile');

const linksMenu = {
   sobre: document.getElementById('sobre'),
   contato: document.getElementById('contato')
};
const { sobre, contato } = linksMenu;

function linkMenuAtivo(evento1, evento2) {
   const eventos = [evento1, evento2];

   eventos.forEach(evento => {
      evento.addEventListener('click', () => {
         closeMenu();
         icon_mobile.style.display = 'block'; 
      });
   });
}

function openMenu() {
   screen_menu.classList.add('menuMobile--enable');
   icon_mobile.classList.remove('iconMobile--enable');
   linkMenuAtivo(sobre, contato);
}

function closeMenu() {
   screen_menu.classList.remove('menuMobile--enable');
   icon_mobile.classList.add('iconMobile--enable');
}