// Praticando funções com exercicios anteriores
/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saude para dar uma indicação sobre a condição de peso de uma pessoa adulta.

IMC = peso / altura²

Elabora um algoritmo utilizando funções que dado o peso e a altura de adulto mostre sua condição de acordo com a tabela abaixo:
IMC:
1. Abaixo de 18.5 - Abaixo do Peso
2. Entre 18.5 e 25 - Peso Normal
3. Entre 25 e 30 - Acima do Peso
4. Entre 30 e 40 - Obeso
5. Acima de 40 - Obesidade Grave
*/

function init() {
  console.log('Programa principal iniciado')

  let imc = calculaImc(110, 1.5)
  let classificao = classificaIMC(imc);
  console.log('IMC é:', imc)
  console.log('Classificação é:', classificao)
}

function calculaImc(peso, altura) {
  return (peso / Math.pow(altura, 2)).toFixed(2)
}

function classificaIMC(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso'
  } else if (imc <= 25) {
    return 'Peso Normal'
  } else if (imc <= 30) {
    return 'Acima do Peso'
  } else if (imc <= 40) {
    return 'Obeso'
  } else {
    return 'Obesidade Grave'
  }
}

init();