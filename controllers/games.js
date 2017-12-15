var request = require('request')
const igdb = require('igdb-api-node').default;
const client = igdb(`${process.env.mashapeKey}`);
var User = require('../models/user')
// require user model, find by id based on req.body.user
// then do stuff

// when presenting and asked why you can't search for a specific game, it's because this is a
// game FINDER, if you know what game you want to look at there's no reason to use this site

// have the filter fields be "required" (already filled out with defaults basically)
// defaults are date gt-1900, lt date-now, platform-eq "all (need each id)", rating-gt 0, game modes-eq 1,2, etc all filled out
// calendar for dates, slider for rating (at bottom because it's the most diff), dropdown pre-filled checkboxes for the others
// after initial search, the text changes to "Narrow your discovery even more?" and "Make a new discovery!" wiped out current list and brings you to original
// Narrow your disc even more filters through the list of games you have, does not make a new fetch request
function index(req, res) {
    client.games({
      filters: {
        'release_dates.platform-in': req.body.platforms,
        'game_modes-in': req.body.gameModes,
        'total_rating-gte': req.body.rating
      },
      fields: '*',
      limit: 50
    })
    .then((igdbResponse) => {
      res.json(igdbResponse.body)
    })
    .catch(error => {
      throw error;
    });
}

function show(req, res) {
  client.games({
    ids: [
        req.params.id
    ]
}, [
    'name',
    'summary',
    'total_rating',
    'cover'
])
  .then((igdbResponse) => {
    res.json(igdbResponse.body)
  })
  .catch(error => {
    throw error
  })
}

// separate function for when you click a specific tag while on a game show page

function addGame(req, res) {
  User.findOne({_id: req.body.user._id}, (err, user) => {
    if (!user.discoveryList.some(game => game.id === req.body.igdbId)) {
      user.discoveryList.push({name: req.body.name, id: req.body.igdbId})
      user.save((err, data) =>{
        if (err) {
          res.status(500).json(err)
        }
        res.status(200).json(data)
      })
    }
  })
}

function removeGame(req, res) {
  console.log('removeGame function')
}

module.exports = {
  index,
  show,
  addGame,
  removeGame
}