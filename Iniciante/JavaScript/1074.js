var input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

var n = parseInt(input[0]) + 1;
for(var i = 1; i < n; i++){
    var valor = parseInt(input[i]);
    var msg = '';
    if(valor === 0) msg = 'NULL';
    else{
        if(valor % 2 === 0) msg = 'EVEN';
        else msg = 'ODD';
        if(valor < 0) msg += ' NEGATIVE';
        else msg += ' POSITIVE';
    }
    console.log(msg);
}