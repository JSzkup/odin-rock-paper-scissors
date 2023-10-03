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

    const roundWinnerContainer = document.querySelector('#round-results');

    const roundWinnerContent = document.createElement('div');
    roundWinnerContent.classList.add('roundWinnerContent');

    if (tie) {
        console.log("Tie");
        roundWinnerContent.textContent = `Tie! - You both played ${playerSelection}`;
        // return `Tie! - You both played ${playerSelection}`;
    } else if (isWinner) {
        console.log("Win");
        roundWinnerContent.textContent = `You Win! - ${playerSelection} beats ${computerSelection}`;
        // return `You Win! - ${playerSelection} beats ${computerSelection}`;
    } else {
        console.log("Lose");
        roundWinnerContent.textContent = `You Win! - ${playerSelection} beats ${computerSelection}`;
        // return `You Lose! - ${computerSelection} beats ${playerSelection}`;
    }

    roundWinnerContainer.appendChild(roundWinnerContent);

}

function game() {
    // Plays 5 rounds in a loop keeping score, then prints the results into console

    let winCount = 0;

    // for (let round = 0; round < 5; round++) {
    //     let currentRound = playRound(getPlayerChoice(), getComputerChoice());

    //     console.log(currentRound);

    //     if (currentRound.includes("Win!")) {
    //         ++winCount;
    //     } else if (currentRound.includes("Tie!")) {
    //         --round;
    //     }

    // }

    // const result = document.createElement('div');
    // result.classList.add('result');

    // if (5 - winCount <= 2) {
    //     result.textContent = "You won the match!";
    // } else {
    //     result.textContent = "You lost the match.";
    // }
}

// TODO research if this is necessary
window.addEventListener('load', getPlayerChoice);
// immediately plays a losing round on page load
// window.addEventListener('load', playRound);
