const notas = [5, 7, 8, 2, 5, 6];

let soma = 0
notas.forEach( function (nota, index) {
  console.log(`${index}: ${nota}`)
  soma += nota;
})
console.log('Soma:', soma)
console.log('Quantidade de notas:', notas.length)
console.log('Media:', soma / notas.length)