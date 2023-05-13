-- lê o valor do raio da entrada padrão
local raio = io.read("*n")

-- calcula a área da circunferência
local pi = 3.14159
local area = pi * raio * raio

-- imprime o resultado formatado
io.write(string.format("A=%.4f\n", area))
