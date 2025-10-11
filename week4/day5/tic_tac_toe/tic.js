//get elements
const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const messageEl = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

let isCircleTurn = false;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGame();

restartBtn.addEventListener("click", startGame);

function startGame() {
  isCircleTurn = false;
  cells.forEach(cell => {
    cell.classList.remove("x");
    cell.classList.remove("circle");
    cell.textContent = "";
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  messageEl.textContent = "";
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = isCircleTurn ? "circle" : "x";

  placeMark(cell, currentClass);

  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function endGame(draw) {
  if (draw) {
    messageEl.textContent = "Draw! 🤝";
  } else {
    messageEl.textContent = `${isCircleTurn ? "O" : "X"} Wins! 🎉`;
  }
  cells.forEach(cell => cell.removeEventListener("click", handleClick));
}

function isDraw() {
  return [...cells].every(cell => cell.classList.contains("x") || cell.classList.contains("circle"));
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
  cell.textContent = currentClass === "x" ? "X" : "O";
}

function swapTurns() {
  isCircleTurn = !isCircleTurn;
}

function setBoardHoverClass() {
  board.classList.remove("x");
  board.classList.remove("circle");
  board.classList.add(isCircleTurn ? "circle" : "x");
}

function checkWin(currentClass) {
  return winningCombinations.some(combination => {
    return combination.every(index => cells[index].classList.contains(currentClass));
  });
}
