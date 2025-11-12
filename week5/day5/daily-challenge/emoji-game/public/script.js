let currentCorrect = "";
let score = 0;

async function loadEmoji() {
  const res = await fetch("/api/emoji");
  const data = await res.json();

  document.getElementById("emoji").textContent = data.emoji;
  currentCorrect = data.correct;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  data.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => makeGuess(option);
    optionsDiv.appendChild(btn);
  });
}

async function makeGuess(choice) {
  const res = await fetch("/api/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ guess: choice, correct: currentCorrect }),
  });

  const result = await res.json();
  document.getElementById("feedback").textContent = result.message;
  score = result.score;
  document.getElementById("score").textContent = `Score: ${score}`;
  setTimeout(loadEmoji, 1000);
}

loadEmoji();
