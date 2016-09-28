// 1. Create a h1 (with the words Hello world) in your html and give it an id
// 2. Find that h1 using javascript 
// 3. Change the color of that h1 using javascript
// 4. Change the background color of the h1 using javascript
// 5. Change the text of the h1 using javascript

// Do this without jquery, and do this with jquery :) 



// PRINT EACH STRING SEPARATELY - JAVASCRIPT (EASY METHOD)
// ============================================================

// var message = document.getElementById("message");
// var favFoods = ['hamburger', 'pho', 'pad-see-ew', 'pizza'];
// var food = " ";
  
// for (i = 0; i < favFoods.length; i++) {
//   food = food + "<strong>" + favFoods[i] + "</strong> <br>";
// }

// message.innerHTML = food;



// PRINT EACH STRING SEPARATELY - JAVASCRIPT (HARDER METHOD)
// ============================================================

// var message = document.getElementById("message");
// var favFoods = ['hamburger', 'pho', 'pad-see-ew', 'pizza'];

// for (i = 0; i < favFoods.length; i++) {
//   var para = document.createElement("p");
//   var food = document.createTextNode(favFoods[i]);
//   para.appendChild(food);
//   document.getElementById("message").appendChild(para);
// }



// PRINT EACH STRING SEPARATELY - USING JQUERY
// ============================================================

// var message = $('#message');
// var favFoods = ['hamburger', 'pho', 'pad-see-ew', 'pizza'];

// for (i = 0; i < favFoods.length; i++) {
//   message.append('<p>' + favFoods[i] + '<sup>NEW</sup></p>');
// }

// message.innerHTML = '&#60;strong&#62;'+ favFoods + '&#60;strong&#62;';

// Insert each array item with <strong> brackets into the #message div



// CHANGING CONTENT WITHIN CONTAINER - WITHOUT JQUERY
// ============================================================

// var message = document.getElementById("message");

// message.style.color = "yellow";
// message.style.background = "green";
// message.innerHTML = "&#60;No pain, no gain son&#62;";



// CHANGING CONTENT WITHIN CONTAINER - WITH JQUERY
// ============================================================

// var message = $('#message');

// message.css('color', 'red');
// message.css('background-color', 'blue');
// message.text('<p>No pain, no gain son</p>')


/*
var showImages = function(imagelink, container) {

  var items = [];

  container.html('<img src="' + this.href + '">');

  imagelink.each(function(link) {
    var data = {
      src: this.href
    };

    console.log(data);

    items.push(data);
  });
}

var links = $('.gallery a');
var viewer = $('#viewer');
showImages(links, viewer);
*/




// SHOW IMAGE IN CONTAINER UPON CLICK ON THUMBNAIL - JAVASCRIPT
// ============================================================

// var viewer = document.getElementById('viewer');
// var links = document.querySelectorAll('.gallery a');

// for (i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', showImage);
// }

// function showImage(event) {
//   event.preventDefault();
//   var link = event.currentTarget;
//   var imageUrl = link.href;

//   var image = document.createElement('img');
//   image.setAttribute('src', imageUrl);
//   image.setAttribute('width', '900');
//   image.setAttribute('alt', 'Full size image');

//   viewer.innerHTML = "" ;
//   viewer.appendChild(image);
// }



// SHOW IMAGE IN CONTAINER UPON CLICK ON THUMBNAIL - JQUERY
// ============================================================

var viewer = $('#viewer');
var links = $('.gallery a');

links.click(showImage);

function showImage(event) {
  event.preventDefault();
  var link = event.currentTarget;
  var imageUrl = link.href;

  var image = $('<img>');
  image.attr({
    src: imageUrl,
    width: 700,
    height: 467,
    alt: 'Larger image'
  });

  image.hide();

  viewer.html(image);

  image.fadeIn(700);
}

// viewer.show();

// CLOSE GALLERY VIEWER UPON "X" BUTTON CLICK




// ALERT HREF LINK UPON CLICK
// ============================================================

// var viewer = document.getElementById('viewer');
// var links = document.querySelectorAll('.gallery a');


// function showLink(event) {
//   event.preventDefault();
//   var link = event.currentTarget; 

//   alert(link.href);
// }

// for (i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', showLink);
// }




// var showLink = function() {
//   alert('<a href="' +  + '">');
// }

// NOTE: When creating functions, be sure to move any specific coding
// outside of the function to increase flexibility of the function to
// allow reuse of the function.

// TASK: When links <a> are clicked on, call/spawn an alert that displays the URL in the form of an <a href=""

// HINT: Google addEventListener(). Jquery is .click().

// 1. Create link/button on gallery page (COMPLETED)
// 2. Find view container
// 3. Throw text into it for testing
// 4. Add click event to all links to show image once clicked
//      alert to show href for the link


// var myapp = {
//   name: "John Doe", 

//   init: function(name) {
//     this.name = name; 
//     this.renderButton(); 
//   }, 


//   renderButton: function() {
//     // CREATE LINK USING PERSON'S NAME
//     var link = '<a href="yahoo.com">' + this.name + '</a>'; 

//     // ADD LINK TO PAGE
//     $('#container').html(link); 
//   }

// }; 

// myapp.init("Alex"); 



// var showImages = function() {
//   var links = $('.gallery a');
//   var viewer = $('#viewer');
//   console.log(viewer);
//   var items = [];

//   viewer.html('<img src="' + this.href + '">');


//   links.each(function() {
//     // LOG THE VALUE OF HREF 
//     console.log(this.href);

//     // CRATE A NEW OBJECT & CALL IT 'data'
//     var data = {   
//       src: this.href,
//       name: 'alex',
//       height: 6.2
//     };

//     console.log(data);

//     // PUSH NEW OBJECT INTO items array
//     items.push(data);
//   });

// links.on('click', function() {
//   items.src.remove();
// items.style.display = 'block';
// });



// NOTES WHEN WRITING CODE
// ============================================================

// - When setting style attibute, use Style object properties (.style) instead of .setAttribute()
// - .innerHTML() can only be set to a string
// - .innerHTML() can be used to wiped current content out with empty .innerHTML(' ')
// - Better to use function myFunction() {} than var myFunction = function() {}
// - When creating functions, be sure to move any specific coding outside of the function to
//   increase flexibility of the function to allow reuse of the function.
// - Can't pass an object in Javascript. Only do that in Jquery.


// Trouble determining order of steps of what to code next when coding

