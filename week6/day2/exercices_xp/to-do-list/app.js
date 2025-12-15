const express = require("express");
const app = express();

const todosRouter = require("./routes/todos");

const PORT = 3000;

// middleware to read JSON body
app.use(express.json());

// mount router
app.use("/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
