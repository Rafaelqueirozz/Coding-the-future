function maiorDeIdade(idade) {
  if (idade >= 18) {
    return 'maior de idade'
  } else {
    return 'menor de idade'
  }
}

let idade = 18;
let verificador = maiorDeIdade(idade);
console.log(`Sua idade é: ${idade}. \nVocê é ${verificador}`)