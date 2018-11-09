define(['id3', 'clases'], function(arbol) {
    let dibujo = {};
    // let contador = 1;
    let obtenerArbolRecursivo = (nodo, arcosNodos) => {
        if (!(nodo instanceof Hoja)) {
            arcosNodos[1].push({
                id: nodo.id,
                label: nodo.pregunta
            });
            nodo.hijos.forEach((rama) => {
                arcosNodos[0].push({
                    from: nodo.id,
                    to: rama.sigNodo.id,
                    label: rama.valor
                });
                arcosNodos = obtenerArbolRecursivo(rama.sigNodo, arcosNodos);
            });
        } else {
            arcosNodos[1].push({
                id: nodo.id,
                label: nodo.clase
            });
        }
        return arcosNodos;
    }
    dibujo.pintarArbol = () => {
        let arcosNodos = [
            [],
            []
        ];
        let network = null;
        var layoutMethod = "directed";
        arcosNodos = obtenerArbolRecursivo(arbol.obtenerRaiz(), arcosNodos);
        console.log(arcosNodos);
        var container = document.getElementById('mynetwork');
        var data = {
            nodes: arcosNodos[1],
            edges: arcosNodos[0]
        };

        var options = {
            layout: {
                hierarchical: {
                    sortMethod: layoutMethod
                }
            },
            edges: {
                smooth: true,
                arrows: {
                    to: true
                }
            }
        };
        network = new vis.Network(container, data, options);
    }
    return dibujo;
});