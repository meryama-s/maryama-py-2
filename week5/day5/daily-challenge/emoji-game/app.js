// app.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // serve frontend

// data
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🎸", name: "Guitar" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "⚽", name: "Soccer Ball" },
];

let leaderboard = [];
let playerScore = 0;

// Helper to pick random items
function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[randomIndex];

  // generate 3 random options + correct one
  let options = emojis
    .filter((e) => e.name !== correctEmoji.name)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map((e) => e.name);

  options.push(correctEmoji.name);
  options.sort(() => 0.5 - Math.random());

  return { emoji: correctEmoji.emoji, correct: correctEmoji.name, options };
}

//routes

// Get a random emoji question
app.get("/api/emoji", (req, res) => {
  const question = getRandomEmoji();
  res.json(question);
});

// Check the player’s answer
app.post("/api/guess", (req, res) => {
  const { guess, correct } = req.body;

  let result;
  if (guess === correct) {
    playerScore++;
    result = { correct: true, message: "✅ Correct!", score: playerScore };
  } else {
    result = { correct: false, message: "❌ Wrong! Try again.", score: playerScore };
  }

  res.json(result);
});

// Leaderboard
app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`🎮 Emoji Game running at http://localhost:${PORT}`);
});
