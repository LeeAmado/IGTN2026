// USO DE IA, PRÁCTICA EXCLUSIVA DE IA.
// Descarté forEach() porque aún no lo hemos visto, hice énfasis en utilizar sólo lo visto en clase.

alert("Bienvenido a Buenos Aires");


// TITULO PRINCIPAL

let titulo = document.querySelector("h1");

titulo.addEventListener("click", function() {

	titulo.innerText = "Bienvenido a Buenos Aires";

});


// SUBTITULO

let subtitulo = document.querySelector("h2");

subtitulo.addEventListener("mouseover", function() {

	subtitulo.style.backgroundColor = "red";

});

subtitulo.addEventListener("mouseout", function() {

	subtitulo.style.backgroundColor = "#c47c2e";

});


// PRIMER PARRAFO

let parrafo = document.querySelector("p");

parrafo.addEventListener("click", function() {

	parrafo.style.backgroundColor = "lightblue";

});


// IMAGEN

let imagen = document.querySelector("img");

if (imagen) {

	imagen.addEventListener("click", function() {

		imagen.style.display = "none";

	});

}