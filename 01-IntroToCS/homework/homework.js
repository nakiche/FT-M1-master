'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var array = num.split("").reverse().join("");
var sumador = 0;

for (let i=0 ; i < array.length; i++)
  {
    sumador += (array[i] * (Math.pow(2,i)));;
  }
return sumador;
}

function DecimalABinario(num) {
  var arreglo = [];
  
  while (num > 0) 
  {
     arreglo.push(num % 2);     
     num = Math.floor(num / 2);
  }
  
  return arreglo.reverse().join("");
  
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}

