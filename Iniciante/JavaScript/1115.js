var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var values = input.split(/\s+/).map(value => parseInt(value));

var loop = 0;
while (loop === 0) {
    var [X, Y] = values.splice(0, 2);
    if (X > 0 && Y > 0) {
        console.log('primeiro');
    } else if (X < 0 && Y > 0) {
        console.log('segundo');
    } else if (X < 0  && Y < 0) {
        console.log('terceiro');
    } else if (X > 0 && Y < 0) {
        console.log('quarto');
    } else {
        loop += 1;
    }
}