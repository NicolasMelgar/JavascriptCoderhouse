alert("Piensa un número del 1 al 10. Pero no lo escribas aquí, déjalo escrito en una hoja y luego presiona 'Aceptar'");

//ESTA FUNCIÓN CREAN UN NUMERO ALEATORIO ENTRE 1 Y 10
function aleatorio() {
    const random = Math.random()
    const multiplicado = random * 10 
    const redondeo = Math.floor(multiplicado) 
    const resultado = redondeo + 1 
    return resultado
}

//Esta respuesta me la guardo para el if que sigue
// let opcionA = aleatorio();    

// let respuesta = prompt(`¿El número que pensaste es ${opcionA}? Responde con SI o NO`);

// while (respuesta != "SI") {
//     respuesta = prompt(`¿El número que pensaste es ${aleatorio()}? Responde con SI o NO`);
// }
// alert("¡Parece que tengo poderes mágicos!");


//ESTA VERSIÓN ES MÁS CORTA
let respuesta = prompt(`¿El número que pensaste es ${aleatorio()}? Responde con SI o NO`);
while (respuesta != "SI") {
    respuesta = prompt(`¿El número que pensaste es ${aleatorio()}? Responde con SI o NO`);
}
alert("¡Parece que tengo poderes mágicos!");