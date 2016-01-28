Client = require('node-rest-client').Client;
var urlutils = require('url');
client = new Client();
var requestKey = "788e5243a8bed6df60e79a13643a3d4a";


function getFullRequestLink	(cityId, key, mode) {
	var requestLink = 'http://api.openweathermap.org/data/2.5/';
	if (mode == 'current') {
		return requestLink + 'weather?id=' + cityId + '&appid=' + key;
	} 
	if (mode == 'forecast') {
		return requestLink + 'forecast/city?id=' + cityId + '&appid=' + key;
	}
}


module.exports.requestCurrent = function (cityId, callback) {	
	client.get(getFullRequestLink(cityId, requestKey, 'current'), function(data, response) {
			callback(JSON.parse(data));
	});
}

module.exports.requestForecast = function (cityId, callback) {	
	client.get(getFullRequestLink(cityId, requestKey, 'forecast'), function(data, response) {
			callback(JSON.parse(data));

	});
}

console.log(urlutils.parse(getFullRequestLink(524901, requestKey, 'current'), true));





//'http://api.openweathermap.org/data/2.5/weather?id=524901&appid=788e5243a8bed6df60e79a13643a3d4a'  //current
//'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&cnt=30&appid=788e5243a8bed6df60e79a13643a3d4a' //forecst
// moscow - 524901;
