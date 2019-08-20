'use strict'

const store = require('../store')
// does this need anything passed in it?
// the goal is to tell the user that the function works successfully.
// we can use jquey, so target the element with an id of message, and I want to give it some texts that tells me something useful

const signUpSuccess = function () {
  // store.token = data.user.Token
  $('#message').text('Successful sign up!')
  $('#message').removeClass('success') // better?
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Unsuccessful sign up!')
  $('#message').removeClass('success') // better?
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message2').text('Successful sign-in! Create Game')
  $('#message2').removeClass('success') // better?
  $('#message2').addClass('success')
  $('#auth-events').hide()
  $('.second-view').show()
  $('.container').hide()
  $('#signed-in-user').text(store.user.email)
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('#message').text('Unsuccessful sign-in!')
  $('#message').removeClass('success') // better?
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.user = null
  $('#signed-in-user').text('')
  $('#message').text('Successful Sign Out!')
  $('#message').removeClass('success') // better?
  $('#message').addClass('success')
  $('.second-view').hide()
  $('#auth-events').show()
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message2').text('Successful Change in Password!')
  $('#message2').removeClass('success') // better?
  $('#message2').addClass('success')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message2').text('Failed to Change Password!')
  $('#message2').removeClass('failure') // better?
  $('#message2').addClass('failed')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  signOutSuccess,
  changePasswordFailure
}
