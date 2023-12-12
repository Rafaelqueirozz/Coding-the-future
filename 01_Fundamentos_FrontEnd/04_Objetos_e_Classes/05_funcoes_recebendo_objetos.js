class Pessoa {
  nome;
  idade;

  constructor(nome='vazio', idade=0) {
    this.nome = nome
    this.idade = idade
  }
}

function compararIdade(p1, p2) {
  if (p1.idade === p2.idade) {
    console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`)
  } else if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
  } else {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
  }
}

const rafael = new Pessoa('Rafael', 31)
const priscilla = new Pessoa('Priscilla', 33)

compararIdade(rafael, priscilla)