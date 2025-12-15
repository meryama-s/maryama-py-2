const { posts, createPost } = require("../models/post.model");

// GET /posts
exports.getAllPosts = (req, res) => {
  res.json(posts);
};

// GET /posts/:id
exports.getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
};

// POST /posts
exports.createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newPost = createPost(title, content);
  posts.push(newPost);

  res.status(201).json(newPost);
};

// PUT /posts/:id
exports.updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  post.title = title;
  post.content = content;

  res.json(post);
};

// DELETE /posts/:id
exports.deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  posts.splice(index, 1);
  res.json({ message: "Post deleted" });
};
