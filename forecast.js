Client = require('node-rest-client').Client;

client = new Client();
var moscow = 524901;
var requestKey = "788e5243a8bed6df60e79a13643a3d4a";
var requestLinkForecast = "http://api.openweathermap.org/data/2.5/forecast/city?id=&cnt=&APPID="
var days = 30

function fullRequestLinkForecast (city, days, key) {
return requestLinkForecast.substring(0,56) + city + requestLinkForecast.substring(56,61) + days + requestLinkForecast.substring(61,68) + key;
}



function requestForecast (id, callback) {
	this.id = id;
	client.get(fullRequestLinkForecast(moscow, days, requestKey), function(data, response){
			var i = console.log(data.toString('ascii', 0, data.length));
			callback(i);

	});
}



function putConsole(i) {
	console.log(i);
}

requestForecast(moscow, putConsole);
