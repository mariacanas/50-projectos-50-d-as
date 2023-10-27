
const canvas = document.getElementById('canvas');
const btnDecrease = document.getElementById('decrease');
const btnIncrease = document.getElementById('increase');
const colorEl = document.getElementById('color');
const btnSize = document.getElementById('size');
const btnClear = document.getElementById('clear');

let context = canvas.getContext('2d');
let isPressed = false;
let x,y;
let sizePincel = 10;
colorEl.value = '#000000';
let colorPincel = colorEl.value;


canvas.addEventListener('mousedown' , (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

document.addEventListener('mouseup' , (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawLine(x,y,x2,y2);

        x=x2;
        y=y2;
    }
});

function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.closePath();
    context.strokeStyle = colorPincel;
    context.lineWidth = sizePincel;
    
    context.stroke();
}

btnIncrease.addEventListener('click', () => {
    sizePincel += 5;

    if(sizePincel > 50){
        sizePincel = 50;
    }
    btnSize.innerText = sizePincel;
});

btnDecrease.addEventListener('click', () => {
    sizePincel -= 5;

    if(sizePincel < 5){
        sizePincel = 5;
    }
    btnSize.innerText = sizePincel;
})

colorEl.addEventListener('change', (e) => colorPincel = e.target.value);

btnClear.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});