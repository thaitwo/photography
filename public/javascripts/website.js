// var name = "Alex Wolfe"; 
// var age = 38; 
// var foods = ["apple", "orange", "pad see ew", 2016, {name: "Thai", hand: "right"}]; 
// var car = {
// 	make: "mercedes", 
// 	year: 2016, 
// 	color: "black"
// }; 

// var sayHello = function(message) {
// 	alert(item.w); 
// }; 

// sayHello(car.year); 


var links = $('.gallery a');
var pswpElement = document.querySelectorAll('.pswp')[0];
var items = [];


links.each(function() {
  items.push({
  	src: this.href,
    w: 600,
    h: 400
  })
});



console.log(items);

var gallery = new PhotoSwipe( pswpElement, false, items);
//gallery.init();

