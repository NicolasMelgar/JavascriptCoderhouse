
//Esto debería tener un botón disparador que inicie el juego. 


//Acá no uso un prompt porque no hay necesidad de ingresar un dato
alert("Piensa un número del 1 al 10. Pero no lo escribas aquí, déjalo escrito en una hoja y luego presiona 'Aceptar'");

//ESTA FUNCIÓN CREAN UN NUMERO ALEATORIO ENTRE 1 Y 10

function getRandomNumber() {
    // recuperamos un número aleatorio entre 0 y 1
    const random = Math.random() // por ejemplo: 0.6803487380457318

    // lo multiplicamos por 10 para que esté entre 0 y 10
    const multiplied = random * 10 // -> 6.803487380457318

    // redondeamos hacia abajo para que esté entre 0 y 9
    const rounded = Math.floor(multiplied) // -> 6

    // le sumamos uno para que esté entre 1 y 10
    const result = rounded + 1 // -> 7

    // devolvemos el resultado
    return result
}

//Esta respuesta me la guardo para el if que sigue
let opcionA = getRandomNumber();
let respuesta = prompt(`¿El número que pensaste es ${opcionA}? Responde con SI o NO`);

//Ahora caben dos posibilidades 
//eso lo saco fuera del if para reutilizarlo???
//let pista;
//Por gusto nomás le pongo todas las posibilidades 
if(respuesta === "SI" || respuesta === "si" || respuesta === "Si" || respuesta === "sI" ){
    alert("¡Parece que tengo poderes mágicos!");
} else {//aca podría poner un jugamos de nuevo y arrancar de cero...pero quiero ampliarlo
    alert("¿Probamos de nuevo?")
}

//Ahora hago lo mismo pero con pistas

