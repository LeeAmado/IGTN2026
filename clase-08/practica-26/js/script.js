// OPCIÓN 1 CON IA --------------------------------------------------------------------
/*

// Seleccionamos el botón
let boton = document.querySelector('#calcular');

// Seleccionamos el lugar donde mostraremos el resultado
let resultado = document.querySelector('#resultado');

// Esperamos el clic del usuario
boton.addEventListener('click', function(){

	// Capturamos los datos del formulario
	let proyectores = Number(document.querySelector('#proyectores').value);
	let computadoras = Number(document.querySelector('#computadoras').value);
	let pantallas = Number(document.querySelector('#pantallas').value);
	let dias = Number(document.querySelector('#dias').value);

	// Calculamos el costo de cada equipo
	let totalProyectores = proyectores * 45000 * dias;
	let totalComputadoras = computadoras * 50000 * dias;
	let totalPantallas = pantallas * 35000 * dias;

	// Calculamos el total
	let total = totalProyectores + totalComputadoras + totalPantallas;

	// Aplicamos descuento
	if(total > 500000){
		total = total - (total * 0.10);
	}

	// Mostramos el resultado
	resultado.innerHTML =
	'El presupuesto total es de $' + total;

});
*/


// OPCIÓN 2 CON IA --------------------------------------------------------------------



// Seleccionamos el botón (buscamos en el HTML el botón que tiene id="calcular)
let boton = document.querySelector('#calcular');

// Seleccionamos el párrafo donde mostraremos el resultado
let resultado = document.querySelector('#resultado');


// ----------------------------------------------------
// FUNCIÓN PARA CALCULAR EL PRESUPUESTO
// ----------------------------------------------------

// La función recibe 4 datos:
// cantidad de proyectores
// cantidad de computadoras
// cantidad de pantallas
// cantidad de días de alquiler
function calcularPresupuesto(proyectores, computadoras, pantallas, dias){
	//Recibe datos → calcula → devuelve un resultado con return.

	// Calculamos cuánto cuestan todos los proyectores
	let totalProyectores = proyectores * 45000 * dias;

	// Calculamos cuánto cuestan todas las computadoras
	let totalComputadoras = computadoras * 50000 * dias;

	// Calculamos cuánto cuestan todas las pantallas
	let totalPantallas = pantallas * 35000 * dias;

	// Sumamos todos los costos para obtener el total general
	let total = totalProyectores + totalComputadoras + totalPantallas;

	// Si el presupuesto supera los $500.000, aplicamos descuento del 10%
	if(total > 500000){

		// Calculamos el descuento y lo restamos
		total = total - (total * 0.10);
	}

	// Devolvemos el resultado para que pueda usarse fuera de la función
	return total;
}

// ----------------------------------------------------
// EVENTO CLICK DEL BOTÓN
// ----------------------------------------------------

// Esperamos el clic del usuario en el botón
boton.addEventListener('click', function(){

	// ------------------------------------------------
	// CAPTURAMOS LOS DATOS DEL FORMULARIO
	// ------------------------------------------------

	// Leemos el valor escrito en el campo proyectores
	// Number() convierte el texto en número
	let proyectores = Number(document.querySelector('#proyectores').value);

	// Leemos la cantidad de computadoras
	let computadoras = Number(document.querySelector('#computadoras').value);

	// Leemos la cantidad de pantallas
	let pantallas = Number(document.querySelector('#pantallas').value);

	// Leemos la cantidad de días
	let dias = Number(document.querySelector('#dias').value);

	// ------------------------------------------------
	// VALIDACIÓN DE DATOS
	// ------------------------------------------------

	// Verificamos si alguno de los valores es incorrecto
	//
	// || significa "o"
	//
	// El mensaje aparecerá si:
	// - proyectores es menor que 0
	// - computadoras es menor que 0
	// - pantallas es menor que 0
	// - días es menor o igual a 0
	if(proyectores < 0 || computadoras < 0 || pantallas < 0 || dias <= 0){

		// Mostramos un mensaje de error
		resultado.innerHTML = 'Ingresá valores válidos.';

	}else{

		// ------------------------------------------------
		// CÁLCULO DEL PRESUPUESTO
		// ------------------------------------------------

		// Llamamos a la función y le enviamos los datos
		let total = calcularPresupuesto(
			proyectores,
			computadoras,
			pantallas,
			dias
		);

		// Mostramos el resultado en pantalla
		resultado.innerHTML =
		'El presupuesto total es de $' + total;

	}

});