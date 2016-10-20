var $viewer = $('.viewer');
var $imageviewer = $('.viewer-image-container');
var $links = $('.gallery a');
var $closeviewer = $('.viewer-close-button');
var currentIndex = 0;
var $next = $('#next');
var $prev = $('#prev');
var $caption = $('.viewer-caption');



// CREATES IMAGE AND CAPTION
function createImage(link) {
  var imageUrl = link.href;   // Finds href key in image link
  var title = link.title;     // Finds title key in image link
  var image = $('<img>');     // Creates an <img> tag
  image.attr({
    src: imageUrl,            // Inserts href into <img src=" ">
  });

  image.hide();               // Hides image
  $imageviewer.html(image);   // Displays image in the viewer container
  $caption.text(title);       // Displays caption in the caption container
  image.fadeIn(500);
};



// NEXT IMAGE IN GALLERY
function nextImage() {
  var nextIndex;

  if (currentIndex === $links.length - 1) {
    currentIndex = 0;
    nextIndex = 0;
  }
  else {
    nextIndex = currentIndex + 1;
    currentIndex = nextIndex;
  }

  createImage($links[nextIndex]);
};



// PREVIOUS IMAGE IN GALLERY
function prevImage() {
  if (currentIndex === 0) {
    currentIndex = $links.length;
  }

  var prevIndex = currentIndex - 1;
  currentIndex = prevIndex;

  createImage($links[prevIndex]);
};



// GALLERY VIEW FUNCTION
function startView() {
  // LOOPS THROUGH ARRAY OF LINKS AND DISPLAY IMAGE
  $links.each(function(index, item) {
    $(item).click(function(event) {
      event.preventDefault();
      currentIndex = index;
      var link = event.currentTarget;

      $viewer.show();
      createImage(link);
    });
  })



  // CLOSE GALLERY VIEWER
  $closeviewer.click(function(event) {
    event.stopPropagation();
    $viewer.fadeOut(200);
  });

  // Closes gallery viewer container on click anywhere within the container
  $viewer.click(function() {
    $viewer.fadeOut(200);
  });

  // Prevents image container from closing on click by preventing bubbling
  $imageviewer.click(function(event) {
    event.stopPropagation();
  });

  // SWIPE UP & DOWN - Closes gallery viewer
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



  // NEXT BUTTON - Displays next image in gallery
  $next.click(function(event) {
    event.stopPropagation();
    
    nextImage();
  });



  // SWIPE LEFT - Displays next image in gallery
  $viewer.swipe({
    swipeLeft:function() {
      nextImage();
    }
  });



  // PREVIOUS BUTTON - Displays previous image in gallery
  $prev.click(function(event) {
    event.stopPropagation();
    
    prevImage();
  });



  // SWIPE RIGHT - Displays previous image in gallery
  $viewer.swipe({
    swipeRight:function() {
      prevImage();
    }
  });
}


$(document).ready(function() {
  if($('.viewer')) {
    startView(); 
  }
})