'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  var array = [1];
  var i = 2;

  while(num != 1){
    if (num%i==0)
    {
      array.push(i)
      num = num / i;
    }
    else
    {
      i++;
    }

  }

  return array;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

   
 var intercambio = false;
  
  while (intercambio==false){ 
  intercambio =true;
  //for(let i =0; i < array.length; i++){    
     
    for(let j = 0; j < array.length; j++){
        if(array[j] > array[j + 1]){
          var temp = array[j]
          array[j] = array[j+1];
          array[j+1] = temp;
          intercambio = false;
        }
    }
     
    // si los elementos no se movieron en el loop interno salgo del ciclo   
    //if(!intercambio){
    //  break;
    //}
  }

 return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
   
   let i,j,key;

    for (i = 1; i < array.length; i++) 
    {  
        key = array[i];  
        j = i - 1;  
    
        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && array[j] > key) 
        {  
            array[j + 1] = array[j];  
            j = j - 1;  
        }  
        array[j + 1] = key;  
    }  
  
return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
    let i,j,lowest
    for ( i = 0; i < array.length; i++) {
      lowest = i
      for ( j = i + 1; j < array.length; j++) {
        if (array[j] < array[lowest]) {
        lowest = j
        }
      }
      if (lowest !== i) {
      // Swap
      ;[array[i], array[lowest]] = [array[lowest], array[i]]
      }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
