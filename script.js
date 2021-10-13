let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function advanceRound() {
  currentRoundNumber++;
  if (currentRoundNumber === 10) {
      if (humanScore > computerScore) {
          window.alert("You've won!");
      }
      else if (humanScore === computerScore) {
          window.alert("It' a draw!");
      } 
      else {
          window.alert("You've lost!");
      }
    resetScores();
    currentRoundNumber = 1;
    window.location.reload();
  }
}

function compareGuesses(human, computer, target) {
  const comparedHuman = getAbsoluteDistance(target, human);
  const comparedComputer = getAbsoluteDistance(target, computer);
  if (comparedHuman === comparedComputer) {
    return true;
  }
  else if (comparedHuman > comparedComputer) {
    return false;
  } else {
    return true;
  }
}

function generateTarget() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  return randomNum;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  }
  else if (winner === 'computer') {
    computerScore++;
  }
  else {
    alert('ERROR: UNKNOWN VALUE/USER');
  }
}

function getAbsoluteDistance(inputTarget, inputGuess) {
  return Math.abs(inputTarget - inputGuess);
}

function resetScores() {
  humanScore = 0;
  computerScore = 0;
}