var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var scores = input.split('\n').map(score => parseFloat(score));

var newCalc = 1;
while (newCalc == 1) {
    var loop = 0;
    var average = 0;
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
    console.log('novo calculo (1-sim 2-nao)');
    newCalc = scores.shift();
    while (newCalc != 1 && newCalc != 2) {
        console.log('novo calculo (1-sim 2-nao)');
        newCalc = scores.shift();
    }
}