'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1){
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

if (array.length <= 1){
  return array;
}
else
{ 
  var mitad = Math.floor(array.length/2);
  var izq = array.slice(0,mitad);
  var der = array.slice(mitad,array.length) //tamben puede ser solo slice(mitad)
}

return mover(mergeSort(izq),mergeSort(der));

}

function mover(izq,der){
  var indiceIzq = 0;
  var indiceDer = 0;
  var nuevoArray = [];

while(indiceIzq < izq.length && indiceDer < der.length){
  if(izq[indiceIzq]<der[indiceDer]){
    nuevoArray.push(izq[indiceIzq]);
    indiceIzq++;
  }
  else
  {
    nuevoArray.push(der[indiceDer]);
    indiceDer++
  } 
}

  return nuevoArray.concat(izq.slice(indiceIzq)).concat(der.slice(indiceDer))
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
