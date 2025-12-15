const express = require("express");
const router = express.Router();


const todos = [];

// GET all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// POST add new todo
router.post("/", (req, res) => {
  const { title } = req.body;

  const newTodo = {
    id: todos.length + 1,
    title: title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT update todo by id
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// DELETE todo by id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(index, 1);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
