// Criando instâncias com construtor

class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  // Valores padrões - vazio e 0 caso não seja passado parametro;
  constructor(nome='vazio', idade=0) {
    this.nome = nome
    this.idade = idade
    this.anoDeNascimento = 2023 - idade
  }

  descrever() {
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e nasci em ${this.anoDeNascimento}`)
  }
}

const rafael = new Pessoa('Rafael', 31)
const luis = new Pessoa()
rafael.descrever()
luis.descrever()