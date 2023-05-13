var input = require('fs').readFileSync('/dev/stdin', 'utf-8'); //adicionar uma barra antes do 'dev' para funcionar
var numbers = input.split('\n').map(n => parseFloat(n));

var contPositivos = 0;
var soma = 0;
numbers.map(n => {
    if(n > -1){
        contPositivos++;
        soma += n;
    }
});

console.log(`${contPositivos} valores positivos`);
console.log((soma / contPositivos).toFixed(1));