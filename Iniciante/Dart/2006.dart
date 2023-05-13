import 'dart:io';

void main() {
  int tipoCha = int.parse(stdin.readLineSync());

  List<int> respostas = stdin.readLineSync().split(' ').map((e) => int.parse(e)).toList();

  int numCorretas = 0;
  for (int i = 0; i < 5; i++) {
    if (respostas[i] == tipoCha) {
      numCorretas++;
    }
  }
  print(numCorretas);
}
