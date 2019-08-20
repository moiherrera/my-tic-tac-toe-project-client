'use strict'
const store = require('../store')
const gameEvents = require('./events')

const onNewGameSuccess = (data) => {
  $('#message2').text('Game Created! It/s X/s turn')
  store.game = data.game
  store.activePlayer = 'x'
  store.over = false
  gameEvents.gameSoFar = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  store.game.cells = gameEvents.gameSoFar
  $('.container').show()
  $('.grid').text('')
    .addClass('success')
    .removeClass('failure')
}

const onNewGameFailure = function () {
  $('#message').text('Error in Creating Game')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onUpdateSuccess = function (data) {
  store.game = data.game
}

const onUpdateFailure = function () {
  $('#message').text('Error must click on empty space')
}

const enterVarFailure = function () {
  $('#message').text('Error must click on empty space')
  if ($(this).is(':empty')) {
    $('#message').text('Game Over, Please Start New Game')
  }
}
const getGamesSuccess = function (data) {
  $('#message2').text(data.games.length + ' games played')
}

const getGamesFailure = (data) => {
  $('#message2').text('Get games failed')
}

module.exports = {
  enterVarFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateSuccess,
  onUpdateFailure,
  getGamesSuccess,
  getGamesFailure
}
