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


module.exports = router;
