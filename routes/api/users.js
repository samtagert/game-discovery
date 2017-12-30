var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var usersCtrl = require('../../controllers/users');

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/discoverylist', usersCtrl.profile);

module.exports = router;