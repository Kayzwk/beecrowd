var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let cont_positivos = 0;
lines.map(v => {
    let x = parseFloat(v);
    if(x > 0.0) cont_positivos++;
});

console.log(cont_positivos + ' valores positivos');