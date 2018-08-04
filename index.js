$(document).ready(function() {

	$('.fas').click(function(e) {
		e.preventDefault();
		$('.drop-nav').toggle();
	})

	let d = new Date;
	let year = d.getFullYear();
	$("#footer").append('<p>&copy; 2018 Nicole Bradford</p>')
})