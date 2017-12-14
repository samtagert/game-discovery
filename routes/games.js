var express = require('express');
var router = express.Router();
var gamesCtrl = require('../controllers/games');

router.post('/api/games', gamesCtrl.index);
router.post('/api/games/discover', gamesCtrl.addGame);
router.get('/api/games/:id', gamesCtrl.show);

module.exports = router;