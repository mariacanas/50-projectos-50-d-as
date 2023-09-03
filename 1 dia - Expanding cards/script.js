

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeAllClass();
        panel.classList.add('active');
    });
});

function removeAllClass(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
