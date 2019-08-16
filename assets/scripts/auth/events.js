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
  console.log('submitted sign-up')

  const data = getFormFields(event.target)
  console.log('sign up data is', data)
  // the eventHandler is going to make the API call, call to the API and its going to handle a successful condition and a failure condition
  // We will eventuially write a sign up function and pass in the data from API. the .then will be used when API call works, but when it does not works
  // we must use the .catch
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  // prevent the default action from happening
  event.preventDefault()
  console.log('submitted sign-in')

  const data = getFormFields(event.target)
  console.log('sign up data is', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // data = {passwords: {old: 123, new: 456}}
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

let activePlayer = 'o'
const gameSoFar = new Array(9)
// const indexOfClick = function () {
//
// }

const enterVar = function () {
  nextPlayer()
  if ($(this).is(':empty')) {
    if (activePlayer === 'x' || activePlayer === 'o') {
      $(this).text(activePlayer)
    }
  } else {
    ui.enterVarFailure()
  }
}

const storeEvent = function (event) {
  const currentIndex = event.target.id
  const indexOfClick = (currentIndex.slice(-1) - 1)
  gameSoFar[indexOfClick] = activePlayer
}

console.log(gameSoFar)
console.log(gameSoFar.length)
// const enterVar = function () {
//   if ($(this).length !== 0) {
//     ui.enterVarFailure()
//   } else if (activePlayer === 'x' || activePlayer === 'o') {
//     $(this).text(activePlayer)
//     nextPlayer()
//   }
// }

const nextPlayer = function () {
  activePlayer === 'x' ? activePlayer = 'o' : activePlayer = 'x'
}

// const identifyWinner = function () {
//   for (let i = 0; i < 8; i++) {
//     if ((gameSoFar[i] === gameSoFar[i + 1]) && (gameSoFar[i] === gameSoFar[i + 2])) {
//       $('#message').text('player ' + activePlayer + ' wins!')
//       console.log('you win')
//       console.log(i)
//     } else if ((gameSoFar[0] === gameSoFar[i + 2]) && (gameSoFar[i] === gameSoFar[i + 4])) {
//       $('#message').text('player ' + activePlayer + ' wins!')
//       console.log(i)
//     } else if ((gameSoFar[] === gameSoFar[i + 3]) && (gameSoFar[i] === gameSoFar[i + 6])) {
//       $('#message').text('player ' + activePlayer + ' wins!')
//       console.log(i)
//     } else if ((gameSoFar[i] === gameSoFar[i + 4]) && (gameSoFar[i] === gameSoFar[i + 8])) {
//       $('#message').text('player ' + activePlayer + ' wins!')
//       console.log(i)
//     } else if (i === 9) {
//       $('#message').text('Game Tied!')
//     }
//
//     //  patternPlusTwo()
//   }
//   console.log(gameSoFar)
//   console.log(activePlayer)
// }

const identifyWinner = function () {
  const currentIndex = event.target.id
  const indexOfClick = (currentIndex.slice(-1) - 1)
  for (let i = 0; i < 8; i++) {
    while ((gameSoFar[4] !== gameSoFar[3] && gameSoFar[4] !== gameSoFar[2]) || (gameSoFar[7] !== gameSoFar[6] && gameSoFar[7] !== gameSoFar[5])) {
      if ((gameSoFar[indexOfClick] === gameSoFar[indexOfClick + 1] && gameSoFar[indexOfClick] === gameSoFar[indexOfClick + 2]) ||
        (gameSoFar[indexOfClick] === gameSoFar[indexOfClick - 1] && gameSoFar[indexOfClick] === gameSoFar[indexOfClick - 2])) {
        $('#message').text('player ' + activePlayer + ' wins!')
      } else if ((gameSoFar[indexOfClick] === gameSoFar[indexOfClick + 2] && gameSoFar[indexOfClick] === gameSoFar[indexOfClick + 4]) ||
        (gameSoFar[indexOfClick] === gameSoFar[indexOfClick - 2] && gameSoFar[indexOfClick] === gameSoFar[indexOfClick - 4])) {
        $('#message').text('player ' + activePlayer + ' wins!')
      } else if ((gameSoFar[indexOfClick] === gameSoFar[indexOfClick + 3] && gameSoFar[indexOfClick] === gameSoFar[indexOfClick + 6]) ||
        (gameSoFar[indexOfClick] === gameSoFar[indexOfClick - 3] && gameSoFar[indexOfClick] === gameSoFar[indexOfClick - 6])) {
        $('#message').text('player ' + activePlayer + ' wins!')
      } else if ((gameSoFar[indexOfClick] === gameSoFar[indexOfClick + 4] && gameSoFar[indexOfClick] === gameSoFar[indexOfClick + 8]) ||
        (gameSoFar[indexOfClick] === gameSoFar[indexOfClick - 4] && gameSoFar[indexOfClick] === gameSoFar[indexOfClick - 8])) {
        $('#message').text('player ' + activePlayer + ' wins!')
      } else if (i === 8) {
        $('#message').text('Game Tied!')
      }

      console.log(gameSoFar)
      console.log(activePlayer)
      console.log(indexOfClick)
    }
  }
}

// }
// const patternPlusTwo = function () {
//   for (let i = 0; gameSoFar.length < i; i++) {
//     if ((gameSoFar[i] === gameSoFar[i + 2]) && (gameSoFar[i] === gameSoFar[i + 4])) {
//       $('#message').text('player' + activePlayer + ' wins!')
//     } else {
//       patternPlusThree()
//     }
//   }
// }
//
// const patternPlusThree = function () {
//   for (let i = 1; gameSoFar.length < i; i++) {
//     if ((gameSoFar[i] === gameSoFar[i + 3]) && gameSoFar[i] === gameSoFar[i + 6]) {
//       $('#message').text('player' + activePlayer + ' wins!')
//     } else {
//       patternPlusFour()
//     }
//   }
// }

// const patternPlusFour = function () {
//   for (let i = 0; gameSoFar.length < i; i++) {
//     if ((gameSoFar[i] === gameSoFar[i + 4]) && (gameSoFar[i] === gameSoFar[i + 8])) {
//       $('#message').text('player' + activePlayer + ' wins!')
//     } else if (gameSoFar.length === 9) {
//       gameTied()
//     }
//   }
// }
//
// const gameTied = function () {
//   $('#message').text('Game Tied!')
// }

// ui.signInSuccess , pass whatever API gives it, in this case its TOKEN.
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  enterVar,
  storeEvent,
  identifyWinner
}
