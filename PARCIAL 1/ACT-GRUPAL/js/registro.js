document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('form');
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const firstName = document.getElementById('inputFirstName').value.trim();
        const lastName = document.getElementById('inputLastName').value.trim();
        const email = document.getElementById('inputEmail').value.trim();
        const password = document.getElementById('inputPassword').value;
        const confirmPassword = document.getElementById('inputPasswordConfirm').value;
        
        // Validación simple
        if (!firstName || !lastName || !email || !password) {
            alert('Por favor, complete todos los campos');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        // Crear objeto de usuario
        const newUser = {
            firstName,
            lastName,
            email,
            password
        };
        
        // Enviar al servidor
        fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert('¡Registro exitoso! Redirigiendo al login...');
                window.location.href = 'login.html';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al registrar usuario');
        });
    });
});