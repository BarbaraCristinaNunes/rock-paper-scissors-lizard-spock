const userChoiceDisplay = document.getElementById("user");
const computerChoiceDisplay = document.getElementById("computer");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const input = document.getElementById("input");
let possibleChoiceArray = ['Rock','Paper','Scissor','Lizard','Spock'];

let userChoice;
let computerChoice

userChoiceDisplay.innerHTML = "<h1>User choice: </h1>";
computerChoiceDisplay.innerHTML = "<h1>Computer choice: </h1>";
result.innerHTML += "<h1>Result</h1>";

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {    
    if(userChoice != "enter"){
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = "<h1>User choice: </h1>";
        computerChoiceDisplay.innerHTML = "<h1>Computer choice: </h1>"; 
        userChoiceDisplay.innerHTML += "<p>" + userChoice + "</p>";    
        userChoiceDisplay.innerHTML += "<img src= 'img/" + userChoice + ".png'>";
        generateComputerChoice()
    }
}))


document.getElementById("enter").addEventListener("click", () => {
    
    let userInput = input.value
    if(!userInput || userInput == ""){
        return
    }
    let user = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    console.log(computerChoice,user);
    for(let i = 0; i < possibleChoiceArray.length; i++){
        if(user == possibleChoiceArray[i]){
            userChoiceDisplay.innerHTML = "<h1>User choice: </h1>";
            userChoiceDisplay.innerHTML += "<p>" + possibleChoiceArray[i] + "</p>";
            userChoiceDisplay.innerHTML += "<img src= 'img/" + possibleChoiceArray[i] + ".png'>";
            break;
        }
    }
    generateComputerChoice();
    getResult(user, computerChoice);
})


function generateComputerChoice() {
    console.log('userChoice:', userChoice)
    if(!userChoice || userChoice == ""){
        return
    }
    const randomChoice = Math.floor(Math.random() * possibleChoiceArray.length);
    computerChoice = possibleChoiceArray[randomChoice]
    computerChoiceDisplay.innerHTML = "<h1>Computer choice: </h1>";
    computerChoiceDisplay.innerHTML += "<p>" + computerChoice + "</p>";
    computerChoiceDisplay.innerHTML += "<img src= 'img/" + computerChoice + ".png'>";

    result.innerHTML = "";
    
    getResult(userChoice, computerChoice);

}

function getResult(userChoiceStr, computerChoice){
    switch (userChoiceStr + computerChoice) {
        case 'ScissorPaper':
        case 'ScissorLizard':
        case 'PaperRock':
        case 'PaperSpock':
        case 'RockLizard':
        case 'RockScissor':
        case 'LizardSpock':
        case 'LizardPaper':
        case 'SpockScissor':
        case 'SpockRock':
            result.innerHTML += "<h1>Result: </h1>";
            result.innerHTML += "<p style='color: rgb(97, 230, 21);'>You are the winner! </p>";
            break
        case 'PaperScissor':
        case 'LizardScissor':
        case 'RockPaper':
        case 'SpockPaper':
        case 'LizardRock':
        case 'ScissorRock':
        case 'SpockLizard':
        case 'PaperLizard':
        case 'ScissorSpock':
        case 'RockSpock':
            result.innerHTML += "<h1>Result: </h1>";
            result.innerHTML += "<p style='color: red;'> You are the loser! </p>";
            break
    }
    if(userChoiceStr == computerChoice){
        result.innerHTML += "<h1>Result: </h1>";
        result.innerHTML += "<p style='color: gold;'> It is a draw, try again! </p>";
    }
}

document.getElementById("reset").addEventListener("click", () =>{
    userChoiceDisplay.innerHTML = "";
    computerChoiceDisplay.innerHTML = "";
    result.innerHTML = "";
    userChoiceDisplay.innerHTML = "<h1>User choice: </h1>";
    computerChoiceDisplay.innerHTML = "<h1>Computer choice: </h1>";
    result.innerHTML = "<h1>Result: </h1>";
})

// function changeColor(element, colorName) {
//     element.style.backgroundColor = colorName;
// }

// function resetChangeColor(possibleChoices) {
//     possibleChoices.style.backgroundColor = colorName;
// }

// const CHOICES = {
//     paper: 1,
//     rock: 2,
// }

// const winnerChoices = {
//     paper: [CHOICES.rock],

// }

// const loserChoices = {
//     rock: [CHOICES.paper]
// }

// let userChoiceStr;
// let computerChoiceStr;

// if winnerChoices[userChoiceStr].inclues(computerChoiceStr)
// else loserChoices[userChoiceStr].inclues(computerChoiceStr)
// else empate
