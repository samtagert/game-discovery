var request = require('request')
const igdb = require('igdb-api-node').default;
const client = igdb(`${process.env.mashapeKey}`);
var User = require('../models/user')

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

module.exports = {
  index,
  show,
  addGame
}