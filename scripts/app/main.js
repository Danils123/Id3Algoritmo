define([''], () => {
    let iniciar = {}
    let boton = document.getElementById('btnPredecir');

    let obtenerDatos = () => {
        let datos = [];
        require(['id3'], (arbol) => {
            (arbol.obtenerAtributos()).forEach(atributo => {
                if (atributo != arbol.obtenerClase()[0]) {
                    let id = `sl-${atributo}`;
                    console.log(id);
                    let dato = document.getElementById(id).value;
                    datos.push(dato);
                }
            });
        });
        return datos;
    }

    let inicializarArbol = () => {
        require(['id3', 'dibujarArbol', 'form'], function(arbol, dibujo, form) {
            arbol.inicializarArbol();
            form.pintarForm();
            dibujo.pintarArbol();
        })
    };

    let predecir = () => {
        let datos = obtenerDatos();
        require(['mensajes', 'id3', 'config'], function(mensaje, arbol, config) {
            arbol.pronosticar(new Dato(...datos)) == arbol.obtenerClase()[1][1] ?
                mensaje.imprimirMensaje(config['msjPositivo'], 2) : mensaje.imprimirMensaje(config['msjNegativo'], 3);
        });
    }

    iniciar.onReady = () => {
        boton.addEventListener('click', predecir)
        inicializarArbol();
    }
    return iniciar;

});