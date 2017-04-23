var $viewer = $('.viewer');
var $imageviewer = $('.viewer-image-container');
var $links = $('.gallery a');
var $closeviewer = $('.viewer-close-button');
var currentIndex = 0;
var $next = $('#next');
var $prev = $('#prev');
var $caption = $('.viewer-caption');
var $gridMasonry = $('.grid-masonry');


// CREATES IMAGE AND CAPTION
// -------------------------------------------------
function createImage(link) {
  var imageUrl = link.href;   // Finds href key in image link
  var title = link.title;     // Finds title key in image link
  var image = $('<img>');     // Creates an <img> tag
  image.attr({
    src: imageUrl,            // Inserts href value into <img src=" ">
  });

  image.hide();               // Hides image
  $imageviewer.html(image);   // Displays image in the viewer container
  $caption.text(title);       // Displays caption in the caption container
  image.fadeIn(300);
};


// NEXT IMAGE IN GALLERY
// ----------------------------------------
function nextImage() {
  var nextIndex;

  // If current image is the last image, set next image to the first image
  if (currentIndex === $links.length - 1) {
    currentIndex = 0;
    nextIndex = 0;
  }
  else {
    nextIndex = currentIndex + 1;
    currentIndex = nextIndex;
  }

  // Display the next image
  createImage($links[nextIndex]);
};


// PREVIOUS IMAGE IN GALLERY
// ----------------------------------------
function prevImage() {

  // If current image is the first image, set the previous image to the last image
  if (currentIndex === 0) {
    currentIndex = $links.length;
  }

  var prevIndex = currentIndex - 1;
  currentIndex = prevIndex;

  // Display the previous image
  createImage($links[prevIndex]);
};



// GALLERY VIEW FUNCTION
// ===============================================================

function startView() {
  // LOOP THROUGH ARRAY OF LINKS AND DISPLAY IMAGE
  $links.each(function(index, item) {

    // Each time an image link is clicked, use that image link to
    // to create an image and display it in the viewer
    $(item).click(function(event) {
      event.preventDefault();
      currentIndex = index;
      var link = event.currentTarget;

      $viewer.show();
      createImage(link);
    });
  })



  // CLOSE GALLERY VIEWER
  // ----------------------------------------

  $closeviewer.on('click touch', function(event) {
    event.stopPropagation();
    $viewer.fadeOut(200);
  });

  // Close gallery viewer container on click anywhere within the container
  $viewer.click(function() {
    $viewer.fadeOut(200);
  });

  // Prevent image container from closing on click by preventing bubbling
  $imageviewer.click(function(event) {
    event.stopPropagation();
  });


  // SWIPING CAPABILITIES
  // ----------------------------------------

  // SWIPE UP/DOWN - Closes gallery viewer
  $viewer.swipe({
    swipeDown: function() {
      $viewer.fadeOut(200);
    }
  });

  $viewer.swipe({
    swipeUp: function() {
      $viewer.fadeOut(200);
    }
  });

  // SWIPE LEFT - Displays next image
  $viewer.swipe({
    swipeLeft:function() {
      nextImage();
    }
  });

  // SWIPE RIGHT - Displays previous image
  $viewer.swipe({
    swipeRight:function() {
      prevImage();
    }
  });

  // TAP - Displays next image
  $imageviewer.swipe({
    tap:function(event) {
      event.preventDefault();
      event.stopPropagation();
      nextImage();
    }
  });


  // NEXT/PREVIOUS BUTTONS
  // ----------------------------------------

  // NEXT BUTTON - Displays next image
  $next.click(function(event) {
    event.stopPropagation();

    nextImage();
  });



  // PREVIOUS BUTTON - Displays previous image
  $prev.click(function(event) {
    event.stopPropagation();

    prevImage();
  });


  // ARROWS LEFT/RIGHT - Switch images
  // ----------------------------------------

  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
      prevImage();
      e.preventDefault(); // prevent the default action (scroll / move caret)
      break;

      case 39: // right
      nextImage();
      e.preventDefault(); // prevent the default action (scroll / move caret)
      break;
    }
  });
}


$(document).ready(function() {
  if($('.viewer')) {
    startView();
  }
});