function getRandomNumberBetweenZeroAndTwo() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let computerChoice;
    let ranNum = getRandomNumberBetweenZeroAndTwo();
    switch(ranNum) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper"
            break;
        case 2:
            computerChoice = "scissors"
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?", "Paper").toLowerCase();
}

function determineWinner(humanChoice, computerChoice) {
    let winner;

    if (computerChoice === "rock") {
        switch(humanChoice) {
            case "paper":
                winner = "human";
                break;
            case "rock":
                winner = "draw";
                break;
            case "scissors":
                winner = "computer";
                break;
        }
    } else if (computerChoice === "paper") {
        switch(humanChoice) {
            case "paper":
                winner = "draw";
                break;
            case "rock":
                winner = "computer";
                break;
            case "scissors":
                winner = "human";
                break;
        }
    } else {
        switch(computerChoice) {
            case "paper":
                winner = "computer";
                break;
            case "rock":
                winner = "human";
                break;
            case "scissors":
                winner = "draw";
                break;
        }
    }

    return winner;
}

function printRoundWinner(humanChoice, computerChoice, winner) {
    switch(winner) {
        case "draw":
            console.log(`It's a draw! You both picked ${humanChoice}.`);
            break;
        case "human":
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            break;
        case "computer":
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            break;
    }   
}

function printGameWinner(humanScore, computerScore){
    if (humanScore === computerScore) {
        console.log(`The game is a draw! You both scored ${humanScore}`);
    } else if (humanScore > computerScore) {
        console.log(`You won the game! ${humanScore} to ${computerScore}`);
    } else {
        console.log(`You lost the game! ${humanScore} to ${computerScore}`);
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let winner = determineWinner(humanChoice, computerChoice);
        printRoundWinner(humanChoice, computerChoice, winner);
    
        if (winner === "human") {
            humanScore++;
        }

        if (winner === "computer") {
            computerScore++;
        }
    }

    for (let i = 1; i <= 5; i++) {
        playRound();
    }

    printGameWinner(humanScore, computerScore);
}

playGame();
