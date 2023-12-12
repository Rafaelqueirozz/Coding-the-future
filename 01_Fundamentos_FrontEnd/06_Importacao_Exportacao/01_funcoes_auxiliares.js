// Funções auxiliares para fazer o export

// Essa função simula um console.log
function print(texto) {
  console.log(texto);
}

//Essa função simula uma leitura de input
function gets() {
  const valor = entradas[contador];
  contador++
  return valor;
}

module.exports = { gets, print }

/* Exercicio do arquivo 02_import_exports.js */
const entradas = [5, 50, 10, 98, 23, 30, 22, 99, 100, 1, 2]
let contador = 0;