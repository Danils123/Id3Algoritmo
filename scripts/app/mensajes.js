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

    let mensajesTexto = [
        "Se aconseja salir",
        "No se aconseja salir"
    ];

    mensaje.imprimirMensaje = function(msj, tipo) {
        tipo = tipo < classAlerts.length ? tipo : 0;
        msj = msj < mensajesTexto.length ? msj : 0;

        let alert = document.getElementById('alertMsj');
        showMessage(mensajesTexto[msj], tipo, alert);
        // setTimeout(() => {
        //     hideMessage(tipo, alert);
        // }, 5000);
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