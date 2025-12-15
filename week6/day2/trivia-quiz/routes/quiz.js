const express = require("express");
const router = express.Router();

// Hardcoded trivia questions
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// Game state 
let currentQuestionIndex = 0;
let score = 0;

//quiz/score
 //Show final score
router.get("/", (req, res) => {
  currentQuestionIndex = 0;
  score = 0;

  res.json({
    message: "Quiz started!",
    question: triviaQuestions[currentQuestionIndex].question,
  });
});

/**
 * POST /quiz
 * Submit answer & move to next question
 */
router.post("/", (req, res) => {
  const { answer } = req.body;

  if (!answer) {
    return res.status(400).json({ message: "Answer is required" });
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  // check answer
  if (
    answer.toLowerCase() === currentQuestion.answer.toLowerCase()
  ) {
    score++;
    feedback = "Correct answer ✅";
  } else {
    feedback = `Wrong ❌. Correct answer: ${currentQuestion.answer}`;
  }

  currentQuestionIndex++;

  // check if quiz finished
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      message: feedback,
      quizFinished: true,
      score,
      total: triviaQuestions.length,
    });
  }

  res.json({
    message: feedback,
    nextQuestion: triviaQuestions[currentQuestionIndex].question,
  });
});

// GET /quiz/score
  //Show final score
router.get("/score", (req, res) => {
  res.json({
    score,
    total: triviaQuestions.length,
  });
});

module.exports = router;
