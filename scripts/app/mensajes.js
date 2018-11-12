define(["id3"], () => {
    let mensaje = {};
    let classAlerts = [
        "alert-primary",
        "alert-secondary",
        "alert-success",
        "alert-danger",
        "alert-info"
    ];

    let classDefault = 'text-center alert';

    let titulos = [
        "Seleccione las condiciones del clima",
        "Seleccione las caracteristicas del auto a comprar"
    ];

    let mensajesTexto = [
        "Se aconseja salir",
        "No se aconseja salir",
        "Compralo, es tu aportunidad",
        "Es la mejor oportunidad de tu vida, Compralo"
    ];

    mensaje.imprimirMensaje = function(msj, tipo) {
        tipo = tipo < classAlerts.length ? tipo : 0;

        let alert = document.getElementById('alertMsj');
        showMessage(mensajesTexto[msj], tipo, alert);
    }

    mensaje.getMensaje = (numero) => {
        numero = numero < mensajesTexto.length ? numero : 0;
        return mensajesTexto[numero];
    }

    mensaje.getTitulo = (numero) => {
        numero = numero < titulos.length ? numero : 0;
        return titulos[numero];
    }

    let showMessage = (msj, tipo, alert) => {
        alert.style.display = 'block';
        alert.innerHTML = msj;
        alert.className = classDefault;
        alert.classList.add(classAlerts[tipo]);
    }

    let hideMessage = (tipo, alert) => {
        alert.style.display = 'none';
        alert.innerHTML = '';
        alert.classList.remove(classAlerts[tipo]);
    }

    return mensaje;

});