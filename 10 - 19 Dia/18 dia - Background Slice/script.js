
const body = document.body;
const slides = document.querySelectorAll('.slide');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');


let activesSlides = 0;


btnRight.addEventListener('click', () => {

    activesSlides++;

    if(activesSlides >= slides.length){
        activesSlides=0;
    }

    setBackgroungImageBody();
    setActivesSlides();
});

btnLeft.addEventListener('click', () =>{

    activesSlides--;

    if(activesSlides < 0){
        activesSlides = slides.length -1;
    }

    setBackgroungImageBody();
    setActivesSlides();
});

function setBackgroungImageBody(){
    body.style.backgroundImage = slides[activesSlides].style.backgroundImage;
}

function setActivesSlides(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[activesSlides].classList.add('active');
}



