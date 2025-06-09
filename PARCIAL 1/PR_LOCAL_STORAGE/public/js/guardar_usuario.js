function guardarUsuario() {
    // Obtener el valor del input
    const usuario = document.getElementById('usuario').value;
    
    // Validar que no esté vacío
    if (!usuario) {
        alert('Por favor ingresa un nombre de usuario');
        return;
    }
    
    // Guardar en localStorage
    localStorage.setItem('usuario', usuario);
    
    // Notificar al usuario
    alert('Usuario guardado correctamente');
    
    // Opcional: redirigir a otra página
    window.location.href = 'ver.html';
}