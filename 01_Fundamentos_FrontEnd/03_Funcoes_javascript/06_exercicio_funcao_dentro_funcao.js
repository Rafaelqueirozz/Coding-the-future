function escrevaMeuNome(nome, cb) {
  return nome + cb(idade)
}

function maiorDeIdade(idade) {
  if (idade >= 18) {
    return ' maior de idade'
  } else {
    return ' menor de idade'
  }
}

let idade = 19;
console.log(escrevaMeuNome('Rafael', maiorDeIdade))