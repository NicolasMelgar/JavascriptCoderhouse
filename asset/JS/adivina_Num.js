


//3 variables:  el número al azar - el numero que ingresa el usuario - el mensaje que ve el usuario
let miNumeroAdivinar = Math.floor(Math.random()*100) +1;
console.log(miNumeroAdivinar);
const resetInput = document.getElementById("numeroIngresado");

let numeroIngresado = document.getElementById("numeroIngresado");

let mensajeAdivinador = document.getElementById("mensajeAdivinador");

//Esta variable es opcional completamente, pero me gusta
let intentos = document.getElementById("intentos");
let intentoContador = -1; //el contador va sumando...pero quiero que arranque en cero

let vecesJugadas = document.getElementById("menosIntentos");
let menosIntento = 1;


//Desde el Botón verificar

function comprobarResultado(){

    intentoContador++;
    intentos.textContent = intentoContador;
    menosIntento;
    vecesJugadas.textContent = menosIntento; 
    
   

    let num = parseInt(numeroIngresado.value);//me aseguro que sea un número
    if(num < 1 || num > 100 || isNaN(num)){
        mensajeAdivinador.textContent = "Introduce un número válido";
        mensajeAdivinador.style.color = "blue";
        return;
    }
    if(num === miNumeroAdivinar){
        mensajeAdivinador.textContent = "¡¡¡Felicitaciones...lo has adivinado!!!";
        mensajeAdivinador.style.color = "green";
        numeroIngresado.disabled = true;
        btnAdivinar.disabled = true;
                
    }else if(num < miNumeroAdivinar){
        mensajeAdivinador.textContent = "El número a adivinar es mayor"
        mensajeAdivinador.style.color = "red";
    }else{
        mensajeAdivinador.textContent = "El número a adivinar es menor";
        mensajeAdivinador.style.color = "darkblue";
    }
    


}




//Desde el botón jugar
function reiniciar() {comprobarResultado()
    miNumeroAdivinar = Math.floor(Math.random()*100) +1;
    console.log(miNumeroAdivinar);
    numeroIngresado.disabled = false;
    intentos.textContent = 0;
    intentoContador = 0;
    menosIntento++;
    btnAdivinar.disabled = false;    
    numeroIngresado.value = "Escribe un número";

    return;
}



//comprobarResultado();

//Esto me gusta y es muy versátil
//Con esto logro que al presionar enter se agregué la tarea
let input = document.getElementById("numeroIngresado");
input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        comprobarResultado();
    }
})