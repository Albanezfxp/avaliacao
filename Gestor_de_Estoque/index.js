let products = [
  { name: "Produto A", price: 20, quantity: 10 },
  { name: "Produto B", price: 15, quantity: 5 },
  { name: "Produto C", price: 30, quantity: 2 },
];

function totalStockValue(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }
  return total;
}

console.log("Valor total do estoque: ", totalStockValue(products));
