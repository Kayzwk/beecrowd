var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var parts = lines[0].split(" ");
var x = parseFloat(parts[0]);
var y = parseFloat(parts[1]);

if (x > 0) {
    if (y > 0) {
        console.log("Q1");
    } else if (y === 0) {
        console.log("Eixo X");
    } else if (y < 0) {
        console.log("Q4");
    }
} else
if (x === 0) {
    if (y > 0) {
        console.log("Eixo Y");
    } else if (y === 0) {
        console.log("Origem");
    } else if (y < 0) {
        console.log("Eixo Y");
    }
} else
if (x < 0) {
    if (y > 0) {
        console.log("Q2");
    } else if (y === 0) {
        console.log("Eixo X");
    } else if (y < 0) {
        console.log("Q3");
    }
}