

const buttons = document.querySelectorAll('.btn')

let sound = null;


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundId = button.innerText.toLowerCase();

        if(sound){
            sound.pause();
            sound.currentTime =0;
        }
        sound = document.getElementById(soundId);

        if(sound){
            sound.currentTime = 0;
            sound.play();
        }
    })


})



