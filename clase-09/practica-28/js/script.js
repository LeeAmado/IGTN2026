// Variable donde se guarda la opción elegida
let menu;


// Contadores para cada menú
let pasta = 0;
let pollo = 0;
let ensalada = 0;

//------------------------------------------------------
// Se repite una vez por cada invitado
//------------------------------------------------------

for(let i = 0; i < 12; i++){

	// Pedimos el menú elegido
	menu = prompt(
		'Invitado ' + (i + 1) +
		'\n\nElegí un menú:' +
		'\n1 - Pasta' +
		'\n2 - Pollo' +
		'\n3 - Ensalada',
	''
	);

	// Convertimos el dato a número
	menu = Number(menu);


	// Validamos el dato
	while(
		isNaN(menu) || menu < 1 || menu > 3
	){

		menu = prompt(
			'Opción incorrecta.' +
			'\n\nIngresá:' +
			'\n1 - Pasta' +
			'\n2 - Pollo' +
			'\n3 - Ensalada',
		'');

		menu = Number(menu);

	}


	// Sumamos un invitado al menú elegido

	if(menu == 1){

		pasta++;

	}

	if(menu == 2){

		pollo++;

	}

	if(menu == 3){

		ensalada++;

	}

}


//------------------------------------------------------
// Calculamos los porcentajes
//------------------------------------------------------

let porcentajePasta = pasta * 100 / 12;

let porcentajePollo = pollo * 100 / 12;

let porcentajeEnsalada = ensalada * 100 / 12;


//------------------------------------------------------
// Buscamos el menú más elegido
//------------------------------------------------------

let mayor = pasta;

let menuMasElegido = 'Pasta';


if(pollo > mayor){

	mayor = pollo;

	menuMasElegido = 'Pollo';

}


if(ensalada > mayor){

	mayor = ensalada;

	menuMasElegido = 'Ensalada';

}


//------------------------------------------------------
// Mostramos el resultado
//------------------------------------------------------

let mostrarResultado = document.querySelector('.resultado');


mostrarResultado.innerHTML =
'Pasta: ' + porcentajePasta + '%<br><br>' +

'Pollo: ' + porcentajePollo + '%<br><br>' +

'Ensalada: ' + porcentajeEnsalada + '%<br><br>' +

'Menú más elegido: ' + menuMasElegido;
