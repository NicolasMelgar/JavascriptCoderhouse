let numero = parseInt(prompt("Ingresa un número"));


while (numero != "ESC") {
    switch(numero){ 
    case 1:
        alert("Tomate");
        break;
    case 2:
        alert("Papa");
        break;

    case 3:
        alert("Carne");
        break;

    case 4:
        alert("Pollo");
        break;

    default:
        alert("No está en la lista");
        break;
    }
    numero = parseInt(prompt("Ingresa un número"));
}