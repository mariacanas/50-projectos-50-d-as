

const btn = document.querySelectorAll('.ripple');


btn.forEach(button =>{
    button.addEventListener('click', () => {

            button.classList.add('circle');
            setTimeout(() => button.classList.remove('circle'), 200);
        
    });
})