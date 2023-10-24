const player1Roll = document.querySelector(".player1Roll");
const player2Roll = document.querySelector(".player2Roll");
const target = document.querySelector(".target");
const btnTarget = document.querySelector(".btnTarget");
const btnRest = document.querySelector(".btnRest");
const player1Score = document.querySelector(".player1Score");
const player2Score = document.querySelector(".player2Score");
let winingValue = 0;
let palyer1ScoreVal = 0;
let palyer2ScoreVal = 0;

player1Roll.addEventListener("click", () => {
  palyer1ScoreVal += Math.floor(Math.random() * 10) + 1;
  player1Score.innerHTML = palyer1ScoreVal;
  isWinner();
});
player2Roll.addEventListener("click", () => {
  palyer2ScoreVal += Math.floor(Math.random() * 10) + 1;
  player2Score.innerHTML = palyer2ScoreVal;
  isWinner();
});

btnTarget.addEventListener("click", () => {
  winingValue = getRndom();
  target.innerHTML = "Wining target value is " + winingValue;
});

btnRest.addEventListener("click", () => {
  reset();
});

function getRndom() {
  const val = Math.floor(Math.random() * 100) + 1;
  if (val <= 20 && val >= 10) {
    return val;
  } else {
    return getRndom();
  }
}
function isWinner() {
  if (winingValue <= palyer1ScoreVal) {
    alert("Player 1 is Winner!! Player 1 Score " + palyer1ScoreVal);
    reset();
  } else if (winingValue <= palyer2ScoreVal) {
    alert("Player 2 is Winner!! Player 2 Score " + palyer2ScoreVal);
    reset();
  }
}
function reset() {
  target.innerHTML = "";
  winingValue = 0;
  palyer1ScoreVal = 0;
  palyer2ScoreVal = 0;
  player1Score.innerHTML = palyer1ScoreVal;
  player2Score.innerHTML = palyer2ScoreVal;
}
