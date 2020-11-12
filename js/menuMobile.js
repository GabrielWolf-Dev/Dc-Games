let screen_menu = document.getElementById('screen-menu');
let icon_mobile = document.getElementById('icon-mobile');

let linksMenu = {
   sobre: document.getElementById('sobre'),
   campeonato: document.getElementById('campeonato'),
   eletivas_passadas: document.getElementById('eletivas-passadas'),
   contato: document.getElementById('contato')
};

let {sobre, campeonato, eletivas_passadas, contato} = linksMenu;

let linkMenuAtivo = (evento1, evento2, evento3, evento4) => {

    evento1.addEventListener('click', () => {

      screen_menu.style.display='none';
      icon_mobile.style.display = 'block';

   });

   evento2.addEventListener('click', () => {

      screen_menu.style.display='none';
      icon_mobile.style.display = 'block';

   });

   evento3.addEventListener('click', () => {

      screen_menu.style.display='none';
      icon_mobile.style.display = 'block';

   });

   evento4.addEventListener('click', () => {

      screen_menu.style.display='none';
      icon_mobile.style.display = 'block';

   });
   
}

function openMenu() {

   screen_menu.style.animation = 'animOpen 1s 1';
   screen_menu.style.display = 'block';
   icon_mobile.style.display = 'none';
   linkMenuAtivo(sobre, campeonato, eletivas_passadas,contato);

}

var disappearMenu = () => {
          
   screen_menu.style.display='none';
   icon_mobile.style.display = 'block';
   
}

function closeMenu() {
    
   screen_menu.style.animation = 'animClose 1s 1';
   setTimeout(disappearMenu, 500);
}

