// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.
let userChoice = document.getElementById('textBox');
let gameTitle = document.getElementById('title');

// * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

const mainChoices = ['r', 'p', 's'];

userChoice.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    if ( mainChoices.some(el => userChoice.value[0].toLowerCase().includes(el))) {
      console.log(userChoice.value[0].toLowerCase());
    } else {
        gameTitle.textContent = 'why the hell did you type that'
      setTimeout(() => {
        gameTitle.textContent = 'Rock Paper Scissors'
      }, 2000)
    }
    userChoice.value = '';
  } else return
}
);

// * As a user, I expect the computer to choose R, P, or S in return.
function botChoiceRandom() {
  const botChoice = Math.floor(Math.random() * mainChoices.length);
  console.log(mainChoices[botChoice])
}

botChoiceRandom()
// * As a user, I want the option to play again whether I win or lose.
function playAgain() {
  if (userChoice === botChoice) {
    return "TIE";
  }
  else if (userChoice > botChoice) {
    return "User Wins!";
  }
  else (userChoice < botChoice)
    return "Computer Wins!";
}

// * As a user, I want to see my total wins, ties, and losses after each round.

