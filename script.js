let selectedPlayer = '';
let playerScore = 0;
let botScore = 0;
const WINNING_SCORE = 2;

function selectCharacter(gender) {
  selectedPlayer = gender;
  document.getElementById('player-avatar').src = `assets/${gender}.png`;
  document.getElementById('char-selection').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
  resetMatch();
}

function updateScoreBoard() {
  const playerDots = '⭐ '.repeat(playerScore) + '⚪ '.repeat(WINNING_SCORE - playerScore);
  const botDots = '⭐ '.repeat(botScore) + '⚪ '.repeat(WINNING_SCORE - botScore);
  
  document.getElementById('player-score').innerText = playerDots.trim();
  document.getElementById('bot-score').innerText = botDots.trim();
}

function playGame(playerChoice) {
  if (playerScore >= WINNING_SCORE || botScore >= WINNING_SCORE) return;

  const choices = ['Rock', 'Paper', 'Scissors'];
  const botChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === botChoice) {
    document.getElementById('result').innerText = "It's a Tie! 🤝";
  } else if (
    (playerChoice === 'Rock' && botChoice === 'Scissors') ||
    (playerChoice === 'Paper' && botChoice === 'Rock') ||
    (playerChoice === 'Scissors' && botChoice === 'Paper')
  ) {
    playerScore++;
    document.getElementById('result').innerText = "You win this round! 🎉";
  } else {
    botScore++;
    document.getElementById('result').innerText = "Bot wins this round! 🤖";
  }

  document.getElementById('details').innerText = `You: ${playerChoice} | Bot: ${botChoice}`;
  updateScoreBoard();

  // Check for match winner
  if (playerScore === WINNING_SCORE) {
    document.getElementById('result').innerText = "🏆 YOU WON THE MATCH! 🏆";
    endMatch();
  } else if (botScore === WINNING_SCORE) {
    document.getElementById('result').innerText = "🤖 BOT WON THE MATCH! 🤖";
    endMatch();
  }
}

function endMatch() {
  document.getElementById('action-buttons').style.display = 'none';
  document.getElementById('reset-btn').style.display = 'inline-block';
}

function resetMatch() {
  playerScore = 0;
  botScore = 0;
  updateScoreBoard();
  document.getElementById('result').innerText = "First to 2 wins!";
  document.getElementById('details').innerText = "";
  document.getElementById('action-buttons').style.display = 'flex';
  document.getElementById('reset-btn').style.display = 'none';
}