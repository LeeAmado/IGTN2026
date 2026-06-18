// Mensaje de bienvenida con método alert()
let mensaje = 'Te damos la bienvenida al sitio de ejemplo';
alert(mensaje);

//---------------------------------

// Preguntamos si quiere una bienvenida personalizada con método confirm(), si acepta avanzamos
let ver = confirm('¿Deseas una bienvenida personalizada?');

//Declaro la variable nombre
let nombre = 'usuario';

// Pedimos el nombre al usuario con método prompt()
if(ver){
	nombre = prompt('¿Cuál es tu nombre?','completá aquí');
}

// Cambiamos el título principal para dar una bienvenida personalizada
let tituloPrincipal = document.querySelector('.principal');
tituloPrincipal.innerText = 'Hola ' + nombre + ', ¿cómo estás?';

//-------------------------------

// Preguntamos si quiere cambiar el color con método confirm(), si acepta se cambian las instrucciones a DARK MODE
let respuesta = confirm('¿Querés leer las instrucciones en dark mode?');
let instruccionesCafe = document.querySelector('.dark');

if(respuesta){
	instruccionesCafe.style.backgroundColor = 'black';
	instruccionesCafe.style.color = 'white';
}

//------------------------------- COMPLETAR, VER COMO SE HACE EL TEMA DE LA HORA, SON 3 OPCIONES

let hora;
let resultado;

// Solicito al usuario que ingrese la hora
hora = prompt('¿Qué hora es? (0 a 24 hs)',''); //prompt devuelve texto, sería mejor trabajar con number ----> hora = Number(prompt('¿Qué hora es?',''));

// Pregunto al usuario si la hora es mayor o igual a 4 y menor o igual a 12
if(hora>4 && hora<=12) { 
	resultado = 'Buenos días';
}
else if(hora>12 && hora<=20) { //entonces si es mayor a 12 y menor o igual a 20...
	resultado = 'Buenas tardes';
}
else if(hora>=0 && hora<=4) {
	resultado = 'Buenas noches';
}
else if(hora>20 && hora<=24) {
	resultado = 'Buenas noches';
}

// Muestro el mensaje en el elemento resultado
let mostrarResultado = document.querySelector('.despedida');
mostrarResultado.innerText = resultado;

/*OTRA OPCIÓN, UTILIZANDO IF, ELSE IF Y ELSE AL FINAL
if(hora >= 4 && hora < 12){
	resultado = 'Buenos días';
}
else if(hora >= 12 && hora < 20){
	resultado = 'Buenas tardes';
}
else{
	resultado = 'Buenas noches';
}*/