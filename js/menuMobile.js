let screen_menu = document.getElementById('screen-menu');
let icon_mobile = document.getElementById('icon-mobile');

let linksMenu = {
   sobre: document.getElementById('sobre'),
   contato: document.getElementById('contato')
};

let {sobre, contato} = linksMenu;

let linkMenuAtivo = (evento1, evento2) => {

   let eventos = [evento1, evento2];

   eventos.forEach(evento => {
      evento.addEventListener('click', () => {
         closeMenu();
         icon_mobile.style.display = 'block'; 
      });
   });
   
}


function openMenu() {

   screen_menu.style.animation = 'animOpen 1s 1';
   screen_menu.style.display = 'block';
   icon_mobile.style.display = 'none';
   linkMenuAtivo(sobre, contato);

}


let disappearMenu = () => {
         
   screen_menu.style.display='none';
   icon_mobile.style.display = 'block';
   
}

function closeMenu() {
    
   screen_menu.style.animation = 'animClose 1s 1';
   setTimeout(disappearMenu, 500);
}