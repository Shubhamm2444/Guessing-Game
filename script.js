// Game variables
const difficulties = {
  easy: { min: 1, max: 50, allowedGuesses: 5 },
  medium: { min: 1, max: 100, allowedGuesses: 7 },
  hard: { min: 1, max: 200, allowedGuesses: 10 }
};
let currentDifficulty = difficulties.medium; // Default difficulty
let targetNumber;
let attempts = 0;
let guessHistory = [];
let leaderboard = []; // Placeholder for leaderboard data (not implemented)

// DOM elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const minNumberSpan = document.getElementById('min-number');
const maxNumberSpan = document.getElementById('max-number');
const guessList = document.getElementById('guess-list');
const leaderboardList = document.getElementById('leaderboard-list');
const difficultySelect = document.getElementById('difficulty');

// Function to update UI based on difficulty selection
function updateDifficulty() {
  currentDifficulty = difficulties[difficultySelect.value];
  minNumberSpan.textContent = currentDifficulty.min;
  maxNumberSpan.textContent = currentDifficulty.max;
}

// Function to generate a random target number
function generateTargetNumber() {
  targetNumber = Math.floor(Math.
