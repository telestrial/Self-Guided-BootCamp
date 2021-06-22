const coordArray = campground.split(',')
for (var i = 0; i < coordArray.length; i++) { coordArray[i] = +coordArray[i]; }

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: coordArray, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(coordArray)
    .addTo(map)