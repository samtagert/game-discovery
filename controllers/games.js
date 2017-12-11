var Game = require('../models/game');
var request = require('request')
const igdb = require('igdb-api-node').default;
const client = igdb(`${process.env.mashapeKey}`);
var Game = require('../models/game')


function index(req, res) {
  request(client, function(error, response, body) {
    client.games({
      fields: '*',
      limit: 20
    })
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      throw error;
    });
  })
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

// REQUEST URL https://api-2445582011268.apicast.io
// APP NAME Sam Tagert's App
// Add this as a user-key parameter to your API calls to authenticate.

// Headers
// Key       Value
// user-key  Your Key
// Accept    application/json

// https://api-2445582011268.apicast.io/genres/?fields=*&filter[slug][eq]=point-and-click
// https://api-2445582011268.apicast.io/games/?filter[rating][gt]=99