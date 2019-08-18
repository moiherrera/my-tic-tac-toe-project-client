const config = require('../config')
const store = require('../store')

const createGame = () => {
  console.log('Create New Game')
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: '{}'
  })
}

const updateGame = (currentMoveData) => {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: currentMoveData
  })
}

module.exports = {
  createGame,
  updateGame
}
