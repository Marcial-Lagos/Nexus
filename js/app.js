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

 /*
       BÚSQUEDA Y FILTRO DE TRANSMISIONES
    */
    const busquedaTransmisiones = document.getElementById('busquedaTransmisiones');

    if (busquedaTransmisiones) {
        const tarjetas = [...document.querySelectorAll('.tarjeta-transmision')];
        const busquedaVacia = document.getElementById('busquedaVacia');

        busquedaTransmisiones.addEventListener('input', () => {
            const textoBusqueda = busquedaTransmisiones.value.toLowerCase().trim();
            let cantidadVisibles = 0;

            tarjetas.forEach((tarjeta) => {
                const coincide = tarjeta.dataset.busqueda.includes(textoBusqueda);
                tarjeta.style.display = coincide ? '' : 'none';

                if (coincide) {
                    cantidadVisibles++;
                }
            });

            if (busquedaVacia) {
                busquedaVacia.style.display = cantidadVisibles ? 'none' : 'block';
            }
        });
    }

    /* 
       CHAT DE LA COMUNIDAD
    */
    const formularioMensaje = document.getElementById('formularioMensaje');

    if (formularioMensaje) {
        formularioMensaje.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const entradaMensaje = document.getElementById('entradaMensaje');
            const textoMensaje = entradaMensaje.value.trim();

            if (!textoMensaje) {
                return;
            }

            const articuloMensaje = document.createElement('article');
            articuloMensaje.className = 'mensaje mensaje-nuevo';
            articuloMensaje.innerHTML = `
                <span class="avatar avatar-verde">ML</span>
                <div>
                    <p class="metadatos-mensaje"><strong>Marcial</strong><time>Ahora</time></p>
                    <p></p>
                </div>
            `;

            articuloMensaje.querySelector('div > p:last-child').textContent = textoMensaje;
            document.getElementById('listaMensajes').appendChild(articuloMensaje);
            entradaMensaje.value = '';
            articuloMensaje.scrollIntoView({ behavior: 'smooth', block: 'end' });
        });
    }

    /*
       CHAT DE LA TRANSMISIÓN EN VIVO
    */
    const formularioChatEnVivo = document.getElementById('formularioChatEnVivo');

    if (formularioChatEnVivo) {
        formularioChatEnVivo.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const entradaChatEnVivo = document.getElementById('entradaChatEnVivo');
            const textoMensaje = entradaChatEnVivo.value.trim();

            if (!textoMensaje) {
                return;
            }

            const parrafoMensaje = document.createElement('p');
            const nombreUsuario = document.createElement('strong');
            nombreUsuario.className = 'nombre-verde';
            nombreUsuario.textContent = 'Marcial: ';

            parrafoMensaje.appendChild(nombreUsuario);
            parrafoMensaje.append(document.createTextNode(textoMensaje));

            const listaChatEnVivo = document.getElementById('listaChatEnVivo');
            listaChatEnVivo.appendChild(parrafoMensaje);
            entradaChatEnVivo.value = '';
            listaChatEnVivo.scrollTop = listaChatEnVivo.scrollHeight;
        });
    }

    /*
       BOTÓN SEGUIR / DEJAR DE SEGUIR
    */
    const botonSeguir = document.getElementById('botonSeguir');

    if (botonSeguir) {
        botonSeguir.addEventListener('click', () => {
            const estaSiguiendo = botonSeguir.classList.toggle('siguiendo');
            botonSeguir.textContent = estaSiguiendo ? '✓ Siguiendo' : '♡ Seguir';
        });
    }

    /*
       EDICIÓN DEL PERFIL
    */
    const dialogoPerfil = document.getElementById('dialogoPerfil');
    const botonEditarPerfil = document.getElementById('botonEditarPerfil');
    const botonGuardarPerfil = document.getElementById('botonGuardarPerfil');

    if (dialogoPerfil && botonEditarPerfil) {
        botonEditarPerfil.addEventListener('click', () => {
            dialogoPerfil.showModal();
        });
    }

    if (dialogoPerfil && botonGuardarPerfil) {
        botonGuardarPerfil.addEventListener('click', (evento) => {
            evento.preventDefault();

            const nuevoNombre = document.getElementById('editarNombre').value.trim() || 'Marcial';
            const nuevaBiografia = document.getElementById('editarBiografia').value.trim();

            document.querySelector('.identidad-perfil h1').textContent = nuevoNombre;
            document.getElementById('biografiaPerfil').textContent = nuevaBiografia;
            dialogoPerfil.close();
        });
    }

    /*
       MENÚ LATERAL RESPONSIVE
    */
    const menuMovil = document.getElementById('menuMovil');

    if (menuMovil) {
        menuMovil.addEventListener('click', () => {
            document.querySelector('.navegacion-lateral')?.classList.toggle('abierto');
        });
    }

