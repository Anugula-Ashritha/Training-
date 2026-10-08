"use strict";
const input = document.querySelector(".inp");
const checkButton = document.querySelector(".check");
const guessText = document.querySelector(".guess-text");
const pointsDisplay = document.querySelector(".points");
const Restart = document.querySelector(".restart");
const Score = document.querySelector(".high-score");

const ran = Math.floor(Math.random() * 20) + 1;
let points = 10;

console.log(run);

input.min = "1";
input.max = "20";
input.step = "1";

function checkGuess() {
	const guess = Number(input.value);


	if (guess === ran) {
		guessText.textContent = "Correct! You guessed the number.";
		// checkButton.disabled = true;
		// input.disabled = true;
		// return;
	}

	points -= 1;
	pointsDisplay.textContent = `Points: ${points}`;

	if (points === 0) {
		guessText.textContent = `No points left. The number was ${ran}.`;
		checkButton.disabled = true;
		input.disabled = true;
	} else if (guess < ran) {
		guessText.textContent = "Too low. Try again.";
	} else {
		guessText.textContent = "Too high. Try again.";
	}

	input.value = "";
	input.focus();
}

checkButton.addEventListener("click", checkGuess);
input.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		checkGuess();
	}
});

