var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const value = parseInt(input);

var sum = 1;
var loop = 0;

while (loop < value) {
    loop += 1;
    console.log(`${sum} ${sum + 1} ${sum + 2} PUM`);
    sum += 4;
}