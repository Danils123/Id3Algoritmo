"use strict"

requirejs.config({
    baseUrl: "./",
    paths: {
        "main": "scripts/app/main",
        "clases": "scripts/app/clases",
        "datos": "scripts/app/datos",
        "id3": "scripts/app/id3",
        "vis": "scripts/lib/vis.min",
        "dibujarArbol": "scripts/app/dibujarArbol",
        "form": "scripts/app/dibujarForm",
        "mensajes": "scripts/app/mensajes",
        "config": "scripts/app/config",
        "data": "scripts/app/data/datos3",
        "jquery": "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        "popper": "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        "bootstrap": "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    },
    shim: {
        "bootstrap": ['jquery', 'popperjs']
            // backbone: {
            //     deps: ['jquery', 'underscore'],
            //     exports: 'Backbone'
            // },
            // underscore: {
            //     exports: '_'
            // }
    }
});
require(["main"], function(iniciar) {

    iniciar.onReady();
});