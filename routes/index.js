var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'THAI TU' });
});

/* GET about page */
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'ABOUT'});
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'CONTACT'});
});

/* GET gallery page */
router.get('/gallery', function(req, res, next) {
	res.render('gallery', { title: 'GALLERIES'});
});

/* GET gallery landscape page */
router.get('/gallery/landscape', function(req, res, next) {
	res.render('gallery-landscape', { title: 'LANDSCAPE'});
});

/* GET gallery portrait page */
router.get('/gallery/portrait', function(req, res, next) {
	res.render('gallery-portrait', { title: 'PORTRAIT'});
});

/* GET gallery food page */
router.get('/gallery/food', function(req, res, next) {
	res.render('gallery-food', { title: 'FOOD'});
});

module.exports = router;
