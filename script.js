
// rock = 1
// paper = 2
// scissor = 3
function computerPlay() {
    let choice = Math.floor(Math.random()*10)
    if (choice < 4 && choice >= 1){
        return choice
    } else {
        return computerPlay()
    }
}

function round(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == "rock" && computerSelection == 1){
        return "Draw"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == 2){
        return "You lost!"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == 3){
        return "You won!"
    }

    if (playerSelection.toLowerCase() == "paper" && computerSelection == 2){
        return "Draw"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == 3){
        return "You lost!"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == 1){
        return "You won!"
    }

    if (playerSelection.toLowerCase() == "scissors" && computerSelection == 3){
        return "Draw"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == 1){
        return "You lost!"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == 2){
        return "You won!"
    }
}

function game() {
    let computerWins = playerWins = 0
    
    for (let i = 0;i < 5;i++){
        let playerSelection = window.prompt("Enter your guess")
        let computerSelection = computerPlay()
        console.log(`You have chosen ${playerSelection}`)
        if (computerSelection == 1) {
            console.log(`The computer chose rock`)
        } else if (computerSelection == 2) {
            console.log(`The computer chose paper`)
        } else {
            console.log(`The computer chose scissors`)
        }
        let result =  round(playerSelection, computerSelection)
        console.log(result)
        if (result == "You won!"){
            playerWins += 1
        } else if (result == "You lost!"){
            computerWins += 1
        }
    }

    console.log("Computer:Player")
    console.log(computerWins + ":" + playerWins)
    if (computerWins > playerWins) {
        console.log("You lost the game!")
    } else if (playerWins > computerWins) {
        console.log("You won the game!")
    } else {
        console.log("It's a draw!")
    }
}