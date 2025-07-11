
// La variable Estudiantes se inicializa más adelante con cargarDatos()
let Estudiantes;
// ✅ Cargar datos desde localStorage al iniciar
function cargarDatos() {
    const datosGuardados = localStorage.getItem('estudiantes');
    if (datosGuardados) {
        return JSON.parse(datosGuardados);
    } else {
        // Si no hay datos, usar datos por defecto
        return [
            {
                nombre: "Juan",
                apellido: "Gonzales",
                edad: 20,
                carrera: "civil",
                calificacion: 15,
            },
            {
                nombre: "Alfredo",
                apellido: "Guaman",
                edad: 20,
                carrera: "Medicina",
                calificacion: 18,
            },
        ];
    }
}

// ✅ Guardar datos en localStorage
function guardarDatos() {
    localStorage.setItem('estudiantes', JSON.stringify(Estudiantes));
}

// ✅ Inicializar array cargando desde localStorage
let Estudiantes = cargarDatos();

function registrarEstudiante() {
    let nuevoNombre = document.getElementById("nombre").value;
    let nuevoApellido = document.getElementById("apellido").value;
    let nuevaEdad = document.getElementById("edad").value;
    let nuevaCarrera = document.getElementById("carrera").value;
    let nuevaNota = document.getElementById("nota").value;

    // Validar que todos los campos estén llenos
    if (!nuevoNombre || !nuevoApellido || !nuevaEdad || !nuevaCarrera || !nuevaNota) {
        alert("Por favor, completa todos los campos");
        return;
    }
Estudiantes = cargarDatos();    let nuevoEstudiante = {
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        edad: parseInt(nuevaEdad),
        carrera: nuevaCarrera,
        calificacion: parseFloat(nuevaNota),
    };

    Estudiantes.push(nuevoEstudiante);
    
    // ✅ Guardar en localStorage después de agregar
    guardarDatos();
    
    console.log(Estudiantes);
    
    mostrar();
    promedio();
    
    // Limpiar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("carrera").value = "";
    document.getElementById("nota").value = "";
}

function mostrar() {
    // ✅ Cargar datos actualizados desde localStorage
    Estudiantes = cargarDatos();
    
    document.getElementById("lista").innerHTML = "";
    
    for (let i = 0; i < Estudiantes.length; i++) {
        document.getElementById("lista").innerHTML +=
            "<div class='container2'>" +
            "Nombre: " + Estudiantes[i].nombre + "<br>" +
            "Apellido: " + Estudiantes[i].apellido + "<br>" +
            "Edad: " + Estudiantes[i].edad + "<br>" +
            "Carrera: " + Estudiantes[i].carrera + "<br>" +
            "Nota: " + Estudiantes[i].calificacion + "<br><br>" +
            "</div>";
    }
}

function promedio() {
    // ✅ Cargar datos actualizados desde localStorage
    Estudiantes = cargarDatos();
    
    let promedio = 0;
    let Tcalif = 0;
    
    for (let i = 0; i < Estudiantes.length; i++) {
        Tcalif += parseFloat(Estudiantes[i].calificacion);
    }
    
    console.log("la suma es : " + Tcalif);
    promedio = Tcalif / Estudiantes.length;
    
    document.getElementById("promedio").innerHTML =
        "<div class='container2'>" +
        "Promedio: " + promedio.toFixed(2) +
        "</div>";
}

// ✅ Función para limpiar localStorage (opcional)
function limpiarDatos() {
    localStorage.removeItem('estudiantes');
    Estudiantes = [];
    mostrar();
    promedio();
}

// ✅ Mostrar datos al cargar la página
mostrar();
promedio();