     function initMap() {

       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 4,
         center: {lat: 55.3781, lng: 3.4360},
         mapTypeId: 'terrain'

       });



       // Create an array of alphabetical characters used to label the markers.
       var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

       // Add some markers to the map.
       // Note: The code uses the JavaScript Array.prototype.map() method to
       // create an array of markers based on a given "locations" array.
       // The map() method here has nothing to do with the Google Maps API.
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes';
       var markers = locations.map(function(location, i) {
         return new google.maps.Marker({
           position: location,
           label: labels[i % labels.length],
           icon: iconBase + 'images/films.png'
         });
       });

       // Add a marker clusterer to manage the markers.
       var markerCluster = new MarkerClusterer(map, markers,
           {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
     }
     var locations = [
       {lat: 51.406045, lng: -0.465879},
       {lat: 51.5074, lng: -0.1278}
     ]

  //  <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
  //  </script>
  //  <script async defer
  //  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDa-io6mJ3dqVGUCYO4oKNrkRr_sfCWad8&callback=initMap">
  //  </script>
