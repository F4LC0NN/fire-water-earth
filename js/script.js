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
