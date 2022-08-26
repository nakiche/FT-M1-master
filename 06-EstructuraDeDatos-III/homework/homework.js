"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee 
  ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio
  homework.
*/

function BinarySearchTree(value) {
    //this.root = null;
    this.value = value;
    this.left = null;
    this.right = null;
}

 // function Node(val) {
 //     this.data = val;
 //     this.left = null;
 //     this.right = null;
 // }

BinarySearchTree.prototype.size =function () {
  // body...
  if (this.left==null && this.right == null) {return 1};
  if (this.left != null && this.right == null){return 1 + this.left.size()}
  if (this.right != null && this.left == null){return 1 + this.right.size()}
  if (this.right != null && this.left != null){return 1 + this.left.size() + this.right.size()}

}

BinarySearchTree.prototype.insert =function (node) {
  // body...
  
    if(node < this.value)
    {
        // if left is null insert node here
        if(this.left === null)
            this.left = new BinarySearchTree(node);
        else
 
            // if left is not null recur until
            // null is found
            //this.insert(node.left, newNode);
            this.left.insert(node);
    }
 
    // if the data is more than the node
    // data move right of the tree
    else
    {
        // if right is null insert node here
        if(this.right === null)
            this.right = new BinarySearchTree(node);
        else
 
            // if right is not null recur until
            // null is found
            this.right.insert(node);
    }
}

BinarySearchTree.prototype.contains =function (data) {
  // body...
   if (this.value == data){return true;}

   if (data > this.value)
   {
    if (this.right == null){return false}
    return this.right.contains(data)
   }
   else 
   {
    if (this.left == null){return false}
    return this.left.contains(data)
   }  
}

BinarySearchTree.prototype.depthFirstForEach =function (cb,argument) {
  // body...
  if (argument == 'pre-order') //root - izq - der
  {
    cb(this.value);
    if(this.left != null){this.left.depthFirstForEach(cb,argument)}
    if(this.right != null){this.right.depthFirstForEach(cb,argument)}
  }
  else if (argument == 'post-order') // izq - der - root
  {
    if(this.left != null){this.left.depthFirstForEach(cb,argument)}
    if(this.right != null){this.right.depthFirstForEach(cb,argument)}
    cb(this.value);  
  }
  else //in order izq - root - der  
  {
   if(this.left != null){this.left.depthFirstForEach(cb,argument)}
    cb(this.value);
    if(this.right != null){this.right.depthFirstForEach(cb,argument)}
  }

}

var array =[];
BinarySearchTree.prototype.breadthFirstForEach =function (cb,array =[]) {
  // body...
  if (this.left != null){array.push(this.left)}
  if (this.right != null){array.push(this.right)}
  cb(this.value);

  if(array.length>0){
    array.shift().breadthFirstForEach(cb,array)
  }  
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
