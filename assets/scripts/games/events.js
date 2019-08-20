const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

let activePlayer = 'o'
let gameSoFar = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

const nextPlayer = function () {
  $('#message2').text('Your turn: ' + activePlayer)
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
    $('#message2').text('Player ' + activePlayer + ' Wins! ' + 'Game Over, Please Start New Game')
    store.over = true
  } else if (gameSoFar[0] !== '0' && gameSoFar[1] !== '1' && gameSoFar[2] !== '2' && gameSoFar[3] !== '3' && gameSoFar[4] !== '4' && gameSoFar[5] !== '5' && gameSoFar[6] !== '6' && gameSoFar[7] !== '7' && gameSoFar[8] !== '8') {
    $('#message2').text('Tie!! ' + 'Game Over, Please Start New Game')
    store.over = true
  }
  return gameSoFar
}

let gameImages = '<img src="https://github.com/moiherrera/my-tic-tac-toe-project-client/blob/master/images/rock_O.png"/>'

const changeImage = function () {
  if (activePlayer === 'x') {
    gameImages = URL('https://github.com/moiherrera/my-tic-tac-toe-project-client/blob/master/images/X_Tic.png')
  } else {
    gameImages = URL('https://github.com/moiherrera/my-tic-tac-toe-project-client/blob/master/images/rock_O.png')
  }
}

const onMakeMove = function (event) {
  if (store.over === false && $(this).is(':empty')) {
    nextPlayer()
    const currentIndex = $(event.target).data('cell-index')
    gameSoFar[currentIndex] = activePlayer
    store.index = currentIndex
    store.value = activePlayer
    console.log(currentIndex)
    console.log(gameSoFar)
    changeImage()
    $(this).prepend(gameImages)
    identifyWinner(gameSoFar)
    const currentMoveData = {
      game: {
        cell: {
          index: store.index,
          value: store.currentPlayer
        },
        over: store.over
      }
    }
    api.updateGame(currentMoveData)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message2').text('Error game is over, No more moves can be made!! ):< Please Start Over! ):< ')
  }
}

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('New Game Created')
  const data = getFormFields(event.target)
  gameSoFar = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  activePlayer = 'o'
  api.createGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onGetGames = function (data) {
  event.preventDefault()
  console.log('Get games')
  api.getGames(data)
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

// ui.signInSuccess , pass whatever API gives it, in this case its TOKEN.
module.exports = {
  onMakeMove,
  onCreateGame,
  identifyWinner,
  onGetGames
}
