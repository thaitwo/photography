var express = require('express');
var router = express.Router();
var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;
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
  // GET VALUES FROM CONTACT FORM FIELDS
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  // VALIDATE USER FORM CONTENT WITH MAILGUN-JS
  req.checkBody('name', 'PLEASE ENTER YOUR NAME').notEmpty();
  req.checkBody('email', 'PLEASE ENTER AN EMAIL').notEmpty().isEmail().withMessage('PLEASE ENTER A VALID EMAIL');
  req.checkBody('message', 'PLEASE ENTER YOUR MESSAGE').notEmpty();

  // ESCAPE USER FORM CONTENT (TAKES OUT HTML) WITH MAILGUN-JS
  req.sanitizeBody('name').toString();
  req.sanitizeBody('email').toString();
  req.sanitizeBody('message').toString();

  // CHECK FOR MAILGUN-JS ERRORS
  var errors = req.validationErrors();

  // MESSAGE FORMAT FOR MAILGUN TO SEND ME
  var emailMessage = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: 'thaitwo photography',
    text: 'Name: ' + name + '\n' + '\n' + 'Email: ' + email + '\n' + '\n' + 'Message: ' + message
  };

  // CHECK FOR ERRORS (FROM MAILGUN-JS)
  if (errors) {
    // FAILED - DISPLAY ERRORS, POPULATE FIELDS WITH SUBMITTED VALUES
    res.render('contact', {
      title: 'Contact',
      errors: errors,
      name: name,
      email: email,
      message: message
    })
  }
  else {
    // SEND TO MAILGUN TO EMAIL TO ME
    mailgun.messages().send(emailMessage, function (error, body) {
      // CHECK FOR ANY MAILGUN ERRORS
      if (error) {
        // FAILED - SHOW ERRORS, POPULATE FIELDS WITH SUBMITTED VALUES
        res.render('contact', {
          title: 'Contact',
          errors: [{msg: 'Sorry, your email did not send.'}],
          name: name,
          email: email,
          message: message
        });
      }
      else {
        // SUCCESS - SHOW SUCCESS PAGE
        res.render('contact-success', {
          title: 'Contact',
        });
      }
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

/* GET GALLERY TRAVEL PAGE */
router.get('/gallery/travel', function(req, res, next) {
  res.render('gallery-travel', { title: 'Travel'});
});

/* GET GALLERY ENGAGEMENT PAGE */
router.get('/gallery/engagement', function(req, res, next) {
  res.render('gallery-engagement', { title: 'Engagement'});
});

/* GET GALLERY STREET PAGE */
router.get('/gallery/street', function(req, res, next) {
  res.render('gallery-street', { title: 'Street'});
});

/* GET GALLERY SPORTS PAGE */
router.get('/gallery/sports', function(req, res, next) {
  res.render('gallery-sports', { title: 'Sports'});
});

/* GET GALLERY B&W PAGE */
router.get('/gallery/things', function(req, res, next) {
  res.render('gallery-things', { title: 'Things'});
});

module.exports = router;
