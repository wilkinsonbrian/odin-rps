function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
    const result1 = "Paper beats Rock.";
    const result2 = "Scissors beats Paper.";
    const result3 = "Rock beats Scissors.";

    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! " + result1);
        return 0;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! " + result3);
        return 1;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! " + result2);
        return 0;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("You win! " + result1);
        return 1;
    } else if (playerChoice == "scissores" && computerChoice == "rock") {
        console.log("You lose! " + result3);
        return 0;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! " + result2);
        return 1; 
    } else {
        console.log("It's a tie. You both chose " + playerChoice);
        return 2;
    }
}

function getUserChoice() {
    while (true) {
        let user = prompt("Do you choose rock, paper, or scissors?");
        user = user.toLowerCase();
        if (user == "rock" || user == "paper" || user == "scissors") {
            return user;
        }
        console.log("That is not a valid answer.");
    }
    
}

function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i=0; i<5; i++) {
        let user = getUserChoice();
        let computer = getComputerChoice();
        let winner = playRound(user, computer);
        if (winner == 1) {
            userScore++;
        } else if (winner == 0) {
            compScore++;
        }
    }
    console.log("You won " + userScore + " games, and the computer won " + compScore + " games.");
    
}

game();