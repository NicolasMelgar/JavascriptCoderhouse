let opcion = prompt("Escribe SALIR para terminar o toca enter para aprender provincias argentinas.  ¿SALIR O ENTER?");
while (opcion.toUpperCase() != "SALIR") {    
    let provincia = prompt("Ingrese el nombre de una provincia argentina")
    let mensaje;
    const argentina = [
        { id: 1, nombre: "buenos aires", capital: "Buenos Aires" },
        { id: 2, nombre: "caba", capital: "La plata" },
        { id: 3, nombre: "catamarca", capital: "San Fernando del Valle de Catamarca" },
        { id: 4, nombre: "chubut", capital: "Rawson" },
        { id: 5, nombre: "cordoba", capital: "Córdoba" }, 
        { id: 6, nombre: "corrientes", capital: "Corrientes" }, 
        { id: 7, nombre: "entre rios", capital: "Paraná" },
        { id: 8, nombre: "formosa", capital: "Formosa" },
        { id: 9, nombre: "jujuy", capital: "San Salvador de Jujuy" },
        { id: 10, nombre: "la pampa", capital: "Santa Rosa" },
        { id: 11, nombre: "la rioja", capital: "La Rioja" }, 
        { id: 12, nombre: "mendoza", capital: "Mendoza" }, 
        { id: 13, nombre: "misiones", capital: " Posadas" },
        { id: 14, nombre: "neuquen", capital: "Neuquén" },
        { id: 15, nombre: "rio negro", capital: "viedma" },
        { id: 16, nombre: "salta", capital: "Salta" },
        { id: 17, nombre: "san juan", capital: "San Juan" }, 
        { id: 18, nombre: "san luis", capital: "San Luis" }, 
        { id: 19, nombre: "santa cruz", capital: "Rio Gallegos" },
        { id: 20, nombre: "santa fe", capital: "Santa Fe" },
        { id: 21, nombre: "santiago del estero", capital: "Santiago del Estero" },
        { id: 22, nombre: "tierra del fuego", capital: "Ushuaia" },
        { id: 23, nombre: "tucuman", capital: "San Miguel de Tucuman" }, 
        { id: 24, nombre: "chaco", capital: "resistencia" }, 
    ];

    for (let index = 0; index < argentina.length; index++) {
        if (argentina[index].nombre === provincia.toLowerCase()) {//provincia.toLowerCase() esto vuelve todo a minúsculas
            mensaje = "Es una provincia de Argentina";
        }
    }
    if (mensaje === "Es una provincia de Argentina") {
        alert(`Es una provincia de Argentina`);
        opcion = prompt("Escribe SALIR para terminar o toca enter para aprender provincias argentinas.  ¿SALIR O ENTER?");
    } else {
        alert("No es una provincia de Argentina");
        opcion = prompt("Escribe SALIR para terminar o toca enter para aprender provincias argentinas.   ¿SALIR O ENTER?");
    }

}
alert("¡Nos vemos en otro momento!")

