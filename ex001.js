//EXERCICIO 1 - BEBIDAS

// Incluindo o módulo prompt-sync para entrada do usuário
const prompt = require('prompt-sync')();

// === Situação 1: Escolha de Bebida ===
console.log("Escolha a sua bebida:");
console.log("1. Água");
console.log("2. Suco");
console.log("3. Refrigerante");
console.log("4. Café");

const bebida = parseInt(prompt("Digite o número da sua escolha: "));

switch (bebida) {
  case 1:
    console.log("Aqui está sua Água");
    break;
  case 2:
    console.log("Aqui está seu Suco");
    break;
  case 3:
    console.log("Aqui está seu Refrigerante");
    break;
  case 4:
    console.log("Aqui está seu Café");
    break;
  default:
    console.log("Opção inválida");
    break;
}
