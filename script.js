function getComputerChoice() {
    let computerChoice;
    let n = Math.random()*3;
    n = Math.floor(n);
    switch (n) {
        case 0:
            computerChoice = "scissors";
            break;
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        default:
            computerChoice = "error";
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    setPlayerChoice(playerSelection);
    setComputerChoice(computerSelection);
    incrementMatchNumber();
    updateUI();
    console.log(`Match number ${game.matchNumber}`);
    console.log(`Player's choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);
    if(playerSelection == computerSelection){
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper")  ||
            (playerSelection == "paper" && computerSelection == "rock")){
        incrementPlayerScore();
    }
    else{
        incrementComputerScore();
    }
    console.log(`Player: ${game.playerScore}`,
                `Computer: ${game.computerScore}`);
    if (game.matchNumber == 5){
        if(game.playerScore > game.computerScore){
            console.log("Player wins!");
        }
        else if(game.computerScore > game.playerScore){
            console.log("Computer wins!")
        }
        else{
            console.log("Tie!");
        }
        resetGame();
    }
    console.log(" ");
    
}

function setPlayerChoice(choice){
    game.player = choice;
}

function setComputerChoice(choice){
    game.computer = choice;
}

function incrementPlayerScore(){
    game.playerScore++;
}

function incrementComputerScore(){
    game.computerScore++;
}

function incrementMatchNumber(){
    game.matchNumber++;
}
function resetGame(){
    game.playerScore = 0;
    game.computerScore = 0;
    game.matchNumber = 0;
}

function gameToMessage(game){
    const messageContainer = document.createElement("div");
    const matchPrint = document.createElement("p");
    const playerElection = document.createElement("p");
    const computerElection = document.createElement("p");
    const matchScore = document.createElement("p");
    const winnerMessage = document.createElement("div");

    messageContainer.classList.add("game-message");
    matchPrint.classList.add("match-print");
    playerElection.classList.add("election");
    computerElection.classList.add("election");
    matchScore.classList.add("score");
    winnerMessage.classList.add("winner-message");



    matchPrint.textContent = `Match number ${game.matchNumber}`;
    playerElection.textContent = `Player chooses ${game.player}`;
    computerElection.textContent = `Computer chooses ${game.computer}`;
    matchScore.textContent = `Player ${game.playerScore} - ` +
                             `Computer ${game.computerScore}`;

    
    messageContainer.appendChild(matchPrint);
    messageContainer.appendChild(playerElection);
    messageContainer.appendChild(computerElection);
    messageContainer.appendChild(matchScore);

    if(game.matchNumber == 5){
        if(game.playerScore > game.computerScore){
            winnerMessage.textContent = "Player Wins";
        }
        else if(game.playerScore < game.computerScore){
            winnerMessage.textContent = "Computer Wins";
        }
        else{
            winnerMessage.textContent = "Tie";
        }
        messageContainer.appendChild(winnerMessage);
    }

    return messageContainer;

}

function updateUI() {
    const output = document.querySelector("#output-event");
    output.innerHTML = ""; // Limpiar el contenido anterior

    const messageContainer = gameToMessage(game);
    output.appendChild(messageContainer);
}

const message = document.createElement("p");
const game = {
    player: "",
    computer: "",
    playerScore: 0,
    computerScore: 0,
    matchNumber: 0,
}
const rockButton = document.querySelector("#play-buttons .rock");
const paperButton = document.querySelector("#play-buttons .paper");
const scissorsButton = document.querySelector("#play-buttons .scissors");

rockButton.addEventListener("click", function(){
    game.player = "rock";
    playRound("rock", getComputerChoice());
    
    
  });

paperButton.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
    
});
scissorsButton.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
});


