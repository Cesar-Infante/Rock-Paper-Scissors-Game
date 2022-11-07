// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.
let name;
let usersChoice;
function startGame() {
  // prompt the user for their name and store that value
  name = window.prompt('What is your name?');
  if (name === null) {
    return;
  } else {
    getChoice();
  }
};
startGame();

function getChoice() {
  // get the Users choice of either R,P,S OR rock, paper, scissors
  usersChoice = window.prompt(`${name}, Please type either R, P, S or rock, paper, scissors`);
  console.log(usersChoice)
  checkChoice();
}

function checkChoice() {
  // check to see if the user input either r,p,s or rock, paper, scissors
  if (usersChoice === null) {
    return;
  } else if (usersChoice === 'R' || usersChoice === 'r' || usersChoice === "Rock" || usersChoice === 'rock') {
    computerChoice();
  } else if (usersChoice === 'P' || usersChoice === 'p' || usersChoice === "Paper" || usersChoice === 'paper') {
    computerChoice();
  } else if (usersChoice === 'S' || usersChoice === 's' || usersChoice === "Scissors" || usersChoice === 'scissors') {
    computerChoice();
  } else {
    window.alert('Error: Wrong choice selected');
    getChoice();
  }
}

function computerChoice() {
  window.alert(`Hello World`)
}


// * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.



// * As a user, I expect the computer to choose R, P, or S in return.



// * As a user, I want the option to play again whether I win or lose.



// * As a user, I want to see my total wins, ties, and losses after each round.

