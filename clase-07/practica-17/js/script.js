/*
2 FORMAS DE REALIZAR EL EJERCICIO, EL PRIMERO MODIFICANDO LA VARIABLE Y EL SEGUNDO CON LOS CONSOLE LOG AL FINAL

let precioBase = 50000;

console.log('Precio sin descuento es $' + precioBase);

let descuentoFinal = 50;

console.log('El descuento es ' + descuentoFinal + '%');

descuentoFinal = 0.50;

let precioFinal = precioBase * descuentoFinal;

console.log('Precio con descuento es $' + precioFinal);

console.log(precioFinal === 25000);
*/

let precio = 50000;

let descuento = 50;

let descuentoFinal = precio * descuento / 100;

let precioFinal = precio - descuentoFinal;


console.log('Precio sin descuento es $' + precio);

console.log('El descuento es ' + descuento + '%');

console.log('Precio con descuento es $' + precioFinal);

console.log(precioFinal === 25000);