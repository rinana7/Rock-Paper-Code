const choices = ['🪨 Rock', '📄 Paper', '✂️ Scissors'];

function playGame(playerChoice) {
  // 1. Computer makes a random pick
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  let result = "";

  // 2. Check winning logic
  if (playerChoice === computerChoice) {
    result = "It's a Tie! 🤝";
  } else if (
    (playerChoice === '🪨 Rock' && computerChoice === '✂️ Scissors') ||
    (playerChoice === '📄 Paper' && computerChoice === '🪨 Rock') ||
    (playerChoice === '✂️ Scissors' && computerChoice === '📄 Paper')
  ) {
    result = "You Win! 🎉";
  } else {
    result = "Computer Wins! 🤖";
  }

  // 3. Update the webpage with results
  document.getElementById('result').innerText = result;
  document.getElementById('details').innerText = `You picked ${playerChoice} | Computer picked ${computerChoice}`;
}