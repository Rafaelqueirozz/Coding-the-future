/*
Crie um programa que dado um numero imprima a sua tabuada de 1 a 15
*/

let msg = ''

let numero = 2;

for (let i = 1; i < 16 ; i++) {
  msg += `${numero} x ${i} = ${numero * i}\n`;
}

console.log(msg)