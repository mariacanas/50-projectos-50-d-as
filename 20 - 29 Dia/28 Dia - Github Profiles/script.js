const APIURL = 'https://api.github.com/users'

const btnSearch = document.querySelector('.user-form a');
const containerSection = document.querySelector('.container-section');
const searchUser = document.querySelector('.user-form input');



btnSearch.addEventListener('click',() =>{
    limpiarContenedor();
    buscaUser();
});

function buscaUser(){

    if(searchUser.value === ""){
        mostrarError("Escriba un usuario de GitHub ");
        return;
    }
    llamarApi(searchUser.value);
}

async function llamarApi(user){
    const userUrl = `${APIURL}/${user}`;
    const repoUser = `${APIURL}/${user}/repos`;

    const [userData, repoData] = await Promise.all([axios(userUrl), axios(repoUser)]);

    if(userData.status === 404){
        mostrarError("El usuario no existe");
        return;
    }
    const dataUser = userData.data;
    const dataRepo = repoData.data;

    mostrarData(dataUser);
    mostrarRepo(dataRepo);

}

function mostrarError(mensaje){
    const error = document.createElement('h4');
    error.innerText = mensaje;
    error.style.color = "red";
    containerSection.appendChild(error);
    setTimeout(() => error.remove(),3000);
}

async function mostrarData(dataUser){
    
    const {avatar_url, bio, followers, following, name, public_repos} = dataUser;

    console.log(name);

    const infoUser = document.createElement('div');

    infoUser.innerHTML = `
        <div class="row-left">
            <img src="${avatar_url}" alt="User Avatar">
        </div>
        <div class="row-right">
            <h3> ${name} </h3>
            <p> ${bio} </p>
            <div class="stats-user">
                <p> ${followers} <span>Followers</span></p>
                <p> ${following} <span>Following</span></p>
                <p> ${public_repos} <span>Repos</span></p>
            </div>
            <h3> Repositorios </h3>
            <div class="link-repos"></div>
        </div>
    `;
    containerSection.appendChild(infoUser);
}

async function mostrarRepo(dataRepo){
    const repoUser = document.querySelector('.link-repos');

    if(dataRepo.length === 0){
        const noRepos = document.createElement('p');
        noRepos.innerText = "El usuario no tiene repositorios";
        containerSection.appendChild(noRepos);
    }
    else{
        dataRepo.slice(0,6).forEach(repo => {
            const repoEn = document.createElement('a');
            repoEn.innerText = repo.name;
            repoEn.href = repo.html_url;
            repoUser.appendChild(repoEn);
        })
    }
}

function limpiarContenedor() {
    const containerSection = document.querySelector('.container-section');
    while (containerSection.firstChild) {
        containerSection.removeChild(containerSection.firstChild);
    }
}
