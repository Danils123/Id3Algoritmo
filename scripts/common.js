"use strict"

requirejs.config({
    baseUrl: "./",
    paths: {
        "main": "scripts/app/main",
        "clases": "scripts/app/clases",
        "datos": "scripts/app/datos",
        "id3": "scripts/app/id3",
        "mensajes": "scripts/app/mensajes",
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
    // $('[data-to"bootstrap"ggle="tooltip"]').tooltip();
    iniciar.onReady();
});