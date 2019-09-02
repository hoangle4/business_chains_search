const MapCtrl = (() => {
  let map;
  const mapContainer = document.getElementById("map");

  return {
    initMap: () => {
      map = new google.maps.Map(mapContainer, {
        center: { lat: 45.42453203818605, lng: -122.60824733522009 },
        zoom: 8
      });
      map.addListener("click", function(e) {
        console.log(e.latLng.lat(), e.latLng.lng());
      });
    }
  };
})();

const APP = (MapCtrl => {
  const eventHandlers = () => {
    MapCtrl.initMap();
  };
  document.addEventListener("DOMContentLoaded", eventHandlers);
})(MapCtrl);
function initMap() {
  MapCtrl.initMap();
}
