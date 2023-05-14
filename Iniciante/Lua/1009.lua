-- lê o nome do vendedor
nome = io.read()

-- lê o salário fixo e o total de vendas
salarioFixo = io.read("*n")
totalVendas = io.read("*n")

-- calcula a comissão e o salário final
comissao = totalVendas * 0.15
salarioFinal = salarioFixo + comissao

-- imprime o nome e o salário final
print("TOTAL = R$ " .. string.format("%.2f", salarioFinal))
    