// Used for compilation with Browserify. However, it is broken (for some reason, one of the packages are not being imported
// properly). I manually fix this for now, but I would very much like to fix this with weather-js or browserify.
// browserify scripts/weather.js -o bundle.js

var weather = require('weather-js');

weather.find({search: 'Vancouver, BC', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
// ADD ALERT FUNCTIONALIFY
    console.log(result);

  var iconTable = {
	'01d': 'wi-day-sunny',
	'02d': 'wi-day-cloudy',
	'03d': 'wi-cloudy',
	'04d': 'wi-cloudy-windy',
	'09d': 'wi-showers',
	'10d': 'wi-rain',
	'0': 'wi-thunderstorm',
    '1': 'wi-thunderstorm',
    '2': 'wi-thunderstorm',
    '3': 'wi-thunderstorm',
    '4': 'wi-thunderstorm',
    '17': 'wi-thunderstorm',
    '35': 'wi-thunderstorm',
	'13d': 'wi-snow',
	'50d': 'wi-fog',
	'01n': 'wi-night-clear',
	'02n': 'wi-night-cloudy',
	'03n': 'wi-night-cloudy',
	'04n': 'wi-night-cloudy',
	'09n': 'wi-night-showers',
	'10n': 'wi-night-rain',
	'11n': 'wi-night-thunderstorm',
	'13n': 'wi-night-snow',
	'50n': 'wi-night-alt-cloudy-windy'
    }
});
