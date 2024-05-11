// Debes escribir un programa que encuentre la frecuencia con que aparecen los distintos caracteres (letras y números)
// dentro de una cadena de texto. El resultado se devuelve una matriz de objetos. Cada uno de estos objetos tiene 2 campos:
// carácter (caracter) y número de veces que aparece (veces). La matriz estará ordenada por el campo carácter. No se diferencia 
//entre mayúsculas y minúsculas ni entre vocales acentuadas.

// Ejemplo:

// contarCar("Hoy ya es día 10")

// deberá devolver:

// {car: '0', veces: 1}
// {car: '1', veces: 1}
// {car: 'a', veces: 2}
// {car: 'd', veces: 1}
// {car: 'e', veces: 1}
// {car: 'h', veces: 1}
// {car: 'i', veces: 1}
// {car: 'o', veces: 1}
// {car: 's', veces: 1}
// {car: 'y', veces: 2}


const creaYOrdenaArray = stringAConvertir => {
  //Ordenamiento alfanumérico previo a la construcción de objetos
  let arrayDeChars = stringAConvertir.split('');
  arrayDeChars.sort();
  return arrayDeChars;
}

const frecuenciaCaracter = arrayOrdenado => {
  //Crea una lista
  let chars = [];
  //Y por cada elemento del array de chars
  for (let i=0; i<arrayOrdenado.length;i++)
    {
      //Descarta los espacios porque en el ejemplo estaban descartados (para volver a incluirlos, eliminar este condicional y listo)
      if (arrayOrdenado[i] != " ")
        {
          //crea un objeto con  1) la propiedad  car y le asigno valor del char, y 2) propiedad numérica cant, asigndo 1.
          let newChar = {car : arrayOrdenado[i], veces: 1}
      
          //Luego, si no hay ya un objeto en la lista con la misma propiedad "car", pusheo 
          if (!chars.some(e => e.car === arrayOrdenado[i]))
            {     
              chars.push(newChar);
            }
          //Caso contrario en el elemento en cuestión sumo 1 unidad a pripiedad cant
          else
            {
              let objIndex = chars.findIndex(e => e.car == arrayOrdenado[i]);
              chars[objIndex].veces ++;
            }
        }

    }
    
  return [chars]
}

const contarCar = stringARevisar => {
  let arrayDeChars = creaYOrdenaArray(stringARevisar.toLocaleLowerCase());
  let arrayOrdenado = frecuenciaCaracter(arrayDeChars);
  console.log(arrayOrdenado)
  
}

contarCar("Hoy ya es día 10");



