/*
Crie uma classe para representar pessoas. Cada pessoa deverá ter os atributos:
1. altura
2. Peso
3. Altura
Para cada pessoa deve existir a possibilidade de dizer o valor do seu IMC e classificação. Instancie uma pessoa com nome de José que tenha 70kgs e 1.75m de altura. Após mostre o o valor de seu IMC e classificação.
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    let imc = (this.peso / this.altura**2).toFixed(2)
    return this.classificaIMC(imc);
  }

  classificaIMC(imc) {
    if (imc < 18.5) {
      return `IMC: ${imc} \nClassificação: Abaixo do peso`
    } else if (imc <= 25) {
      return `IMC: ${imc} \nClassificação: Peso Normal`
    } else if (imc <= 30) {
      return `IMC: ${imc} \nClassificação: Acima do Peso`
    } else if (imc <= 40) {
      return `IMC: ${imc} \nClassificação: Obeso`
    } else {
      return `IMC: ${imc} \nClassificação: Obesidade Grave`
    }
  }
}

const jose = new Pessoa('Jose', 70, 1.75)
console.log(jose.calcularIMC())

const rafael = new Pessoa('Rafael', 80, 1.72)
console.log(rafael.calcularIMC())