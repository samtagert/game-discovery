var express = require('express');
var router = express.Router();
var gamesCtrl = require('../controllers/games');

router.get('/games', gamesCtrl.index);

module.exports = router;