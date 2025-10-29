import { TodoList } from './todo.js';

const myTodos = new TodoList();

myTodos.addTask("learn JavaScript");
myTodos.addTask("build a small project");
myTodos.addTask("practice ES modules");
myTodos.markComplete(1); // *mark 2nd task as complete
myTodos.listTasks();
