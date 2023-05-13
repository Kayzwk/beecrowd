var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var n1 = Math.trunc(n / 100);
var n2 = Math.trunc((n%100)/50);
var n3 = Math.trunc(((n%100)%50)/20);
var n4 = Math.trunc((((n%100)%50)%20)/10);
var n5 = Math.trunc(((((n%100)%50)%20)%10)/5);
var n6 = Math.trunc((((((n%100)%50)%20)%10)%5)/2);
var n7 = Math.trunc(((((((n%100)%50)%20)%10)%5)%2)/1);

console.log(n);
console.log(n1 + " nota(s) de R$ 100,00");
console.log(n2 + " nota(s) de R$ 50,00");
console.log(n3 + " nota(s) de R$ 20,00");
console.log(n4 + " nota(s) de R$ 10,00");
console.log(n5 + " nota(s) de R$ 5,00");
console.log(n6 + " nota(s) de R$ 2,00");
console.log(n7 + " nota(s) de R$ 1,00");

