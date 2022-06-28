const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const recordDisplay = document.getElementById('record')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let userScore = 0
let compScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  record.innerHTML = userScore.toString() + " - " + compScore.toString()
}))

function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * 4)

  if (randomNum === 1) {
    computerChoice = 'rock'
  }
  if (randomNum === 2) {
    computerChoice = 'paper'
  }
  if (randomNum === 3) {
    computerChoice = 'scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (userChoice === computerChoice) {
    result = "It's a tie!"
  }
  else if (userChoice === 'rock' && computerChoice === "scissors" ||
userChoice === 'paper' && computerChoice === "rock" ||
userChoice === 'scissors' && computerChoice === "paper") {
    result = "You Win"
    userScore += 1
  }
  else {
    result = "You lose!"
    compScore += 1
  }
  resultDisplay.innerHTML = result
}
