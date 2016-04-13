jQuery(document).ready(function($){

	$('[class*="_btn"]').on('click', function() {
		$('[class*="_btn"]').removeClass('never-clicked');
	});

});