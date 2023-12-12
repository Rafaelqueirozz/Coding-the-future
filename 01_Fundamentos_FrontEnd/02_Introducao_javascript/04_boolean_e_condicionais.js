// Tipo booleano e condicionais

// Tipo booleano
// true -> verdadeiro
// false -> falso
const ehValido = true;
const ehInvalido = false;

const numero1 = 10;
const numero2 = 11;
let ehNumeroPar = numero1 % 2 === 0;
console.log('O número ' + numero1 + ' é par? ' + ehNumeroPar); 

ehNumeroPar = numero2 % 2 === 0;
console.log('O número ' + numero2 + ' é par? ' + ehNumeroPar); 

const numero3 = 12;
if (numero3 % 2 === 0) {
    console.log(`O número ${numero3} é par!`);
} else {
    console.log(`O número ${numero3} é ímpar!`);
}

const numero4 = 13;
if (!(numero4 % 2 === 0)) {
    console.log(`O número ${numero4} é impar!`);
} else {
    console.log(`O número ${numero4} é par!`);
}

const numero5 = 0;

if (numero5 === 0) {
  console.log(`O número ${numero5} é inválido`);
} else if (numero5 % 2 === 0) {
  console.log(`O número ${numero5} é par!`);
} else {
  console.log(`O número ${numero5} é impar!`);
}