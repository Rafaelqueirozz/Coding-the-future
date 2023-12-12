// Objetos são coleção dinâmica de chave: valor, ou seja podem ser retirados ou adicionados.
let rafael  = {
  nome: 'Rafael',
  idade: 31,
}

console.log(rafael)
console.log(rafael.nome)
console.log(rafael['nome'])
console.log(rafael.idade)

rafael.altura = 1.72

for (const propriedade in rafael) {
  console.log(`Propriedade: ${propriedade} \nValor: ${rafael[propriedade]}`)
}

delete rafael.idade;
console.log(rafael.idade)