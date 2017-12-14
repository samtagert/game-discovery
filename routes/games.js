var express = require('express');
var router = express.Router();
var Game = require('../models/game');
var gamesCtrl = require('../controllers/games');

router.post('/api/games', gamesCtrl.index);
router.get('/api/games/:id', gamesCtrl.show);

module.exports = router;