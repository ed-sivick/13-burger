$(document).ready(function() {
	
	$('#submit-button').on('click', function() {

		const burgerData = {			
				burger_name: $('#new_burger').val().trim()
			}

		// Sends POST request.
		$.ajax("/burger/create", {
			type: "POST",
			data: burgerData
		}).then(function() {
			// Reload the page to update burger list
			location.reload();
		});
	});	

	$('.devour-button').on('click', function() {

		const devourData = {
				id: $(this).attr('data-id')	
			}

		// Sends POST request.
		$.ajax("/burger/eat", {
			type: "POST",
			data: devourData
		}).then(function() {
			// Reload the page to update burger list
			location.reload();
		});  

	});	

});
