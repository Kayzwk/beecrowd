var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const arr = lines.shift().split(' ');
const a = parseInt(arr[0]); const b = parseInt(arr[1]); const c = parseInt(arr[2]);
var result = parseInt((a + b + Math.abs(a - b)) / 2);
var maior = parseInt((result + c + Math.abs(result - c)) / 2);

console.log(parseInt(maior)+' eh o maior');