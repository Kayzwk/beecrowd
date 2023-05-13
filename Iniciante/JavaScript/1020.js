var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var N2 = N % 365;
var N3 = N2 % 30;
var anos = parseInt(N / 365);
var meses = parseInt(N2 / 30);
var dias = parseInt(N3);

console.log(anos+" ano(s)");
console.log(meses+" mes(es)");
console.log(dias+" dia(s)");