// Api key voor Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZWFxbGUiLCJhIjoiY2tuNmc1Z3oyMDY0dTJ3cncxc2MxZTk2MCJ9.V1ZS-Z0RdgidnIFymKJ_fQ';

// Api key voor openWeatherMap
var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
var openWeatherMapUrlApiKey = '0390daa8a38c5a1e9f2ff77491c72abc';
var center = [-89.27957931852698, 25.9563407427604];
// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11',

  // Positioning the map on a certain longitute + latitude and zooming in
  center: center,
  zoom: 3.5,
});


var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

var popup = new mapboxgl.Popup().setHTML('<h3 class="popuptext">Landingzone #1</h3>');
var popup2 = new mapboxgl.Popup().setHTML('<h3 class="popuptext">Landingzone #2</h3>');
var popup3 = new mapboxgl.Popup().setHTML('<h3 class="popuptext">Landingzone #3</h3>');

var landingzone1 = [-97.15730266075111, 25.99736621515351];
var landingzone2 = [-80.52838499909618, 28.458495322340553];
var landingzone3 = [-89.40672969259955, 28.93567089020882];

// Adding a marker based on lon lat coordinates
var marker = new mapboxgl.Marker({
	color: "red"})
  .setLngLat(landingzone1)
  .setPopup(popup)
  .addTo(map);

var marker2 = new mapboxgl.Marker({
	color: "blue"})
  .setLngLat(landingzone2)
  .setPopup(popup2)
  .addTo(map);

  var marker3 = new mapboxgl.Marker({
  	color: "green"})
  .setLngLat(landingzone3)
  .setPopup(popup3)
  .addTo(map);

//------------Onclicks voor de knoppen

document.getElementById('knop1').onclick = function() {
map.flyTo({
center: landingzone1,
speed: 1,
zoom: 10,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});

getWeatherZone1();

};

document.getElementById('knop2').onclick = function() {
map.flyTo({
center: landingzone2,
speed: 1,
zoom: 10,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});

getWeatherZone2();

};

document.getElementById('knop3').onclick = function() {
map.flyTo({
center: landingzone3,
speed: 1,
zoom: 10,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});

getWeatherZone3();

};

// Weathermap
function getWeatherZone1 () {

var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + landingzone1[1] + '&lon=' + landingzone1[0] + '&appid=0390daa8a38c5a1e9f2ff77491c72abc'
// get current weather
fetch(request)

// parse response to JSON format
.then(function(responseWeather) {
return responseWeather.json();
})

// do something with response
.then(function(responseWeather) {
// show full JSON object
var weatherBox = document.getElementById('weather');
var degC = Math.floor(responseWeather.main.temp - 273.15);
weatherBox.innerHTML = degC + '&#176;C <br><img src="https://openweathermap.org/img/wn/' + responseWeather.weather[0].icon + '@2x.png"><br>' +  responseWeather.weather[0].description;
});
};

function getWeatherZone2 () {

var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + landingzone2[1] + '&lon=' + landingzone2[0] + '&appid=0390daa8a38c5a1e9f2ff77491c72abc'
// get current weather
fetch(request)

// parse response to JSON format
.then(function(responseWeather) {
return responseWeather.json();
})

// do something with response
.then(function(responseWeather) {
// show full JSON object
var weatherBox = document.getElementById('weather');
var degC = Math.floor(responseWeather.main.temp - 273.15);
weatherBox.innerHTML = degC + '&#176;C <br><img src="https://openweathermap.org/img/wn/' + responseWeather.weather[0].icon + '@2x.png"><br>' +  responseWeather.weather[0].description;
});
};

function getWeatherZone3 () {

var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + landingzone3[1] + '&lon=' + landingzone3[0] + '&appid=0390daa8a38c5a1e9f2ff77491c72abc'
// get current weather
fetch(request)

// parse response to JSON format
.then(function(responseWeather) {
return responseWeather.json();
})

// do something with response
.then(function(responseWeather) {
// show full JSON object
var weatherBox = document.getElementById('weather');
var degC = Math.floor(responseWeather.main.temp - 273.15);
weatherBox.innerHTML = degC + '&#176;C <br><img src="https://openweathermap.org/img/wn/' + responseWeather.weather[0].icon + '@2x.png"><br>' +  responseWeather.weather[0].description;
});
};

function getWeather () {

var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + center[1] + '&lon=' + center[0] + '&appid=0390daa8a38c5a1e9f2ff77491c72abc'
// get current weather
fetch(request)

// parse response to JSON format
.then(function(responseWeather) {
return responseWeather.json();
})

// do something with response
.then(function(responseWeather) {
// show full JSON object
var weatherBox = document.getElementById('weather');
var degC = Math.floor(responseWeather.main.temp - 273.15);
weatherBox.innerHTML = degC + '&#176;C <br><img src="https://openweathermap.org/img/wn/' + responseWeather.weather[0].icon + '@2x.png"><br>' +  responseWeather.weather[0].description;
});
};

getWeather();




