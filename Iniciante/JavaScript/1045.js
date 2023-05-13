var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(' ');
line.sort((a, b) => b - a);

var a = parseFloat(line[0]);
var b = parseFloat(line[1]);
var c = parseFloat(line[2]);

var a2 = Math.pow(a,2);
var bc = Math.pow(b,2) + Math.pow(c, 2);

if(a >= b + c)
console.log('NAO FORMA TRIANGULO');
else {
    if(a2 === bc){
        console.log('TRIANGULO RETANGULO');
    }
    if (a2 > bc){
        console.log('TRIANGULO OBTUSANGULO');
        }
    if (a2 < bc){
        console.log('TRIANGULO ACUTANGULO');
    }
    if (a === b && b === c){
        console.log('TRIANGULO EQUILATERO');
    } else
    if (a === b || a === c || b === c){
        console.log('TRIANGULO ISOSCELES');
    }
}