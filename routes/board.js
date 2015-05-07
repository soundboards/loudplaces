var express = require('express');
var router = express.Router();

// GET board by id;
router.get('/', function(req, res, next){
  res.send('get list of public boards');
});

// GET board by id;
router.get('/:board', function(req, res, next){
  res.send('get board');
});

// POST board;
router.post('/:board', function(req, res, next){
  res.send('save edit board changes');
});

// DELETE board;
router.delete('/:board', function(req, res, next){
  res.send('save edit board changes');
});

// GET edit board;
router.get('/:board/edit', function(req, res, next){
  res.send('show edit board page');
});

module.exports = router;
