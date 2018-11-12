class Nodo {
    constructor(id = 1, hijos = null) {
        this.id = id;
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
    constructor(clase, autoIncremental = 1) {
        super(autoIncremental);
        this.clase = clase;
    }
}

class Atributo extends Nodo {
    constructor(pregunta, valores = [], autoIncremental = 1) {
        super(autoIncremental, valores);
        this.pregunta = pregunta;
    }
}

// Si necesita cambiar los datos y estoy tienen otros atributos es necesario que cambie aca los atributos

// constructor(Cielo, Temperatura, Humedad, Viento, play = '') {
//     this.Cielo = Cielo;
//     this.Temperatura = Temperatura;
//     this.Humedad = Humedad;
//     this.Viento = Viento;
//     this.play = play;
// }

class Dato {
    constructor(buying, maint, doors, persons, lug_boot, safety, quality = '') {
        this.buying = buying;
        this.maint = maint;
        this.doors = doors;
        this.persons = persons;
        this.lug_boot = lug_boot;
        this.safety = safety;
        this.quality = quality;
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