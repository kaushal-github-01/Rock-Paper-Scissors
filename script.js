const btns = document.querySelectorAll(".btn");
const reset = document.querySelector("#reset");
const displayResults = document.querySelector("#displayResults");
const displayFinalResult = document.querySelector('#displayFinalResult');

getComputerChoice = () => {
    const Choices = ['rock', 'paper', 'scissor'];
    // var item = items[Math.floor(Math.random()*items.length)];
    let randomChoice = Choices[Math.floor(Math.random() * Choices.length)];
    return randomChoice;
};

playingRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return ["It's a draw", 0];
    }
    else if (playerSelection == "rock") {

        if (computerSelection == "paper") {
            return ["You lose! Paper beats Rock", -1];
        }
        else {
            return ["You win! Rock beats Scissor", 1];
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ["You win! Paper beats Rock", 1];

        }
        else {
            return ["You lose! Scissor beats Paper", -1];
        }
    }
    else if (playerSelection == "scissor") {
        if (computerSelection == "rock") {
            return ["You lose! Rock beats Scissor", -1];
        }
        else {
            return ["You win! Scissor beats Paper", 1];
        }
    }
    else {
        alert("You lost a chance, Please enter a valid choice");
    }
};

let count = 0;
let finalResult = 0;

btns.forEach(function (e) {
    e.addEventListener('click', () => {
        count++;
        // console.log(count);

        if (count < 6) {
            let result = playingRound(e.value, getComputerChoice());
            displayResults.innerHTML += `${result[0]} <br><br> ${result[1]}<br><br>`;
            finalResult += result[1];
        }

        else if (count == 6) {
            // console.clear();
            displayResults.textContent = "";

            // console.log("Gave Over");
            // console.log("Your Final Score is:", finalResult);
            displayFinalResult.textContent = `Your Final Score is: ${finalResult}`;
        }

        else if (count > 6) {
            displayFinalResult.textContent = "";
            displayResults.textContent = "Please Tap on 'Crear' button";
        }

        else {
            console.log("Error in the Game");
        }
    })
});

reset.onclick = () => {
    // console.clear();
    displayResults.textContent = "";
    displayFinalResult.textContent = "";
    count = 0;
    finalResult = 0;
};