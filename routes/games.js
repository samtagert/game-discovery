var express = require('express');
var router = express.Router();
var gamesCtrl = require('../controllers/gamesController');

router.get('/games', gamesCtrl.index);

module.exports = router;