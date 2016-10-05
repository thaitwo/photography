var $viewer = $('.viewer');
var $imageviewer = $('.imageviewer');
var $links = $('.gallery a');
var $closeviewer = $('.closeviewer');
var currentIndex = 0;
var $next = $('#next');
var $prev = $('#prev');
var $caption = $('.caption');


// GALERY VIEW FUNCTION

function startView() {
  // LOOP THROUGH ARRAY OF LINKS AND DISPLAY IMAGE
  $links.each(function(index, item) {

  $(item).click(function(event) {
    event.preventDefault();
    currentIndex = index;
    var link = event.currentTarget;
    var imageUrl = link.href;
    var title = link.title;

    console.log(event);

    $viewer.addClass('is-visible');

    var image = $('<img>');
    image.attr({
      src: imageUrl,
      alt: 'Larger image'
    });

    image.hide();

    $imageviewer.html(image);
    $caption.text(title);

    image.fadeIn(500);
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

  var imageUrl = $links[nextIndex].href;
  var title = $links[nextIndex].title;

  var image = $('<img>');
  image.attr({
    src: imageUrl,
  });

  image.hide();
  $imageviewer.html(image);
  $caption.text(title);
  image.fadeIn(500);
});


// PREVIOUS BUTTON

$prev.click(function() {
  if (currentIndex === 0) {
    currentIndex = $links.length;
  }

  var prevIndex = currentIndex - 1;
  currentIndex = prevIndex;
  var imageUrl = $links[prevIndex].href; 
  var title = $links[prevIndex].title; 

  var image = $('<img>');
  image.attr({
    src: imageUrl,
  });

  image.hide();
  $imageviewer.html(image);
  $caption.text(title);
  image.fadeIn(500);
});
}


$(document).ready(function() {
  if($('.viewer')) {
    startView(); 
  }
})