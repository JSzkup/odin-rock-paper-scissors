function getComputerChoice() {
    // Randomly returns either Rock, Paper, or Scissors
    let randNum = Math.floor(Math.random() * 100);
    let move;

    if (randNum >= 0 && randNum <= 33) {
        move = "rock"
    } else if (randNum >= 34 && randNum <= 66) {
        move = "paper"
    } else {
        move = "scissors"
    }

    return move;
}

function getPlayerChoice() {
    // Prompt the player for a choice between Rock, Paper, or Scissors
    return String(prompt("What is your choice?: (Rock, Paper, Scissors").toLowerCase());
}

function playRound(playerSelection, computerSelection) {
    // plays a SINGLE round of RPS, returns a string that declares the winner

    let isWinner;

    if (playerSelection === "rock" && computerSelection === "scissors") {
        isWinner = True;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        isWinner = True;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        isWinner = True;
    } else {
        isWinner = False;
    }

    if (isWinner) {
        return `You Win! - ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! - ${computerSelection} beats ${playerSelection}`;
    }

}

function game() {
    // Plays 5 rounds in a loop keeping score, then prints the results into console

    playRound(getPlayerChoice(), getComputerChoice());
}

