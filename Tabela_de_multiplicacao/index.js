function multiplicationTable(number) {
  if (number <= 0) {
    console.log("O número deve ser positivo");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

multiplicationTable(5);
