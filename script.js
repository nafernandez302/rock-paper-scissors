function getComputerChoice() {
    let computerChoice;
    let n = Math.random()*3;
    Math.floor(n);
    switch (c) {
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
    console.log(`Jugador elige: ${playerSelection}`);
    console.log(`Computadora elige: ${computerSelection}`);
    if(playerSelection == computerSelection){
        console.log("Tie");
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper")  ||
            (playerSelection == "paper" && computerSelection == "rock")){
        console.log("player wins");
    }
    else{
        console.log("computer wins");
    }
}

function game(){

}

playRound("paper","paper");