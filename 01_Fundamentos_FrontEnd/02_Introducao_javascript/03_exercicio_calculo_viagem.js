/* 
Calcular o valor de uma viagem de carro utilizando operadores aritiméticos.
Crie 3 variáveis:
1. Preço do combustível
2. Gasto médio de combustível por km
3. Distancia da viagem em KM

Imprima no console o valor qeu será gasto de combustivel na viagem
*/

let preco_combustivel = 5.00; // R$ 5,00
let gasto_medio_combustivel = 8.5; // 8.5 km/l  (8.5 km por litro)
let distancia_viagem = 282; // 100 km de distância

let valor_gasto_combustivel = (distancia_viagem / gasto_medio_combustivel) * preco_combustivel;

console.log('Valor gasto com combustível na viagem: R$ ' + valor_gasto_combustivel.toFixed(2));