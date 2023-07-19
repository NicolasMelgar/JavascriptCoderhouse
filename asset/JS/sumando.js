
let opcion = prompt("Escribe SALIR para no hacer más cuentas. O toca enter para hacer cuentas");

while(opcion != "SALIR"){

let numerando = parseInt(prompt("Ingresa el primer número de tu suma"));
if(numerando == "SALIR"){ alert("Nos vemos cuando quieras practicar");}

let sumando = parseInt(prompt("Ingresa el segundo número de tu suma"));
if(sumando == "SALIR"){  alert("Nos vemos cuando quieras practicar");}

else{  
    function suma(){
    suma = numerando + sumando;
    return suma
    }

alert("El resultado de tu suma es " + suma());

opcion = prompt("Escribe SALIR para no hacer más cuentas. O toca enter para hacer cuentas");
}  

}

alert("Chau")

