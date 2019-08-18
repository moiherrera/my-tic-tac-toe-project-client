const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

let activePlayer = 'o'
const gameSoFar = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

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
    store.over = true
  } else if (gameSoFar[0] !== '0' && gameSoFar[1] !== '1' && gameSoFar[2] !== '2' && gameSoFar[3] !== '3' && gameSoFar[4] !== '4' && gameSoFar[5] !== '5' && gameSoFar[6] !== '6' && gameSoFar[7] !== '7' && gameSoFar[8] !== '8') {
    $('#message').text('Tie!!')
    store.over = true
  }
  return gameSoFar
}

const onMakeMove = function (event) {
  if ($(this).is(':empty')) {
    nextPlayer()
    const currentIndex = $(event.target).data('cell-index')
    gameSoFar[currentIndex] = activePlayer
    store.index = currentIndex
    store.value = activePlayer
    console.log(currentIndex)
    console.log(gameSoFar)
    $(this).text(activePlayer)
    identifyWinner(gameSoFar)
    const currentMoveData = {
      game: {
        cell: {
          index: store.index,
          lue: store.currentPlayer
        },
        over: store.over
      }
    }
    api.updateGame(currentMoveData)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').text('Error must click on empty space')
    console.log('Error, User must click on empty space. Invalid Move')
  }
}

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('New Game Created')
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.failure)
}

// ui.signInSuccess , pass whatever API gives it, in this case its TOKEN.
module.exports = {
  onMakeMove,
  onCreateGame,
  identifyWinner
}
