(function googleMap() {
    var mapOptions = {
        center: {lat: 59.9338318, lng: 30.294362},
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.MAP
    }
    var map = new google.maps.Map(document.getElementById("map-panel"), mapOptions);
    var marker = new google.maps.Marker({
        position: {lat: 59.934148, lng: 30.294086},
        map: map
    });
})();
