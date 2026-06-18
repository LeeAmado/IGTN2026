// Seleccionamos el botón y la casilla donde se mostrará el resultado (elementos del formulario)
let boton = document.querySelector('#calcular');
let resultado = document.querySelector('#resultado');

// Cuando el usuario hace clic en el botón, se ejecuta la función (calculamos el dto)
boton.addEventListener('click', function() {

    // Obtenemos los valores ingresados y los convertimos a número (tomamos los datos ingresados)
    let precio = Number(document.querySelector('#precio').value);
    let descuento = Number(document.querySelector('#descuento').value);

    // Calculamos el monto que se descontará
    let montoDescuento = precio * descuento / 100;
    // Restamos el descuento al precio original
    let precioFinal = precio - montoDescuento;

    //resultado.innerHTML = 'Precio final: $' + precioFinal; // PARA MOSTRAR EN PÁRRAFO
    resultado.value = '$' + precioFinal; // PARA MOSTRAR EN CASILLA INHABILITADA

});