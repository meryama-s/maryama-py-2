const express = require("express");
const router = express.Router();

// In-memory database
const books = [];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// POST add a new book
router.post("/", (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update a book by id
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;

  res.json(book);
});

// DELETE a book by id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);
  res.json({ message: "Book deleted" });
});

module.exports = router;
