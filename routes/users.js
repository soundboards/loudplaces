var express = require('express');
var router = express.Router();

// GET users listing;
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET user profile;
router.get('/:user', function(req, res, next){
  res.send('user profile');
});

// GET edit user profile;
router.get('/:user/edit', function(req, res, next){
  res.send('edit user profile');
});

// POST edit user profile; 
router.post('/:user/edit', function(req, res, next){
  res.send('edit user profile post request');
});

// GET user's likes;
router.get('/:user/likes', function(req, res, next){
  res.send('get user likes');
})

// POST to user's likes; 
router.post('/:user/likes', function(req, res, next){
  res.send('add to user likes');
});

// GET user's boards;  
router.get('/:user/boards', function(req, res, next){
  res.send('boards belonging to a user');
});

module.exports = router;
