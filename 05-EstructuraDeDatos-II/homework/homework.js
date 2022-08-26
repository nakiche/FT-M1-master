"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro 
  puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; 
  en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, 
  busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._length = 0;
  this.head = null;
}

LinkedList.prototype.add = function(data){
  // body...
  var node = new Node(data),
  current = this.head;
  // Si está vacia
  if (!current) {
    this.head = node;
    this._length++;
    return node;
  }
  // Si no esta vacia, recorro hasta encontrar el último
  while (current.next) { //current =! null
    current = current.next;
  }
  current.next = node;
  this._length++;
  return node;
}

LinkedList.prototype.remove = function() {
  // body...
  var current = this.head //empezamos en la cabeza
  if(!current){
  console.log('La lista esta vacia!')
  return
  }

  var fisrtLast = new Node();
  fisrtLast = this.head;
  
  if(this.head.next == null) {
      this.head = null;
      this._length--;
      return fisrtLast.value
  } 
  else
  { 
  var secondLast = new Node();
  secondLast = this.head;
  
  while (secondLast.next.next != null) {
    var secondLast= secondLast.next;
  }
  //console.log(secondLast.value);
  var lastNode = new Node();
  lastNode = secondLast.next;
  //console.log(lastNode.value);
  secondLast.next = null;
  this._length--;
  return lastNode.value;
 }
}

LinkedList.prototype.search = function(data) {
  // body...
  
  var current = this.head //empezamos en la cabeza

  if(!current){
  console.log('La lista esta vacia!')
  return
  }
  while(current){
  if (current.value == data)
  {
    return current.value
  }
  else if (typeof data === 'function') 
  {
    if (data(current.value)) 
    {
      return current.value;
    }
  }
  current = current.next;
  } 
  return null;

}
function Node(value) {
  this.value = value;
  this.next  = null;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; 
es decir, posiciones posibles para almacenar la información), donde guardaremos datos 
en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar 
un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, 
  suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) 
  y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina 
  la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando 
  al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto 
  de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con 
  esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, 
con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, 
invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico 
(determinado al hashear la clave)
*/

function HashTable() {
  this.table = new Array(35);
  this.numBuckets = 35;
  this.size = 0;
}

HashTable.prototype.hash =function (argument) {
  // body...
    var n = 0;
    for (let i=0;i<argument.length;i++)
    {
      var n = n +  (argument.charCodeAt(i));
    }
 return n % 35;
}

HashTable.prototype.set = function (key,value) {
  // body...
  if (typeof key != 'string') {
    throw new TypeError('Keys must be strings');
    //return ();    
    }
  var index = this.hash(key);
  var myObj = new Object();
 
 //console.log (this.table[index])
 if (this.table[index])
 {
  //console.log (this.table[index].key)
  //console.log (key)
  for (let i = 0; i < this.table[index].length; i++) {
    
    if (this.table[index][i].key == key) 
    { 
      //this.table[index] = [];
      this.table[index][i].value = value; 
      return
    }
  }  
 
  this.table[index].push(myObj = {key:key,value:value})
 }  
 else
 {
  this.table[index] = []
  this.table[index].push(myObj = {key:key,value:value}) 
  //this.table[index] =  myObj = {key:key,value:value}    
 }
  this.size ++;
  //this.table[index] =  myObj = {key:key,value:value}
}

HashTable.prototype.get = function (key) {
  // body...
  var index = this.hash(key);
  //return this.table[index][1];
  //return this.table[index].value;
  for (let i = 0; i < this.table[index].length; i++) {
    
    if (this.table[index][i].key == key) 
    { 
      //this.table[index] = [];
      return this.table[index][i].value; 
      
    }
  }  
}

HashTable.prototype.hasKey = function (key) {
  // body...
  var index = this.hash(key);  
  for (let i = 0; i < this.table[index].length; i++) {
    if (this.table[index][i].key == key) 
    { 
      //this.table[index] = [];
      return true; 
      
    }
  }
  //if (this.table[index].key == key) {return true}
  //if (this.table[index].hasOwnProperty(key)) {return true}
  return false;  
}
// No modifiquen nada debajo de esta linea
// --------------------------------


module.exports = {
  Node,
  LinkedList,
  HashTable,
};
