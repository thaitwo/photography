const $grid = $('.grid-masonry').masonry({
  // options
  itemSelector: '.grid-masonry-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});