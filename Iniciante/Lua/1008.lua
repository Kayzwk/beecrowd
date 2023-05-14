-- lê o número do funcionário, horas trabalhadas e valor por hora
local numeroFuncionario = io.read("*n")
local horasTrabalhadas = io.read("*n")
local valorPorHora = io.read("*n")

-- calcula o salário do funcionário
local salario = horasTrabalhadas * valorPorHora

-- exibe o número e o salário do funcionário
print("NUMBER = " .. numeroFuncionario)
print(string.format("SALARY = U$ %.2f", salario))
