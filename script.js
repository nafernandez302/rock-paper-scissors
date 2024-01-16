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
    game.matchNumber++;
    console.log(`Match number ${game.matchNumber}`);
    console.log(`Player's choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);
    if(playerSelection == computerSelection){
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper")  ||
            (playerSelection == "paper" && computerSelection == "rock")){
        game.playerScore++;
    }
    else{
        game.computerScore++;
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
        game.matchNumber = 0;
        game.playerScore = 0;
        game.computerScore = 0;
    }
    console.log(" ");
    
}

const message = document.createElement('p');
const game = {
    player: '',
    computer: '',
    playerScore: 0,
    computerScore: 0,
    matchNumber: 0,
}
const rockButton = document.querySelector('#play-buttons .rock');
const paperButton = document.querySelector('#play-buttons .paper');
const scissorsButton = document.querySelector('#play-buttons .scissors');

rockButton.addEventListener("click", function(){
    game.player = 'rock';
    playRound('rock', getComputerChoice());
  });
paperButton.addEventListener("click", function(){
    playRound('paper', getComputerChoice());
});
scissorsButton.addEventListener("click", function(){
    playRound('scissors', getComputerChoice());
});


