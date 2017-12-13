var Game = require('../models/game');
var request = require('request')
const igdb = require('igdb-api-node').default;
const client = igdb(`${process.env.mashapeKey}`);
var Game = require('../models/game')

// when presenting and asked why you can't search for a specific game, it's because this is a
// game FINDER, if you know what game you want to look at there's no reason to use this site

// have the filter fields be "required" (already filled out with defaults basically)
// defaults are date gt-1900, lt date-now, platform-eq "all (need each id)", rating-gt 0, game modes-eq 1,2, etc all filled out
// calendar for dates, slider for rating (at bottom because it's the most diff), dropdown pre-filled checkboxes for the others
// after initial search, the text changes to "Narrow your discovery even more?" and "Make a new discovery!" wiped out current list and brings you to original
// Narrow your disc even more filters through the list of games you have, does not make a new fetch request
function index(req, res) {
  console.log('req =', req.body)
    client.games({
      filters: {
        'release_dates.platform-in': req.body.platforms,
        'game_modes-in': req.body.gameModes,
        'rating-gte': req.body.rating
      },
      fields: '*',
      limit: 5
    })
    .then((igdbResponse) => {
      res.json(igdbResponse.body)
    })
    .catch(error => {
      throw error;
    });
}

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