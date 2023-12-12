/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela abaixo para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

Condição de pagamento:
1 - Á vista Débito, recebe 10% de desconto
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto
3 - Em duas vezes, preço normal de etiqueta sem juros
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

let valor_produto = 100;
let condicao_pagamento = 0;
let valor_produto_final = null;

switch (condicao_pagamento) {
  case 1:
    valor_produto_final = (valor_produto * .9).toFixed(2)
    console.log('Valor a ser pago:', valor_produto_final)
    break
  case 2:
    valor_produto_final = (valor_produto * .85).toFixed(2)
    console.log('Valor a ser pago:', valor_produto_final)
    break
  case 3:
    valor_produto_final = valor_produto
    console.log('Valor a ser pago:', valor_produto_final)
    break
  case 4:
    valor_produto_final = (valor_produto * 1.1).toFixed(2)
    console.log('Valor a ser pago:', valor_produto_final)
    break
  default:
    console.log('Método de pagamento inválido')
}