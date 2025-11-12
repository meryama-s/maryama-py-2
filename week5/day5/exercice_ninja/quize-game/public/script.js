let questions = [];
let currentIndex = 0;
let score = 0;

const quizDiv = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const scoreDiv = document.getElementById("score");

// Fetch questions from server
fetch("/api/questions")
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  if (currentIndex >= questions.length) {
    quizDiv.innerHTML = `<h2>Quiz Finished!</h2><p>Your score: ${score}/${questions.length}</p>`;
    nextBtn.style.display = "none";
    return;
  }

  const q = questions[currentIndex];
  quizDiv.innerHTML = `
    <h2>${q.question}</h2>
    <div id="options">
      ${q.options.map(opt => `<button class="option">${opt}</button>`).join("")}
    </div>
    <p id="feedback"></p>
  `;

  document.querySelectorAll(".option").forEach(button => {
    button.addEventListener("click", () => {
      if (button.textContent === q.answer) {
        document.getElementById("feedback").textContent = "✅ Correct!";
        score++;
      } else {
        document.getElementById("feedback").textContent = `❌ Wrong! Correct: ${q.answer}`;
      }
      document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
    });
  });
}

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex++;
  showQuestion();
});
