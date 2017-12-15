var User = require('../models/user');
var jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  profile
};

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      // TODO: Send back a JWT instead of the user
      res.json({token: createJWT(user)});
    })
    // User data invalid
    .catch(err => res.status(400).json(err));
}

function login(req, res) {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'Bad creds dude!'})
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        var token = createJWT(user);
        res.json({token})
      } else {
        return res.status(401).json({err: 'Bad creds dude!'})
      }
    })
  }).catch(err => res.status(401).json(err));
}

function profile(req, res) {
  console.log('REQ BODY', req.body)
  User.findById(req.body.id, (err, data) => {
    if (err) {
      res.status(500).send(err)
    }
    if (data) {
      res.status(200).send(data)
    } else {
      res.status(404).send("No ID")
    }
  })
}

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}