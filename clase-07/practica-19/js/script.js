let mensaje ='Al hacer click sobre cada elemento este cambiará a color rojo :)';
alert(mensaje);

let tituloPrincipal = document.querySelector('.principal');
tituloPrincipal.addEventListener('click', function() { //al hacer click
    tituloPrincipal.style.background = 'red'; //cambia el fondo
    tituloPrincipal.style.color = 'black'; //cambia el color de la letra
});

let tituloSecundario = document.querySelector('.secundario');
tituloSecundario.addEventListener('click', function() {
	tituloSecundario.innerText += ' AHORA EN ROJO'; // suma texto con el +=
	tituloSecundario.style.background = 'red';
	tituloSecundario.style.color = 'black';
});

let tercerTitulo = document.querySelector('.tercero');
tercerTitulo.addEventListener('click', function() { 
   tercerTitulo.innerText = 'AHORA TODO ES ROJO AHORA TODO ES ROJO'; // modifica el texto
   tercerTitulo.style.background = 'red';
   tercerTitulo.style.color = 'white';
});

let cuartoTitulo = document.querySelector('.cuarto');
cuartoTitulo.addEventListener('click', function() { 
   cuartoTitulo.innerText = 'AHORA TODO ES ROJO AHORA TODO ES ROJO AHORA TODO ES ROJO AHORA TODO ES ROJO';
   cuartoTitulo.style.background = 'red';
   cuartoTitulo.style.color = 'black';
});

let listaFinal = document.querySelector('.roja');
listaFinal.addEventListener('click', function() { 
   listaFinal.style.background = 'red';
   listaFinal.style.color = 'black';
});

let textoFinal = document.querySelector('.pie');
textoFinal.addEventListener('click', function() {
   textoFinal.style.background = 'red';
});

let imagenJosef = document.querySelector('img');
imagenJosef.addEventListener('click', function() {
   imagenJosef.style.display = 'none'; //al hacer click oculta la imagen (el código html sigue igual)
});