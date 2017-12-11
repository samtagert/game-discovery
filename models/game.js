var mongoose = require('mongoose')
var Schema = mongoose.Schema

var gameSchema = new Schema({
  igdbId: String,
  name: String
})

module.exports = mongoose.model('Game', gameSchema)