function calcularEdad(arg) {
    let edad = arg.value;
    let mensaje;
    console.log(edad);
    //usar if
    if (edad >= 18) {
        mensaje = "Eres mayor de edad";
    } else {
        mensaje = "Eres menor de edad";
    }
    document.getElementById('mensaje').innerHTML = mensaje;
}

function calcularGenero(valor) {
    let palabra = valor.value;
    let mjs; 
    console.log(palabra);
    if (palabra === 'M') {
        mjs = "Eres mujer";

    } else if (palabra === "H") {
        mjs = "Eres hombre";
    } else {
        mjs = "Desconocido";
    }
    document.getElementById('mostrarGenero').innerHTML = mjs;
}
function calcularSaludo(valor) {
    let hora 
    let mjs;

  //separar valor de hora en minutos y horas
    let horaCompleta = valor.value;
    let horaMinutos = horaCompleta.split(":");
    hora = parseInt(horaMinutos[0]); // Convertir la hora a un número entero

    if (hora >= 6 && hora < 12) {
        mjs = "Buenos días ing David";
    } else if (hora >= 12 && hora < 18) {
        mjs = "Buenas tardes ind David";
    } else if (hora >= 18 && hora <= 23) {
        mjs = "Buenas noches ind David";
    } else {
        mjs = "Hora no válida";
    }
    document.getElementById('mostrarSaludo').innerHTML = mjs;
}

//conficionales y evantos 
argumento.value
