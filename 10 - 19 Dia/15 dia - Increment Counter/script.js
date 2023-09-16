

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        //Numero max a sumar
        const target = +counter.getAttribute('data-target');
        //Numero por el que va
        const current = +counter.innerText;
        
        const increment = target / 200;

        if(current <= target){
            counter.innerText = Math.ceil(increment + current);
        }
        else{
            counter.innerText = target;
            clearInterval(id);
        }

    }
    const id = setInterval(updateCounter,10);
})