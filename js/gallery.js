let imgs = document.querySelectorAll('.img');
let focoImg = document.querySelector('.focoImg');
let imgFocada = document.getElementById('imgFocada');
let btnClose = document.querySelector('.btnClose');
let getImg = '';

for(let i=0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {

        getImg = imgs[i].getAttribute('src');
        imgFocada.setAttribute('src', getImg);
        focoImg.classList.toggle('active');

    });
}

btnClose.addEventListener('click', () => {
    focoImg.classList.toggle('active');
});