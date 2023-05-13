var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var totalTeste = 0;
var totalCoelhos = 0;
var totalRatos = 0;
var totalSapos = 0;

for (var i=0; i < lines.length; i++){
var [numero, tipo] = lines[i].split(' ');
if(tipo == "C\r" || tipo == "C"){
    totalCoelhos += parseInt(numero);
}
if(tipo == "R\r" || tipo == "R"){
    totalRatos += parseInt(numero);
}
if(tipo == "S\r" || tipo == "S"){
    totalSapos += parseInt(numero);
}   
}

totalTeste = totalCoelhos+totalRatos+totalSapos;

console.log('Total: '+totalTeste+' cobaias');
console.log('Total de coelhos: '+totalCoelhos);
console.log('Total de ratos: '+totalRatos);
console.log('Total de sapos: '+totalSapos);
console.log('Percentual de coelhos: '+((totalCoelhos * 100)/ totalTeste).toFixed(2)+' %');
console.log('Percentual de ratos: '+((totalRatos * 100)/totalTeste).toFixed(2)+' %');
console.log('Percentual de sapos: '+((totalSapos * 100)/totalTeste).toFixed(2)+' %');