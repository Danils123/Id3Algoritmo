# Árbol de decisión Id3

**¿Qué es un árbol de decisión?**

Es un modelo de predicción utilizado en diversos ámbitos que van desde la inteligencia artificial hasta la Economía. En nuestro caso lo utilizaremos como uno de los artefactos de la minería de datos. Tomar en cuenta que para árboles de decisión no solo existe el Id3 tambien existen las siguientes mejoras al mismo:

- [C4.5](https://es.wikipedia.org/wiki/C4.5): se usa el Índice de Gini
- [Random Forest](https://es.wikipedia.org/wiki/Random_forest): es árbol de árboles

**¿Qué es el Id3** 
Una una implementanción de un árbol de decisión en donde para determinar que cáracteristica útilizar se decide por un función de Entropía y ganancía de información. Cabe recalcar que todo árbol de decisión tiene un set de datos el cual nos provee la información para construir el árbol.

Los conceptos que debemos tener claros son:
- Nodo decisión o carácteristica: Es un nodo que con va a contener 1 o más arcos. Por ejemplo: cielo, viento.
- Nodo Hoja o clase: Esto es un dato binario donde se permite saber la decisión final. Por ejemplo: Soleado, Nublado, Lluvioso
- Arco o valor: posibles valores de un nodo decisión. Por ejemplo: No, Sí.
- [Entropía](https://es.wikipedia.org/wiki/Entrop%C3%ADa_(informaci%C3%B3n)): Es un concepto equivalente a la incertidumble.
- Ganancía de la información: Medida de discriminación.

Esta implementación del algoritmo id3 es para la predicción de datos del clima, donde se le aconseja salir o no a un jugador de golf. La cantidad de datos.
