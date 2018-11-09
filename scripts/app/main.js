define([''], () => {
    let iniciar = {}
    let boton = document.getElementById('btnPredecir');

    let obtenerDatos = () => {
        let datos = [];

        datos.push(document.getElementById('slCielo').value);
        datos.push(document.getElementById('slTemp').value);
        datos.push(document.getElementById('slHumedad').value);
        datos.push(document.getElementById('slViento').value);
        return datos;
    }

    let inicializarArbol = () => {
        require(['id3', 'dibujarArbol'], function(arbol, dibujo) {
            arbol.inicializarArbol();
            dibujo.pintarArbol();
        })
    };

    let predecir = () => {
        let datos = obtenerDatos();
        require(['mensajes', 'id3'], function(mensaje, arbol) {
            arbol.pronosticar(new Dato(datos[0], datos[1], datos[2], datos[3])) == arbol.obtenerClase()[1][1] ?
                mensaje.imprimirMensaje(0, 2) : mensaje.imprimirMensaje(1, 3);
        });
    }

    iniciar.onReady = () => {
        boton.addEventListener('click', predecir)
        inicializarArbol();
    }
    return iniciar;

});