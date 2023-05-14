-- lê os quatro valores inteiros
local a, b, c, d = io.read("*n", "*n", "*n", "*n")

-- calcula a diferença entre o produto de a e b e o produto de c e d
local diferenca = (a * b - c * d)

-- imprime o resultado formatado
io.write(string.format("DIFERENCA = %d\n", diferenca))
