
const tagsEl = document.getElementById('tags');
const tagSeleccionado = document.getElementById('tagSeleccionadoText');
const textarea = document.getElementById('textarea');

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
   
}


textarea.addEventListener('keyup', (e) =>{
    
    createTags(e.target.value);

    tagSeleccionado.innerHTML = "";

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = '';
        }, 10)

        randomSelect();
    }
})

function randomSelect(){

    const tagElements = document.querySelectorAll('.tag');

    if(tagElements.length>0){
        const randomIndex = Math.floor(Math.random()*tagElements.length);
        const selectTag = tagElements[randomIndex];

        tagSeleccionado.innerHTML = selectTag.textContent;
        selectTag.classList.add('seleccionado');
    }
}


