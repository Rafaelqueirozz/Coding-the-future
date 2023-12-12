/*
Faça um algoritmo que dado 3 notas tiradas por um aluno, calcule a média e diga se o aluno foi aprovado ou não.

Media = (nota1 + nota2 + nota3) / 3
Classificação:
- Media menor que 5 -> Reprovado
- Media maior ou igual a 5 e menor que 7 -> Recuperação
- Media maior ou igual a 7 -> Aprovado
*/

const nota1 = 9;
const nota2 = 6;
const nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3;
console.log('Média: ' + media);

if (media < 5) {
  console.log('Reprovado');
} else if (media <= 7) {
  console.log('Recuperação');
} else {
  console.log('Aprovado');
}