var $viewer = $('.viewer');
var $imageviewer = $('.imageviewer');
var $links = $('.gallery a');
var $closeviewer = $('.closeviewer');
var currentIndex = 0;
var $next = $('#next');
var $prev = $('#prev');
var $caption = $('.caption');



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



// GALLERY VIEW FUNCTION

function startView() {
  // LOOP THROUGH ARRAY OF LINKS AND DISPLAY IMAGE
  $links.each(function(index, item) {
    $(item).click(function(event) {
      event.preventDefault();
      currentIndex = index;
      var link = event.currentTarget;

      $viewer.addClass('is-visible');
      createImage(link);
    });
  })


  // CLOSE GALLERY VIEWER
  $closeviewer.click(function() {
    $viewer.removeClass('is-visible');
  });


  // NEXT BUTTON
  $next.click(function() {
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
  });


  // PREVIOUS BUTTON
  $prev.click(function() {
    if (currentIndex === 0) {
      currentIndex = $links.length;
    }

    var prevIndex = currentIndex - 1;
    currentIndex = prevIndex;

    createImage($links[prevIndex]);
  });
}


$(document).ready(function() {
  if($('.viewer')) {
    startView(); 
  }
})