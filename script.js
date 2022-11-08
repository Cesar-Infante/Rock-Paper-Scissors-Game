// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.
let name;
let usersChoice;
let ties = 0;
let wins = 0;
let losses = 0;

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
  } else if (usersChoice === 'R' || usersChoice === 'r') {
    computerChoice();
  } else if (usersChoice === 'P' || usersChoice === 'p') {
    computerChoice();
  } else if (usersChoice === 'S' || usersChoice === 's') {
    computerChoice();
  } else {
    window.alert('Error: Wrong choice selected');
    getChoice();
  }
}

function computerChoice() {
  // * As a user, I expect the computer to choose R, P, or S in return.
  let choice = ['R', 'P', 'S'];
  let selectChoice = Math.floor(Math.random() * choice.length);
  let computerChoice = choice[selectChoice];

  window.alert(`The computer chose ${computerChoice}`)
// * As a user, I want to see my total wins, ties, and losses after each round.
// * As a user, I want the option to play again whether I win or lose.
  if (usersChoice.toLowerCase() === computerChoice.toLowerCase()) {
    ties++;
    window.alert(`${name} it's is a tie! you have
      ${wins} wins
      ${losses} losses
      ${ties} ties`);
    getChoice();
  } else if (
    (usersChoice === 'R' && computerChoice === 'S') ||
    (usersChoice === 'P' && computerChoice === 'R') ||
    (usersChoice === 'S' && computerChoice === 'P')
  ) {
    wins++;
    window.alert(`${name} you win! you have
      ${wins} wins
      ${losses} losses
      ${ties} ties`);
      getChoice();
  } else {
    losses++;
    window.alert(`${name} you loser! You have
      ${wins} wins
      ${losses} losses
      ${ties} ties `);
      getChoice();
  }
}










