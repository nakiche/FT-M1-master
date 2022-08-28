'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length<=1){
  return array;
  }
  else
  { 
  var pivot = [(array[array.length-1])];
  var arrayIzq = [];
  var arrayDer = [];  

  for (var i = 0; i < array.length - 1; i++) {
    if (array[i]<pivot) {
      arrayIzq.push(array[i]);
    }
    else
    {
      arrayDer.push(array[i]);
    }  
  }
  return quickSort(arrayIzq).concat(pivot).concat(quickSort(arrayDer))
 }

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
