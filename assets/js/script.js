
document.addEventListener("DOMContentLoaded", function()) {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});

/**
 * The main game "Loop", called when the script is first loaded
 * and after the user's anser has been proceesed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType} `);
        throw (`Unknown game type: ${gameType}. Aborting! `);

    }
    runGame(calculatedAnswer[1]);
}
/**
 * Checks the answer againstthe first element in
 * the returned calculateCorrectAnswer Array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    
    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awww you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongScore();
        }

}
/**
 * Gets the operands (the numbers) and the operator (plus, minus, multiplt, etc)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2], "addition"];
    } else {
        alert(`Unimplemented operator: ${operator} )`;
        throw (`Unimplemented operator; ${operator}. Aborting! `);
    }
}
/**
 * Gets the current score from the DOM and increments by 1
 */
function incrementScore() {

    oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldscore;

}
/**
 * Gets the tally of incorrect anwsers from the DOM and increments by 1
 */
function incrementWrongScore() {

    oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldscore;

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySuntractionQuestion() {

}

function displayMultiplyQuestion() {

}

runGame()