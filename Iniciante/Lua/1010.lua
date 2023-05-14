-- lê os valores da primeira peça
local codigo1, num1, valor1 = io.read("*n", "*n", "*n")
-- lê os valores da segunda peça
local codigo2, num2, valor2 = io.read("*n", "*n", "*n")

-- calcula o valor total a ser pago
local total = num1 * valor1 + num2 * valor2

-- imprime o resultado
io.write(string.format("VALOR A PAGAR: R$ %.2f\n", total))
