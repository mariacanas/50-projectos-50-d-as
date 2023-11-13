

const btnAddNote = document.querySelector('.btn');

const notes = document.getElementById('notes');
let msg = document.createElement('h2'); 

btnAddNote.addEventListener('click', () => addNewNote());

showMsginicial();

function showMsginicial(){
    const numNotes = document.querySelectorAll('.note');
    if(numNotes.length === 0){
        msg.innerText = "No tienes notas";
        notes.appendChild(msg);
    }
    else{
        msg.remove();
    }
}

function addNewNote(){
    
    
    const newNote = document.createElement('div');

    newNote.classList.add('note');

    newNote.innerHTML = `
        <div class="tools">
            <button class="btnEdit"><i class="fas fa-edit"></i></button>
            <button class="btnDelete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main"></div>
        <textarea class="text"></textarea>
    `
    const btnDelete = newNote.querySelector('.btnDelete');
    const btnEdit = newNote.querySelector('.btnEdit');
    const textArea = newNote.querySelector('.text');

    textArea.addEventListener('focus', ()=>{
        if(textArea.value.trim() !== ''){
            textArea.readOnly=true;
        }
        if(!textArea.readOnly){
            newNote.style.height = "450px";
            newNote.style.width = "450px";
        }
    });

    textArea.addEventListener('blur', () => {
        if (!textArea.readOnly) {
            newNote.style.height = ''; 
            newNote.style.width = ''; 
        }
    });
    
    btnDelete.addEventListener('click', () => newNote.remove());

    btnEdit.addEventListener('click', () =>{
        
        if (textArea.readOnly) {
            textArea.focus();
        } 
        textArea.readOnly = !textArea.readOnly;
    });
    notes.appendChild(newNote);
    showMsginicial();
}