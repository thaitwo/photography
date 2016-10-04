var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thaitwo' });
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

/* GET gallery page */
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Galleries'});
});

/* GET gallery landscape page */
router.get('/gallery/landscape', function(req, res, next) {
  res.render('gallery-landscape', { title: 'Landscape'});
});

/* GET gallery portrait page */
router.get('/gallery/portrait', function(req, res, next) {
  res.render('gallery-portrait', { title: 'Portrait'});
});

/* GET gallery food page */
router.get('/gallery/food', function(req, res, next) {
  res.render('gallery-food', { title: 'Food'});
});

/* GET freestyle page */
router.get('/freestyle', function(req, res, next) {
  res.render('freestyle', {
  	title: 'Freestyle',
  	layout: 'layout-freestyle'
  });
});

module.exports = router;
