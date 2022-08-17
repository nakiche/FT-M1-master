
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

Ans: Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.
```javascript
x = 1;
var a = 5;
var b = 10;
//               8  9  10
var c = function(a, b, c) {
  var x = 10; //x = 10
  console.log(x); //10
  console.log(a); //8
  //               8  9 10  
  var f = function(a, b, c) {
    b = a; // b = 8
    console.log(b);
    b = c; //b= 10
    var x = 5; // x = 5
  }
  f(a,b,c);
  console.log(b); //9 del contexto de la función c
}
c(8,9,10);
console.log(b);
console.log(x);
```
<!-- output
10
8
8
9
10
1 -->


```javascript
console.log(bar); // undefined
console.log(baz); //error
foo(); // Hola!
function foo() { 
   console.log('Hola!'); 
}
var bar = 1; //bar = 1
baz = 2; // ReferenceError: baz is not defined
```

```javascript
var instructor = "Tony"; // instructor = "Tony";
if(true) {
    var instructor = "Franco"; //var tiene alcance global por lo que remplaza la global
}
console.log(instructor); //"Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); //"Tony"
(function() {
   if(true) {
      var instructor = "Franco"; 
      console.log(instructor); //"Franco" solo dentro de la función
   }
})();
console.log(instructor); //"Tony"
```

```javascript
var instructor = "Tony"; //instructor = "Tony"
let pm = "Franco"; //pm = "Franco"
if (true) {
    var instructor = "The Flash"; //instructor = "The Flash"
    let pm = "Reverse Flash"; //pm = "Reverse Flash" --> contexto de bloque
    console.log(instructor); //The Flash
    console.log(pm); //Reverse Flash
}
console.log(instructor); //The Flash
console.log(pm); //Franco

```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 // 2
"4px" - 2 //NaN
7 / 0 // infinity
{}[0] //Array [ 0 ]
parseInt("09") //9  parsea el valor y retorna un entero
5 && 2 //2 devuelve el último verdadero --> según el valor de verdad
2 && 5 //5 devuelve el último verdadero
5 || 0 //5 devuelve el primer verdadero
0 || 5 //5 devuelve el primer verdadero
[3]+[3]-[10] //23 suma los dos strings y resta 33 - [10]= 23
3>2>1 //false true > 1 = false
[] == ![] //true porque son array 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:
a no está definida a momento de consologuearla

Rpta: foo es una función que devuelve 2, al consologuearla muestra 2
```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

// output
// undefined
// 2

```

Y el de este código? :

rpta: devuelve undefined ya que intenta devolver la variable "snack" del contexto de la fución getFood la cual no tiene valor establecido

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // undefined --> snack no está definida en el contexto de la función
```
### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa --> esta devolviendo el fullname de la prop del objeto

var test = obj.prop.getFullname; 

console.log(test()); //Cannot read property 'fullname' of undefined, no estamos llamando al metodo getFullname con sus parentesis, deberia ser "var test = obj.prop.getFullname()" y el console.log(test)
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000); //no se muestra, no ha sido invocada
   setTimeout(function() { console.log(3); }, 0); //no se muestra, no ha sido invocada
   console.log(4);
}

printing();
```
<!-- 
output

1
4
 -->