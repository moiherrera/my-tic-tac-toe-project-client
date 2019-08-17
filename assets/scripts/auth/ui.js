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
  console.log('Sign Up Success')
}
const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Successful sign-in!')
  $('#message').removeClass('success') // better?
  $('#message').addClass('success')
  console.log('Sign in Success! User is', store.user)
  $('#signed-in-user').text(store.user.email)
}
const changePasswordSuccess = function () {
  $('#message').text('Successful Change in Password!')
  $('#message').removeClass('success') // better?
  $('#message').addClass('success')
  console.log('Change Password Succes')
}
const signOutSuccess = function () {
  store.user = null
  $('#signed-in-user').text('')
  $('#message').text('Successful Sign Out!')
  $('#message').removeClass('success') // better?
  $('#message').addClass('success')
  console.log('Successful Sign Out')
}
const failure = function () {
  $('#message').text('Operation Failed!')
  $('#message').removeClass('failure') // better?
  $('#message').addClass('failed')
  console.log('Failure ran')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
