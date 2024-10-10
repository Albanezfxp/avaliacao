let people = [];

for (let i = 0; i < 5; i++) {
  let name = prompt("Digite o nome da pessoa: ");
  let age = parseInt(prompt("Digite a idade da pessoa: "));
  people.push({ name: name, age: age });
}

function checkAdults(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].age > 18) {
      console.log(`${people[i].name} tem mais de 18 anos`);
    }
  }
}

checkAdults(people);
