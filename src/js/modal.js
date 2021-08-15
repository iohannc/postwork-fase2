let button = document.querySelector("#brand");
let imagen = document.getElementById("modal-image");
let modal = document.getElementById("modal");
button.onclick = function () {
  modal.style.display = "block";
  imagen.src = "https://picsum.photos/300/200";
};
document.querySelector(".close").onclick = function () {
  modal.style.display = "none";
};
