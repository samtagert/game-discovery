var Game = require('../models/game');
var request = require('request')
const igdb = require('igdb-api-node').default;
const client = igdb(`${process.env.mashapeKey}`);
var Game = require('../models/game')

// when presenting and asked why you can't search for a specific game, it's because this is a
// game FINDER, if you know what game you want to look at there's no reason to use this site

function index(req, res) {
    client.games({
      filters: {
        'release_dates.date-gt': '2010-12-31',
        'release_dates.date-lt': '2012-01-01',
        'release_dates.platform-eq': 48,
        'rating-gt': 60,
        'game_modes-eq': 2,
        'themes-eq': 19,
        'genres-eq': 12
      },
      fields: '*',
      limit: 10
    })
    .then((igdbResponse) => {
      res.json(igdbResponse.body)
    })
    .catch(error => {
      throw error;
    });
}

// fields: '*',
// should i just use their tags option
// separate function for when you click a specific tag while on a game show page

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