let totalSlides = document.querySelectorAll('.slider-teachers__slide').length;
let currentSlide = 0;

let widthSlide = document.querySelector('.slider-teachers__slider-wrapper').style.width = `calc(100vw * ${totalSlides})`;


let timeSlide = setInterval(next, 3000);

let arrRightCancelTime = document.querySelector('.arrow-right').addEventListener('mouseover', () => {
    clearInterval(timeSlide);
});

let arrLeftCancelTime = document.querySelector('.arrow-left').addEventListener('mouseover', () => {
    clearInterval(timeSlide);
});


function next() {

    currentSlide++;
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }

    updateSlide();
}


function prev() {

    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateSlide();
}


function updateSlide() {

    let slideW = document.querySelector('.slider-teachers__slide').clientWidth;
    let marginLeft = (currentSlide * slideW);
    document.querySelector('.slider-teachers__slider-wrapper').style.marginLeft = `-${marginLeft}px`;

}
