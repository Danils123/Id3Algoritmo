define(['id3', 'config', 'mensajes'], (arbol, config, mensajes) => {
    let form = {};
    let contenedorForms = 'formId3';
    let contenedorTitulo = 'titleId3';

    form.pintarForm = () => {
        let atributosValores = arbol.obtenerAtributosValores();
        arbol.iniciarAtributos();
        let formObj = document.getElementById(contenedorForms);
        let titleObj = document.getElementById(contenedorTitulo);
        let data = `<div class="row">`;
        console.log(atributosValores);
        for (let i = 0; i < atributosValores[0].length; i++) {
            const element = atributosValores[0][i];
            if (element == arbol.obtenerClase()[0]) {
                data += `</div>`;
                break;
            }
            if (i % 2 == 0) {
                data += `</div>
                     <div class="row">`;
            }

            data += `<div class="col-md-6">
                        <div class="form-group">`;

            data += `<label for="basic-url">${element}</label>
                     <select class="custom-select" id="sl-${element}">`;
            console.log('atributo', element);
            let valores = Object.values(atributosValores[1][i])[0];
            console.log('valores', valores);
            valores.forEach((valor) => {
                data += `<option value="${valor}">${valor}</option>`;
            });
            data += `</select>
                   </div> </div>`;
        }
        formObj.innerHTML = data;
        titleObj.textContent = mensajes.getTitulo(config['titulo']);
    }

    return form;
});