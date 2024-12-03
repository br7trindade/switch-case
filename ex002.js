// === EXERCICIO 2: Menu de Operações Matemáticas ===
const prompt = require('prompt-sync')();

console.log("\nEscolha a operação matemática:");
console.log("1. Soma");
console.log("2. Subtração");
console.log("3. Multiplicação");
console.log("4. Divisão");

const operacao = parseInt(prompt("Digite o número da operação: "));
const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo número: "));

switch (operacao) {
  case 1:
    console.log("Resultado da soma: " + (numero1 + numero2));
    break;
  case 2:
    console.log("Resultado da subtração: " + (numero1 - numero2));
    break;
  case 3:
    console.log("Resultado da multiplicação: " + (numero1 * numero2));
    break;
  case 4:
    if (numero2 !== 0) {
      console.log("Resultado da divisão: " + (numero1 / numero2));
    } else {
      console.log("Divisão por zero não é permitida.");
    }
    break;
  default:
    console.log("Opção inválida");
    break;
}
