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
  console.log('Sign Up Success')
}

const signUpFailure = function () {
  $('#message').text('Unsuccessful sign up!')
  $('#message').removeClass('success') // better?
  $('#message').addClass('success')
  $('form').trigger('reset')
  console.log('Sign up Error')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message2').text('Successful sign-in! Create Game')
  $('#message2').removeClass('success') // better?
  $('#message2').addClass('success')
  $('#auth-events').hide()
  $('.second-view').show()
  $('.container').hide()
  console.log('Sign in Success! User is', store.user)
  $('#signed-in-user').text(store.user.email)
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  store.user = data.user
  $('#message2').text('Unsuccessful sign-in!')
  $('#message2').removeClass('success') // better?
  $('#message2').addClass('success')
  $('#auth-events').hide()
  $('.second-view').show()
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
  console.log('Successful Sign Out')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message2').text('Successful Change in Password!')
  $('#message2').removeClass('success') // better?
  $('#message2').addClass('success')
  console.log('Change Password Succes')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message2').text('Failed to Change Password!')
  $('#message2').removeClass('failure') // better?
  $('#message2').addClass('failed')
  console.log('Failed to Change Password')
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
