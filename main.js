
//Para tener el nombre en la página principal
let nombre = prompt("Por favor, escribe tu nombre");
let nombreAlumno = document.createElement("h3")
nombreAlumno.innerHTML = "nombre"
nombreAlumnoContenedor.append(nombre);

/* //---...HACER...---//
esto si tendría sentido guardarlo en el local storage
y entonces si el usuario entra no le pide el nombre
si es que ya ingresó previamente
sino cada vez que reinicio la página debo colocar el nombre
*/