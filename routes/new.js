var express = require('express');
const { messages } = require('./index');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('form',)
});
router.post('/', function(req, res) {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
  res.redirect('/');
});
  module.exports = router;
