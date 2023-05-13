var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var n1 = parseInt(lines[0]);
var n2 = parseInt(lines[1]);
var n3 = parseInt(lines[2]);

if (n1 < n2 && n1 < n3) {
    console.log(n1);
    if (n2 < n3) {
        console.log(n2);
        console.log(n3 + '\n');
    }
    if (n3 < n2) {
        console.log(n3);
        console.log(n2 + '\n');
    }
}
if (n2 < n1 && n2 < n3) {
    console.log(n2);
    if (n1 < n3) {
        console.log(n1);
        console.log(n3 + '\n');
    }
    if (n3 < n1) {
        console.log(n3);
        console.log(n1 + '\n');
    }
}
if (n3 < n1 && n3 < n2) {
    console.log(n3);
    if (n1 < n2) {
        console.log(n1);
        console.log(n2 + '\n');
    }
    if (n2 < n1) {
        console.log(n2);
        console.log(n1 + '\n');
    }
}
console.log(n1 + '\n' + n2 + '\n' + n3);