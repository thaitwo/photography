/*
+ Find all links and create a var for them
+ Loop through all links and create an object for photoswipe 
- Add a click handler to all links that launches photoswipe when any link is click (canceling out the default click event) 
- Create a single function for all of this logic (ex. activatePhotoswipe() )
- Call that new function when the web page has loaded (tip. $(document).ready.. 
*/

// PHOTOSWIPE FUNCTION

// Activate Gallery
var activateGallery = function() {

  // Register all HTML elements
  var container = document.querySelectorAll('.pswp')[0];
  var links = $('.gallery a');

  // Empty array of items
  var items = [];

  // Loop through all HTML links
  links.each(function() {

    // Push data for each link into array
    items.push({
      src: this.href,
      w: 900,
      h: 600,
    });
  });

  // Give Photoswipe a container and date for images
  var gallery = new PhotoSwipe(container, false, items);

  // Activate Photoswipe on image click
  // links.on('click', function(event) {
  //   event.preventDefault();
  //   console.log(event);
  //   gallery.init();
  // });
  links.on('click', function(event) {
    console.log(event);
    backgroundColor = 'green';
    gallery.init();
  });
};




// CALL PHOTOSWIPE FUNCTION

$(document).ready(function() {
  activateGallery();
});
