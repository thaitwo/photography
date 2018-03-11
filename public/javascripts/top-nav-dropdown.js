var $dropdownMenu = $('.topnav-menu');
var $dropdownButton = $('#dropdown-button');
var $heroTitle = $('.hero-title');
var $heroSubtitle = $('.hero-subtitle');
var $buttonPrimary = $('.button-primary');

function activateDropdown() {
  $dropdownButton.on('click touch', function() {

    if ($dropdownButton.text() == 'menu') {
      $dropdownButton.text('clear')
    }
    else {
      $dropdownButton.text('menu')
    }

    $heroSubtitle.toggle();
    $heroTitle.toggle();
    $buttonPrimary.toggle();

    $dropdownMenu.toggleClass('is-visible animated fadeIn');
  })
};

$(document).ready(function() {
  if($('.dropdown')) {
    activateDropdown();
  }
});