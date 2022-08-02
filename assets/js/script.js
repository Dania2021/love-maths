//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listener to them
document.addEventListener("DOMContentLoaded", function() {
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
 * The main game 'loop', called when the script is first loaded
 * after the user's answer has been processed
 */
function runGame(gameType) {
    //Create two random numbers between 1 and 25
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if (gameType === "addition")
{
    displayAdditionQuestion(num1, num2);
} else if(gameType === "multiplication") {
    displayMultipyQuestion(num1, num2);
}
else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType} .Aborting!`;
  }
}
/**Check the answer against the first element
 * then return calculate correct answer array
 */
function checkAnswer() {
let userAnswer = parseInt(document.getElementById('answer-box').value);
let calculatedAnswer = calculateCorrectAnswer();
let isCorrect = userAnswer === calculatedAnswer[0];
if(isCorrect) {
  alert('Hey you got it Right! :D');
  incrementScore();
} else {
  alert(`Aww.... you answer ${userAnswer}. and  the correct answer was ${calculatedAnswer[0]}!`);
  incrementWrongAnswer();
}
runGame(calculatedAnswer[1]);
}

/**Get the operands (the numbers) and the operator (plus, minus etc.) 
 * directly from the DOM, and returns the correct answer.
 */
 
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById('operand1').innerText);
  let operand2 = parseInt(document.getElementById('operand2').innerText);
  let operator = document.getElementById('operator').innerText;

  if(operator === '+') {
    return [operand1 + operand2, 'addition'];
  } else if(operator === 'x') {
    return[operand1 * operand2, 'multiplication'];
    }
  else {
    alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator} .Aborting!`;
  }

}

/**
 * Get the cuurent score from the DOM and increment it by 1
 */
function incrementScore() {
   let oldScore = parseInt(document.getElementById('score').innerText);
   document.getElementById('score').innerText = ++oldScore;
}

/**
 * Get the tally of incorrect score from the DOM and increment it by 1
 */
function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById('incorrect').innerText = ++oldScore;
}


function displayAdditionQuestion(operand1, operand2) {
document.getElementById("operand1").textContent = operand1;
document.getElementById("operand2").textContent = operand2;
document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
  
}

function displayMultipyQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
   
}

function displayDivideQuestion() {
    
}