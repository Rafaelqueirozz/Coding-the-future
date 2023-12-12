/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis:
1. Preço do etanol;
2. Preço do gasolina;
3. Tipo de combustivel escolhido
4. Gasto medio de combustivel por km
5. Distancia da viagem em KM

Imprima no console o valor que será gasto de combustivel na viagem
*/

let preco_etanol = 4.50; // R$ 4,50
let preco_gasolina = 5.00; // R$ 5,00
let tipo_combustivel = 'gasolina'; // 'gasolina' ou 'etanol'
let gasto_medio_combustivel = 8.5; // 8.5 km/l  (8.5 km por litro)
let distancia_viagem = 282; // 282 km de distância

let total_combustivel = distancia_viagem / gasto_medio_combustivel;
let valor_total = 0;

if (tipo_combustivel === 'gasolina') {
  valor_total = total_combustivel * preco_gasolina;
} else {
  valor_total = total_combustivel * preco_etanol;
}

console.log('Combustivel escolhido: ' + tipo_combustivel);
console.log('Valor gasto com combustível na viagem: R$ ' + valor_total.toFixed(2));