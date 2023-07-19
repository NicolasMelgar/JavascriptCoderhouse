let opcion = prompt("Escribe ESC para no hacer más cuentas. O toca enter para hacer cuentas");


//ESTE FORMATO ES MEJORABLE CREO
while(opcion != "ESC"){
let minuendo = parseInt(prompt("Ingresa el primer número de tu resta"));
if(minuendo == "ESC"){ alert("Nos vemos cuando quieras practicar");}

let sustraendo = parseInt(prompt("Ingresa el número que quieres restar"));
if(sustraendo == "ESC"){ alert("Nos vemos cuando quieras practicar");}

else{ function resta(){
    resta = minuendo - sustraendo;
    return resta; 
    }
alert("El resultado de tu resta es " + resta());

opcion = prompt("Escribe ESC para no hacer más cuentas. O toca enter para hacer cuentas");

}
}

alert("Chau")



