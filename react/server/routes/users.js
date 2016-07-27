var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is a Calculator get');
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  res.send('This is a Calculator post');
});

/* PUT users listing. */
router.put('/', function(req, res, next) {
  res.send('This is a Calculator put');
});

module.exports = router;
