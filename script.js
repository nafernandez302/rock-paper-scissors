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

function game(){
    let playerSelection, computerSelection;
    console.log("Welcome to rock, paper, scissors game!");
    for(let i = 1; i<=3; i++){
        console.log(`---- Game number ${i} ----`);
        playerSelection= prompt("Enter a value: ");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();
