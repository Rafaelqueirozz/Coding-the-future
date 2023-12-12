// Funções Auto Invocáveis (Immediately-Invoked Function Expression - IIFE)

// Servem principalmente para paginas web com objetivo de isolar o código e as funções serem executadas automaticamente, sem necessidade de ser chamada.
/*
(function anonima(){})()
*/

// Função 01
(function () {
  console.log('Programa principal iniciado')

  let imc = calculaImc(110, 1.5)
  let classificao = classificaIMC(imc);
  console.log('IMC é:', imc)
  console.log('Classificação é:', classificao)
})()

function calculaImc(peso, altura) {
  return (peso / Math.pow(altura, 2)).toFixed(2)
}

function classificaIMC(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso'
  } else if (imc <= 25) {
    return 'Peso Normal'
  } else if (imc <= 30) {
    return 'Acima do Peso'
  } else if (imc <= 40) {
    return 'Obeso'
  } else {
    return 'Obesidade Grave'
  }
}

// Função 02
(function zero2(){
  console.log('funcao 02 IIFE')
})()