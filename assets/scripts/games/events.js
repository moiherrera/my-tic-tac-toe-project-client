const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let activePlayer = 'o'
const gameSoFar = []

const nextPlayer = function () {
  activePlayer === 'x' ? activePlayer = 'o' : activePlayer = 'x'
}

const onMakeMove = function (event) {
  nextPlayer()
  const currentIndex = event.target.id
  const indexOfClick = (currentIndex.slice(-1) - 1)
  gameSoFar[indexOfClick] = activePlayer

  if ($(this).is(':empty')) {
    if (activePlayer === 'x' || activePlayer === 'o') {
      $(this).text(activePlayer)
    } else {
      ui.enterVarFailure()
    }
  }
  if (indexOfClick === 0) {
    if (gameSoFar[0] === gameSoFar[1] && gameSoFar[0] === gameSoFar[2]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[0] === gameSoFar[3] && gameSoFar[0] === gameSoFar[6]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[0] === gameSoFar[4] && gameSoFar[0] === gameSoFar[8]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    }
  } else if (indexOfClick === 1) {
    if (gameSoFar[1] === gameSoFar[4] && gameSoFar[1] === gameSoFar[7]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[0] === gameSoFar[1] && gameSoFar[0] === gameSoFar[2]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    }
  } else if (indexOfClick === 2) {
    if (gameSoFar[0] === gameSoFar[1] && gameSoFar[0] === gameSoFar[2]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[0] === gameSoFar[1] && gameSoFar[0] === gameSoFar[2]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[2] === gameSoFar[5] && gameSoFar[2] === gameSoFar[8]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    }
  } else if (indexOfClick === 3) {
    if (gameSoFar[0] === gameSoFar[3] && gameSoFar[0] === gameSoFar[6]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[3] === gameSoFar[4] && gameSoFar[3] === gameSoFar[5]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    }
  } else if (indexOfClick === 4) {
    if (gameSoFar[0] === gameSoFar[4] && gameSoFar[0] === gameSoFar[8]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[1] === gameSoFar[4] && gameSoFar[1] === gameSoFar[7]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[3] === gameSoFar[4] && gameSoFar[3] === gameSoFar[5]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[6] === gameSoFar[2] && gameSoFar[6] === gameSoFar[4]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    }
  } else if (indexOfClick === 5) {
    if (gameSoFar[2] === gameSoFar[5] && gameSoFar[2] === gameSoFar[8]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[3] === gameSoFar[4] && gameSoFar[3] === gameSoFar[5]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    }
  } else if (indexOfClick === 6) {
    if (gameSoFar[0] === gameSoFar[3] && gameSoFar[0] === gameSoFar[6]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[6] === gameSoFar[2] && gameSoFar[6] === gameSoFar[4]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[6] === gameSoFar[7] && gameSoFar[6] === gameSoFar[8]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    }
  } else if (indexOfClick === 7) {
    if (gameSoFar[6] === gameSoFar[7] && gameSoFar[6] === gameSoFar[8]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[1] === gameSoFar[4] && gameSoFar[1] === gameSoFar[7]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    }
  } else if (indexOfClick === 8) {
    if (gameSoFar[6] === gameSoFar[7] && gameSoFar[6] === gameSoFar[8]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[2] === gameSoFar[5] && gameSoFar[2] === gameSoFar[8]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    } else if (gameSoFar[0] === gameSoFar[4] && gameSoFar[0] === gameSoFar[8]) {
      $('#message').text('player ' + activePlayer + ' wins!')
    }
  }
  if (gameSoFar.length === 9) {
    $('#message').text('Tied Game')
  }
  return gameSoFar
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
