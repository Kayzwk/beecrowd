var input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n');
var n = parseInt(input[0]) + 1;

for(var i = 1; i < n; i++){
    var [x, y] = input[i].split(' ').map(v => parseInt(v));
    if(x > y){
        var temp = x;
        x = y;
        y = temp;
    }

    var soma = 0;
    for(var j = x + 1; j < y; j++){
        if(j % 2 === 1) soma += j;
    }
    console.log(soma);
}