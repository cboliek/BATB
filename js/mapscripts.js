
function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: {lat: 51.5074, lng: -0.1278},
    mapTypeId: 'terrain'


  });




var locations = [
     ['Shepperton Studios', 51.406045, -0.465879 ],
     ['London, England', 51.5074 ,-0.1278 ]
   ];

  var content = [
    "Shepperton Studios, Shepperton, Surrey, England, UK",
    "London, England, UK"
  ]


   var infowindow = new google.maps.InfoWindow();
   var iconBase = 'images/flower.png';

   var marker, i;

   for (i = 0; i < locations.length; i++) {
     marker = new google.maps.Marker({
       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
       map: map,
       icon: iconBase
     });

     google.maps.event.addListener(marker, 'click', (function(marker, i) {
       return function() {
         infowindow.setContent(content[i]);
         infowindow.open(map, marker);
       }
     })(marker, i));
   }
 }




   //
   //
  //      // Create an array of alphabetical characters used to label the markers.
       var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   //
  //      // Add some markers to the map.
  //      // Note: The code uses the JavaScript Array.prototype.map() method to
  //      // create an array of markers based on a given "locations" array.
  //      // The map() method here has nothing to do with the Google Maps API.
    var iconBase = 'images/flower.png';
  //   var contents = [];
  //   var infowindows = [];
  //      var markers = locations.map(function(location, i) {
  //        console.log("inside");
   //
  //        console.log(i);
        //  markers[i].addListener('click', function() {
        //     infowindow[i].open(map, location);
        //   });
        //   infowindow[i].close;
         //
        //  return new google.maps.Marker({
        //    position: location,
        //    label: labels[i % labels.length],
        //    icon: iconBase
        //  });
         //
   //
  //      });
   //
  //      console.log('Markers');
   //
  //      var contentString0 = '<div id="content">'+
  //    '<div id="siteNotice">'+
  //    '</div>'+
  //    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  //    '<div id="bodyContent">'+
  //    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  //    'sandstone rock formation in the southern part of the '+
  //    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
  //    'south west of the nearest large town, Alice Springs; 450&#160;km '+
  //    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
  //    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
  //    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
  //    'Aboriginal people of the area. It has many springs, waterholes, '+
  //    'rock caves and ancient paintings. Uluru is listed as a World '+
  //    'Heritage Site.</p>'+
  //    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
  //    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
  //    '(last visited June 22, 2009).</p>'+
  //    '</div>'+
  //    '</div>';
   //
  //    var contentString1 = '<div id="content">'+
  //  '<div id="siteNotice">'+
  //  '</div>'+
  //  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  //  '<div id="bodyContent">'+
  //  '<p><b>Heyyyyyyyy</b>, me llamo <b>look at this</b>, is a large ' +
  //  'sandstone rock formation in the southern part of the '+
  //  'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
  //  'south west of the nearest large town, Alice Springs; 450&#160;km '+
  //  '(heyyyyyy) by road. Kata Tjuta and Uluru are the two major '+
  //  'features of the Uluru - Kata Tjuta National Park. Uluru is '+
  //  'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
  //  'Aboriginal people of the area. It has many springs, waterholes, '+
  //  'rock caves and ancient paintings. Uluru is listed as a World '+
  //  'Heritage Site.</p>'+
  //  '<p>Attribution: heyyyyyy, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
  //  'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
  //  '(last visited June 22, 2009).</p>'+
  //  '</div>'+
  //  '</div>';
   //
   //
   //
  //    var infowindow0 = new google.maps.InfoWindow({
  //     //  content: contentString
  //     position: new google.maps.LatLng(51.406045, -0.465879),
  //       map: map,
  //       title: 'content window 0',
  //       content:contentString0
  //    });
   //
  //    var infowindow1 = new google.maps.InfoWindow({
  //     //  content: contentString
  //     position: new google.maps.LatLng(51.5074, -0.1278),
  //       map: map,
  //       title: 'Content window 1',
  //       content:contentString1
  //    });
   //
  //      // Add a marker clusterer to manage the markers.
       var markerCluster = new MarkerClusterer(map, markers,
           {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  //    }
     var locations = [
       {lat: 51.406045, lng: -0.465879},
       {lat: 51.5074, lng: -0.1278}
     ]
