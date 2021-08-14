import "../css/styles.css";
import "../index.html";

// Seleción del boton de random
const btnRandom = document.getElementById('brand');

//Selección del input donde buscará el usuario
const inputReceta = document.getElementById('site-search');

// Otorgarle un evento al boton random
btnRandom.addEventListener('click', recetaRandom);

// Otorgarle un evento al input
inputReceta.addEventListener('keydown', buscarReceta);


// Fnción para buscar receta random
function recetaRandom(event){
    alert("haz hecho click");
}

// Funcion para buscar receta
function buscarReceta(event){
    if(event.keyCode == '13'){
        alert("Presionaste Enter al Input");
    }
}
