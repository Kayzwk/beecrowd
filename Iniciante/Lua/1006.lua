-- lê as notas A, B e C
local A = io.read("*n")
local B = io.read("*n")
local C = io.read("*n")

-- calcula a média ponderada das notas
local media = ((A * 2) + (B * 3) + (C * 5)) / 10

-- imprime o resultado com uma casa decimal
print(string.format("MEDIA = %.1f", media))
