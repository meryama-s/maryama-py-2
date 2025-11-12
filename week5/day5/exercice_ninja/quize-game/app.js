const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Sample questions
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    id: 2,
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    id: 3,
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
];

// API endpoint to get all questions
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`✅ Quiz Game server running at http://localhost:${PORT}`);
});
