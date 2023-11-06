

const numberLike = document.getElementById('numberLike');
const imgLove = document.querySelector('.loveMe');

let firstClick = 0;
let countLike = 0;

imgLove.addEventListener('click', (e) => {
    if(firstClick === 0){
        firstClick = new Date().getTime();
    }
    else{
        const secondClick = new Date().getTime();

        if(secondClick - firstClick < 500){
           countLike++;
           numberLike.innerText = countLike;
           createHeard(e);
        }
        firstClick=0;
    }
});

function createHeard(e){
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    heart.style.position = "absolute";
    heart.style.left = x + "px";
    heart.style.top = y + "px";

    heart.style.transform = 'scale(4)';

    document.body.appendChild(heart);

  
    

    setTimeout(() => {
        heart.remove()},500);
}




