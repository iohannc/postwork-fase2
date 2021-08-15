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
        
        let textInput = inputReceta.value.trim();

        // Comienza la busqueda en el API, con el texto que ingresó el usuario
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${textInput}`)
        .then(response => response.json())
        .then( data =>{
            let html = "";
            if(data.meals){
                data.meals.forEach(meal => {

                })
            }
        })
    

    }
}
