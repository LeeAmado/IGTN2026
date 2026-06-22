// Mensaje de bienvenida con método alert()
let mensaje = '¡Hola! Jugaremos a lanzar un dado';
alert(mensaje);

// Seleccionamos el botón
let boton = document.querySelector('#jugar');

// Seleccionamos el párrafo donde mostraremos el mensaje
let mostrarNumero = document.querySelector('.resultadoDado');

// Seleccionamos la imagen
let imagenDado = document.querySelector('.imagenDado');

// Esperamos que el usuario haga clic en el botón
boton.addEventListener('click', function(){

    // Número al azar, multiplicado por 6, más 1 y luego rendondeado, nos da un número entre 1 y 6
	let dado = Math.floor((Math.random() * 6) + 1);

    // Mostramos un mensaje adicional
	mostrarNumero.innerHTML =
	'El número ganador es el ' + dado;

	// Hacemos visible la imagen
	imagenDado.style.display = 'block';

	// Cambiamos la imagen según el resultado
	if(dado == 1){
		imagenDado.src = 'img/dado1.jpg';
	}

	if(dado == 2){
		imagenDado.src = 'img/dado2.jpg';
	}

	if(dado == 3){
		imagenDado.src = 'img/dado3.jpg';
	}

	if(dado == 4){
		imagenDado.src = 'img/dado4.jpg';
	}

	if(dado == 5){
		imagenDado.src = 'img/dado5.jpg';
	}

	if(dado == 6){
		imagenDado.src = 'img/dado6.jpg';
	}


    // Mostramos el resultado también en la consola para ver si se repite el número
	console.log(dado);

}); // Fin del click