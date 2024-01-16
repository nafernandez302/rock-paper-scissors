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
    console.log(`Player's choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);
    if(playerSelection == computerSelection){
        console.log("Tie");
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper")  ||
            (playerSelection == "paper" && computerSelection == "rock")){
        console.log("Player wins!");
    }
    else{
        console.log("Computer wins!");
    }
}

const message = document.createElement('p');
const game = {
    player: '',
    computer: '',
    playerScore: 0,
    computerScore: 0,
}
const rockButton = document.querySelector('#play-buttons .rock');
const paperButton = document.querySelector('#play-buttons .paper');
const scissorsButton = document.querySelector('#play-buttons .scissors');

rockButton.addEventListener("click", function(){
    game.player = 'rock';
    console.log("Jugador elige piedra")
  });
paperButton.addEventListener("click", function(){
    game.player = 'paper';
    console.log("Jugador elige papel")
});
scissorsButton.addEventListener("click", function(){
    game.player = 'scissors';
    console.log("Jugador elige tijera")
});


