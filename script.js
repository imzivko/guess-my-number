"use strict";
/**/

console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉Correct Number!";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 0;
document.querySelector(".score").textContent = 0;

document.querySelector(".guess").value = 0;
console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(typeof guess, guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'Not a valid Number! ⛔';

    // DRY principle
    displayMessage("Not a valid Number! ⛔");

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b374";
    document.querySelector("body").style.transition = "0.7s";
    document.querySelector(".number").style.width = "100%";
    document.querySelector(".number").style.color = "#60b374";
    document.querySelector(".number").style.transition = "0.7s";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High 📈" : "Too Low 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose! 🧨";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.transition = "0.2s";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.color = "#333";
});
