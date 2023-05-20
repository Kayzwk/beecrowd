# Ler os dados da peça 1
codigo_peca1, numero_peca1, valor_unitario1 = map(float, input().split())

# Ler os dados da peça 2
codigo_peca2, numero_peca2, valor_unitario2 = map(float, input().split())

# Calcular o valor total a ser pago
total = (numero_peca1 * valor_unitario1) + (numero_peca2 * valor_unitario2)

# Imprimir o resultado
print("VALOR A PAGAR: R$ {:.2f}".format(total))
