// Métodos são funções atreladas a objetos.

const rafael = {
  nome: 'Rafael',
  idade: 31,

  descrever: function() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
  }
}
rafael.descrever()

rafael.descrever = function () {
  console.log(`Meu nome é ${this.nome}`)
}
rafael.descrever()

const atributo = 'idade';
console.log(rafael[atributo])