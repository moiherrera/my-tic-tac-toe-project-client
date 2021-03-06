const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// const onSignUp = () => {
//
// }
// event eventHandler for sign-up formp
// this form events.js is directly linked to app.js. The chain of web development looks like this at the moment app.js <- events.js
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // the eventHandler is going to make the API call, call to the API and its going to handle a successful condition and a failure condition
  // We will eventuially write a sign up function and pass in the data from API. the .then will be used when API call works, but when it does not works
  // we must use the .catch
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // prevent the default action from happening
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // data = {passwords: {old: 123, new: 456}}
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// ui.signInSuccess , pass whatever API gives it, in this case its TOKEN.
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
