console.log("Archivo estudiantes.js cargado correctamente");

// Array de objetos estudiantes
let estudiantes = [
    {
        nombre: "Estiven",
        apellido: "Cevallos",
        edad: 20,
        carrera: "Programación",
        saludar: function () {
            return "Hola, mi nombre es " + this.nombre + " " + this.apellido + " y estudio " + this.carrera;
        },
        presentarse: function() {
            return "Soy " + this.nombre + " " + this.apellido + ", tengo " + this.edad + " años y estudio " + this.carrera;
        }
    },
    {
        nombre: "Cristian",
        apellido: "Cevallos",
        edad: 22,
        carrera: "Diseño Web",
        saludar: function () {
            return "Hola, mi nombre es " + this.nombre + " " + this.apellido + " y estudio " + this.carrera;
        },
        presentarse: function() {
            return "Soy " + this.nombre + " " + this.apellido + ", tengo " + this.edad + " años y estudio " + this.carrera;
        }
    },
    {
        nombre: "Marcos",
        apellido: "Cevallos",
        edad: 19,
        carrera: "Sistemas",
        saludar: function () {
            return "Hola, mi nombre es " + this.nombre + " " + this.apellido + " y estudio " + this.carrera;
        },
        presentarse: function() {
            return "Soy " + this.nombre + " " + this.apellido + ", tengo " + this.edad + " años y estudio " + this.carrera;
        }
    }
];

function agregarEstudiante() {
    // Obtener valores del formulario
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = parseInt(document.getElementById("edad").value);
    let carrera = document.getElementById("carrera").value;

    // Validar que todos los campos estén llenos
    if (nombre === "" || apellido === "" || edad === "" || carrera === "") {
        alert("Por favor, completa todos los campos");
        return;
    }

    // Crear nuevo objeto estudiante
    let nuevoEstudiante = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        carrera: carrera,
        saludar: function () {
            return "Hola, mi nombre es " + this.nombre + " " + this.apellido + " y estudio " + this.carrera;
        },
        presentarse: function() {
            return "Soy " + this.nombre + " " + this.apellido + ", tengo " + this.edad + " años y estudio " + this.carrera;
        }
    };

    // Agregar al array
    estudiantes.push(nuevoEstudiante);

    // Limpiar formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("carrera").value = "";

    // Mostrar mensaje de éxito
    document.getElementById("resultados").innerHTML = "✅ Estudiante agregado correctamente!";

    // Actualizar lista automáticamente
    mostrarTodos();
}

function mostrarTodos() {
    let contenido = "";
    
    if (estudiantes.length === 0) {
      
        document.getElementById("listaEstudiantes").innerHTML = "No hay estudiantes en la lista"

    } else {
        for (let i = 0; i < estudiantes.length; i++) {
       
                document.getElementById("mostrar").innerHTML +=
                "<div class='estudiante-item'>"+
                "Nombre:"+estudiantes[i].nombre+"<br>"+
                "Apellido:"+estudiantes[i].apellido+"<br>"+
                "Edad:"+estudiantes[i].edad+"<br>"+
                "Carrera:"+estudiantes[i].carrera+"<br>"+
                "Saludo:"+estudiantes[i].saludar()+"<br> <br>"+
                "</div> <br>"
                ;

        }
    }
    
}

function eliminarEstudiante(indice) {
    estudiantes.splice(indice, 1);
    mostrarTodos();
    document.getElementById("resultados").innerHTML = "❌ Estudiante eliminado";
}

function buscarEstudiante() {
    let nombreBuscar = document.getElementById("buscarNombre").value.toLowerCase();
    let encontrado = false;
    let resultado = "";

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nombre.toLowerCase().includes(nombreBuscar)) {
            resultado += `
                <div class="estudiante-item">
                    <div>
                        <strong>Encontrado:</strong> ${estudiantes[i].presentarse()}<br>
                        <em>"${estudiantes[i].saludar()}"</em>
                    </div>
                </div>
            `;
            encontrado = true;
        }
    }

    if (!encontrado) {
        resultado = "<p>❌ No se encontró ningún estudiante con ese nombre</p>";
    }

    document.getElementById("resultadoBusqueda").innerHTML = resultado;
}

function filtrarPorEdad() {
    let edadMinima = parseInt(document.getElementById("edadFiltro").value);
    let estudiantesFiltrados = [];
    let resultado = "";

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].edad >= edadMinima) {
            estudiantesFiltrados.push(estudiantes[i]);
        }
    }

    if (estudiantesFiltrados.length === 0) {
        resultado = "<p>❌ No se encontraron estudiantes con esa edad mínima</p>";
    } else {
        resultado = `<p><strong>Estudiantes con edad >= ${edadMinima}:</strong></p>`;
        for (let i = 0; i < estudiantesFiltrados.length; i++) {
            resultado += `
                <div class="estudiante-item">
                    <div>
                        ${estudiantesFiltrados[i].nombre} ${estudiantesFiltrados[i].apellido} - 
                        ${estudiantesFiltrados[i].edad} años
                    </div>
                </div>
            `;
        }
    }

    document.getElementById("resultadoFiltro").innerHTML = resultado;
}

function calcularEdadPromedio() {
    if (estudiantes.length === 0) {
        document.getElementById("resultados").innerHTML = "❌ No hay estudiantes para calcular promedio";
        return;
    }

    let sumaEdades = 0;
    
    for (let i = 0; i < estudiantes.length; i++) {
        sumaEdades += estudiantes[i].edad;
    }
    
    let promedio = sumaEdades / estudiantes.length;
    
    document.getElementById("resultados").innerHTML = `
        📊 <strong>Estadísticas:</strong><br>
        Total de estudiantes: ${estudiantes.length}<br>
        Suma de edades: ${sumaEdades}<br>
        Edad promedio: ${promedio.toFixed(2)} años
    `;
}

// Mostrar la lista inicial al cargar la página
mostrarTodos();
