// Seleccionamos el botón
let boton = document.querySelector('#listo');

// Lugar donde mostraremos la recomendación
let mostrarSerie = document.querySelector('.recomendacionSerie');

// Esperamos que el usuario haga clic en el botón
boton.addEventListener('click', function(){

	// Capturamos los datos
    let nombre = document.querySelector('#nombre').value;
    let serie = document.querySelector('#serie').value;

    // Variable donde se guardará la serie a recomendar
    let respuestaSerie;

    if(serie == 'comedia'){
        respuestaSerie = 'The Office';
    }
    else if(serie == 'terror'){
        respuestaSerie = 'The Haunting of Hill House';
    }
    else if(serie == 'documental'){
        respuestaSerie = 'Nuestro Planeta';
    }
    else if(serie == 'accion'){
        respuestaSerie = 'Reacher';
    }
    else if(serie == 'romance'){
        respuestaSerie = 'Bridgerton';
    }
    else{
        respuestaSerie = 'Attack on Titan';
    }

    // Capturamos la edad
    let edad = document.querySelector('#edad').value;

    // Recomendaciones comedia
     if(serie == 'comedia' && edad < 18){
    respuestaSerie = 'Friends';
    }
    else if(serie == 'comedia' && edad >= 60){
    respuestaSerie = 'Seindfield';
    }
    else if(serie == 'comedia' && edad >= 35){
    respuestaSerie = 'The Office';
    }
    else if(serie == 'comedia' && edad >= 18){
    respuestaSerie = 'The big bang theory';
    }

    // Recomendaciones terror
    if(serie == 'terror' && edad < 18){
    respuestaSerie = 'It - bienvenidos a Derry';
    }
    else if(serie == 'terror' && edad >= 60){
    respuestaSerie = 'Historias para no dormir';
    }
    else if(serie == 'terror' && edad >= 35){
    respuestaSerie = 'Kingdom';
    }
    else if(serie == 'terror' && edad >= 18){
    respuestaSerie = 'American Horror Story';
    }

    // Recomendaciones documental
    if(serie == 'documental' && edad < 18){
    respuestaSerie = 'Cosmos: A Space-Time Odyssey';
    }
    else if(serie == 'documental' && edad >= 60){
    respuestaSerie = 'Shoah';
    }
    else if(serie == 'documental' && edad >= 35){
    respuestaSerie = 'La chica de la foto';
    }
    else if(serie == 'documental' && edad >= 18){
    respuestaSerie = 'El hombre de los 1000 hijos';
    }

    // Recomendaciones acción
    if(serie == 'accion' && edad < 18){
    respuestaSerie = 'The Boys';
    }
    else if(serie == 'accion' && edad >= 60){
    respuestaSerie = 'Prison Break';
    }
    else if(serie == 'accion' && edad >= 35){
    respuestaSerie = 'Peaky Blinders';
    }
    else if(serie == 'accion' && edad >= 18){
    respuestaSerie = 'Juego de Tronos';
    }

    // Recomendaciones romance
    if(serie == 'romance' && edad < 18){
    respuestaSerie = 'Casual';
    }
    else if(serie == 'romance' && edad >= 60){
    respuestaSerie = 'Anatomía de Grey';
    }
    else if(serie == 'romance' && edad >= 35){
    respuestaSerie = 'Modern Love';
    }
    else if(serie == 'romance' && edad >= 18){
    respuestaSerie = 'Los Bridgerton';
    }

    // Recomendaciones Anime
    if(serie == 'anime' && edad < 18){
    respuestaSerie = 'Naruto';
    }
    else if(serie == 'anime' && edad >= 60){
    respuestaSerie = 'Monster';
    }
    else if(serie == 'anime' && edad >= 35){
    respuestaSerie = 'Evangelion';
    }
    else if(serie == 'anime' && edad >= 18){
    respuestaSerie = 'Attack on Titan';
    }

mostrarSerie.innerHTML =
    nombre + ', mi recomendación para vos es: ' + respuestaSerie;
});
