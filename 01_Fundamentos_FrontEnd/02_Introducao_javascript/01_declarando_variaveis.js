// Declarando variáveis e constantes
// Opção 01: var - podem ser alteradas
var nome_var = "Luis";

// Opção 02: let - podem ser alteradas
let nome_let = "Rafael";

// Constantes - são imutáveis
const nome_const = "Rafa";

console.log('Usando var:', nome_var)
console.log('Usando let:', nome_let)
console.log('Usando const:', nome_const)

nome_var = "Luis Queiroz";
nome_let = "Rafael Sobrenome";
console.log('Usando var:', nome_var)
console.log('Usando let:', nome_let)

nome_const = 'Alterado'
console.log('Usando const:', nome_const)
// Gera um erro devido ser uma constante e não pode ser alterada