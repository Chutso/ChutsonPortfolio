$(document).ready(function() {
	$( ".cross" ).hide();
	$( ".mobile-menu" ).hide();
	$( ".search-container-mobile").hide();
	$( ".hamburger" ).click(function() {
	$( ".mobile-menu" ).slideToggle( "slow", function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	$( ".search-container-mobile" ).show();
	});
	});

	$( ".cross" ).click(function() {
	$( ".mobile-menu" ).slideToggle( "slow", function() {
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
	$( ".search-container-mobile" ).hide();
	});
	});
	
});