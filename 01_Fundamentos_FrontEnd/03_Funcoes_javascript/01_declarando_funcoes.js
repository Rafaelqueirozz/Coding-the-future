// Declarando funções

function teste() {
  console.log('teste')
}
teste();
teste();

function digaMeuNome(nome) {
  console.log('O nome é: ' + nome)
}

digaMeuNome('Rafael')

function quadrado(valor) {
  let quadrado = valor * valor
  console.log('O quadro de ' + valor + ' é: ' + quadrado)
}

quadrado(10);

function incrementarJuros(valor, percentualJuros) {
  const valorTotal = valor + (percentualJuros / 100) * valor;
  return valorTotal;
}

console.log(incrementarJuros(100,10))
console.log(incrementarJuros(120,20))