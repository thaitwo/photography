var $dropdownMenu = $('.dropdown');
var $dropdownButton = $('#dropdown-button');
var $faBars = $('.fa-bars');
var $heroTitle = $('#hero-title');

function activateDropdown() {
  $dropdownButton.click(function() {
  	$dropdownButton.toggleClass('fa-bars');
  	$dropdownButton.toggleClass('fa-times');

  	$heroTitle.toggle();

    $dropdownMenu.slideToggle();
  })
};

$(document).ready(function() {
  if($('.dropdown')) {
    activateDropdown();
  }
});