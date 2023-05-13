var input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n');

var cont_pares = 0;
var cont_impares = 0;
var cont_positivos = 0;
var cont_negativos = 0;

for(var i = 0; i < 5; i++){
    var elem = parseInt(input.shift());
    if(elem % 2 === 0) cont_pares++;
    else cont_impares++;
    if(elem > 0) cont_positivos++;
    else if(elem < 0) cont_negativos++; 
}

console.log(cont_pares + ' valor(es) par(es)');
console.log(cont_impares + ' valor(es) impar(es)');
console.log(cont_positivos + ' valor(es) positivo(s)');
console.log(cont_negativos + ' valor(es) negativo(s)');