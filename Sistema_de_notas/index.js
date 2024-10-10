const student = {
  name: "João",
  grades: [8, 7.5, 9],
  average: function () {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  },
};

console.log(`O aluno ${student.name} tem média ${student.average()}`);
