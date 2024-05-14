/*
  Dado un array de números enteros positivos, donde cada uno
  representa unidades de bloques apilados, debemos calcular cuantas unidades
  de agua quedarán atrapadas entre ellos.

  - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].

  💧💧💧🪣💧💧
  💧💧💧🪣💧💧
  🪣💧💧🪣💧💧
  🪣💧🪣🪣💧🪣
  🪣💧🪣🪣💧🪣
  🪣💧🪣🪣🪣🪣

  Representando bloque con 🪣︎ y agua con 💧, quedarán atrapadas 7 unidades
  de agua. Suponemos que existe un suelo impermeable en la parte inferior
  que retiene el agua.
 */

  /* Propuesta: usando los numeros como imaginarias columnas, crear un edificio de filas binario
  por cada linea si el valor es mayor que cero poner un 1, sino un cero
  luego restar una unidad a cada valor y pasar a la siguiente fia
  finalmente calcular cuantos elementos en cada fila cumplen con la condicion de
  a= ser un 0 b= tener un 1 a a izq y c = tener un 1 a la derecha*/

  let arrayDeBloquesVertical = [4, 0, 3, 6, 1, 3];
  let aguas = 0;

  const cantidadDeFilas = Math.max(...arrayDeBloquesVertical); //6
  const anchoDeFilas = arrayDeBloquesVertical.length //6

  /* Por cada columna (o total de elementos del array original) va a crear una fila
  la fila entra por delante en un array
  para presentación (no cumple otro rol) transforma ese array en un string, le saca las comas, lo imprime */

  function crearFilas() {
    let iteracion = 0;
    let filas = [];
    for (i = 0; i<cantidadDeFilas; i++){
      filas.unshift(crearColumna(iteracion));
      iteracion ++;
    }    
    let imagenBonita = filas.join("\n ");
    let imagenMasBonita = imagenBonita.replace(/,/g, " ").replace(/1/g, "■").replace(/0/g, "□");
    console.log("\n\n "+imagenMasBonita);

    let mensaje = `\nQuedan ${aguas} bloques de agua atrapados`
    
    return mensaje
  }

  /* toma el array de números original para crear una fila "binaria" según haya ceros o no
     para esto construye un array al que le disminuye cada dígito según el Nº de iteración
     en que se encuentre.  */ 
  function crearColumna(numIteracion) {
    let filaIteracion = arrayDeBloquesVertical;
    let filaDisminuida = filaIteracion.map(v => v-numIteracion)
    let fila = [];

    filaDisminuida.forEach((digito) => {
      if (digito > 0) {
        fila.push(1)
      } else {
        fila.push(0)
      }
    });
    
    /* en el siguiente paso se van a producir una serie de dificultades porque find() siempre encuentra
      el primer elemento que cumpla condición. lo resolví todo con una variable externa a los ceros y unos
      que aumente en cada iteración y me devuelva el verdadero indexOf de cada elemento que estoy investigando
      esa variable es "indexes"*/

    indexes = 0;

    /*busco las "paredes"*/
    let primerBloque = fila.indexOf(fila.find((digito) => digito == "1"))
    let ultimoBloque = fila.map(digito => 
      digito > 0).lastIndexOf(true);

    /*y luego por cada dígito en la fila*/
    fila.forEach((digito) => {
        //si es 0
        digito === 0
        /*Y está contenido entre las "paredes"
          (aquí tuve que usar indexes por lo expresado arriba */
        ? indexes > primerBloque && indexes < (ultimoBloque)
        /* Sumo un bloque de agua */
        ? (aguas++)
        : null // es cero pero no hay unos a izquierda o derecha 
        : null // no es 0      
        indexes ++;
      },
    )
    return fila;
  } 

const waterBlocks = value => {
    mensaje = crearFilas();
    console.log(mensaje)
  return
}

waterBlocks();