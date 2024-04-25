

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)

    let choice2;
    if (computerChoice === 0) {
        choice2 = "rock";
    } else if (computerChoice === 1) {
        choice2 = "paper";
    } else {
        choice2 = "scissors";
    };

    return choice2;

}


function getHumanChoice() {
    let humanChoice2 = prompt("Please choose between Rock, Paper and Scissors: ")
    let humanChoice3 = humanChoice2.toLowerCase();

    /* if (humanChoice.toLowerCase() === "rock"){
        console.log("You've chosen Rock.");
    }else if (humanChoice.toLowerCase() === "paper"){
        console.log("You've chosen Paper.");
    }else if (humanChoice.toLowerCase() === "scissors"){
        console.log("You've chosen Scissors.");
    }else{
        console.log("You've entered a wrong value.");
    }
    */
    return humanChoice3;

}


let humanScore = 0;
let computerScore = 0;



function playGame() {




    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("Draw!")
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.")
            computerScore += 1;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("Draw!")
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock.")
            humanScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beat Paper.");
            computerScore += 1;
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("Draw!")
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors.")
            computerScore += 1;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beat Paper.");
            humanScore += 1;
        }

        console.log("You chose: " + humanChoice);
        console.log("Computer chose: " + computerChoice)
        console.log("Your score: " + humanScore+"\n" + "Computers score: " + computerScore)

    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

}

for (let i = 0; i < 5; i++) {
    playGame();
}

if(humanScore > computerScore){
    console.log("Congratulations! You've beaten a computer!")
}else if (humanScore < computerScore){
    console.log("Sad life :(. You've lost to a computer.")
}else {
    console.log("It's a draw.")
}