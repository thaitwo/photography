var $dropdownMenu = $('.dropdown');
var $dropdownButton = $('#dropdown-button');

function activateDropdown() {
  $dropdownButton.click(function() {
    $dropdownMenu.slideToggle();
  })
};

$(document).ready(function() {
  if($('.dropdown')) {
    activateDropdown(); 
  }
})