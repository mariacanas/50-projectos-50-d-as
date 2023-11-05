
const btnNotification = document.getElementById('btn-notification');
const toasts = document.getElementById('toast');


const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
];

const types = [
    'info',
    'success',
    'error',
]

btnNotification.addEventListener('click', () => createNotification());

function createNotification(){
    const notification = document.createElement('div');
    notification.classList.add('toast');

    notification.classList.add(getRandomType());

    notification.innerText = getRandomMessage();

    console.log(notification);

    toasts.appendChild(notification);

    setTimeout(() => notification.remove(),2000);

}

function getRandomMessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}

function getRandomType(){
    return types[Math.floor(Math.random()*types.length)];
}

