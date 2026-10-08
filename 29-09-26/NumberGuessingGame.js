"use strict";

const input = document.querySelector(".inp");
const checkButton = document.querySelector(".check");
const message = document.querySelector(".guess-text");
const pointsDisplay = document.querySelector(".points");

const secretNumber = Math.floor(Math.random() * 20) + 1;
let points = 10;

console.log(secretNumber);

input.min = "1";
input.max = "20";
input.step = "1";

function checkGuess() {
    const guess = Number(input.value);

    if (input.value === "") {
        message.textContent = "Enter a number from 1 to 20.";
        return;
    }

    if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
        message.textContent = "Your guess must be a whole number from 1 to 20.";
        return;
    }

    if (guess === secretNumber) {
        message.textContent = "Correct! You guessed the number.";
        checkButton.disabled = true;
        input.disabled = true;
        return;
    }

    points -= 1;
    pointsDisplay.textContent = `Points: ${points}`;

    if (points === 0) {
        message.textContent = `No points left. The number was ${secretNumber}.`;
        checkButton.disabled = true;
        input.disabled = true;
    } else if (guess < secretNumber) {
        message.textContent = "Too low. Try again.";
    } else {
        message.textContent = "Too high. Try again.";
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
