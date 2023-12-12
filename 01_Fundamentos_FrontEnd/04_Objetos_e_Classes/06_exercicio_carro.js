/*
Criar uma classe para representar carros. Os carros devem possuir:
1. gastoMedioCombustivelPorKm
2. Cor
3. Gasto médio de combustivel por kilometro rodado

Crie um método que dado a quantidade de quilômetros e o preço do combustivel nos dê o valor gasto em reais para realizar um percurso.
*/

class Carro {
  marca;
  cor;
  kmPorLitro;

  constructor(marca, cor, kmPorLitro) {
    this.marca = marca;
    this.cor = cor;
    this.kmPorLitro = kmPorLitro;
  }

  custoViagem(distancia,precoGasolina) {
    let litrosCombustivel = distancia / this.kmPorLitro
    let custoTotal = litrosCombustivel * precoGasolina
    return 'O valor estimado dessa viagem com este carro é de: ' + custoTotal.toFixed(2)
  }
}

const hb20 = new Carro('Hyundai', 'Cinza', 8.5)
console.log(hb20)
console.log(hb20.custoViagem(21, 5.99))