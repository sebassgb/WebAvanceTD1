var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chez Amaryllis' });
});

router.get('/insertClients', function(req, res, next) {
  res.render('insertClients', { title: 'Chez Amaryllis' });
});

router.get('/insertProducts', function(req, res, next) {
  res.render('insertProducts', { title: 'Chez Amaryllis' });
});

router.get('/productsBought', function(req, res, next) {
  res.render('productsBought', { title: 'Chez Amaryllis' });
});

module.exports = router;
