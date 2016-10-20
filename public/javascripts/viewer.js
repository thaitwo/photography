var $viewer = $('.viewer');
var $imageviewer = $('.viewer-image-container');
var $img = $('.viewer-image-container img');
var $links = $('.gallery a');
var $closeviewer = $('.viewer-close-button');
var currentIndex = 0;
var $next = $('#next');
var $prev = $('#prev');
var $caption = $('.viewer-caption');



function createImage(link) {
  var imageUrl = link.href;
  var title = link.title;
  var image = $('<img>');
  image.attr({
    src: imageUrl,
  });

  image.hide();
  $imageviewer.html(image);
  $caption.text(title);
  image.fadeIn(500);
};

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
  // LOOP THROUGH ARRAY OF LINKS AND DISPLAY IMAGE
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

  // Closes entire gallery viewer container on click anywhere within the container
  $viewer.click(function() {
    $viewer.fadeOut(200);
  });

  // Prevents the image container from closing on click by preventing bubbling
  $imageviewer.click(function(event) {
    event.stopPropagation();
  });


  // NEXT BUTTON - Displays the next image in the gallery
  $next.click(function(event) {
    event.stopPropagation();
    
    nextImage();
  });


  // SWIPE LEFT - NEXT IMAGE
  $imageviewer.swipe({
    swipeLeft:function() {
      nextImage();
    }
  });


  // PREVIOUS BUTTON - Displays the previous image in the gallery
  $prev.click(function(event) {
    event.stopPropagation();
    
    prevImage();
  });


  // SWIPE RIGHT - PREVIOUS IMAGE
  $imageviewer.swipe({
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