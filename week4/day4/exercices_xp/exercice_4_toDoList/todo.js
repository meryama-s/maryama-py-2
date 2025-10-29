// EXERCICE 4

export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, completed: false });
    }
  
    markComplete(index) {
      if (this.tasks[index]) {
        this.tasks[index].completed = true;
      } else {
        console.log("Task not found!");
      }
    }
  
    listTasks() {
      console.log("Todo List");
      this.tasks.forEach((t, i) => {
        const status = t.completed ? "done" : "pending";
        console.log(`${i + 1}. ${t.task} - ${status}`);
      });
    }
  }
  