var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var parts = lines[0].split(" ");
var n1 = parseFloat(parts[0]);
var n2 = parseFloat(parts[1]);
var n3 = parseFloat(parts[2]);
var n4 = parseFloat(parts[3]);

var media = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10;
console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
    console.log("Aluno aprovado.");
} else if (media < 5.0) {
    console.log("Aluno reprovado.");
} else {
    var exam = parseFloat(lines[1]);
    media = (media + exam) / 2;

    var message = media >= 5.0 ? "Aluno aprovado.\n" : "Aluno reprovado.\n";
    console.log(
        `Aluno em exame.\n`        +
        `Nota do exame: ${exam.toFixed(1)}\n` +
        message +
        `Media final: ${media.toFixed(1)}`
    );
}