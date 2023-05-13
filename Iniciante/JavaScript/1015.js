var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X1= lines.shift().split(' ');
var X2= lines.shift().split(' ');
var x1 = parseFloat(X1[0]);
var y1 = parseFloat(X1[1]);
var x2 = parseFloat(X2[0]);
var y2 = parseFloat(X2[1]);
var X = Math.pow(x2-x1, 2);
var Y = Math.pow(y2-y1, 2);
var raiz = Math.sqrt(X + Y);

console.log(raiz.toFixed(4))