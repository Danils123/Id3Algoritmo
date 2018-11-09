define(["datos", "clases"], (ejemplos) => {
    let arbol = {};

    ///////////////////////////////////////
    ///       Seccion de variables      ///
    ///////////////////////////////////////

    // Estos atributos se obtienen del set de datos llamado ejemplos
    let listaAtributos = [];

    // Estos valores de cada atributo se obtienen del set de datos llamado ejemplos
    let valoresAtributos = [];

    let raiz = null;

    const claseNombre = 'play';
    // Esta variable sirve para determinar los valores binarios de la clase, en la posicion 0 se indicara cual es el negativo y en la posicion 1 se indicara el positivo
    const valoresClases = ["No", "Si"];
    let autoIncremental = 0;


    // Permite obtener los atributos de un conjunto de datos
    let iniciarAtributos = (ejemplos) => {
        listaAtributos = Object.keys(new Dato());
        iniciarValoresAtributos(ejemplos, listaAtributos);
    };

    // Permite inicializar la variable valoresAtributos con datos del set de datos ejemplos
    let iniciarValoresAtributos = (ejemplos, listaAtributosList) => {
        listaAtributosList.forEach((value) => {
            let val = new Object;
            val[value] = obtenerValoresAtributo(ejemplos, value);
            valoresAtributos.push(val);
        });
    };

    // Permite obtener una lista en forma de array con los valores no repetidos de un atributo de la lista ejemplos
    let obtenerValoresAtributo = (arr, prop) => {
        let obj = {};
        for (let i = 0, len = arr.length; i < len; i++) {
            if (!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i][prop];
        }
        let newArr = [];
        for (let key in obj) newArr.push(obj[key]);
        return newArr;
    }

    // Es la formula básica para la entropía
    let entropiaBasica = (a, x) => {
        return (a / x) * Math.log2(a / x);
    }

    // Obtiene la entropia de un conjunto de datos, tiene como parametro la cantidad de clases positivas y negativas de los datos
    let entropia = (p, n) => {
        if (n == 0 || p == 0) return 0;
        let resultado = -(entropiaBasica(p, (p + n))) - (entropiaBasica(n, (p + n)));
        resultado = parseFloat(resultado).toFixed(3) * 1;
        return resultado;
    }

    // Permite crear el arbol de decision partiendo de un conjunto de datos
    // Entradas: ejemplosLista es un array con la informacion para clasificar, clase es el atributo de tipo binario que decide (hoja)
    //           los atributos son los futuros nodo de decision
    // Salida:   Nodo este puede ser un nodo de tipo hoja o un nodo de tipo atributo
    let crearArbol = (ejemplosLista, clase, atributos, valores) => {
        debugger;
        let valoresClase = obtenerValoresAtributo(ejemplosLista, clase);
        if (valoresClase.length == 1) {
            autoIncremental++;
            return new Hoja(valoresClase[0], autoIncremental);
        }

        if (atributos.length == 0) {
            let claseDominante = claseMayoritaria(ejemplosLista);
            return new Atributo();
        }

        let gananciaAtributos = obtenerGananciaAtributos(ejemplosLista, valores, atributos);
        let atributoMaximo = atributos[maximaGanancia(gananciaAtributos)];

        autoIncremental++;
        let nodo = new Atributo(atributoMaximo, [], autoIncremental);
        let valoresLista = obtenerValoresAtributo(ejemplosLista, atributoMaximo);

        valoresLista.forEach((valor) => {
            let ejemplosFiltrados = arrayDistincAtributos(ejemplosLista, atributoMaximo, valor);
            let arco = new Arco(valor);
            arco.sigNodo = crearArbol(ejemplosFiltrados, clase, [...eliminarAtributo(atributoMaximo, atributos)], [...eliminarValores(atributoMaximo, valores)]);
            nodo.hijos.push(arco);
        });

        return nodo;
    };

    // Permite eliminar un atributo de la lista enviada de atributos
    let eliminarAtributo = (atributo, atributosLista) => {
        atributosLista.forEach((valor, index) => {
            if (valor == atributo)
                atributosLista.splice(index, 1)
        });
        return atributosLista;
    };

    // Permite eliminar valores de la lista enviada de valores
    let eliminarValores = (atributo, listaValores) => {
        listaValores.forEach((valor, index) => {
            if (valor[atributo] != null)
                listaValores.splice(index, 1);
        });
        return listaValores;
    }

    // Permite obtener la ganancía general de información y devuelve una lista con la ganancía de cada atributo enviado en forma de lista
    let obtenerGananciaAtributos = (ejemplosLista, valores, atributos) => {
        let cantClases = obtenerClasesPorArray(ejemplosLista);
        let entropiaGeneral = entropia(cantClases[0], cantClases[1]);
        let gananciaAtributos = [];
        atributos.forEach((item) => {
            if (item != claseNombre) {
                let entropiaAtributos = [];
                let cantClasesAtributos = [];
                let listaValores = obtenerValoresAtributos(item, valores);
                listaValores.forEach((valor) => {
                    let ejemplosFiltrados = arrayDistincAtributos(ejemplosLista, item, valor);
                    let cantClases = obtenerClasesPorArray(ejemplosFiltrados);
                    cantClasesAtributos.push(cantClases);
                });
                entropiaAtributos = informacion(cantClasesAtributos);
                gananciaAtributos.push(ganancia(entropiaGeneral, entropiaAtributos));
            }
        });
        return gananciaAtributos;
    }

    // Permite obtener los valores de un atributo
    let obtenerValoresAtributos = (atributo, valores) => {
        return Object.values(valores.filter((x) => Object.keys(x)[0] == atributo)[0][atributo]);
    }

    // Dada una lista en forma de array permite determinar cual de los datos es el mayor de todos
    let maximaGanancia = (gananciasAtributos) => {
        return gananciasAtributos.indexOf(Math.max(...gananciasAtributos));
    }

    let suma = (a, b) => a + b;

    // Este metodo permite calcular la cantidad de informacion que provee un atributo
    let informacion = (atributos) => {
        let sumaAtributos = atributos.map((element) => element.reduce(suma)).reduce(suma);
        let resultado = 0;
        atributos.forEach((element) => {
            resultado += (element[0] + element[1]) / sumaAtributos * (parseFloat(entropia(element[0], element[1])).toFixed(3) * 1);
        });
        return parseFloat(resultado).toFixed(3) * 1;
    }

    // Formula para determinar la ganancia de información
    let ganancia = (entropiaGeneral, entropiaAtributos) => entropiaGeneral - entropiaAtributos;

    // Permite obtener filtrar una lista únicamente con los datos relacionados con un atributo especifico
    let arrayDistincAtributos = (ejemplos, atributo, valor) => {
        return ejemplos.filter((value) => value[atributo] === valor);
    };

    // Permite obtener una lista con la cantidad de registros positivos y negativos de una clase en especifico.
    let obtenerClasesPorArray = (ejemplosLista) => {
        let resultadado = [0, 0];
        ejemplosLista.forEach((item) => {
            item[claseNombre] === 'No' ? resultadado[1]++ : resultadado[0]++;
        });
        return resultadado;
    };

    // Permite devolver un array de dos posiciones donde se encuentra el porcentaje de la clase mayoritaria y el nombre de la misma
    let claseMayoritaria = (ejemplos) => {
        let porcentaje = calPorcentaje(ejemplos.filter(ejemplo => ejemplo[claseNombre] == valoresClases[0])) >
            calPorcentaje(ejemplos.filter(ejemplo => ejemplo[claseNombre] == valoresClases[1])) ? [
                calPorcentaje(ejemplos.filter(ejemplo => ejemplo[claseNombre] == valoresClases[0])),
                valoresClases[0]
            ] : [
                calPorcentaje(ejemplos.filter(ejemplo => ejemplo[claseNombre] == valoresClases[1])),
                valoresClases[1]
            ];
        return porcentaje;
    };

    let calPorcentaje = (numero, total) => (numero / total) * 100;

    let predecirRecursivo = (nodo, ejemplo) => {
        if (nodo == null || nodo == undefined) {
            return null;
        }
        if (!(nodo instanceof Hoja)) {
            let attr = nodo.pregunta;
            let valorAtributoEjemplo = ejemplo[attr];
            let ramaSeleccionada;
            nodo.hijos.forEach((rama) => {
                if (rama.valor == valorAtributoEjemplo) {
                    ramaSeleccionada = rama;
                }
            });
            nodo = predecirRecursivo(ramaSeleccionada.sigNodo, ejemplo);
        }

        return nodo;
    };

    arbol.inicializarArbol = () => {
        iniciarAtributos(ejemplos);
        raiz = crearArbol(ejemplos, claseNombre, listaAtributos, valoresAtributos);
        // console.log("Arbol", JSON.stringify(raiz, null, 1));
        console.log(raiz);
    }

    arbol.obtenerClase = () => {
        return [claseNombre, valoresClases];
    }

    arbol.obtenerRaiz = () => {
        return raiz;
    }

    arbol.pronosticar = (ejemplo) => {
        return predecirRecursivo(raiz, ejemplo)['clase'];
    }

    return arbol;
})