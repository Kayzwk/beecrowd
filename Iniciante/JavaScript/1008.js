var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = lines.shift();
var hour  = lines.shift();
var perHour = parseFloat(lines.shift());
var salary = (hour*perHour);

console.log("NUMBER = "+number);
console.log("SALARY = U$ "+salary.toFixed(2));