
const sliderContainer = document.querySelector('.slider-container');

const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');

const upButton = document.getElementById('btn-up');
const downButton = document.getElementById('btn-down');

const lengthSlides = leftSlider.querySelectorAll('div').length;


let activesSlidesIndex = 0;
leftSlider.style.top = `-${(lengthSlides - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));



const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;

    if (direction === 'up') {
        activesSlidesIndex--;
        if (activesSlidesIndex < 0) {
            activesSlidesIndex = lengthSlides - 1;
        }
    } else if (direction === 'down') {
        activesSlidesIndex++;
        if (activesSlidesIndex > lengthSlides - 1) {
            activesSlidesIndex = 0;
        }

    }

    leftSlider.style.transform = `translateY(${activesSlidesIndex * sliderHeight}px)`;
    rightSlider.style.transform = `translateY(-${activesSlidesIndex * sliderHeight}px)`;
    
}



