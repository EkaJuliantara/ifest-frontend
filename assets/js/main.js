$(document).ready(function(){

  $('.flexslider').flexslider({
    animation: "slide"
  });

  //ScrollReveal
  window.sr = ScrollReveal({ reset: true });
  sr.reveal('#content-header');
  sr.reveal('#content-acara .container .row');
  sr.reveal('#acara-top');
  sr.reveal('#acara-bottom');
  sr.reveal('#cd-timeline .cd-container .cd-timeline-block');
  sr.reveal('#content-sponsor');
  sr.reveal('#sponsor-bottom');
  sr.reveal('#content-map');
  sr.reveal('#content-cp div');


  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 800, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: -5, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });


});
