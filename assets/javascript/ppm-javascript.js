
$(document).ready(function() { 
	$(".carousel").carousel({
		interval: 4000,
		cycle: true
	});
});

$(".alert-success").hide();
$(".alert-danger").hide();

$("#hereGoes").on("click", function() {
	
	var theName = $("#theirName").val().trim();
	var theEmail = $("#theirEmail").val().trim();
	var theMessage = $("#theirMessage").val().trim();

	var checked =  /^[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9\.]{2,4}$/;
	var isItFine = checked.test(theEmail);

	if (isItFine) {
		$.ajax({
			url: "https://formspree.io/blueskies@carolina.rr.com", 
			method: "POST",
			data: {	name: theName,
					_replyto: theEmail,
					message: theMessage
			},
			dataType: "json",
			success:function() {
				$(".alert-success").show();
			}
		});
		event.preventDefault();		
	} else {
		$(".alert-danger").show();
		event.preventDefault();	
	}
});

function initMap() {
	var uluru = {lat: 35.274535, lng: -81.3521905};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: "assets/image/location-pin.png"
	});
};







