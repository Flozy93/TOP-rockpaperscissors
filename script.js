
let computerScore = 0;
let humanScore = 0;
let round = 0;

function getComputerChoice(){
    const play = Math.floor(Math.random() * 3);
    switch (play) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getHumanChoice(){
    let play;
    do {
        play = prompt("Rock, paper, or scissors?").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(play));
    return play;
}

function playRound(computerChoice, humanChoice){

    // Computer chooses rock

    if (computerChoice === "rock" && humanChoice === "rock") {
        return console.log("Tie! No points awarded");
    } 
    else if (computerChoice === "rock" && humanChoice === "paper"){
        humanScore++;
        return console.log("You win! You get 1 point." )
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return console.log("You lose! The computer gets 1 point.");
    }

    // Computer chooses paper

    if (computerChoice === "paper" && humanChoice === "paper") {
        return console.log("Tie! No points awarded");
    } 
    else if (computerChoice === "paper" && humanChoice === "scissors"){
        humanScore++;
        return console.log("You win! You get 1 point." )
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return console.log("You lose! The computer gets 1 point.");
    }

    // Computer chooses scissors

    if (computerChoice === "scissors" && humanChoice === "scissors") {
        return console.log("Tie! No points awarded");
    } 
    else if (computerChoice === "scissors" && humanChoice === "rock"){
        humanScore++;
        return console.log("You win! You get 1 point." )
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return console.log("You lose! The computer gets 1 point.");
    }

}

function showScore(){
    return console.log("The score is: Computer " + computerScore + " point(s). Human " + humanScore + " point(s).");
}

function showWinner(){
    if (humanScore > computerScore) {
        return console.log("Congratulations! You have won the game on a score of " + humanScore + " to " + computerScore);
    } else if (humanScore < computerScore) {
        return console.log("Sorry! You have lost the game on a score of " + humanScore + " to " + computerScore);
    }
    else return console.log("This is a tie! Final score is " + humanScore + " - " + computerScore);
}

while (round < 5) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    showScore();
    round = round + 1;
    if (round === 4) {
        showWinner();
    }
}








