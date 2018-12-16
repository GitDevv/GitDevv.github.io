function initMap() {
	var uluru = {lat: 32.8641832, lng: -117.2250626};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 17,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}