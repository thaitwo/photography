var $viewer = $('.viewer');
var $imageviewer = $('.imageviewer');
var $links = $('.gallery a');
var $closeviewer = $('.closeviewer');
var currentIndex = 0;
var $next = $('#next');
var $prev = $('#prev');


// LOOP THROUGH ARRAY OF LINKS AND DISPLAY IMAGE

$links.each(function(index, item) {

  $(item).click(function(event) {
    event.preventDefault();
    currentIndex = index;
    var link = event.currentTarget;
    var imageUrl = link.href;

    console.log(event);

    $viewer.addClass('is-visible');

    var image = $('<img>');
    image.attr({
      src: imageUrl,
      width: 900,
      height: 600,
      alt: 'Larger image'
    });

    image.hide();

    $imageviewer.html(image);

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

  var image = $('<img>');
  image.attr({
    src: $links[nextIndex],
    width: 900,
    height: 600,
  });

  image.hide();

  $imageviewer.html(image);

  image.fadeIn(500);
});


// PREVIOUS BUTTON

$prev.click(function() {
  if (currentIndex === 0) {
    currentIndex = $links.length;
  }

  var prevIndex = currentIndex - 1;
  currentIndex = prevIndex;
  console.log($links[prevIndex]);

  var image = $('<img>');
  image.attr({
    src: $links[prevIndex],
    width: 900,
    height: 600,
  });

  image.hide();

  $imageviewer.html(image);

  image.fadeIn(500);
});

