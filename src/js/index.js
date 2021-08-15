import "../css/styles.css";
//import "../output.css"
import "../index.html";


fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
.then(response => {
	return response.json();
})
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});