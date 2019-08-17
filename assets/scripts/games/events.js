const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let activePlayer = 'o'
const gameSoFar = new Array(9)

const nextPlayer = function () {
  $('#message').text('Your turn: ' + activePlayer)
  activePlayer === 'x' ? activePlayer = 'o' : activePlayer = 'x'
}

const identifyWinner = function (gameSoFar) {
  console.log(gameSoFar)
  if ((gameSoFar[0] !== undefined && gameSoFar[0] === gameSoFar[1] && gameSoFar[0] === gameSoFar[2]) ||
       (gameSoFar[0] !== undefined && gameSoFar[0] === gameSoFar[3] && gameSoFar[0] === gameSoFar[6]) ||
       (gameSoFar[1] !== undefined && gameSoFar[1] === gameSoFar[4] && gameSoFar[1] === gameSoFar[7]) ||
       (gameSoFar[2] !== undefined && gameSoFar[2] === gameSoFar[5] && gameSoFar[2] === gameSoFar[8]) ||
       (gameSoFar[6] !== undefined && gameSoFar[6] === gameSoFar[2] && gameSoFar[6] === gameSoFar[4]) ||
       (gameSoFar[3] !== undefined && gameSoFar[3] === gameSoFar[4] && gameSoFar[3] === gameSoFar[5]) ||
       (gameSoFar[0] !== undefined && gameSoFar[0] === gameSoFar[4] && gameSoFar[0] === gameSoFar[8]) ||
       (gameSoFar[6] !== undefined && gameSoFar[6] === gameSoFar[7] && gameSoFar[6] === gameSoFar[8])) {
    $('#message').text('Player ' + activePlayer + ' Wins!')
  } else if (gameSoFar[0] !== undefined && gameSoFar[1] !== undefined && gameSoFar[2] !== undefined && gameSoFar[3] !== undefined && gameSoFar[4] !== undefined && gameSoFar[5] !== undefined && gameSoFar[6] !== undefined && gameSoFar[7] !== undefined && gameSoFar[8] !== undefined) {
    $('#message').text('Tie!!')
  }
  return gameSoFar
}

const onMakeMove = function (event) {
  if ($(this).is(':empty')) {
    nextPlayer()
    const currentIndex = $(event.target).data('cell-index')
    gameSoFar[currentIndex] = activePlayer
    console.log(currentIndex)
    console.log(gameSoFar)
    $(this).text(activePlayer)
    identifyWinner(gameSoFar)
  } else {
    $('#message').text('Error must click on empty space')
    console.log('Error, User must click on empty space. Invalid Move')
  }
}

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('New Game Created')
  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(ui.onNewGameSuccess)
    .catch(ui.failure)
}

// ui.signInSuccess , pass whatever API gives it, in this case its TOKEN.
module.exports = {
  onMakeMove,
  onCreateGame
}
