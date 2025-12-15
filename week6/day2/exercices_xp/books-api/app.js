const express = require("express");
const app = express();

const booksRouter = require("./routes/books");

const PORT = 3000;

// middleware to parse JSON
app.use(express.json());

// mount router
app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
