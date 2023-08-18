//Optimizando la suma
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operacion = document.getElementById("operacion");
let resultado__alumno = document.getElementById("resultado__alumno"); //.value.split('').reverse().join('');
let mensaje__corregido = document.getElementById("mensaje__corregido");
let operacion__actual;
let n1, n2;
//Rango ingresado manualmente...podría dar 4 rangos yo 0 - 100 / 101 - 1000 / 1001 - 10000 / 10001 - 100000 y listo
let rango = document.getElementById("rango");

//SUMA... esta después la puedo copiar y pegar si reviso las condiciones de c/u
function btnSumar(){
    mensaje__corregido.innerHTML = "";//vaciar el div
    activarBoton("sumar");//agregamos la clase activa al boton y quitamos e resto
    operacion__actual = "+"; //asignamos la operación suma a la etiqueta
    operacion.innerHTML = " + "; //gereramos los numeros aleatorios
    nuevaSuma();
    /*
    localStorage.setItem("Operacion", "+");
    localStorage.setItem("Numero", n1);
    localStorage.setItem("Numero2", n2);
    */
}

function nuevaSuma(){
    n1 = parseInt(Math.random()*rango.value);
    n2 = parseInt(Math.random()*rango.value);
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    resultado__alumno.focus();
}

//RESTAR
function btnRestar(){
    mensaje__corregido.innerHTML = "";//vaciar el div
    activarBoton("restar");//agregamos la clase activa al boton y quitamos e resto
    operacion__actual = "-";//asignamos la operación
    operacion.innerHTML = " - ";
    nuevaResta();//gereramos los numeros aleatorios
    //verificarResta();
}
/*
// ORIGINAL
function nuevaResta(){
    n1 = parseInt(Math.random()*rango.value);
    n2 = parseInt(Math.random()*rango.value);
    //Con este if evito que la resta me de números negativos, o sea, 45 - 512 = 
    //num1>num2...o sino me da números negativos
    
    if(n1 > n2){
        num1.innerHTML = n1;
        num2.innerHTML = n2;
    }else{
        num1.innerHTML = n2;
        num2.innerHTML = n1;
    }
    
    resultado__alumno.focus();
}
*/
//ESTO FUNCIONA MEJOR QUE LA ANTERIOR PORQUE LA ANTERIOR ME DA ERROR EN ALGUNAS RESTAS Y NO SÉ POR QUÉ
//PERO LO HE VISTO CON LOS CHICOS EN EL AULA
//OJO QUE ESTE TIPO DE RESTAS DAN NEGATIVO..y el resultado me habilita a poner -3
function nuevaResta(){
    n1 = parseInt(Math.random()*rango.value);
    n2 = parseInt(Math.random()*rango.value);
    //con esta parte me ahorro los números negativos en los resultador
    if (n1 > n2){
        num1.innerHTML = n1;
        num2.innerHTML = n2;
    }else{
        nuevaResta();
    }


    resultado__alumno.focus();
}

//MULTIPLICACIÓN - idem Suma cambiando nombres

function btnMultiplicar(){
    mensaje__corregido.innerHTML = "";//vaciar el div
    activarBoton("multiplicar");//agregamos la clase activa al boton y quitamos e resto
    operacion__actual = "*";
    operacion.innerHTML = " x ";//asignamos la operación suma a la etiqueta
    nuevaMultiplicacion();//gereramos los numeros aleatorios
}

function nuevaMultiplicacion(){
    if(rango.value <= 1000){
        n1 = parseInt(Math.random()*rango.value);
        n2 = parseInt(Math.ceil(Math.random()*10));//el "ceil" me deja siempre redondeo para arriba...así que evito la multiplicación por 0
        num1.innerHTML = n1;
        num2.innerHTML = n2;
    }else{//acá sería si es mayor a 1000 el rango
        n1 = parseInt(Math.random()*rango.value);
        n2 = parseInt(Math.floor(Math.random()*100));//A veces aparece uno de una cifra. No me molesta, así que lo dejo. 
        num1.innerHTML = n1;
        num2.innerHTML = n2;
    }

    resultado__alumno.focus();
}


//DIVIDIR

function btnDividir(){
    mensaje__corregido.innerHTML = "";//vaciar el div
    activarBoton("dividir");//agregamos la clase activa al boton y quitamos el resto
    operacion__actual = "/";
    operacion.innerHTML = " / "; //asignamos la operación a la etiqueta
    nuevaDividirJusta();
    //nuevaDividirDificil();
}
//DIVIDIR DIFÍCIL O INEXACTA
function nuevaDividirDificil(){
    n1 = parseInt(Math.random()*rango.value);
    n2 = parseInt(Math.random()*10);//esto me daría un número de 1 a 10
    num1.innerHTML = n1; //pongo los números en el html
    num2.innerHTML = n2;
    resultado__alumno.focus();
}

//DIVISIÓN JUSTA O EXACTA
function nuevaDividirJusta(){
    let arrayDivisores = [];//creo un array vacio para divisores
    n1 = parseInt(Math.random()*rango.value);//este primer número lo genero igual que en todas
    //busco los divisores del número 
    //podría poner i <= n1 pero no quiero divisiones 25/25 o 50/50
    for(let i = 0; i < n1; i++){
//quería usarlo así:  if(n1%i === 0 && i != 1) pero los números primos me quedan con "undefined"
//Supongo que tendría que hacerle la verificación a n1 que no sea primo creo.
        if(n1%i === 0){//la forma n1%i === 0 me asegura que sea un divisor, esta misma idea se usa para saber si es par o impar un numero
            arrayDivisores.push(i);
        }
    }
    //seleccionamos una posición cualquiera del arrayDivisores
    let posicionAleatoria = parseInt(Math.random()*(arrayDivisores.length));
    n2 = arrayDivisores[posicionAleatoria];//este me da un divisor aleatorio 
    //Esto resuelve el tema de la división entre 1 y de los números primeros porque...
    //si el divisor es igual a 1 significa que es un número primo...porque antes descarté el divisor igual al n1
    //Y además descarto el undefined que solía aparecerme en las divisiones
    //Con este if verifico y si es 1 o undefined le digo que vuelva a empezar la función
    if(n2 == 1 || n2 == undefined){
        nuevaDividirJusta()
    }
    //YA PROBADO Y NO FUNCIONA
    //esto igual creo que no me resuelve el problema de dividir entre 1 (Este problema lo resuelve...pero genera otro)
    //Me pone siempre un divisor máximo y termina dando por resultado siempre 2 o 3...no es muy oportuno
    //n2 = Math.max(...arrayDivisores);//esto me da el máximo divisor
    //hay un ejemplo por spread donde podría tomar solamente el mayor divisor creo...por ejemplo:  
    //const numeros = [4, 77, 92, 10, 3, -32, 54, 11]
    //console.log( Math.max(...numeros) ) // 92

    num1.innerHTML = n1;
    num2.innerHTML = n2;
    
    resultado__alumno.focus();
}














//----....esto no va a ser modificado creo...---//

//CORRECCIÓN
function corregir(){
    //si el alumno no escribe nada...paro
    if(resultado__alumno.value==""){
        return;
    }
    let respuesta;
    //armo las operaciones
    let operacion = n1 + " " + operacion__actual + " " + n2;
    respuesta = eval(operacion);
    //Esto me guarda la última operación en el local...pero ¿podría hacer un div que me las guarde todas?
    localStorage.setItem("cuenta:", operacion);
    localStorage.setItem("solución:", respuesta);
    localStorage.setItem("solución_alumno", resultado__alumno.value);

    //creamos un elemento i paara agregar el icono de bien o mal
    var i = document.createElement("i");
    if(resultado__alumno.value.split('').reverse().join('') == respuesta){
        i.className = "fa-solid fa-check verde";
        //Con esto dejo agregada la operacion 
        const h2 = document.createElement("h2");
        h2.textContent = operacion + " = " + respuesta + "   " ;
        //+ "El alumno respondió: " + resultado__alumno.value.split('').reverse().join('');
        mensaje__corregido.appendChild(h2);
        const h3 = document.createElement("h3");
        h3.textContent = " El alumno respondió: " + resultado__alumno.value.split('').reverse().join('');
        mensaje__corregido.appendChild(h3);
    }else{
        i.className = "fa-solid fa-xmark rojo";
        //Con esto dejo agregada la operacion 
        const h2 = document.createElement("h2");
        h2.textContent = operacion + " = " + respuesta + "   " ;
        //+ "El alumno respondió: " + resultado__alumno.value.split('').reverse().join('');
        mensaje__corregido.appendChild(h2);
        const h3 = document.createElement("h3");
        h3.textContent = " El alumno respondió: " + resultado__alumno.value.split('').reverse().join('');
        mensaje__corregido.appendChild(h3);
    }
    //agregamos el elemento al div de correcciones 
    mensaje__corregido.appendChild(i);
    //controlar en que operación estoy para generar una nueva operación. Creo que esto se podría escribir con operadores avanzados
    if(operacion__actual == "+"){
        nuevaSuma();
    }
    else if(operacion__actual == "-"){
        nuevaResta();
    }
    else if(operacion__actual == "*"){
        nuevaMultiplicacion();
    }
    else if(operacion__actual == "/"){ //creo que acá podría ir solo un "else"
        nuevaDividirJusta();
        //ojo que aca puede ir la otra función de división
    }
    //limpio el input de resultado para reiniciar
    resultado__alumno.value = "";

    // ID del div para las operaciones todas "todas_las_operaciones"
    // function todas_las_operaciones(){
    //     //esto es para crear un div como el que tengo en html...notese que hay un solo div!!
    //     const contenedor = document.createElement("div");
    //     div.className = "todas_las_operaciones";
    //     //todas_las_operaciones
    //     const h2 = document.createElement("h2");
    //     h2.textContent = operacion + " = " + respuesta + " El alumno respondió: " + resultado__alumno.value;
    //     todas_las_operaciones.appendChild(h2);
    // }

let divTodo = document.createElement("div");
divTodo.innerHTML = "La operación es: " + `${operacion}`+ " = " + `${respuesta}`;
document.body.appendChild(divTodo);

//No entiendo porqué acá no me muestra la respuesta del alumno
//OJO CON ESTA PARTE 17/8/23
let respuesta_alumno = document.createElement("p");
respuesta_alumno.innerHTML = "El alumno respondió: " + "RAMIRO: no entiendo por qué acá no veo la respuesta si lo puse igual que antes. " + `${resultado__alumno.value.split('').reverse().join('')}`;
//respuesta_alumno.innerHTML = "El alumno respondió: " + `${resultado__alumno.value.split('').reverse().join('')}`;
document.body.appendChild(respuesta_alumno);
        
}




//Esto solo tiene sentido si tengo las 4 operaciones en la misma pantalla...sino lo pongo activado en la clase css y esto se va
function activarBoton(idBoton){
    document.getElementById("sumar").className = "";
    document.getElementById("restar").className = "";
    document.getElementById("multiplicar").className = "";
    document.getElementById("dividir").className = "";
    document.getElementById(idBoton).className = "activado";
}

//CORRECCIÓN. agrego el enter en vez de clik solo con el ratón
let input = document.getElementById("resultado__alumno");
input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        corregir();
    }
})
//RANGO. Para dar "enter" en el rango y que llame a la función sumar y deje todo listo para empezar
let input2 = document.getElementById("rango");
input2.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        btnSumar();
    }
})