# Ler os valores da distância total e do total de combustível
distancia_total = int(input())
combustivel_gasto = float(input())

# Calcular o consumo médio
consumo_medio = distancia_total / combustivel_gasto

# Exibir o consumo médio
print("{:.3f} km/l".format(consumo_medio))
