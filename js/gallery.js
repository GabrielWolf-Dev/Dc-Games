let imgs = document.querySelectorAll('.main-champ__img');
let focusImg = document.querySelector('.focus-img');
let imgFocused = document.getElementById('img-focused');
let getImg = '';

for(let i=0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {
        getImg = imgs[i].getAttribute('src');
        imgFocused.setAttribute('src', getImg);
        focusImg.classList.add('focus-img--active');
    });
}

function closeImg(){
    focusImg.classList.remove('focus-img--active');
}