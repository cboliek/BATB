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
    var iconBase = 'images/clip.png';
       var markers = locations.map(function(location, i) {
         return new google.maps.Marker({
           position: location,
           label: labels[i % labels.length],
           icon: iconBase
         });
       });



       var contentString = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
     'sandstone rock formation in the southern part of the '+
     'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
     'south west of the nearest large town, Alice Springs; 450&#160;km '+
     '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
     'features of the Uluru - Kata Tjuta National Park. Uluru is '+
     'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
     'Aboriginal people of the area. It has many springs, waterholes, '+
     'rock caves and ancient paintings. Uluru is listed as a World '+
     'Heritage Site.</p>'+
     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
     'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
     '(last visited June 22, 2009).</p>'+
     '</div>'+
     '</div>';



     var infowindow = new google.maps.InfoWindow({
       content: contentString
     });

       // Add a marker clusterer to manage the markers.
       var markerCluster = new MarkerClusterer(map, markers,
           {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
     }
     var locations = [
       {lat: 51.406045, lng: -0.465879},
       {lat: 51.5074, lng: -0.1278}
     ]

     marker.addListener('click', function() {
        infowindow.open(map, location);
      });



  //  <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
  //  </script>
  //  <script async defer
  //  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDa-io6mJ3dqVGUCYO4oKNrkRr_sfCWad8&callback=initMap">
  //  </script>
