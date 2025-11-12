// app.js
const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

//memory data store
let todos = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Build a Todo API", completed: true },
];

// Generate next ID
function getNextId() {
  return todos.length ? todos[todos.length - 1].id + 1 : 1;
}

// routes

// create a new todo
app.post("/api/todos", (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTodo = {
    id: getNextId(),
    title,
    completed: completed || false,
  };

  todos.push(newTodo);
  res.status(201).json({ message: "Todo created successfully", todo: newTodo });
});

//  get all todos
app.get("/api/todos", (req, res) => {
  res.status(200).json(todos);
});

// get a specific todo by ID
app.get("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.status(200).json(todo);
});

// update a todo
app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.status(200).json({ message: "Todo updated successfully", todo });
});

// delete a todo
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(index, 1);
  res.status(200).json({ message: `Todo ${id} deleted successfully` });
});

// handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// start
app.listen(PORT, () => {
  console.log(`✅ Todo API running at http://localhost:${PORT}`);
});
