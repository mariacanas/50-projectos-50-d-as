

const btn = document.querySelectorAll('.btn');

btn.forEach(togle => {
    togle.addEventListener('click', () => {
        if(!togle.parentNode.classList.contains('active')){
            togle.parentElement.classList.add('active');
        }
        else{
            togle.parentElement.classList.remove('active');
        }
    })
})
