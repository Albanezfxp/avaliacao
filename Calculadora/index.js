function calculator(num1, num2, operation) {
  if (operation === "soma") {
    return num1 + num2;
  } else if (operation === "subtracao") {
    return num1 - num2;
  } else if (operation === "multiplicacao") {
    return num1 * num2;
  } else if (operation === "divisao") {
    if (num2 === 0) {
      return "Erro: divisão por zero";
    }
    return num1 / num2;
  } else {
    return "Operação inválida";
  }
}

console.log(calculator(10, 5, "soma"));
console.log(calculator(10, 5, "subtracao"));
console.log(calculator(10, 5, "multiplicacao"));
console.log(calculator(10, 0, "divisao"));
