var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get( '/users/:name', function(req, res){
  console.log(req.params.name);
  var tweets = tweetBank.find('name', req.params.name);
  console.log(tweets);
  // res.render( 'index', { title: 'Twitter.js', tweets: tweets } );

  res.render( 'index', { title: 'Twitter.js - Posts by '+req.params.name, tweets: tweets } );
  // res.send(req.params.name);

});

router.get( '/tweets/:id', function (req, res){
	console.log(req.params.id);
	var id = tweetBank.find('id', +req.params.id);
	console.log(id);
	res.render( 'index', { tweets: id } );
})

module.exports = router;