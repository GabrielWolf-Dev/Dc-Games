let totalSlides = document.querySelectorAll('.slide-professor').length;
let slideAtual = 0;

let widthSlide = document.querySelector('.slider').style.width = `calc(100vw * ${totalSlides})`;


let timeSlide = setInterval(proximo, 3000);

let arrRightCancelTime = document.querySelector('.arrow-right').addEventListener('mouseover', () => {
    clearInterval(timeSlide);
});

let arrLeftCancelTime = document.querySelector('.arrow-left').addEventListener('mouseover', () => {
    clearInterval(timeSlide);
});


function proximo() {

    slideAtual++;
    if(slideAtual > (totalSlides - 1)) {
        slideAtual = 0;
    }

    atualizarSlide();
}


function anterior() {

    slideAtual--;
    if(slideAtual < 0) {
        slideAtual = totalSlides - 1;
    }

    atualizarSlide();
}


function atualizarSlide() {

    let slideW = document.querySelector('.slide-professor').clientWidth;
    let marginLeft = (slideAtual * slideW);
    document.querySelector('.slider').style.marginLeft = `-${marginLeft}px`;

}
