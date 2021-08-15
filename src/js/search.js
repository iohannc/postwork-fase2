const searchBtn = document.getElementById('site-search');
const resultsArea = document.querySelector('.meal-results');
const mealsResults = document.querySelector('.meals');
const searchArea = document.getElementsByClassName('pantalla-busqueda');
const inputs = document.querySelector('.inputs');

searchBtn.addEventListener('keypress', getResults);

function getResults(event) {
    if (event.key == 'Enter') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBtn.value.trim()}`)
        .then(results => results.json()) 
        .then(results => {
            if (mealsResults.innerHTML != "") {
                mealsResults.innerHTML = "";
            }
            for (meal of results.meals) {
            let mealItem = document.createElement('div');
            mealItem.className = 'meal-item';
            mealItem.dataset.id = meal.idMeal;
            mealItem.innerHTML = `
            <a href="#">
            <img src=${meal.strMealThumb} alt="Meal image">
            <div class="meal-name">
              <span>${meal.strMeal}</span>
            </div>
          </a>` 
          mealsResults.appendChild(mealItem);
          for (i of searchArea) {
              i.style.display = "none";
          }

          resultsArea.style.display = "flex";
        }});
    }
}