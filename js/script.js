/*
--------------------
FIRE-WATER-EARTH
--------------------
*/

/*
--------------------
Initialization
--------------------
*/

// Create a player win count
let playerScore = 0;

// Create a computer win count
let computerScore = 0;

// Create a rounds count
let rounds = 0;

// Create a result variable with the type string
let result = '';

/*
--------------------
Algorithms
--------------------
*/

// Create a function named computerPlay() that chooses a random move
function computerPlay() {
  // Create an array named moves and set three elements FIRE, WATER & EARTH
  let moves = ['FIRE', 'WATER', 'EARTH'];
  return moves[Math.floor(Math.random() * moves.length)];
}

// Create function named playRound that defines the winning conditions
//It must have two parameters: playerSelection & computerSelection
function playRound(playerSelection, computerSelection) {

  // Define the winning conditions depending on the combination of moves
  // Tie
  let tie = playerSelection == computerSelection;
  // Win
  let win = playerSelection === 'FIRE' && computerSelection === 'EARTH' ||
  playerSelection === 'WATER' && computerSelection === 'FIRE' ||
  playerSelection === 'EARTH' && computerSelection === 'WATER';
  // Lose
  let lose = playerSelection === 'FIRE' && computerSelection === 'WATER' ||
  playerSelection === 'WATER' && computerSelection === 'EARTH' ||
  playerSelection === 'EARTH' && computerSelection === 'FIRE';

  // Create a switch statement that sets the conditions
  switch (true) {
    case tie:
      // Input the number of rounds
      roundCount.innerHTML = `Round ${++rounds}`;
      result = `It's a tie!`;
      // Input the result's value
      AnnounceRoundResult.innerHTML = result;
      break;
    case win:
      // Input the number of rounds
      roundCount.innerHTML = `Round ${++rounds}`;
      // Input the player's score
      playerCount.innerHTML = ++playerScore;
      result = `You won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}. The round is yours!`;
      // Input the result's value
      AnnounceRoundResult.innerHTML = result;
      break;
    case lose:
      // Input the number of rounds
      roundCount.innerHTML = `Round ${++rounds}`;
      // Input the computer's score
      computerCount.innerHTML = ++computerScore;
      result = `You lost! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}. Your opponent has the round.`;
      // Input the result's value
      AnnounceRoundResult.innerHTML = result;
      break;
  }
}

// Create a function that formats the characters cases
function capitalize(string) {
  // Capitalize only the first letter & turn the rest to lowercase
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Create a function to trigger the player's choice
function handleClick(playerSelection) {
  // Create the player's win condition
  if (playerScore === 5) {
    AnnounceRoundResult.innerHTML = 'Congratulations! You won the battle!';
    showReset();
  // Create the computer's win condition
  } else if (computerScore === 5) {
    AnnounceRoundResult.innerHTML = 'How unfortunate! You lost the battle!';
    showReset();
  } else {
    // Initialize the computer's choice
    let computerSelection = computerPlay();
    // Call and start the round
    playRound(playerSelection, computerSelection);
  }
}

// Create a function that shows the reset button
function showReset() {
  resetButton.style.visibility = 'visible';
}

// Create a function that resets the game
function resetGame() {
resetButton.style.visibility = 'hidden';
playerScore = 0;
computerScore = 0;
rounds = 0;
playerCount.innerHTML = 0;
computerCount.innerHTML = 0;
roundCount.innerHTML = '';
resultBackgroundColor.style.visibility = 'hidden';
}

/*
--------------------
UI
--------------------
*/

// Create selectors on the elements we want to update
let fire = document.querySelector('.fire');
let water = document.querySelector('.water');
let earth = document.querySelector('.earth');
let reset = document.querySelector('.reset');
let playerCount = document.querySelector('.player-win-count');
let computerCount = document.querySelector('.computer-win-count');
let roundCount = document.querySelector('.round-count');
let AnnounceRoundResult = document.querySelector('.round-result');

// Create selectors to update the reset button's visibility automatically
let resultBackgroundColor = document.getElementById('result-text');
let resetButton = document.getElementById('reset');