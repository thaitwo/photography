# Photography Portfolio
This project is my personal photography portfolio featuring multiple galleries, a gallery viewer, and a contact form. The website is also responsive.

[![thaitwo](http://www.thaitwo.com/images/thaitwo-homepage.png)](http://www.thaitwo.com)

## Technologies Used
* [Express](http://expressjs.com/)
* [Gulp](http://gulpjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Sass](http://sass-lang.com/)
* [JS/jQuery](https://jquery.com/)

## Installations to Get Started

### STEP 1. INSTALL NODE.JS AND NPM
Download and install [Node.js](https://nodejs.org/en/download/)

Install [npm](https://docs.npmjs.com/cli/install) (via command line)

```
npm install
```

### STEP 2. INSTALL EXPRESS FRAMEWORK

**Go to root directory:**

Install [Express](http://expressjs.com/) (via command line)

_Express is used as the framework for the website._

```
npm install express --save
```

### STEP 3. INSTALL EXPRESS LAYOUTS

Install [Express EJS Layouts](https://www.npmjs.com/package/express-ejs-layouts) (via command line)

_Express Layouts is used for creating templates and the layout of the website._

```
npm install express-ejs-layouts --save
```

### STEP 4. INSTALL MAILGUN

Install [Mailgun JS](https://www.npmjs.com/package/mailgun-js) (via command line)

_Mailgun is used for the contact form._

```
npm install mailgun-js --save
```

### STEP 5. INSTALL GULP & GULP PLUGINS

Install [Gulp](https://www.npmjs.com/package/gulp-install) (via command line)

_Gulp is only used for development purposes._

```
npm install gulp --save-dev
```

Install [Gulp Sass](https://www.npmjs.com/package/gulp-sass) (via command line)

_Gulp Sass is used to compile all .scss files into one .css file._

```
npm install gulp-sass --save-dev
```

Install [Gulp Livereload](https://www.npmjs.com/package/gulp-livereload) (via command line)

_Gulp Livereload will automatically listen and load your changes in the browser._

```
npm install gulp-livereload --save-dev
```

Gulp Livereload is best used with Google Chrome. After installing Gulp Livereload, make sure to add the [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) extension in Chrome in order for it to work.

## .env File

Create a file and name it **".env"**

Insert the following lines below into the file. Make sure to replace whatever is in the brackets (< >) with your own info.

```
MAILGUN_API_KEY=<mailgunapikey>
MAILGUN_DOMAIN=mail.<sitename>.com
FROM_EMAIL=<sitename>@<sitename>.com
TO_EMAIL=<youremail>@<email>.com
```

## Deployment
This website was deployed using Heroku.
