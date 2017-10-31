
/*
function EmailValidation(emailAddress) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)
*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(emailAddress);
}
*/

/* check this regex
function EmailValidation(emailAddress) {
	var filter = /[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9\.]{2,5}$/;
		//  = /^([a-zA-Z0-9_\.\-]){1,}+\@([a-zA-Z0-9_\-\.]){1,}\.([a-zA-Z0-9\.]{2,4})$/;  //
		//  = /^[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9\.]{2,4}$/;  //

	if (!filter.test(emailAddress)) {
		return false;
	} else {
		return true;
	}
	
*/

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
	var uluru = {lat: 35.2745, lng: -81.3522};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
};







