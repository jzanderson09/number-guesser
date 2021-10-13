let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  return randomNum;
}

function compareGuesses(human, computer, target) {
  const comparedHuman = getAbsoluteDistance(target, human);
  const comparedComputer = getAbsoluteDistance(target, computer);
  if (human === -1) {
    alert('You have picked an imaginary number, keep it positive!');
  }
  if (comparedHuman === comparedComputer) {
    return true;
  }
  else if (comparedHuman > comparedComputer) {
    return false;
  } else {
    return true;
  }
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
    humanScore = 0;
    computerScore = 0;
    currentRoundNumber = 1;
  }
}

function getAbsoluteDistance(inputTarget, inputGuess) {
  return Math.abs(inputTarget - inputGuess);
}