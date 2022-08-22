$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	// focus on arrival date
	$("#arrival_date").focus();
	
	// validation function
	$("#reservation_form").submit(function(event) {
		isValid = true;

		// validate arrival date
		var arrivalDate = $("#arrival_date").val().trim();		
		if (arrivalDate == "") {
			$("#arrival_date").next().text("This field is required.");
			isValid = false;
		}
		else {
			$("#arrival_date").next().text("");
		}
		$("#arrival_date").val(arrivalDate);


		// validate nights
		var nights = $("#nights").val().trim();
		if (nights == "") {
			$("#nights").next().text("This field is required.");
			isValid = false;
		}
		else if (isNaN(nights)) {
			$("#nights").next().text("Must be a numerical input.");
			isValid = false;
		}
		else {
			$("#nights").next().text("");
		}
		$("#nights").val(nights);


		// validate name
		var name = $("#name").val().trim();
		if (name == "") {
			$("#name").next().text("This field is required.");
			isValid = false;
		}
		else {
			$("#name").next().text("");
		}
		$("#name").val(name);


		// validate email
		var email = $("#email").val().trim();
		if (email == "") {
			$("#email").next().text("This field is required.");
			isValid = false;
		}
		else if (!emailPattern.test(email)) {
			$("#email").next().text("Please enter a valid email.");
			isValid = false;
		}
		else {
			$("#email").next().text("");
		}
		$("#email").val(email);


		// validate phone
		var phone = $("#phone").val().trim();
		if (phone == "") {
			$("#phone").next().text("This field is required.");
			isValid = false;
		}
		else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);


		// prevents submits default action
		if (isValid == false) {
			event.preventDefault();
		}
	});
}); // end ready