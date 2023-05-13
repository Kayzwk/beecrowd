var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arrayLines = input.split('\n');

var linha1 = arrayLines.shift();
var linha2 = arrayLines.shift();
var arrayLinha1 = linha1.split(' ');
var arrayLinha2 = linha2.split(' ');

var cod1 = arrayLinha1.shift();
var und1 = parseInt(arrayLinha1.shift());
var val1 = parseFloat(arrayLinha1.shift());

var cod2 = arrayLinha2.shift();
var und2 = parseInt(arrayLinha2.shift());
var val2 = parseFloat(arrayLinha2.shift());

var valorTotal = (und1 * val1) + (und2 * val2);

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);