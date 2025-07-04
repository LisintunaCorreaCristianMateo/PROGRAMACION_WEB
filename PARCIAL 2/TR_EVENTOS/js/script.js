function text(input) {
    // Obtener el valor del input
    const value = input.value;
    
    let message = '';
    // Validar si el input está vacío
    if (value.trim() === '') {
        message = 'El campo de texto está vacío.';
    }
    else{
        message = `El texto es: ${value}`;
    }
    document.getElementById('textResponse').innerText = message;
}
function correo(input) {
    // Obtener el valor del input
    const value = input.value;
    
    let message = '';
    // Validar si el input está vacío
    if (value.trim() === '') {
        message = 'El campo de correo está vacío.';
    }
    else{
        message = `El correo es: ${value}`;
    }
    document.getElementById('respuestacorreo').innerText = message;
}
function number(input) {
    // Obtener el valor del input
    const value = input.value;
    
    let message = '';

        const numero = parseInt(value);
 
            // Determinar si es par o impar
            if (numero % 2 === 0) {
                message = `El número ${numero} es par.`;
            } else {
                message = `El número ${numero} es impar.`;
            }
        
    
    document.getElementById('numberRespuesta').innerText = message;
}
function password(input) {
    // Obtener el valor del input
    const value = input.value;
    
    let message = '';
    // Validar si el input está vacío
    if (value.trim() === '') {
        message = 'El campo de contraseña está vacío.';
    }
    else{
        message = `La contraseña es: ${value}`;
    }
    document.getElementById('respuestapassword').innerText = message;
}
function date(input) {
    // Obtener el valor del input
    const value = input.value;
    
    let message = '';
    // Validar si el input está vacío
    if (value.trim() === '') {
        message = 'El campo de fecha está vacío.';
    }
    else{
        message = `La fecha es: ${value}`;
    }
    document.getElementById('dateResponse').innerText = message;
}
function time(input) {
    // Obtener el valor del input
    const value = input.value;
    
    let message = '';
    // Validar si el input está vacío
    if (value.trim() === '') {
        message = 'El campo de hora está vacío.';
    }
    else{
        message = `La hora es: ${value}`;
    }
    document.getElementById('timerespuesta').innerText = message;
}
function datetime(input) {
    // Obtener el valor del input
    const value = input.value;
    
    let message = '';
    // Validar si el input está vacío
    if (value.trim() === '') {
        message = 'El campo de fecha y hora está vacío.';
    }
    else{
        message = `La fecha y hora es: ${value}`;
    }
    document.getElementById('timerespuesta').innerText = message;
}
function file(input) {
    // Obtener el valor del input
    const value = input.value;
    
    let message = '';
    // Validar si el input está vacío
    if (value.trim() === '') {
        message = 'No se ha seleccionado ningún archivo.';
    }
    else{
        message = `El archivo seleccionado es: ${value}`;
    }
    document.getElementById('fileResponse').innerText = message;
}
function range(input) {
    // Obtener el valor del input
    const value = input.value;
    
    let message = '';
    // Validar si el input está vacío
    if (value<18) {
        message = 'Eres menor de edad.Tu edad es: ' + value;
    }
    else{
        message = 'Eres mayor de edad. Tu edad es: '+value;
    }
    document.getElementById('respuestaRange').innerText = message;
}
function cambiarColor(input) {
    // Obtener el valor del color seleccionado
    const color = input.value;
    
    let message = '';
    
    // Condicional para verificar si se eligió un color
    if (color) {
        // Cambiar el color de fondo del div
        document.getElementById('colorResponse').style.backgroundColor = color;
        message = `Color elegido: ${color}`;
    } else {
        message = 'No se ha elegido ningún color';
    }
    
    // Mostrar el mensaje
    document.getElementById('colorRespuesta').innerText = message;
}
function telefono(input) {
    //validar con condicionales si estan 10 numeros o no
    const value = input.value;
    let message = '';  
    if (value.length === 10) {
        message = `El número de teléfono es: `+value;
    } else {
        message = 'El número de teléfono debe tener 10 dígitos.';
    }
    document.getElementById('respuestaTel').innerText = message;
}
function url(input) {
    // Obtener el valor del input
    const value = input.value;
    
    let message = '';
    // Validar si el input está vacío
    if (value.trim() === '') {
        message = 'El campo de URL está vacío.';
    }
    else{
        message = `La URL es: ${value}`;
    }
    document.getElementById('respuestaURL').innerText = message;
}
