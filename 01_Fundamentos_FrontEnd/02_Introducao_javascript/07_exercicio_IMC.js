/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saude para dar uma indicação sobre a condição de peso de uma pessoa adulta.

IMC = peso / altura²

Elabora um algoritmo que dado o peso e a altura de adulto mostre sua condição de acordo com a tabela abaixo:
IMC:
1. Abaixo de 18.5 - Abaixo do Peso
2. Entre 18.5 e 25 - Peso Normal
3. Entre 25 e 30 - Acima do Peso
4. Entre 30 e 40 - Obeso
5. Acima de 40 - Obesidade Grave
*/

let peso = 72; 
let altura = 1.72;
// let imc = peso / altura ** 2;
let imc = peso / Math.pow(altura, 2);

console.log('O IMC é:', imc);

if (imc < 18.5) {
  console.log('Abaixo do peso')
} else if (imc <= 25) {
  console.log('Peso Normal')
} else if (imc <= 30) {
  console.log('Acima do Peso')
} else if (imc <= 40) {
  console.log('Obeso')
} else {
  console.log('Obesidade Grave')
}