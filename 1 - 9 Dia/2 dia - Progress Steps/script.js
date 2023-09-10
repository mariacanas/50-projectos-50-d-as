
const num = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');

let numActivo = 1;

next.addEventListener('click', () => {
    numActivo++;

    if(numActivo > num.length){
        numActivo = num.length;
    }

    updateCirculo();
});

prev.addEventListener('click', () => {
    numActivo--;

    if(numActivo < 1){
        numActivo = 1;
    }
    updateCirculo();
})
function updateCirculo(){

    num.forEach((circle,idx) => {
        if(idx < numActivo){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })

    if(numActivo === 1){
        prev.disabled = true;
    }
    else if (numActivo === num.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }

    const progressWidth = ((numActivo - 1) / (num.length - 1)) * 100 + '%';
    progress.style.width = progressWidth;
}

