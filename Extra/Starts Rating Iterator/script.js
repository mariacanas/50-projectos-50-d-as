

const stars =  document.querySelectorAll('.stars-button');


stars.forEach((star,index) => {
    star.addEventListener('click', () => {
        stars.forEach((s,i) =>{
            if(i <= index){
                s.classList.add('checked');
                s.classList.remove('rotate');
            }
            else{
                s.classList.remove('checked');
                s.classList.add('rotate');
            }
        });
    });
});