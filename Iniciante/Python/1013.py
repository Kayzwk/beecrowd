# Ler os três valores
a, b, c = map(int, input().split())

# Encontrar o maior entre a e b
maior_ab = (a + b + abs(a - b)) // 2

# Encontrar o maior entre maior_ab e c
maior = (maior_ab + c + abs(maior_ab - c)) // 2

# Exibir o maior valor seguido da mensagem
print(f"{maior} eh o maior")
