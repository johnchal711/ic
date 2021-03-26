
let oneStar = false;
let twoStar = false;
let allStar = false;
let fiveStar = false;
let threeStar = false;
let fourStar = false;


let newRestaurant = true;
let restaurantIndex = -1;
let myReviewArray = new Array;
let markers = new Array;
let newRestaurantMarker = new Array;
let newRestaurants = new Array;
let restaurantsArray = new Array;
let googleRestaurantsArray = new Array;
let emptyRate = '&#9675;';
let fullRate = '&#9679;';

const restaurantInfoDiv = $('#restaurant-info');
const sortOptionsDiv = $('#sort-options');
const mySort = $('#sort');
const form = $('#add-rest');
const reviewSubmitButton = $('#review-submit');
const reviewDiv = $('#review-window');
sortOptionsDiv.hide();
restaurantInfoDiv.hide();
form.hide();
reviewSubmitButton.hide();



function initMap() {
    let currentPosition = {
        lat: 0,
        lng: 0,
    };

    const mapOptions = {
        center: currentPosition,
        zoom: 15,
        streetViewControl: false,
        styles: [{
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "stylers": [
      {
        "color": "#ffeb3b"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
    }





    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('information')
    });
    const newWindow = new google.maps.InfoWindow({
        content: document.getElementById('informationnew-restaurant')
    });


    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            infoWindow.setPosition(currentPosition);
            map.setCenter(currentPosition);

            
            let marker = new google.maps.Marker({
                position: currentPosition,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: 'red',
                    fillOpacity: 0.3,
                    scale: 10,
                    strokeColor: 'red',
                    strokeWeight: 1,
                    zIndex: 1
                },
            });
            marker.setMap(map);
      
            map.addListener('dragend', function() {
                GetPlaces();
            });

          
            function dropMarker(i) {
                return function() {
                    markers[i].setMap(map);
                };
            }


            let places = new google.maps.places.PlacesService(map);
            let service = new google.maps.places.PlacesService(map);

            let request = {
                location: currentPosition,
                radius: 500,
                types: ['restaurant']
            }

            service.nearbySearch(request, callback);

            function callback(results, status) {
                const script = document.createElement('script');
                script.src = 'places.js';
                document.getElementsByTagName('head')[0].appendChild(script);
                window.eqfeed_callback = function(results) {
                    results = results.results;
                    restaurantsArray = [];
                    for (let i = 0; i < results.length; i++) {
                        restaurantsArray.push(results[i]);
                    }

                };
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    GetPlaces()
                }
            }

            function GetPlaces() {
                let GetPlaces = {
                    bounds: map.getBounds(),
                    types: ['restaurant']
                };
                places.nearbySearch(GetPlaces, function(results, status) {

                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        DeleteResults();
                        DeleteMarkers();

                        googleRestaurantsArray = [];
                        results.forEach(function(element) {
                            googleRestaurantsArray.push(element);
                        })

                        for (let i = 0; i < results.length; i++) {
                            markers[i] = new google.maps.Marker({
                                position: results[i].geometry.location,
                                placeId: results[i].id,
                                zIndex: 5,
                                id: googleRestaurantsArray[i].id
                            });

                           
                            google.maps.event.addListener(markers[i], 'click', displayInfoWindow);
                            google.maps.event.addListener(map, 'click', closeWindow);

                            if (threeStar) {
                                if (results[i].rating >= 3 && results[i].rating < 4) {
                                    displayResults(i, results, i);

                                }
                            } else if (fourStar) {
                                if (results[i].rating >= 4 && results[i].rating < 5) {
                                    displayResults(i, results, i);


                                }
                            } else if (fiveStar) {
                                if (results[i].rating === 5) {
                                    displayResults(i, results, i);


                                }
                            } else if (oneStar) {
                                if (results[i].rating === 1 && results[i].rating > 2) {
                                    displayResults(i, results, i);

                                }
                            } else if (twoStar) {
                                if (results[i].rating >= 2 && results[i].rating < 3) {
                                    displayResults(i, results, i);

                                }
                            } else {
                                displayResults(i, results, i);
                            }

                        }


                        for (let i = 0; i < restaurantsArray.length; i++) {
                            markers[googleRestaurantsArray.length + i] = new google.maps.Marker({
                                position: restaurantsArray[i].geometry.location,
                                placeId: restaurantsArray[i].id,
                                zIndex: 5,
                                id: restaurantsArray[i].id,
                            });

                 
                            google.maps.event.addListener(markers[googleRestaurantsArray.length + i], 'click', dysplayJsonRestaurant);
                            google.maps.event.addListener(map, "click", closeWindow);


                            if (threeStar) {
                                if (restaurantsArray[i].rating >= 3 && restaurantsArray[i].rating < 4) {
                                    //displayResults(i, restaurantsArray, i);
                                    displayResults(googleRestaurantsArray.length + i, restaurantsArray, i);

                                }
                            } else if (fourStar) {
                                if (restaurantsArray[i].rating >= 4 && restaurantsArray[i].rating < 5) {
                                  displayResults(googleRestaurantsArray.length + i, restaurantsArray, i);
                                   // displayResults(i, restaurantsArray, i);
                                }
                            } else if (fiveStar) {
                                if (restaurantsArray[i].rating === 5) {
                                  displayResults(googleRestaurantsArray.length + i, restaurantsArray, i);
                                    //displayResults(i, restaurantsArray, i);
                                }
                            } else if (oneStar) {
                                if (restaurantsArray[i].rating === 1 && restaurantsArray[i].rating > 2) {
                                  displayResults(googleRestaurantsArray.length + i, restaurantsArray, i);
                                    //displayResults(i, restaurantsArray, i);
                                }
                            } else if (twoStar) {
                                if (restaurantsArray[i].rating >= 2 && restaurantsArray[i].rating < 3) {
                                    displayResults(googleRestaurantsArray.length + i, restaurantsArray, i);
                                    //displayResults(i, restaurantsArray, i);
                                }
                            } else {
                                displayResults(googleRestaurantsArray.length + i, restaurantsArray, i);
                                //displayResults(i, restaurantsArray, i);
                            }
                          
                          ;

                        }
                    }
                });
            }
            

            function DeleteMarkers() {
                for (let i = 0; i < markers.length; i++) {
                    if (markers[i]) {
                        markers[i].setMap(null);
                    }
                }
                markers = [];
            }

            function DeleteResults() {
                let results = document.getElementById('results');
                while (results.childNodes[0]) {
                    results.removeChild(results.childNodes[0]);
                }
            }

           
            function myResultList(result, i) {
                let resultsDiv = document.getElementById('results');
                let listDiv = document.createElement('div');
                listDiv.setAttribute('class', 'results-list');
                listDiv.onclick = function() {
                    google.maps.event.trigger(markers[i], 'click');
                };
                let details = `<div class="placeIcon"><img src ="${myPhoto(result)}" /></div>
                                <div class="placeDetails">
                                <div class="name">${result.name}</div>
                                <div class="rating">${placeRating(result)}</div>`;

                listDiv.insertAdjacentHTML("beforeEnd", details);
                resultsDiv.appendChild(listDiv);
            }


            
            function myPhoto(place) {
                let photos = place.photos;
                let photo;
                if (!photos) {

                    photo = 'https://www.iconsdb.com/icons/preview/soylent-red/restaurant-xxl.png';

                } else {

                    photo = photos[0].getUrl({ 'maxWidth': 780, 'maxHeight': 500 });
                }
                return photo;
            }

            
            function displayInfoWindow() {
                let marker = this;
                places.getDetails({
                    placeId: marker.placeResult.place_id
                }, function(place, status) {
                    if (status !== google.maps.places.PlacesServiceStatus.OK) {
                        return;
                    }
                    infoWindow.open(map, marker);
                    infoWindowContent(place);
                    showInfo(place);
                });
            }


            function dysplayJsonRestaurant() {
                let marker = this;
                infoWindow.open(map, marker);
                infoWindowContent(restaurantsArray[marker.id]);
                showInfo(restaurantsArray[marker.id]);
            }

            function addRestaurantWindow() {
                let marker = this;
                if (newRestaurant) {
                    newWindow.open(map, marker);
                    buildContent(marker);
                    newRestaurantMarker.push(marker);
                    restaurantIndex += 1;
                } else {
                    infoWindow.open(map, marker);
                    infoWindowContent(newRestaurants[marker.id]);
                    showInfo(newRestaurants[marker.id]);
                }
            }

           
            function closeWindow() {
                infoWindow.close(map, marker);
            }

            function closNewWindow() {
                newWindow.close(map, marker);
            }
            
            function showInfo(place) {
                $('#review-window').show();
                $('#add-review-button').show();
                restaurantInfoDiv.show();
                $('#name').text(place.name);
                $('#address').text(place.vicinity);
                $('#telephone').text(place.formatted_phone_number);

                let reviewsDiv = $('#reviews');
                let reviewHTML = '';
                reviewsDiv.html(reviewHTML);
                if (place.reviews) {
                    if (place.reviews.length > 0) {
                        for (let i = 0; i < place.reviews.length; i += 1) {
                            let review = place.reviews[i];
                            let avatar;
                            if (place.reviews[i].profile_photo_url) {
                                avatar = place.reviews[i].profile_photo_url;
                            } else {
                                avatar = 'https://www.iconsdb.com/icons/preview/soylent-red/restaurant-xxl.png';
                            }
                            reviewHTML += `<div class="restaurant-reviews">
                                          <h3 class="review-title">
                                             <span class="profile-photo" style="background-image: url('${avatar}')"></span>`;
                            if (place.rating) {
                                reviewHTML += `<span id="review-rating" class="rating">${placeRating(review)}</span>`;
                            }
                            reviewHTML += ` <h3>${place.reviews[i].author_name}</h3>
                                    </h3>
                                                <p> ${place.reviews[i].text} </p>
                                            </div>`;
                            reviewsDiv.html(reviewHTML);
                        }
                    }
                }

               

                let sv = new google.maps.StreetViewService();
                sv.getPanorama({
                    location: place.geometry.location,
                    radius: 50
                }, processSVData);

                let streetViewWindow = $('#streetview-window');
                let photoDiv = $('#photo');
                let photoWindow = $('#see-photo');
                let seeStreetView = $('#see-street-view');
                photoDiv.empty();
                photoDiv.append('<img class="photo-big" ' + 'src="' + myPhoto(place) + '"/>');

                streetViewWindow.show();
                if (photo) {
                    photoWindow.show();
                } else {
                    photoWindow.hide();
                }

                function processSVData(data, status) {
                    if (status === 'OK') {
                        let panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'));
                        panorama.setPano(data.location.pano);
                        panorama.setPov({
                            heading: 440,
                            pitch: 0
                        });
                        panorama.setVisible(true);

                    } else {
                        photoWindow.hide();
                        streetViewWindow.hide();
                        photoDiv.show();
                    }
                }
            }

          
            function displayResults(markerID, array, i) {
                myResultList(array[i], markerID);
                markers[markerID].placeResult = array[i];
                setTimeout(dropMarker(markerID), i);
            }

         
            function infoWindowContent(place) {
                cleanWindowInfo();
                $('#info-icon').append('<img class="photo" ' + 'src="' + myPhoto(place) + '"/>');
                $('#info-url').append('<b><a href="#restaurant-info">' + place.name + '</a></b>');
                $('#info-address').text(place.vicinity);
                if (!place.formatted_phone_number) {
                    $('#info-phone').hide();
                } else {
                    $('#info-phone').text(place.formatted_phone_number);
                }
                addRating(place);

                $('#info-reviews').text('Read Reviews')
            }

            function cleanWindowInfo() {
                $('#info-icon').empty();
                $('#info-url').empty();
                $('#info-rating').empty();
            }
           
            map.addListener('rightclick', function(e) {
                closeWindow();
                newRestaurant = true;
                let latlng = new google.maps.LatLng(e.latLng.lat(), e.latLng.lng());
                let marker = new google.maps.Marker({
                    position: latlng,
                    id: restaurantIndex + 1
                });
                google.maps.event.addListener(marker, 'click', addRestaurantWindow);
                marker.setMap(map);
            });
            

            function buildContent(marker) {
                restaurantInfoDiv.show();
                form.empty();
                form.show();
                form.append(`
                    <input type="text" id="res-name" name="res-name" placeholder="Restaurant Name" required/>
                    <input type="hidden" id="res-location-lat" name="res-location-lat" value="${marker.position.lat()}"/>
                    <input type="hidden" id="res-location-lng" name="res-location-lng" value="${marker.position.lng()}"/>
                    <input type="text" name="res-address" id="res-address" placeholder="Address" required/>
                    <label for="res-rating">Rating: </label>
                    <select name="res-rating" id="res-rating" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    <button id="btn-add-rest" class="button btn-submit">Add Restaurant</button>`
                );
            }

            form.on("submit", function(e) {
                e.preventDefault();
                let name = $('#res-name');
                let address = $('#res-address');
                let rating = $('#res-rating');
                let locationLat = $('#res-location-lat');
                let locationLng = $('#res-location-lng');


                let position = new google.maps.LatLng(locationLat.value, locationLng.value);

                let place = {
                    name: name.val(),
                    vicinity: address.val(),
                    rating: rating.val(),
                    position: position,
                    geometry: { location: position },
                    icon: 'https://www.iconsdb.com/icons/preview/soylent-red/restaurant-xxl.png',
                    reviews: '',
                    photos: '',

                };
                newRestaurants.push(place);
                closNewWindow();
                let marker = newRestaurantMarker[restaurantIndex];
                newRestaurant = false;
                infoWindow.open(map, marker);
                infoWindowContent(place);
                showInfo(place);

            });

            mySort.on('change', function() {

                if (mySort.val() === 'one') {
                    resetStars();
                    oneStar = true;
                    GetPlaces();
                } else if (mySort.val() === 'two') {
                    resetStars();
                    twoStar = true;
                    GetPlaces();
                } else if (mySort.val() === 'three') {
                    resetStars();
                    threeStar = true;
                    GetPlaces();
                } else if (mySort.val() === 'four') {
                    resetStars();
                    fourStar = true;
                    GetPlaces();
                } else if (mySort.val() === 'five') {
                    resetStars();
                    fiveStar = true;
                    GetPlaces();
                } else if (mySort.val() === 'all') {
                    resetStars();
                    allStar = true;
                    GetPlaces();
                }
            });

    }, function(error) {
                if (error.code === 0) {
                    alert("An unknown error occurred.");
                } else if (error.code === 1) {
                    alert("Geolocation is blocked. You are now using the default location. Refresh brouser and alow Geolocation");
                    let marker = new google.maps.Marker({
                        position: currentPosition,
                        icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: 'red',
                        fillOpacity: 0.3,
                        scale: 10,
                        strokeColor: 'red',
                        strokeWeight: 1,
                        zIndex: 1
                    },
            });
            marker.setMap(map);
        }
        handleLocationError(true, infoWindow, map.getCenter(currentPosition));
    });
    } else {
        
        handleLocationError(false, infoWindow, map.getCenter(currentPosition));
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);

    }

}



function createReviewWindow() {

    reviewDiv.append(`<form id="add-review">
                        <label for="your-name">Your Name</label>
                        <input type="text" name="your-name" id="your-name" placeholder="Your Name" required>
                        <div class="add-rate">
                            <label for="your-rating">Rate the place</label>
                        </div>
                        <select name="your-rating" id="your-rating" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <label for="your-review">Share your opinion about this restaurant.</label>
                        <textarea name="your-review" id="your-review" placeholder="Your Review" required></textarea>
                    </select>
                </form>`);
    $('#add-review-button').hide();
    reviewSubmitButton.show();

}


function submitReview() {
    let newName = $("#your-name");
    let newRating = $("#your-rating");
    let newReview = $("#your-review");
    if (!(newName.val() && newRating.val() && newReview.val())) {
        return;
    }
    addReview(newName.val(), newRating.val(), newReview.val());
    newName.html();
    newRating.html();
    newReview.html();
    hideForm();
    reviewSubmitButton.hide();
    reviewDiv.empty();
}


function addReview(newName, newRating, newReview) {
    let newReviewDetails = {
        name: newName,
        rating: newRating,
        review: newReview,
    };
    let reviewsDiv = $('#reviews');
    let newReviewHTML = '';
    newReviewHTML += `<div class="restaurant-reviews">
                         <h3 class="review-title">
                         <span class="profile-photo" style="background-image: url('image/avatar.png')"></span>
                         <span id="review-rating" class="rating">${placeRating(newReviewDetails)}</span>
                         </h3>
                         <h3>${newReviewDetails.name}</h3>
                         <p> ${newReviewDetails.review} </p>
                       </div>`;
    myReviewArray.push(newReviewDetails);
    reviewsDiv.prepend(newReviewHTML);
}

function resetStars() {
    oneStar = false;
    twoStar = false;
    fourStar = false;
    threeStar = false;
    fiveStar = false;
    allStar = false;
}


function placeRating(place) {
    let rating = [];
    if (place.rating) {
        for (let i = 0; i < 5; i++) {
            if (place.rating < (i + 1)) {
                rating.push(emptyRate);
            } else {
                rating.push(fullRate);
            }
        }
        return rating.join(' ');
    }
}

function addRating(place) {
    if (place.rating) {
        let displayRating = '';
        for (let i = 0; i < 5; i++) {
            if (place.rating < (i + 1)) {
                displayRating = '';
                displayRating += emptyRate;
            } else {
                displayRating = '';
                displayRating += fullRate;
            }
            $('#info-rating').show();
            $('#info-rating').append(displayRating);
        }
    } else {
        $('#info-rating').hide();
    }
}







function hideForm() {
    $("#review-window").hide();
    $("#add-review-button").hide();
}



mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
