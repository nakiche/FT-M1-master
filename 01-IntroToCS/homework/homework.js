'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var separarCadena = num.split("").reverse().join("");
//var invertirArreglo = separarCadena.reverse(); 
//var unirArreglo = invertirArreglo.join("");

var valor = 0;
var sumador = 0;
for (let i=0 ; i < separarCadena.length; i++)
  {
    sumador += (separarCadena[i] * (Math.pow(2,i)));;
  }
return sumador;
}

function DecimalABinario(num) {
  // tu codigo aca  
  var resto = 0;
  var resultado = num;
  var c = 0;
  var arreglo = [];
  
  while (resultado > 0) 
  {
     if (c > 0) {resto=resultado % 2;}
     
     resultado= Math.floor(resultado/2);
 
     if (c < 1)
     {
       resto = num % 2;
       c++;
     }         

     arreglo.push(resto);
  }

  return arreglo.reverse().join("");
  //var unirArreglo = invertirArreglo.join("");
  //return invertirArreglo;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}