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