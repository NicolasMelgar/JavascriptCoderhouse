let opcion = prompt("Escribe SALIR para terminar.\n O toca enter para aprender paises de américa latina.\n  ¿SALIR O ENTER?");

//opcion.toUpperCase() con eso lo obligo a estar en mayúsculas
while (opcion.toUpperCase() != "SALIR") {    
    let pais = prompt("Ingrese el nombre de un país de América del Sur")
    let mensaje;
    const americaSur = [
        { id: 1, nombre: "argentina", capital: "Buenos Aires" },
        { id: 2, nombre: "colombia", capital: "Bogotá" },
        { id: 3, nombre: "uruguay", capital: "Montevideo" },
        { id: 4, nombre: "chile", capital: "Santiago" },
        { id: 5, nombre: "peru", capital: "Lima" },
        { id: 6, nombre: "brasil", capital: "Brasilia" },
        { id: 7, nombre: "mexico", capital: "Mexico" },
        { id: 8, nombre: "venezuela", capital: "Caracas" },
        { id: 9, nombre: "bolivia", capital: "La Paz" },
        { id: 10, nombre: "ecuador", capital: "Quito" },
        { id: 11, nombre: "paraguay", capital: "Asuncion" },
        { id: 11, nombre: "surinam", capital: "Paramaribo" },
        { id: 11, nombre: "guyana", capital: "Georgetown" },
        { id: 11, nombre: "guyana francesa", capital: "Cayena" },
    ];

    for (let index = 0; index < americaSur.length; index++) {
        if (americaSur[index].nombre === pais.toLowerCase()) {//pais.toLowerCase() esto vuelve todo a minúsculas
            mensaje = "Es un país de América del Sur";
        }
    }
    if (mensaje === "Es un país de América del Sur") {
        alert("Es un país de América del Sur"); 
        opcion = prompt("Escribe SALIR para terminar. \nO toca enter para aprender paises de américa latina.  \n¿SALIR O ENTER?");
    } else {
        alert("No es un país de América del Sur");
        opcion = prompt("Escribe SALIR para terminar. \nO toca enter para aprender paises de américa latina.  \n¿SALIR O ENTER?");
    }

}
alert("¡Nos vemos en otros continentes!")

