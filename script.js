getComputerChoice = () => {
    const Choices = ['rock', 'paper', 'scissors'];
    // var item = items[Math.floor(Math.random()*items.length)];
    let randomChoice = Choices[Math.floor(Math.random() * Choices.length)];
    return randomChoice;
}

playingRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return ["It's a draw", 0];
    }
    else if (playerSelection == "rock") {

        if (computerSelection == "paper") {
            return ["You lose! Paper beats Rock", -1];
        }
        else {
            return ["You win! Rock beats Scissors", 1];
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ["You win! Paper beats Rock", 1];

        }
        else {
            return ["You lose! Scissors beats Paper", -1];
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return ["You lose! Rock beats Scissors", -1];
        }
        else {
            return ["You win! Scissors beats Paper", 1];
        }
    }
    else {
        alert("You lost a chance, Please enter a valid choice");
    }
}

game = () => {

    let score = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("What is your choice ?").toLocaleLowerCase();
        let obj = playingRound(playerChoice, getComputerChoice());
        console.log(obj[0]);
        console.log(obj[1]);

        if (obj[1] == 0) {
            score += 0;
        }
        else if (obj[1] == -1) {
            score -= 1;
        }
        else if (obj[1] == 1) {
            score += 1;
        }
        else {
            alert("Error in score");
        }
    }

    console.log("Your final score is:", score);

    if (score == 0) {
        console.log("It's a draw in the end!");
    }
    else if (score > 0) {
        console.log("You  won the overall game!");
    }
    else if (score < 0) {
        console.log("You lost the overall game!");
    }
}

game()