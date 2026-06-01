let humanScore = 0;
let computerScore = 0;

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
        switch(humanChoice) {
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
    const msg = document.querySelector(".msg");
    
    switch(winner) {
        case "draw":
            msg.textContent = `It's a draw! You both picked ${humanChoice}`;
            msg.style.backgroundColor = "#7b3fe4";
            msg.style.color = "white"
            break;
        case "human":
            msg.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            msg.style.backgroundColor = "#1db860";
            msg.style.color = "black"
            break;
        case "computer":
            msg.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
            msg.style.backgroundColor = "#e8322a";
            msg.style.color = "white"
            break;
    }   
}

function printGameWinner(humanScore, computerScore){
    const game = document.querySelector(".game");
    game.style.display = "none";

    const endScreen = document.querySelector(".end-screen");
    endScreen.style.display = "flex";

    const finalScore = document.querySelector(".final-score")
    finalScore.textContent = `YOU ${humanScore} - CPU ${computerScore}`

    if (humanScore > computerScore) {
        endScreen.style.backgroundColor = "#1db860";
        endScreen.style.color = "black";

        const finalMessage = document.querySelector(".final-message");
        finalMessage.textContent = "YOU WON THE GAME!"

        const resultImage = document.querySelector(".result-image");
        resultImage.src = "img/win.png";
        resultImage.alt = "thumbs-up";
    } else {
        endScreen.style.backgroundColor = "#e8322a";
        endScreen.style.color = "white";

        const finalMessage = document.querySelector(".final-message");
        finalMessage.textContent = "YOU LOST THE GAME!"

        const resultImage = document.querySelector(".result-image");
        resultImage.src = "img/lose.png";
        resultImage.alt = "thumbs-down";
    }
}

function addPoint(winner) {
    if (winner === "draw") return;
    else if (winner === "human"){
        humanScore++;
        const score = document.querySelector(".human-score");
        score.textContent = humanScore;
    } else {
        computerScore++;
        const score = document.querySelector(".cpu-score");
        score.textContent = computerScore;
    }
}


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    let winner = determineWinner(humanChoice, computerChoice);
    printRoundWinner(humanChoice, computerChoice, winner);

    addPoint(winner);
            
    setTimeout ( () => {
        const msg = document.querySelector(".msg");
        msg.textContent = "Choose your weapon!";
        msg.style.backgroundColor = "black";
        msg.style.color = "#f5c200";
        }, 800);

    if (humanScore === 5 || computerScore === 5) {

        const scoreHuman = document.querySelector(".human-score");
        scoreHuman.textContent = "0";

        const scoreCPU = document.querySelector(".cpu-score");
        scoreCPU.textContent = "0";

        printGameWinner(humanScore, computerScore)

        humanScore = 0;
        computerScore = 0;
    }
}

const paperBtn = document.querySelector(".paper-button");
const scissorsBtn = document.querySelector(".scissors-button");
const rockBtn = document.querySelector(".rock-button");
const playBtn = document.querySelector(".play-again");

paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
rockBtn.addEventListener("click", () => playRound("rock"));
playBtn.addEventListener("click", () => {
    const game = document.querySelector(".game");
    game.style.display = "flex";

    const endScreen = document.querySelector(".end-screen");
    endScreen.style.display = "none";
})
