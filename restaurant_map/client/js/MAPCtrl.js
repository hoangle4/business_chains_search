const MapCtrl = (() => {
	let map;
	const mapContainer = document.getElementById('map');
	let lat;
	let lng;
	return {
		initMap: () => {
			map = new google.maps.Map(mapContainer, {
				center: { lat: 45.42453203818605, lng: -122.60824733522009 },
				zoom: 8
			});
			map.addListener('dragend', function() {
				lat = map.getCenter().lat();
				lng = map.getCenter().lng();
				APICtrl.setLocation(lat, lng, 2000);
			});
			map.addListener('tilesloaded', () => {
				lat = map.getCenter().lat();
				lng = map.getCenter().lng();
				APICtrl.setLocation(lat, lng, 2000);
			});
		}
	};
})();
