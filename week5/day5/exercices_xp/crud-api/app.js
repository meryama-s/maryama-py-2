// app.js

const express = require("express");
const { fetchPosts } = require("./data/dataService");

const app = express();
const PORT = 5000;

// !Middleware to parse JSON
app.use(express.json());

// !Home route 
app.get("/", (req, res) => {
  res.send("Welcome to the CRUD API with Express & Axios!");
});

//! GET
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data successfully retrieved and sent.");
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error retrieving posts:", error.message);
    res.status(500).json({ message: "Failed to retrieve posts" });
  }
});

//start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
