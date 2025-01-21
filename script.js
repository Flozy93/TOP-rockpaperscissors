let computerScore = 0;
let humanScore = 0;
let round = 0;

function getComputerChoice() {
  const play = Math.floor(Math.random() * 3);
  switch (play) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// function getHumanChoice() {
//   let play;
//   do {
//     play = prompt("Rock, paper, or scissors?").toLowerCase();
//   } while (!["rock", "paper", "scissors"].includes(play));
//   return play;
// }

function playRound(computerChoice, humanChoice) {
  if (computerScore === 5 || humanScore === 5) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    showWinner();
  }

  // Computer chooses rock

  if (computerChoice === "rock" && humanChoice === "rock") {
    result.innerHTML = "Tie! No points awarded";
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    humanScore++;
    result.innerHTML = "You win! You get 1 point.";
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    result.innerHTML = "You lose! The computer gets 1 point.";
  }

  // Computer chooses paper

  if (computerChoice === "paper" && humanChoice === "paper") {
    result.innerHTML = "Tie! No points awarded";
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    humanScore++;
    result.innerHTML = "You win! You get 1 point.";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    result.innerHTML = "You lose! The computer gets 1 point.";
  }

  // Computer chooses scissors

  if (computerChoice === "scissors" && humanChoice === "scissors") {
    result.innerHTML = "Tie! No points awarded";
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    humanScore++;
    result.innerHTML = "You win! You get 1 point.";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    result.innerHTML = "You lose! The computer gets 1 point.";
  }
}

function showScore() {
  score.innerHTML =
    "The score is: Computer " +
    computerScore +
    " point(s). Human " +
    humanScore +
    " point(s).";
}

function showWinner() {
  if (humanScore > computerScore) {
    finalScore.innerHTML =
      "Congratulations! You have won the game on a score of " +
      humanScore +
      " to " +
      computerScore;
  } else if (humanScore < computerScore) {
    finalScore.innerHTML =
      "Sorry! You have lost the game on a score of " +
      humanScore +
      " to " +
      computerScore;
  } else
    finalScore.innerHTML =
      "This is a tie! Final score is " + humanScore + " - " + computerScore;
}

function resetGame() {
  computerScore = 0;
  humanScore = 0;
  round = 0;
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
}

function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let resetButton = document.querySelector("#reset");
let result = document.getElementById("result");
let score = document.getElementById("score");
let finalScore = document.getElementById("final_score");

rockButton.addEventListener("click", () => {
  playRound(getComputerChoice(), "rock");
  showScore();
});

paperButton.addEventListener("click", () => {
  playRound(getComputerChoice(), "paper");
  showScore();
});

scissorsButton.addEventListener("click", () => {
  playRound(getComputerChoice(), "scissors");
  showScore();
});

resetButton.addEventListener("click", () => {
  resetGame();
  clearBox("result");
  clearBox("score");
  clearBox("final_score");
});
