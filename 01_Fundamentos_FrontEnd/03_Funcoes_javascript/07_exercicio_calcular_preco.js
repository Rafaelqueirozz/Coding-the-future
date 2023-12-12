/*
Elabore um algoritmo utilizando funções que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela abaixo para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

Condição de pagamento:
1 - Á vista Débito, recebe 10% de desconto
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto
3 - Em duas vezes, preço normal de etiqueta sem juros
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/
let tipoPagamento = 1;
let percentual = jurosOuDesconto(tipoPagamento)

function calculaPrecoFinal(valor, percentual) {
  if (typeof valor !== 'number') {
    return 'Valor inválido'
  }

  if (typeof percentual !== 'number') {
    return 'Método de pagamento inválido'
  }

  let valorFinal = valor + (valor*(percentual/100))
  return valorFinal;
}

function jurosOuDesconto (tipoPagamento) {
  switch (tipoPagamento) {
    case 1:
      return -10
    case 2:
      return -15
    case 3:
      return 0
    case 4:
      return 10
  default:
    return ''
  }
}

const valorFinal = calculaPrecoFinal(100, percentual)
console.log(valorFinal)