
const empties = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//dragOver -> cuando la imagen esta dentro del cuadrado, cada vez 
    //que me muevo dentro del cuadrado
//dragEnter -> Cuando la imagen entro
//dragLeave -> Cuando la imagen salio
//drop -> Final, cuando suelto la imagen

for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
    this.className = 'empty';
    this.appendChild(fill);
}

function dragStart(){
    this.classList.add('invisible');
}

function dragEnd(){
    this.className = 'fill';
}