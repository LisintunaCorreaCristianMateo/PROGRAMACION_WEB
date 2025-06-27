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