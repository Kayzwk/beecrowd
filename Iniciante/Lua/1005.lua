-- lê as notas A e B da entrada padrão
local a = io.read("*n")
local b = io.read("*n")

-- calcula a média ponderada das notas
local media = ((a * 3.5) + (b * 7.5)) / 11

-- imprime o resultado formatado
io.write(string.format("MEDIA = %.5f\n", media))
