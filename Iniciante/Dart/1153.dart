import 'dart:io';

void main() {
  int n = int.parse(stdin.readLineSync());

  if (n > 0 && n < 13) {
    int fatorial = 1;

    for (int i = 1; i <= n; i++) {
      fatorial *= i;
    }

    print(fatorial);
  } else {
    print('O valor de N deve ser maior que 0 e menor que 13.');
  }
}
