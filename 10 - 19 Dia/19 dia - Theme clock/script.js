
const theme = document.getElementById('theme');
const html = document.querySelector('html');

const hourDigital = document.querySelector('.hourDigital');
const minuteDigital = document.querySelector('.minuteDigital');
const secondDigital = document.querySelector('.secondDigital');

const hourAnalogico = document.querySelector('.hourAnalogico');
const minuteAnalogico = document.querySelector('.minuteAnalogico');
const secondAnalogico = document.querySelector('.secondAnalogico');

const time  = document.querySelector('.time');

const date = document.querySelector('.date');

const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


theme.addEventListener('click', () => {
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        theme.classList.add('dark');
        hourAnalogico.classList.add('dark');
        minuteAnalogico.classList.add('dark');
        theme.innerHTML = " Dark mode ";
    }   
    else{
        minuteAnalogico.classList.remove('dark');
        hourAnalogico.classList.remove('dark');
        theme.classList.remove('dark');
        html.classList.add('dark');
        theme.innerHTML = " Light mode ";
    } 
});

function setTime(){
    const timeCurrent = new Date();

    let hours = timeCurrent.getHours();
    let minutes = timeCurrent.getMinutes();
    let seconds = timeCurrent.getSeconds();

    const day = timeCurrent.getDay();
    const dates = timeCurrent.getDate();
    const month = timeCurrent.getMonth();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    hourDigital.innerHTML = `${hours}:`;
    minuteDigital.innerHTML = `${minutes}:`;
    secondDigital.innerHTML = `${seconds}`;

    let calc_hr = hours * 30 + minutes / 2;
    let calc_min = minutes * 6 + seconds / 10;
    let calc_sec = seconds * 6;

    hourAnalogico.style.transform = `rotate(${calc_hr}deg)`;
    minuteAnalogico.style.transform = `rotate(${calc_min}deg)`;
    secondAnalogico.style.transform = `rotate(${calc_sec}deg)`;

    date.innerHTML = `${days[day]}, ${months[month]}, ${dates}`;
}


setInterval(setTime,1000);