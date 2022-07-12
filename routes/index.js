var express = require('express');
var router = express.Router();
/*  Messages   */
 const messages = [
  {
    text: "Hi there!  Please fill free to add your message",
    user: "Mehdi",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

module.exports = { indexRouter:router , messages};
