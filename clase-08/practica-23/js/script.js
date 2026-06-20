// Mensaje de bienvenida con método alert()
let mensaje = '¡Hola! Vamos a realizar algunos cálculos de pupitres';
alert(mensaje);

// Seleccionamos el botón que ejecutará los cálculos
let boton = document.querySelector('#calcular');

// Seleccionamos los elementos donde mostraremos los resultados
let mostrarResultado = document.querySelector('.resultadoMayor');
let mostrarResultado2 = document.querySelector('.resultadoMenor');
let mostrarResultado3 = document.querySelector('.resultadoCompra');

// Esperamos que el usuario haga clic en el botón
boton.addEventListener('click', function(){

	// Capturamos los valores ingresados en el formulario
	// Number() convierte el texto ingresado en un número
	let cero = Number(document.querySelector('#cero').value);
	let uno = Number(document.querySelector('#uno').value);
	let dos = Number(document.querySelector('#dos').value);
	let tres = Number(document.querySelector('#tres').value);
	let cinco = Number(document.querySelector('#cinco').value);

	// Buscamos la mayor y la menor cantidad de pupitres
	let mayor = Math.max(cero, uno, dos, tres, cinco);
	let menor = Math.min(cero, uno, dos, tres, cinco);

	// Variables donde guardaremos el número de aula
	let aulaMayor;
	let aulaMenor;

	// Determinamos qué aula tiene la MAYOR cantidad
	// Si dos aulas tienen exactamente la misma cantidad máxima o mínima, el programa mostrará la primera que encuentre

	if(mayor == cero){
		aulaMayor = '001';
	}
	else if(mayor == uno){
		aulaMayor = '101';
	}
	else if(mayor == dos){
		aulaMayor = '201';
	}
	else if(mayor == tres){
		aulaMayor = '301';
	}
	else{
		aulaMayor = '501';
	}

	// Determinamos qué aula tiene la MENOR cantidad
	// Si dos aulas tienen exactamente la misma cantidad máxima o mínima, el programa mostrará la primera que encuentre

	if(menor == cero){
		aulaMenor = '001';
	}
	else if(menor == uno){
		aulaMenor = '101';
	}
	else if(menor == dos){
		aulaMenor = '201';
	}
	else if(menor == tres){
		aulaMenor = '301';
	}
	else{
		aulaMenor = '501';
	}

	// Variable para acumular la cantidad de pupitres a comprar
	let compra = 0;

	// Calculamos cuántos pupitres faltan en cada aula para llegar a 80 y los sumamos al total
	compra = compra + (80 - cero);
	compra = compra + (80 - uno);
	compra = compra + (80 - dos);
	compra = compra + (80 - tres);
	compra = compra + (80 - cinco);

	// Mostramos el aula con MÁS pupitres y su cantidad
	mostrarResultado.innerHTML =
	'El aula con más pupitres es la ' +
	aulaMayor +
	' con ' +
	mayor +
	' pupitres.';

	// Mostramos el aula con MENOS pupitres y su cantidad
	mostrarResultado2.innerHTML =
	'El aula con menos pupitres es la ' +
	aulaMenor +
	' con ' +
	menor +
	' pupitres.';

	// Mostramos la cantidad total de pupitres a COMPRAR
	mostrarResultado3.innerHTML =
	'Se deben comprar ' +
	compra +
	' pupitres para completar todas las aulas con 80 pupitres.';
});