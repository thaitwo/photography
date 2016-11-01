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
  res.render('contact', {
    title: 'Contact',
    alert: null,
    name: null,
    email: null,
    message: null
  });
});

/* POST CONTACT FORM */
router.post('/contact', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var alert = '';

  if (!name) {
    alert = 'PLEASE ENTER YOUR NAME.';
  }

  if (!email) {
    alert = alert + '<br>PLEASE ENTER YOUR EMAIL.';
  }

  if (!message) {
    alert = alert + '<br>PLEASE ENTER YOUR MESSAGE.';
  }

  if (!name || !email || !message) {
    // FAILED
    res.render('contact', {
      title: 'Contact',
      alert: alert,
      name: name,
      email: email,
      message: message
    });
  }
  else {
    // SUCCESS
    res.render('contact-success', {
      title: 'Contact',
      name: name,
      email: email,
      message: message
    });
  }
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
router.get('/gallery/people', function(req, res, next) {
  res.render('gallery-people', { title: 'People'});
});

/* GET GALLERY FOOD PAGE */
router.get('/gallery/food', function(req, res, next) {
  res.render('gallery-food', { title: 'Food'});
});

module.exports = router;
