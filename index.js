$(document).ready(function() {

	$('.fa-bars').click(function(e) {
		e.preventDefault();
		// console.log('you clicked nav bars');
		$('.drop-nav').html(
			'<div class="drop-links">' +
				'<li><a href="#home" class="links link-home">Home</a></li>' +
	         	'<li><a href="#recent-work" class="links link-recent-work">Recent Work</a></li>' + 
	          	'<li><a href="#get-in-touch" class="links link-contact">Get in Touch</a></li>' +
          	'</div>'
		)
	})


	let d = new Date;
	let year = d.getFullYear();
	$("#footer").append('<p>&copy; 2018 Nicole Bradford</p>')
})