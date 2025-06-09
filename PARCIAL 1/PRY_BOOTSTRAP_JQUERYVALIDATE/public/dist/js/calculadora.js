// Variables globales para almacenar valores y operaciones
let numeroAnterior = '';
let operacionPendiente = '';
let calculo;

function limpiar() {
    // Limpia toda la operación
    numeroAnterior = '';
    operacionPendiente = '';
    document.getElementById("txt_caja_resultado").value = '';
}

function limpiarActual() {
    const resultado = document.getElementById("txt_caja_resultado");
    resultado.value = resultado.value.toString().slice(0, -1);
}

function capturar(arg) {
    const valor = arg.dataset.valor;
    const resultado = document.getElementById("txt_caja_resultado");

    if(valor === '+' || valor === '-' || valor === 'x' || valor === '/') {
        // Guardar primer número y operación
        numeroAnterior = resultado.value;
        operacionPendiente = valor;
        // Limpiar display para nuevo número
        resultado.value = '';
        return;
    }
    
    if(valor === '=') {
        calcular();

        return;
    }
    if (valor=== "Ans"){
        // Mostrar el último resultado calculado
        resultado.value = calculo;
        return;
    }

    if(valor === "C") {
        limpiar();
        return;
    } else if(valor === "CE") {
        limpiarActual();
        return;
    }


    // Agregar dígitos al display
    resultado.value += valor;
}

function calcular() {
    const resultado = document.getElementById("txt_caja_resultado");
    const numeroActual = resultado.value;
 

    // Validar números existentes
    if(numeroAnterior === '' || numeroActual === '') return;
    
    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(numeroActual);

    // Realizar operación
    switch(operacionPendiente) {
        case '+':
            calculo = num1 + num2;
            break;
        case '-':
            calculo = num1 - num2;
            break;
        case 'x':
            calculo = num1 * num2;
            break;
        case '/':
            if(num2 === 0) {  // Manejar división por cero
                limpiar();
                resultado.value = 'Error';
                return;
            }
            calculo = num1 / num2;
            break;
        default:
            return;
    }

    // Mostrar resultado y preparar para nuevas operaciones
    resultado.value = calculo;

    numeroAnterior = calculo.toString();
    operacionPendiente = '';
}