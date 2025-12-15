const express = require("express");
const postsRoutes = require("./routes/posts.routes");

const app = express();

app.use(express.json());

app.use("/posts", postsRoutes);

module.exports = app;
