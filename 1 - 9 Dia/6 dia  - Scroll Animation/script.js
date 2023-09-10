const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight;
    let ladoder = true;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            if(ladoder)
            box.classList.add('showleft')
            else
            box.classList.add('showright')

            ladoder = !ladoder;
        } else {
            box.classList.remove('showright', 'showleft')
        }
    })

}