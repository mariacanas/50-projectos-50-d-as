

const fast = document.getElementById('fast');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');

const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => { cambioSpan(e.target)}));


function cambioSpan(e){
    if(fast.checked && good.checked && cheap.checked){
        if(good === e){
            fast.checked = false;
        }
        if(cheap === e){
            good.checked = false;
        }
        if(fast === e){
            cheap.checked = false;
        }
    }
}

