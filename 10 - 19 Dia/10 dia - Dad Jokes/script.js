

const jokeE = document.getElementById('joke');
const jokeBtn = document.getElementById('idJoke');


jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke(){
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    jokeE.innerHTML = data.joke;
}

