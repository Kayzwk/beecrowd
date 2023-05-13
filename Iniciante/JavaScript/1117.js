var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var scores = input.split('\n').map(score => parseFloat(score));

var average = 0;
var loop = 0;

while (loop < 2) {
    var score = scores.shift();
    if (score >= 0 && score <= 10) {
        average += score / 2;
        loop += 1;
    } else {
        console.log('nota invalida');
    }
}

console.log(`media = ${average.toFixed(2)}`);