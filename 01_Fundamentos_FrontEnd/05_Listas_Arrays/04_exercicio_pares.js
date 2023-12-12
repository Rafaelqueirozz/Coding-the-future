/*
Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada par encontrado
*/

notas = []
for (let i = 0; i < 80; i += 3) {
  notas.push(i)
}

for (let i = 0; i < notas.length; i++) {
  if (notas[i] % 2 === 0) {
    console.log(notas[i])
  }
}