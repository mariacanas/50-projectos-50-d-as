

const loading_text = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let num = 0;
let int = setInterval(incrementarValor,30);

function incrementarValor(){
    num++;

    if(num > 99 ){
        clearInterval(int);
    }

    loading_text.textContent = `${num} %`;

    const opacidad = num /99;
    loading_text.style.opacity = 1 - opacidad;

    bg.style.opacity = opacidad;
}

