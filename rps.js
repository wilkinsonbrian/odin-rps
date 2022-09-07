let compChoice = "";
let userChoice = "";
let userScore = 0;
let compScore = 0;
let remove = false;

function removeListeners() {
    const butts = document.querySelectorAll('button');
    butts.forEach(butt => butt.removeEventListener('click', getUserChoice));
}
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    compChoice = choices[Math.floor(Math.random() * choices.length)];
}

function updateScore() {
    const resultDiv = document.querySelector('.results');
    if (userScore == 5) {
        resultDiv.textContent = "Game Over: You beat the computer."
        removeListeners();
    }
    if (compScore == 5) {
        resultDiv.textContent = "Game Over: The computer beat you."
        removeListeners();
    }
    const player = document.querySelector(".pScoreValue");
    const computer = document.querySelector(".cScoreValue");
    player.textContent = userScore;
    computer.textContent = compScore;
}

function playRound(playerChoice, computerChoice) {
    const result1 = "Paper beats Rock.";
    const result2 = "Scissors beats Paper.";
    const result3 = "Rock beats Scissors.";

    const resultDiv = document.querySelector('.results');
    


    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock" && computerChoice == "paper") {
        resultDiv.textContent = "You lose! " + result1;
        compScore++;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        resultDiv.textContent = "You win! " + result3;
        userScore++;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        resultDiv.textContent = "You lose! " + result2;
        compScore++;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        resultDiv.textContent = "You win! " + result1;
        userScore++;
    } else if (playerChoice == "scissores" && computerChoice == "rock") {
        resultDiv.textContent = "You lose! " + result3;
        compScore++;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        resultDiv.textContent = "You win! " + result2;
        userScore++; 
    } else {
        resultDiv.textContent = "It's a tie. You both chose " + playerChoice;
    }

    updateScore();
}

function getUserChoice() {
    if (userScore == 5 || compScore == 5) return;
    userChoice = this.value;
    getComputerChoice();
    playRound(userChoice, compChoice);

}

function game() {

    const butts = document.querySelectorAll('button');

    butts.forEach(butt => butt.addEventListener('click', getUserChoice));
    
}

game();