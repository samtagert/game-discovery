var Game = require('../models/game')

function index(req, res) {
  console.log('index function')
}

function addGame(req, res) {
  console.log('addGame function')
}

function removeGame(req, res) {
  console.log('removeGame function')
}

module.exports = { 
  index,
  addGame,
  removeGame
}