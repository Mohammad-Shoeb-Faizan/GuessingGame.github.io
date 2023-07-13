const maxNumber = 20;
const maxTries = 10;
let randomNumber, tries, score;

function initializeGame() {
  randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  tries = maxTries;
  score = 0;

  document.getElementById("guessInput").disabled = false;
  document.getElementById("triesCount").textContent = tries;
  document.getElementById("scoreCount").textContent = score;
  document.getElementById("result").textContent = "";
  document.getElementById("tryAgain").textContent = "";
}

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const result = document.getElementById("result");
  const tryAgain = document.getElementById("tryAgain");

  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > maxNumber) {
    result.textContent =
      "Please enter a valid number between 1 and " + maxNumber + ".";
    result.style.color = "red";
  } else {
    tries--;

    if (userGuess === randomNumber) {
      score++;
      result.textContent = "Congratulations! You guessed the number!";
      result.style.color = "green";

      if (score === maxNumber) {
        tryAgain.textContent =
          "Congratulations! You have guessed all the numbers. Play again?";
        tryAgain.style.color = "green";
        document.getElementById("guessInput").disabled = true;
      } else {
        tryAgain.textContent = "Great job! Try guessing the next number.";
        tryAgain.style.color = "green";
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
      }
    } else if (userGuess < randomNumber) {
      result.textContent = "Too low! Try again.";
      result.style.color = "red";
    } else {
      result.textContent = "Too high! Try again.";
      result.style.color = "red";
    }

    if (tries === 0) {
      guessInput.disabled = true;
      tryAgain.textContent =
        "Out of tries! The number was " + randomNumber + ". Try again?";
      tryAgain.style.color = "red";
    }
  }

  document.getElementById("triesCount").textContent = tries;
  document.getElementById("scoreCount").textContent = score;

  guessInput.value = "";
  guessInput.focus();
}

document.getElementById("submitBtn").addEventListener("click", checkGuess);
document
  .getElementById("tryAgainBtn")
  .addEventListener("click", initializeGame);

initializeGame();
