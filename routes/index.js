var express = require('express');
var router = express.Router();

/* GET HOME PAGE. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thaitwo' });
});

/* GET ABOUT PAGE */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET CONTACT PAGE */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

/* GET GALLERY PAGE */
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Galleries'});
});

/* GET GALLERY LANDSCAPE PAGE */
router.get('/gallery/landscape', function(req, res, next) {
  res.render('gallery-landscape', { title: 'Landscape'});
});

/* GET GALLERY PORTRAIT PAGE */
router.get('/gallery/portrait', function(req, res, next) {
  res.render('gallery-portrait', { title: 'Portrait'});
});

/* GET GALLERY FOOD PAGE */
router.get('/gallery/food', function(req, res, next) {
  res.render('gallery-food', { title: 'Food'});
});

module.exports = router;
