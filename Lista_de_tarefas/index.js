let tasks = [];

for (let i = 0; i < 5; i++) {
  let task = prompt("Digite uma tarefa: ");
  tasks.push(task);
}

console.log("Tarefas: ", tasks);
let taskCompleted = prompt("Qual tarefa deseja marcar como concluída? ");
let index = tasks.indexOf(taskCompleted);

if (index !== -1) {
  tasks.splice(index, 1);
  console.log("Lista atualizada: ", tasks);
} else {
  console.log("Tarefa não encontrada");
}
