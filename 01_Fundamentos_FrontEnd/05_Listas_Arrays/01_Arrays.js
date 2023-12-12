// Declarando arrays

// Metodo 01 - Metodo formal
const produtos = new Array(1, 2, 3)
console.log(produtos)
console.log(produtos[0])

console.log(produtos.pop())
console.log(produtos)

// Metodo 02 - Metodo literal
const alunos = ['Luis', 'Rafael', 'Queiroz']
console.log(alunos)

alunos.push('Bezerra')
console.log(alunos)
console.log(alunos[3])
alunos[4] = 'João'
console.log(alunos)

const notas = [];
notas.push(5);notas.push(7);notas.push(8);notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]
console.log( 'Media:', (soma / 5) )