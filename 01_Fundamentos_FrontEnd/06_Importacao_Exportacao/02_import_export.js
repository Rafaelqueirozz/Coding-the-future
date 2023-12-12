/*
Para ter acesso as funções do arquivo funcoes auxiliares, é necessário importar elas.
Iremos utilizar uma função que existe dentro do nodeJS para fazer esta importação.
*/

// const funcoes = require('./01_funcoes_auxiliares')
const {gets, print} = require('./01_funcoes_auxiliares')

/* Exercicio:
Uma sala contém 5 alunos e para cada aluno foi sorteado um numero de 1 a 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98
*/

const numerosSorteados = [];
for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets()
  numerosSorteados.push(numeroSorteado)
}
print(numerosSorteados)


let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
  const numeroSorteado = numerosSorteados[i]
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}
print(maiorValor)