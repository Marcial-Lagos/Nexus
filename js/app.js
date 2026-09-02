document.addEventListener('DOMContentLoaded', () => {
    const botonIniciarSesion = document.getElementById('botonIniciarSesion');
    const botonInvitado = document.getElementById('botonInvitado');

    if (botonIniciarSesion) {
        botonIniciarSesion.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'pages/principal.html';
        });
    }

    if (botonInvitado) {
        botonInvitado.addEventListener('click', () => {
            window.location.href = 'pages/principal.html';
        });
    }
});