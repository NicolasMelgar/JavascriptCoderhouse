//Este archivo contiene cosas que podría agregar o ideas.

//Local storage clase N° 11
//Para remover un solo item :  localStorage.removeItem("El nombre de la clave dle item");
//Para limpiar todo el storage : localStorage.clear();
//si pongo el usuario y la clave de un banco en el localStorage ...cualquiera que tome mi máquina puede abrirla.

//sessionStorage guarda las cosas solo por reinicio- Por ejemplo usuario e inicio de un banco. 
//porque al reinciar no se guarda la info

//JSON.stringify para guardar info
//JSON.parse para recuperar info


//Extraído de testA sector else de respuesta incorrecta:
//let idIncorrecto = "p" + i + !pregunta.correcta;
//document.getElementById(idCorrecion2).innerHTML = "&check;";
//document.getElementById(idCorrecion2).className = "acierto";
//document.getElementById(idIncorrecto).innerHTML = "&#x2715;";
//document.getElementById(idIncorrecto).className = "no__acierto";
//document.getElementById(idCorrecion).innerHTML = "&check;";
//document.getElementById(idCorrecion).className = "acierto";

/*
corregir.onclick = function () {
    //recorro el array que tiene las respuestas y comparo
    for (let i = 0; i < bd__juego.length; i++) {
        const pregunta = bd__juego[i];
        //cargo las respuestas
        if (pregunta.correcta == respuestas[i]) {
            cantidadCorrectas++;
            let idCorrecion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor__pregunta correcta";
            document.getElementById(idCorrecion).innerHTML = "&check;";//esto está en código hexadecimal y es el visto
            document.getElementById(idCorrecion).className = "acierto";
        } else {//respuesta incorrecta //Acá tengo un error y no logro descubrir cuál
            //let idIncorrecto = "p" + i + !pregunta.correcta;
            let idCorrecion2 = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor__pregunta incorrecta";
            //Estos dos renglones le marcan la respuesta correcta al alumno...ver si se lo deja o quita            
            document.getElementById(idCorrecion2).innerHTML = "&check;";
            document.getElementById(idCorrecion2).className = "acierto";
        }
        corregir.disabled = true;
    }

    //deshabilitadmos todos los input para que no se modifiquen respuestas
    let inputs = document.getElementsByTagName("input");
    for (i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }

    //hace scroll hacia arriba
    window.scrollTo(0, 0);

    //colocamos la cantidad de aciertos y errores 
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantidadCorrectas + " CORRECTAS - " + (9 - cantidadCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}
*/

