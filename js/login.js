// js/login.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Listener para el envío del formulario de login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevenir el envío por defecto del formulario

            const username = usernameInput.value;
            const password = passwordInput.value;

            // --- Lógica de Autenticación Simulada ---
            // En un sistema real, aquí harías una petición AJAX/Fetch a tu API de backend
            // para verificar las credenciales en una base de datos.

            // Credenciales de prueba:
            const validUsername = 'admin';
            const validPassword = '12345'; // ¡Nunca usar esto en producción!

            if (username === validUsername && password === validPassword) {
                alert('¡Inicio de sesión exitoso!');
                // En un sistema real, el backend devolvería un token de sesión/JWT
                // que guardarías en localStorage/sessionStorage.
                
                // Redirigir al dashboard
                window.location.href = 'dashboard.html'; 
            } else {
                alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
                usernameInput.focus(); // Enfocar el campo de usuario para reintentar
            }
        });
    }
});