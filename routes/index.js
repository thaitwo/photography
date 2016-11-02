var express = require('express');
var router = express.Router();
var api_key = 'key-d0a20155f81d1b9337d53b4f282f306a';
var domain = 'mail.thaitwo.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

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
    errors: null,
    name: null,
    email: null,
    message: null,
  });
});


/* POST CONTACT FORM */
router.post('/contact', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  // VALIDATE USER FORM CONTENT
  req.checkBody('name', 'PLEASE ENTER YOUR NAME').notEmpty();
  req.checkBody('email', 'PLEASE MUST ENTER AN EMAIL').notEmpty().isEmail().withMessage('PLEASE ENTER A VALID EMAIL');
  req.checkBody('message', 'PLEASE ENTER YOUR MESSAGE').notEmpty();

  // ESCAPE USER FORM CONTENT (TAKES OUT HTML)
  req.sanitizeBody('name').toString();
  req.sanitizeBody('email').toString();
  req.sanitizeBody('message').toString();

  // CHECK FOR ERRORS
  var errors = req.validationErrors();

  // MAILGUN
  var data = {
    from: 'thaitwo@thaitwo.com',
    to: 'thethaitu@gmail.com',
    subject: 'thaitwo photography',
    text: 'Name: ' + name + '\n' + '\n' + 'Email: ' + email + '\n' + '\n' + 'Message: ' + message
  };

  if (errors) {
    // FAILED - FIELDS STILL POPULATED
    res.render('contact', {
      title: 'Contact',
      errors: errors,
      name: name,
      email: email,
      message: message
    })
  }
  else {
    // SEND TO EMAIL
    mailgun.messages().send(data, function (error, body) {
    });
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
