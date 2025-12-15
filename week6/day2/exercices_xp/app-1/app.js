const express = require("express");
const app = express();

//import router
const routes = require("./routes");

const PORT = 3000;

app.use(express.json());

//mount routes
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
