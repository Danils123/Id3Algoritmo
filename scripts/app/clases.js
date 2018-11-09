class Nodo {
    constructor(hijos = null) {
        this.hijos = hijos;
    }
    agregarHijo(nodo) {
        this.hijos.push(nodo);
    }
}

class Arco {
    constructor(valor) {
        this.valor = valor;
        this.sigNodo = null;
    }
}

class Hoja extends Nodo {
    constructor(clase) {
        super();
        this.clase = clase;
    }
}

class Atributo extends Nodo {
    constructor(pregunta, valores = []) {
        super(valores);
        this.pregunta = pregunta;
    }
}


class Dato {
    constructor(Cielo, Temperatura, Humedad, Viento, play = '') {
        this.Cielo = Cielo;
        this.Temperatura = Temperatura;
        this.Humedad = Humedad;
        this.Viento = Viento;
        this.play = play;
    }
}

define(() => {
    return {
        Nodo,
        Arco,
        Hoja,
        Dato,
        Atributo
    }
})