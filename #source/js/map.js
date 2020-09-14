function initMap() {
  var centerLatLng = new google.maps.LatLng(59.938790, 30.323199);
  var centerMap = new google.maps.LatLng(59.939174, 30.322164);
  var mapOptions = {
    center: centerMap,
    zoom: 17,
    mapTypeControl: false,
    zoomControl: true,
    scrollwheel: false,
    zoomControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
    streetViewControl: false
  };
  var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);

  var marker = new google.maps.Marker({
    position: centerLatLng,
    map: map,

    title: "ул. Большая Конюшенная, д. 19/8",
    icon: "./img/map-pin.png"

  });
}
google.maps.event.addDomListener(window, "load", initMap);
