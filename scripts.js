// sets base score for each player
let playerScore = 0;
let compScore = 0;

// creates and appends elements to the DOM to be updated
const playerScoreContainer = document.querySelector('#player-score');
const playerScoreContent = document.createElement('div');
playerScoreContent.classList.add('playerScoreContent');
playerScoreContainer.appendChild(playerScoreContent);

const compScoreContainer = document.querySelector('#comp-score');
const compScoreContent = document.createElement('div');
compScoreContent.classList.add('compScoreContent');
compScoreContainer.appendChild(compScoreContent);

// default UI text
playerScoreContent.textContent = "Player: "
compScoreContent.textContent = "Computer: "

const roundWinnerContainer = document.querySelector('#round-results');

const roundWinnerContent = document.createElement('div');
roundWinnerContent.classList.add('roundWinnerContent');

roundWinnerContainer.appendChild(roundWinnerContent)

// default UI text
roundWinnerContent.textContent = "Click a button to play."

function getComputerChoice() {
    // Randomly returns either Rock, Paper, or Scissors
    let randNum = Math.floor(Math.random() * 100);
    let move;

    if (randNum >= 0 && randNum <= 33) {
        move = "rock";
    } else if (randNum >= 34 && randNum <= 66) {
        move = "paper";
    } else {
        move = "scissors";
    }

    return move;
}

function getPlayerChoice() {
    // Prompt the player for a choice between Rock, Paper, or Scissors

    const rockBtn = document.getElementById('choice-rock');
    rockBtn.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });

    const paperBtn = document.getElementById('choice-paper');
    paperBtn.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    const scissorsBtn = document.getElementById('choice-scissors');
    scissorsBtn.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });
}

function displayScore(outcome) {

    // boolean true is a win, loss is false
    if (outcome) {
        playerScoreContent.textContent = `Player: ${++playerScore}`
    } else {
        compScoreContent.textContent = `Computer: ${++compScore}`
    }
}

function playRound(playerSelection, computerSelection) {
    // plays a SINGLE round of RPS, returns a string that declares the winner

    let isWinner;
    let tie = false;

    if (playerSelection === "rock" && computerSelection === "scissors") {
        isWinner = true;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        isWinner = true;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        isWinner = true;
    } else if (playerSelection === computerSelection) {
        tie = true;
    } else {
        isWinner = false;
    }


    if (tie) {
        console.log("Tie");
        roundWinnerContent.textContent = `Tie! - You both played ${playerSelection}`;
        // TODO advance round number?
    } else if (isWinner) {
        console.log("Win");
        roundWinnerContent.textContent = `You Win! - ${playerSelection} beats ${computerSelection}`;
        displayScore(isWinner);
    } else {
        console.log("Lose");
        roundWinnerContent.textContent = `You Lose - ${playerSelection} beats ${computerSelection}`;
        displayScore(isWinner);
    }

    roundWinnerContainer.appendChild(roundWinnerContent);

    checkWinner();
}

function checkWinner() {
    if (playerScore >= 5) {
        roundWinnerContent.textContent = "You won 5 rounds Congratulations!"

    } else if (compScore >= 5) {
        roundWinnerContent.textContent = "The computer won 5 rounds, you lose."
    }
}

window.addEventListener('load', getPlayerChoice);
