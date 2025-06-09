function guardarDatosUsuarios(){
    var usuario_nombre = document.getElementById('txt_nombre').value;
    console.log("Nombre Usuario:" + usuario_nombre);
    
    var usuario_apellido = document.getElementById('txt_apellido').value;
    var usuario_email = document.getElementById('txt_email').value;

    // Validar que los campos no estén vacíos
    if (!usuario_nombre || !usuario_apellido || !usuario_email) {
        alert("Por favor complete todos los campos");
        return;
    }

    // Convertir variables a atributos en un objeto
    var datos_usuarios = {
        nombre: usuario_nombre,
        apellido: usuario_apellido,
        email: usuario_email
    };
    
    console.log("Datos Usuario: " + JSON.stringify(datos_usuarios));

    // Guardar en localStorage
    localStorage.setItem('datos', JSON.stringify(datos_usuarios));
    
    // Notificar al usuario
    alert("Datos guardados correctamente");
    

}