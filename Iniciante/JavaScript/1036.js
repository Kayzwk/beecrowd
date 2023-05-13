var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split(' ');

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());

const delta = Math.pow(B, 2) - 4 * A * C;

if(delta === 0 || delta < 0 || A === 0.0 || B === 0 || C === 0 ){
    console.log("Impossivel calcular");
}else{
    const x1 = (-B + Math.pow(delta, (1 / 2))) / (2 * A);
    const x2 = (-B - Math.pow(delta, (1 / 2))) / (2 * A);
    console.log("R1 =", x1.toFixed(5));
    console.log("R2 =", x2.toFixed(5));
}