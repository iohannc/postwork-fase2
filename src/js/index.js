import "../css/styles.css";
//import "../output.css"
import "../index.html";

const search = document.querySelector('#site-search');
search.addEventListener('keyup', function (item) {
    if (item.key != 'Enter') {
        console.log(search.value);
    } else {
        let busqueda = search.value;
        console.log(busqueda);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${busqueda}`)
            .then(response => {
                return response.json();
            })
            .then(data => console.log(data))
            .catch(err => {
                console.error(err);
            });
    }
})



