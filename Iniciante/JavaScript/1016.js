var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var d = parseFloat(lines.shift());
var x = 60;
var y = 90;
var tempo = (60 * d)/30;

console.log(tempo+" minutos");