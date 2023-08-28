// NAVBAR ANIMATION
$(document).ready(function(){

	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 70});   

	// Add smooth scrolling on all links inside the navbar
	$("#navbarResponsive a").on('click', function(event) {
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top-50
			}, 800, function(){
   
        	// Add hash (#) to URL when done scrolling (default click behavior)
     			window.location.hash = hash;
    		});
		}  // End if
	});
});

// JS GENERATED MAIL ADDRESS
$(document).ready(function(){

	// Pointing the HTML element
	var HTMLelement = document.getElementById("js-generated-mailadd");
	var usrnm = "ecallegari";
	var hstnm = "hi.is";
	var linktxt = usrnm + "@" + hstnm ;

	HTMLelement.href = linktxt; 
	HTMLelement.innerHTML = linktxt;

});