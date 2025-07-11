let salas = [
    { id: 1, nombre: "Sala 1", capacidad: 10, ocupadas: 0 },
    { id: 2, nombre: "Sala 2", capacidad: 10, ocupadas: 0 },
    { id: 3, nombre: "Sala 3", capacidad: 10, ocupadas: 0 },
    { id: 4, nombre: "Sala 4", capacidad: 10, ocupadas: 0 },
    { id: 5, nombre: "Sala 5", capacidad: 10, ocupadas: 0 }
];
//arrya para almacenar los clientes
let clientes = [


];

function reservar() {
    //validar Las salas 4 y 5 son para mayores de 18 años.
    let edad = document.getElementById("edad").value;
    console.log(edad);

    //obtener el select 
    let sala = document.getElementById("salas").value;
    if (sala == "0") {
        alert("Debes seleccionar una sala");
        return;
    }
    if (edad == "") {
        alert("Debes ingresar tu edad");
        return;
    }
    //validar edad valida
    if (isNaN(edad) || edad < 0 || edad > 70) {
        alert("Edad no válida, debe ser un número entre 0 y 70");
        return;
    }
    //validar Las salas 4 y 5 son para mayores de 18 años.
    if ((sala == "4" || sala == "5") && edad < 18) {
        alert("No puedes reservar en las salas 4 y 5, debes ser mayor de 18 años");
        return;
    }



    //verificar si hay cupo
    let salaSeleccionada = salas.find(s => s.id == sala);
    if (!salaSeleccionada) {
        alert("Sala no encontrada");
        return;
    }
    if (salaSeleccionada.ocupadas >= salaSeleccionada.capacidad) {
        alert("No hay cupo disponible en la sala seleccionada");
        return;
    }
    //mostrar mensaje de éxito
    alert(`Reserva exitosa en la ${salaSeleccionada.nombre}. Tu edad: ${edad
        }, Sala: ${salaSeleccionada.nombre}`);
    //agregar la reserva al array del sistema
    salaSeleccionada.ocupadas++;

    //gurardar el cliente en el array de clientes


    let nuevoNombre = document.getElementById("nombre").value;
    let nuevaEdad = parseInt(edad); // Convertir a número entero
    let salaNueva = sala;


    let clientenuevo = {
        nombre: nuevoNombre,
        edad: nuevaEdad,
        sala: salaNueva,
    };
    //agregar el cliente al array de clientes
    clientes.push(clientenuevo);

    console.log(salas);

    mostrar();

    //fecha 09/07/20205
    // nota 14
}

function mostrar() {
    document.getElementById("detallesSalas").innerHTML = "";
    
    for (let i = 0; i < 5; i++) {
        let numeroSala = i + 1;
        let numero = parseInt(salas[i].ocupadas);
        let restantes = 10 - numero;
        
        // Buscar el cliente que tiene reservada esta sala
        let nombreCliente = "Sin reserva";
        for (let j = 0; j < clientes.length; j++) {
            if (clientes[j].sala == salas[i].id) {
                nombreCliente = clientes[j].nombre;
                break;
            }
        }
        
        document.getElementById("detallesSalas").innerHTML +=
            "Sala: " + numeroSala + "<br>" +
            "Numero de reserva: " + numero + "<br>" +
            "Reservado por: " + nombreCliente + "<br>" +
            "Asientos restantes: " + restantes + "<br><br>";
    }
}