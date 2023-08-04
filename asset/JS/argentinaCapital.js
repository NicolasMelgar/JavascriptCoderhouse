let opcion = prompt("Escribe SALIR para terminar. \nToca enter para aprender provincias argentinas.");

function capitales (){ 
while (opcion.toUpperCase() != "SALIR") {    
    let provincia = prompt("Ingrese el nombre de una provincia argentina")
    let mensaje;
    const argentina = [
        { id: 1, nombre: "buenos aires", capital: "Buenos Aires", habitantes: "15.771.581" },
        { id: 2, nombre: "caba", capital: "La plata. Aunque debe notarse que C.A.B.A no es una provincia en sino una ciudad autónoma.", habitantes: "3.038.430" },
        { id: 3, nombre: "catamarca", capital: "San Fernando del Valle de Catamarca", habitantes: "378.977" },
        { id: 4, nombre: "chubut", capital: "Rawson", habitantes: "515.203" },
        { id: 5, nombre: "cordoba", capital: "Córdoba", habitantes: "3.384.649" }, 
        { id: 6, nombre: "corrientes", capital: "Corrientes", habitantes: "1.021.242" }, 
        { id: 7, nombre: "entre rios", capital: "Paraná", habitantes: "1.259.903" },
        { id: 8, nombre: "formosa", capital: "Formosa", habitantes: "553.528" },
        { id: 9, nombre: "jujuy", capital: "San Salvador de Jujuy", habitantes: "685.870" },
        { id: 10, nombre: "la pampa", capital: "Santa Rosa", habitantes: "328.155" },
        { id: 11, nombre: "la rioja", capital: "La Rioja", habitantes: "343.765" }, 
        { id: 12, nombre: "mendoza", capital: "Mendoza", habitantes: "1.780.854" }, 
        { id: 13, nombre: "misiones", capital: " Posadas", habitantes: "1.117.121" },
        { id: 14, nombre: "neuquen", capital: "Neuquén", habitantes: "573.881" },
        { id: 15, nombre: "rio negro", capital: "Viedma", habitantes: "650.511" },
        { id: 16, nombre: "salta", capital: "Salta", habitantes: "1.243.386" },
        { id: 17, nombre: "san juan", capital: "San Juan", habitantes: "698.476" }, 
        { id: 18, nombre: "san luis", capital: "San Luis", habitantes: "445.477" }, 
        { id: 19, nombre: "santa cruz", capital: "Rio Gallegos", habitantes: "276.407" },
        { id: 20, nombre: "santa fe", capital: "Santa Fe", habitantes: "3.269.134" },
        { id: 21, nombre: "santiago del estero", capital: "Santiago del Estero", habitantes: "883.684" },
        { id: 22, nombre: "tierra del fuego", capital: "Ushuaia", habitantes: "132.116" },
        { id: 23, nombre: "tucuman", capital: "San Miguel de Tucuman", habitantes: "1.494.358" }, 
        { id: 24, nombre: "chaco", capital: "Resistencia", habitantes: "1.083.740" }, 
    ];

    for (let index = 0; index < argentina.length; index++) {
        if (argentina[index].nombre === provincia.toLowerCase()) {//provincia.toLowerCase() esto vuelve todo a minúsculas
            mensaje = "Es una provincia de Argentina";
            var capital = argentina[index].capital;
            var habitantes = argentina[index].habitantes;
        }
    }
    if (mensaje === "Es una provincia de Argentina") {
        alert(`Es una provincia Argentina. \n \n Su capaital es: ${capital.toUpperCase()} \n \n Sus habitantes son: ${habitantes}`);
        opcion = prompt("Escribe SALIR para terminar. \nToca enter para aprender provincias argentinas.");
    } else {
        alert("No es una provincia de Argentina");
        opcion = prompt("Escribe SALIR para terminar. \nToca enter para aprender provincias argentinas.");
    }



}
alert("¡Cuando quieras seguimos con las capitales!")
}


capitales();