const prompt = require('prompt-sync')();

// === EXERCICIO 3: Dicionário de Cores ===
console.log("\nTradução de Cores:");
const cor = prompt("Digite o nome da cor em inglês (red, blue, green): ").toLowerCase();

switch (cor) {
  case "red":
    console.log("vermelho");
    break;
  case "blue":
    console.log("azul");
    break;
  case "green":
    console.log("verde");
    break;
  default:
    console.log("Cor desconhecida");
    break;
}
