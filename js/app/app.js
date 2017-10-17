// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//
// document.addEventListener('click', function()
//     {
  //         console.log("Getting position...");
  //         navigator.geolocation.getCurrentPosition(onSuccess, onError);
  //     });
  
  
  //We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
  // which we earlier added to the native functions of the javascript
  // function getPosition() {
    //     navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // }
    $(document).ready(function(){
      // initMap();
      $('#btnPosition').on('click', function()
      {
        console.log("Button CLicked");
        document.getElementById('map').style.visibility = "visible";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      });
      
    });
    
     var map;
    // onSuccess Geolocation
    //
    function onSuccess(position) {
      
      var currentLocation = {lat:  position.coords.latitude, lng: position.coords.longitude};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: currentLocation
      });
      
      var marker = new google.maps.Marker({
        position: currentLocation,
        map: map
      });
      
      
      var element = document.getElementById('geolocation');
      element.innerHTML = 'Latitude: ' + position.coords.latitude  + '<br />' +
      'Longitude: '          + position.coords.longitude             + '<br />' +
      'Altitude: '           + position.coords.altitude              + '<br />' +
      'Accuracy: '           + position.coords.accuracy              + '<br />' +
      'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
      'Heading: '            + position.coords.heading               + '<br />' +
      'Speed: '              + position.coords.speed                 + '<br />' +
      'Timestamp: '          + position.timestamp          + '<br />';
    }
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
      alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
    }
    
   
    function initMap() {
      
      
    }
    
    // var map, infoWindow;
    //       function initMap() {
      //         map = new google.maps.Map(document.getElementById('gMap'), {
        //           center: {lat: -34.397, lng: 150.644},
        //           zoom: 6
        //         });
        //         infoWindow = new google.maps.InfoWindow;
        
        //         // Try HTML5 geolocation.
        //         if (navigator.geolocation) {
          //           navigator.geolocation.getCurrentPosition(function(position) {
            //             var pos = {
              //               lat: position.coords.latitude,
              //               lng: position.coords.longitude
              //             };
              
              //             infoWindow.setPosition(pos);
              //             infoWindow.setContent('Location found.');
              //             infoWindow.open(map);
              //             map.setCenter(pos);
              //           }, function() {
                //             handleLocationError(true, infoWindow, map.getCenter());
                //           });
                //         } else {
                  //           // Browser doesn't support Geolocation
                  //           handleLocationError(false, infoWindow, map.getCenter());
                  //         }
                  //       }
                  
                  //       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                    //         infoWindow.setPosition(pos);
                    //         infoWindow.setContent(browserHasGeolocation ?
                    //                               'Error: The Geolocation service failed.' :
                    //                               'Error: Your browser doesn\'t support geolocation.');
                    //         infoWindow.open(map);
                    //       }
                    
                    
                    
                    
                    