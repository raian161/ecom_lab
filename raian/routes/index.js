var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/second_page', function(req, res, next) {
  res.render('second_page');
});

router.get('/third_page', function(req, res, next) {
  res.render('third_page');
});

module.exports = router;
