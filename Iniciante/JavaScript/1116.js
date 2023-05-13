var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var values = input.split(/\s+/).map(value => parseInt(value));
var loop = values.shift();

for (var i = 0; i < loop; i++) {
    var [X, Y] = values.splice(0, 2);
    if (Y === 0) {
        console.log('divisao impossivel');
    } else {
        var dividing = X / Y;
        console.log(dividing.toFixed(1));
    }
}