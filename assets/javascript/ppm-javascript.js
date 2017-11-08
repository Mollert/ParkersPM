
function backToHide() {
	$("#numThree, #threeText").hide();
	$("#numThree").css({height: "1px", width: "1px"});
};

function cyclePic() {
	$("#numOne").show();
	$("#numOne").delay(500).animate({height: "600px", width: "600px"}, 3000, function() {
		$("#oneText").fadeIn(5000, function() {
			$("#numOne, #oneText").hide();
			$("#numOne").css({height: "1px", width: "1px"});
			$("#numTwo").show();
			$("#numTwo").delay(500).animate({height: "600px", width: "600px"}, 3000, function() {	
				$("#twoText").fadeIn(5000, function() {
					$("#numTwo, #twoText").hide();
					$("#numTwo").css({height: "1px", width: "1px"});
					$("#numThree").show();
					$("#numThree").delay(500).animate({height: "600px", width: "600px"}, 3000, function() {
						$("#threeText").fadeIn(5000, function() {
							setTimeout (backToHide, 3000);
						});
					});
				});
			});
		});
	});
};

$(document).ready(function() {
	$("#numOne").hide();	
	$("#numTwo").hide();
	$("#numThree").hide();
	cyclePic();
	setInterval(cyclePic, 30000);	
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







