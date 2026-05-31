let mensaje ='Al aceptar cambia todo';
alert(mensaje);

let tituloPrincipal = document.querySelector('.principal');
tituloPrincipal.style.background = 'white';

let tituloSecundario = document.querySelector('.secundario');
tituloSecundario.style.background = 'black';
tituloSecundario.style.color = 'cyan';

let tercerTitulo = document.querySelector('.tercero');
tercerTitulo.innerText = 'TE AVISÉ QUE CAMBIARÍA';
tercerTitulo.style.color = 'magenta';

let texto = document.querySelector('p'); //cambia solo el primero porque no hago querySelectorAll
texto.style.color = 'white';

let textoFinal = document.querySelector('.parrafito');
textoFinal.style.background = 'blue'

