
let opcion = prompt("Escribe SALIR para no hacer más cuentas. O toca enter para hacer cuentas");


while(opcion !== "SALIR"){
let factor1 = parseInt(prompt("Ingresa el primer número de tu multiplicación"));
let factor2 = parseInt(prompt("¿Por cuánto quieres multiplicarlo?"));

//YO QUERÍA QUE ME SALGA EL ALERTA SI ESCRIBÍA SALIR...PERO NO ME SALIÓ
if(factor1 == isNaN){ 
    alert("Nos vemos cuando quieras practicar");
    break;
   
} else if(factor2 == isNaN){ 
    alert("Nos vemos cuando quieras practicar");
    break;
} else {
    function mult(){
     mult = factor1 * factor2;
    return mult
    }
}

alert("El resultado de tu multiplicación es " + mult());
opcion = prompt("Escribe SALIR para no hacer más cuentas. O toca enter para hacer cuentas");
}
alert("Nos vemos!!");


