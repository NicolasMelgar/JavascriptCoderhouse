
//Para tener el nombre en la página principal

let nombre = prompt("Por favor, escribe tu nombre");
let nombreAlumno = document.createElement("h3")
nombreAlumno.innerHTML = "nombre"
//document.body.append(nombre)
nombreAlumnoContenedor.append(nombre);

//Local storage clase N° 11
//Para remover un solo item :  localStorage.removeItem("El nombre de la clave dle item");
//Para limpiar todo el storage : localStorage.clear();
//si pongo el usuario y la clave de un banco en el localStorage ...cualquiera que tome mi máquina puede abrirla.

//sessionStorage guarda las cosas solo por reinicio- Por ejemplo usuario e inicio de un banco. 
//porque al reinciar no se guarda la info

//JSON.stringify para guardar info
//JSON.parse para recuperar info