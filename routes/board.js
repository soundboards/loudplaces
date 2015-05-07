var express = require('express');
var router = express.Router();

// GET board by id;
router.get('/:id', function(req, res, next){
  res.send('get board');
});

// GET edit board;
router.get('/:id/edit', function(req, res, next){
  res.send('show edit board page');
});

// POST board;
router.post('/:id/edit', function(req, res, next){
  res.send('save edit board changes');
});

// GET board by id;
// might not be necessary as an enire page; could consider rendering it with /board/id;
router.get('/:id/collabs', function(req, res, next){
  res.send('get board collaborators');
});

module.exports = router;
