function isPalindrome(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return word === reversedWord ? "É um palíndromo" : "Não é um palíndromo";
}

const userWord = prompt("Digite uma palavra: ");
console.log(isPalindrome(userWord));
