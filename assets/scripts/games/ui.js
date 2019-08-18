'use strict'
const store = require('../store')

const onNewGameSuccess = (data) => {
  store.game = data.game
  console.log(store.game)
  $('#message').text('Game Created!')
  $('#message').text(`it's X/s turn`)
    .addClass('success')
    .removeClass('failure')
}
const failure = function (error) {
  $('#message').text('Error')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onUpdateSuccess = (data) => {
  store.game = data.game
}

const onUpdateFailure = function () {
  $('#message').text('Error must click on empty space')
}
const enterVarFailure = function () {
  $('#message').text('Error must click on empty space')
  console.log('Error, User must click on empty space. Invalid Move')
}

module.exports = {
  enterVarFailure,
  onNewGameSuccess,
  onUpdateSuccess,
  onUpdateFailure,
  failure
}
