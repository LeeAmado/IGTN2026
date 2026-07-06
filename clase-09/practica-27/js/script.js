// Variable donde se guardará la cantidad de libros
let cantidad;

// Pedimos la cantidad de libros
cantidad = prompt('¿Cuántos libros compraste?', '');

// Convertimos el dato a número
cantidad = Number(cantidad);


// Validamos que sea un número y que sea mayor que 0
while (isNaN(cantidad) || cantidad <= 0){

	cantidad = prompt('Dato incorrecto. Ingresá una cantidad mayor que cero.', '');

	cantidad = Number(cantidad);

}

//------------------------------------------------------
// Declaración de variables
//------------------------------------------------------


// Variable para guardar el precio de cada libro
let precio;

// Acumulador para sumar todos los precios
let total = 0;

// Variables para guardar el libro más caro y más barato
let masCaro;
let masBarato;

//------------------------------------------------------
// Repetimos una vez por cada libro comprado
//------------------------------------------------------

for(let i = 0; i < cantidad; i++){

	// Pedimos el precio del libro
	precio = prompt('Ingresá el precio del libro ' + (i + 1), '');

	// Convertimos el dato a número
	precio = Number(precio);


	// Validamos que sea un número y mayor que cero
	while(isNaN(precio) || precio <= 0){

		precio = prompt('El precio ingresado no es válido. Ingresalo nuevamente.', '');

		precio = Number(precio);

	}


	// Sumamos el precio al total
	total += precio;


	// En la primera vuelta del ciclo
	// el primer precio será el más caro y el más barato
	if(i == 0){

		masCaro = precio;
		masBarato = precio;

	}


	// Si encontramos un precio mayor,
	// actualizamos el libro más caro
	if(precio > masCaro){

		masCaro = precio;

	}


	// Si encontramos un precio menor,
	// actualizamos el libro más barato
	if(precio < masBarato){

		masBarato = precio;

	}

}


//------------------------------------------------------
// Calculamos el promedio
//------------------------------------------------------

let promedio = total / cantidad;


//------------------------------------------------------
// Mostramos los resultados
//------------------------------------------------------

let mostrarResultado = document.querySelector('.resultado');

mostrarResultado.innerText =
'Cantidad de libros: ' + cantidad +
'\n\nTotal gastado: $' + total +
'\n\nLibro más caro: $' + masCaro +
'\n\nLibro más barato: $' + masBarato +
'\n\nPromedio de precio: $' + promedio;

// EL \n\n SIRVE PARA HACER SALTOS DE LÍNEA EN JS, AÚN NO LO VEMOS (CREO) PERO SIRVE.
// SE PODRÍA HACER ASÍ TAMBIÉN: 'Cantidad de libros: ' + cantidad + '<br><br>' +