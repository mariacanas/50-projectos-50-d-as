

const api = {
    key: "500a2e714ba2f899540e64338d0c9a8e",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}
const locationInput = document.getElementById('locationInput');
locationInput.addEventListener('keypress', setQuery);

function setQuery(e){
    if(e.keyCode === 13){
        getResults(locationInput.value);
    }
}

function getResults(city){
    
    fetch(`${api.baseurl}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(response => response.json())
        .then(data =>{
            mostrarrespuesta(data),
            mostrarPronosticoSemanal(data)
        });
}

function mostrarrespuesta(data){

    const main = document.querySelector('main');
    main.style.display = 'block';
    

    let ciudad = document.querySelector('.localizacion .ciudad');
    ciudad.innerText = `${data.name}, ${data.sys.country}`;
    
    let fechaActual = new Date();
    let fecha = document.querySelector('.localizacion .fecha');
    fecha.innerText = conseguirFecha(fechaActual);

    let temperatura = document.querySelector('.actual .temperatura');
    temperatura.innerText = `${Math.round(data.main.temp)} ºC`;

    let temperaturaMinMax = document.querySelector('.actual .max-min');
    temperaturaMinMax.innerText = `${Math.round(data.main.temp_min)} ºC ${Math.round(data.main.temp_max)} ºC`;

    let icono = document.getElementById('icono-clima');
    const codigoIcono = data.weather[0].icon;
    const iconoUrl = `https://openweathermap.org/img/wn/${codigoIcono}.png`;
    icono.src = iconoUrl;
}

function conseguirFecha(f){
    let dias = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    let meses = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    let diaSemana = dias[f.getDay()];
    let dia = f.getDate();
    let mes = meses[f.getMonth()];
    let año = f.getFullYear();

    return `${diaSemana},${dia},${mes},${año}`;


}


//Para cambiar el fondo de pantalla segun la hora

document.addEventListener("DOMContentLoaded", function(){

    const main = document.querySelector('main');
    main.style.display = 'none';

    const fondo = document.getElementById("fondo-pantalla");
    const fecha = new Date();
    const horaActual = fecha.getHours();

    //Se establece constantes para determinar las diferentes horas del dia
    const mañana = 7;
    const tarde = 13;
    const noche = 19;

    //Comprobaciones para dependendiendo de la hora que sea, se coloca un fondo u otro
    if(horaActual >= mañana && horaActual < tarde){
        //Mañana
        fondo.style.backgroundImage = 'url("img/dia.jpg")';
    }
    else if (horaActual >= tarde && horaActual < noche){
        //Tarde
        fondo.style.backgroundImage =  'url("img/tarde.jpg")';
    }
    else{
        //Noche
        fondo.style.backgroundImage = 'url("img/noche.jpg")';
    }
});

// Función para mostrar el pronóstico semanal en la página
function mostrarPronosticoSemanal(data) {
    const pronosticoSemanal = document.getElementById('pronostico-semanal');
    
    // Limpia la sección de pronóstico semanal
    pronosticoSemanal.innerHTML = '';

    // Recorre la matriz data.list para obtener los pronósticos diarios
    data.list.forEach(item => {
        const fecha = new Date(item.dt * 1000); // Convierte la marca de tiempo en una fecha
        const temperatura = item.main.temp; // Temperatura en grados Celsius
        const descripcion = item.weather[0].description; // Descripción del clima

        // Crea elementos en tu página para mostrar la información
        const pronosticoDia = document.createElement('div');
        pronosticoDia.innerHTML = `
            <p>${fecha.toLocaleDateString()} - ${temperatura}°C - ${descripcion}</p>
        `;
        // Agrega este elemento a la sección de pronóstico semanal
        pronosticoSemanal.appendChild(pronosticoDia);
    });
}

