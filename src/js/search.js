const searchBtn = document.getElementById('site-search');
searchBtn.addEventListener('keypress', getResults);

function getResults(event) {
    if (event.key == 'Enter') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBtn.value.trim()}`)
        .then(results => results.json()) 
        .then(results => {
        window.location.href = 'http://127.0.0.1:5500/src/test.html';
        document.querySelector('p').innerText = `${results.meals[0].strMeal}`
        });
    }
}