const searchBtn = document.getElementById('site-search'); // Input de búsqueda.
const resultsArea = document.querySelector('.meal-results'); // Sección de resultados, display:none por default.
const mealsResults = document.querySelector('.meals'); // div que contiene las celdas de resultados.
const searchArea = document.getElementsByClassName('pantalla-busqueda'); // Todos los elementos de la pantalla de búsqueda.
const recipeArea = document.getElementById('receta'); // El contenido de la receta que corresponde al 'modal-body' del modal de Bootstrap.

searchBtn.addEventListener('keypress', getResults);
resultsArea.addEventListener('click', showMeal);

function getResults(event) {
    if (event.key == 'Enter') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBtn.value.trim()}`)
        .then(results => results.json()) 
        .then(results => {
            // Checa si hay contenido previo en mealsResults, si los hay, los borra.
            if (mealsResults.innerHTML != "") {
                mealsResults.innerHTML = "";
            }
            // Añade un div con class='meal-item' y data-id=[idMeal] 
            // por cada elemnto del array recibido.
            for (meal of results.meals) {
            let mealItem = document.createElement('button');
            mealItem.className = 'meal-item';
            mealItem.dataset.id = meal.idMeal; // ¡Muy importante!
            mealItem.dataset.bsTarget = '#receta-modal'
            mealItem.dataset.bsToggle = 'modal'
            mealItem.innerHTML = `
            <div>
            <img src=${meal.strMealThumb} alt="Meal image">
            <div class="meal-name">
              <span>${meal.strMeal}</span>
            </div>
          </div>` 
          mealsResults.appendChild(mealItem);
            }
          // Esconde todos los elementos con la clase 'pantalla-busqueda',
          // que son los elementos de la primera pantalla.
          for (i of searchArea) {
              i.style.display = "none";
          }
          // Cambia el display de resultsArea de 'none' a 'flex'
          // para mostrar los resultados.
          resultsArea.style.display = "flex";
        });
    }
}

function showMeal(event) {
    // Cuando se clickea la imagen en el boton, asignamos el div que contiene
    // el idMeal a mealItem.
    // SOLO FUNCIONA SI SE CLICKEA LA IMAGEN
    // Si se clickea el nombre de la receta, no se obtiene el idMeal.
    let mealItem = event.target.parentElement.parentElement;
    console.log(mealItem)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
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

    })
}