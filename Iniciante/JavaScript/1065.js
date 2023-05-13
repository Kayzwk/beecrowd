var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let cont_pares = 0;
lines.map(v => {
    let x = parseInt(v);
    if(x % 2 === 0) cont_pares++; 
});

console.log(cont_pares + ' valores pares');