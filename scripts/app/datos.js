define(["clases"], () => {
    // Set de datos, para el aprendizaje supervisado.
    let ejemplos = [
        new Dato('Soleado', 'Caliente', 'Alta', 'Débil', 'No'),
        new Dato('Soleado', 'Caliente', 'Alta', 'Fuerte', 'No'),
        new Dato('Nublado', 'Caliente', 'Alta', 'Débil', 'Si'),
        new Dato('Lluvioso', 'Templado', 'Normal', 'Débil', 'Si'),
        new Dato('Lluvioso', 'Frío', 'Normal', 'Débil', 'Si'),
        new Dato('Lluvioso', 'Frío', 'Normal', 'Fuerte', 'No'),
        new Dato('Nublado', 'Frío', 'Normal', 'Fuerte', 'Si'),
        new Dato('Soleado', 'Templado', 'Alta', 'Débil', 'No'),
        new Dato('Soleado', 'Frío', 'Normal', 'Débil', 'Si'),
        new Dato('Lluvioso', 'Templado', 'Normal', 'Débil', 'Si'),
        new Dato('Soleado', 'Templado', 'Normal', 'Fuerte', 'Si'),
        new Dato('Nublado', 'Templado', 'Alta', 'Fuerte', 'Si'),
        new Dato('Nublado', 'Caliente', 'Normal', 'Débil', 'Si'),
        new Dato('Lluvioso', 'Templado', 'Alta', 'Fuerte', 'No')
    ];
    return ejemplos;
})