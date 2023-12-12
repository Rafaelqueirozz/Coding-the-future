const { gets, print } = require('./01_funcoes_auxiliares');

// let maiorValorEncontrado = 0;
// for (let i = 0; i < ; i++) {
//   const numeroSorteado = gets();
//   if (numeroSorteado > maiorValorEncontrado) {
//     maiorValorEncontrado = numeroSorteado;
//   }
// }
// print(maiorValorEncontrado)

let teste = 0
let maiorValorEncontrado = 0
while (teste !== undefined) {
  teste = gets()
  if (teste > maiorValorEncontrado) {
    maiorValorEncontrado = teste;
  }
}
print(maiorValorEncontrado)