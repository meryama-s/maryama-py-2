const express = require("express");
const app = express();
const PORT = 5000;

//middleware to parse JSON request bodies
app.use(express.json());

//*data
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", publishedYear: 1988 },
  { id: 2, title: "Atomic Habits", author: "James Clear", publishedYear: 2018 },
  { id: 3, title: "1984", author: "George Orwell", publishedYear: 1949 },
];

// todo routes

// !READ ALL
app.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

// !READ ONE
app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

// !CREATE
app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res
      .status(400)
      .json({ message: "Title, author, and publishedYear are required" });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// !UPDATE
app.put("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const { title, author, publishedYear } = req.body;

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;
  if (publishedYear) book.publishedYear = publishedYear;

  res.status(200).json(book);
});

// !DELETE 
app.delete("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const index = books.findIndex((b) => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);
  res.status(200).json({ message: "Book deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
