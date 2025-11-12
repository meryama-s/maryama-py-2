const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(express.json()); // to parse JSON request bodies

// Base URL for JSONPlaceholder
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

//routes

// READ ALL POSTS
app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

// READ SINGLE POST
app.get("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${BASE_URL}/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching post:", error.message);
    res.status(500).json({ message: "Failed to fetch post" });
  }
});

// CREATE POST
app.post("/api/posts", async (req, res) => {
  try {
    const newPost = req.body;
    const response = await axios.post(BASE_URL, newPost);
    res.status(201).json({
      message: "Post created successfully",
      post: response.data,
    });
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ message: "Failed to create post" });
  }
});

// UPDATE
app.put("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
    res.status(200).json({
      message: "Post updated successfully",
      updatedPost: response.data,
    });
  } catch (error) {
    console.error("Error updating post:", error.message);
    res.status(500).json({ message: "Failed to update post" });
  }
});

// DELETE
app.delete("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`${BASE_URL}/${id}`);
    res.status(200).json({ message: `Post ${id} deleted successfully` });
  } catch (error) {
    console.error("Error deleting post:", error.message);
    res.status(500).json({ message: "Failed to delete post" });
  }
});

//start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
