# Photography Portfolio
A responsive photography portfolio website created to display my photography works. It features a full-width layout with multiple galleries, a gallery viewer, and a contact form that connects with Mailgun.

## View Project

[View Project](http://www.thaitwo.com "Thai Two Photography")

[![Thaitwo Photography](https://raw.githubusercontent.com/thaitwo/photography/master/public/images/screenshot.png)](http://www.thaitwo.com)

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

Create a file and name it **".env"**. (This file contains information that will always be hidden to the public. It will only be visible locally.)

Insert the following lines below into the file. Make sure to replace whatever is in the brackets (< >) with your own info.

```
MAILGUN_API_KEY=<mailgunapikey>
MAILGUN_DOMAIN=mail.<sitename>.com
FROM_EMAIL=<sitename>@<sitename>.com
TO_EMAIL=<youremail>@<email>.com
```

## Running Website Locally

Because this website is hosted through Heroku and there is an .env file, typing **"npm start"** in the command line will throw an error since the Mailgun API Key will be undefined because it is hidden in the .env file.

Instead, type **"heroku local"** into the command line to get the website running locally. This allows the website to fetch the Mailgun API Key from Heroku.

```
heroku local
```

## Deployment
This website was deployed using Heroku.

Deployment Method should be set to GitHub.

Before deploying website, make sure to go to the "Settings" tab in Heroku and create the following Config Variables below and give each variable the corresponding value from the **".env"** file.

```
MAILGUN_API_KEY
```

```
MAILGUN_DOMAIN
```

```
FROM_EMAIL
```

```
TO_EMAIL
```