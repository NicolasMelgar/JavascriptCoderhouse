let opcion = prompt("Escribe CUALQUIER COSA para no hacer más cuentas. O toca enter para hacer cuentas");

while (opcion == "") {//Acá sale si le escribo cualquier cosa

let dividendo = parseInt(prompt("Ingresa el número que quieres dividir"));
let divisor = parseInt(prompt("¿Entre cuánto quieres dividirlo?"));

// Probando sin función 

    // function division() {
    //     division = dividendo / divisor;
    //     return division
    // }

    //alert("El resultado de tu división es " + division());
    alert("El resultado de tu división es " + dividendo/divisor);
    opcion = prompt("Escribe CUALQUIER COSA para no hacer más cuentas. O toca enter para hacer cuentas");

}    alert("Recuerda practicar mucho");
