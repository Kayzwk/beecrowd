var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var values = input.split(/\s+/).map(value => parseInt(value));

var answerLoop = 0;
var countDeparture = 0;
var countDraws = 0;
var victoriesInter = 0;
var victoriesGremio = 0;

while (answerLoop !== 2) {
    countDeparture += 1;
    [interGoals, gremioGoals] = values.splice(0, 2);
    if (interGoals > gremioGoals) {
        victoriesInter += 1;
    } else if (gremioGoals > interGoals) {
        victoriesGremio += 1;
    } else {
        countDraws += 1;
    }
    console.log('Novo grenal (1-sim 2-nao)');
    answerLoop = values.shift();
}

console.log(`${countDeparture} grenais`);
console.log(`Inter:${victoriesInter}`);
console.log(`Gremio:${victoriesGremio}`);
console.log(`Empates:${countDraws}`);

if (victoriesInter > victoriesGremio) {
    console.log('Inter venceu mais');
} else if (victoriesGremio > victoriesInter) {
    console.log('Gremio venceu mais');
}