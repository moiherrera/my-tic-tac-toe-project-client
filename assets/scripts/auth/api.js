'use strict'
// CRUD information
// api.signUp will allow us to use the ajax object, the ajax object will be passed to the api.signUp.
const config = require('../config')
const store = require('../store')
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    // the config.apiURL will give us the entire http URL, we are using the apiURL to hold the value of the http URL
    // Since we are creating information, such as a profile then we will use the POST function
    method: 'POST',
    data: data
    // data: { credentials: {email: 'blah', password: '123'}} This is the form our data will pass through in.
    // now we have to write signUpSuccess and signUpFailure, so now we go to the UI file to continue the process.
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
