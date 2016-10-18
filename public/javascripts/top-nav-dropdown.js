var $dropdownMenu = $('.dropdown');
var $dropdownButton = $('#dropdown-button');
var $faBars = $('.fa-bars');

function activateDropdown() {
  $dropdownButton.click(function() {
  	$dropdownButton.toggleClass('fa-bars');
  	$dropdownButton.toggleClass('fa-times');

    $dropdownMenu.slideToggle();
  })
};

$(document).ready(function() {
  if($('.dropdown')) {
    activateDropdown();
  }
});