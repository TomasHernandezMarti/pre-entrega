/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version 
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function() { 
	//Preloader 
	$('#status').delay(300).fadeOut(); 
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {
		//animated logo
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated shake");
		});
		
		//animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce");
		});
		
		//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW(
		{
			mobile: false
		});
		wow.init();
		
		//MagnificPopup
		$('.image-link').magnificPopup({type:'image'});





/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  
})(jQuery); // End of use strict
*/




		

		// OwlCarousel N1
		$("#owl-demo").owlCarousel({
			autoPlay: 15000,
		 //	items : 3,
		 //	itemsDesktop : [1199,3],
		 //	itemsDesktopSmall : [979,3]
			 items : 1, 
     itemsDesktop : false,
      itemsDesktopSmall : false,
       itemsTablet: false,
       itemsMobile : false
           
		});

		// OwlCarousel N2
		$("#owl-demo-1").owlCarousel({
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		});

		//SmothScroll
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
							var targetOffset = $target.offset().top;
							$('html,body').animate({scrollTop: targetOffset}, 600);
							return false;
					}
			}
		});
		
		//Subscribe
		new UIMorphingButton( document.querySelector( '.morph-button' ) );
		// for demo purposes only
		[].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) { 
			bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
		} );

});





//slider  //



if(document.querySelector('#container-slider')){
	setInterval('fntExecuteSlide("next")',5000);
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
	let link = document.querySelectorAll(".listslider li a");
	link.forEach(function(link) {
	   link.addEventListener('click', function(e){
		  e.preventDefault();
		  let item = this.getAttribute('itlist');
		  let arrItem = item.split("_");
		  fntExecuteSlide(arrItem[1]);
		  return false;
	   });
	 });
 }
 
 function fntExecuteSlide(side){
	 let parentTarget = document.getElementById('slider');
	 let elements = parentTarget.getElementsByTagName('li');
	 let curElement, nextElement;
 
	 for(var i=0; i<elements.length;i++){
 
		 if(elements[i].style.opacity==1){
			 curElement = i;
			 break;
		 }
	 }
	 if(side == 'prev' || side == 'next'){
 
		 if(side=="prev"){
			 nextElement = (curElement == 0)?elements.length -1:curElement -1;
		 }else{
			 nextElement = (curElement == elements.length -1)?0:curElement +1;
		 }
	 }else{
		 nextElement = side;
		 side = (curElement > nextElement)?'prev':'next';
 
	 }
	 //RESALTA LOS PUNTOS
	 let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
	 elementSel[curElement].classList.remove("item-select-slid");
	 elementSel[nextElement].classList.add("item-select-slid");
	 elements[curElement].style.opacity=0;
	 elements[curElement].style.zIndex =0;
	 elements[nextElement].style.opacity=1;
	 elements[nextElement].style.zIndex =1;
 }