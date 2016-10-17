var $dropdownMenu = $('.dropdown');
var $dropdownButton = $('#dropdown-button');

function activateDropdown() {
  $dropdownButton.click(function() {
    $dropdownButton.hide();
    $dropdownMenu.slideToggle();
  })
};

$(document).ready(function() {
  if($('.dropdown')) {
    activateDropdown(); 
  }
})