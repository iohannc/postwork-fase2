const btnRandom = document.querySelector('.bRandom');

// Tira error el querer redeclarar estas constantes (que ya están declaradas en search.js)
//const recipeArea = document.getElementById('receta'); 
//const resultsArea = document.querySelector('.meal-results'); 

btnRandom.dataset.bsTarget = '#receta-modal';
btnRandom.dataset.bsToggle = 'modal';
btnRandom.addEventListener('click', mostrar );

function mostrar(event){

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(result => result.json())
    .then(recipe => {
        // El contenido del modal con clase 'modal-body'
        recipeArea.innerHTML = `
        <div class="container" id="receta-header">
                <div id="contenedor-imagen-receta">
                </div>
                <div id="receta-header-right">
                    <h3 id="titulo-receta">${recipe.meals[0].strMeal}</h3>
                    <p>Ingredientes</p>
                    <div id="ingredientes">

                    </div>
                </div>
            </div>
            <div class="container" id="receta-body">
                <h5>Instrucciones</h5>
                <p id="receta-instrucciones">${recipe.meals[0].strInstructions}</p>
            </div>
            </div>`;
         //Es mejor agregar la imagen como background del div a utilizar una img tag.
         recipeArea.firstElementChild.firstElementChild.style.backgroundImage = `url(${recipe.meals[0].strMealThumb})`
         recipeArea.firstElementChild.firstElementChild.style.backgroundSize = 'cover';
         //resultsArea.style.display = "block";
         showIngredients(recipe.meals[0])
})
}

// Menu ham

const menuHam = document.querySelector('.ham');
const opciones = document.querySelector('.opciones.pantalla-busqueda')
const links = document.querySelectorAll('.opciones>a')
const logo = document.querySelector('.logo');

menuHam.addEventListener('click', () =>{
    opciones.classList.add('open')
    menuHam.classList.remove('vis');
    logo.classList.add('hide');
}
)

links.forEach(item => item.addEventListener('click' , ()=> {
    opciones.classList.remove('open');
    logo.classList.remove('hide');
    menuHam.classList.add('vis');
}))