var $dropdown = $('.dropdown');
var $bar = $('#dropdown-bar');

function showDropdown() {
  $bar.click(function() {
    $bar.hide();
    $dropdown.slideToggle();
  })
};

$(document).ready(function() {
  if($('.dropdown')) {
    showDropdown(); 
  }
})