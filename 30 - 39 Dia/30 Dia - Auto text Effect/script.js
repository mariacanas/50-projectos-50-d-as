

const text = document.getElementById('text');
const speedBtn = document.getElementById('speed');


const originalText = text.textContent;
let idx = 1;
let speed = 500/speedBtn.value;



speedBtn.addEventListener('input', (e) => speed = 500/e.target.value);



function addLetter(){
    text.innerText = originalText.slice(0,idx);

    idx++;

    if(idx <= originalText.length){
        setTimeout(addLetter,speed);
    }
    else{
        idx = 1;
        setTimeout(addLetter,speed);
    }
}

addLetter();