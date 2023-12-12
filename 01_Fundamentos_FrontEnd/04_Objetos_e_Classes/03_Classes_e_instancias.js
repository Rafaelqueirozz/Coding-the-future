// Como criar classes e instâncias
// Classes - as classes são um modelo para a criação de objetos.

// Criando uma classe chamada Pessoa (Começa com letra maiuscula)

class Pessoa {
  nome;
  idade;
  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
  }
}

// Uma instância é uma ocorrência de uma pessoa
// Criando uma instância de uma Pessoa

const rafael = new Pessoa()
rafael.nome = 'Rafael'
rafael.idade = 31

const luis = new Pessoa()
luis.nome = 'Luis'
luis.idade = 28

rafael.descrever()
luis.descrever()