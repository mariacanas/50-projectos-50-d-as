
const porcentaje = document.getElementById("porcentaje");
const remained = document.getElementById("remained");
const litros = document.getElementById("litros");

const cups = document.querySelectorAll(".cup-s");


cups.forEach((cup,idx) => {
    cup.addEventListener("click" , () => addfull(idx));
});

function addfull(idx){
    const cup = cups[idx];
    const nextCup = cup.nextElementSibling;
    
    if (cup.classList.contains("full") && !nextCup.classList.contains("full")) {
        idx--;
    }
    cups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });
    
    
    updatePorcentaje();
}

function updatePorcentaje(){
    const totalCups = cups.length;
    const selectedCups = document.querySelectorAll(".cup-s.full").length;

    porcentaje.style.height = `${(selectedCups/totalCups) * 330}px`;
    porcentaje.innerText = `${(selectedCups/totalCups) *100}%`;
    litros.innerText = `${2-(250*selectedCups) / 1000}L`;

    if(selectedCups==0){
        porcentaje.style.visibility="hidden";
    }
    else{
        porcentaje.style.visibility="visible";
    }
    if(selectedCups == totalCups){
        remained.style.height=0;
        remained.style.visibility = "hidden";
    }
    else{
        remained.style.height=0;
        remained.style.visibility = "visible";
    }
}