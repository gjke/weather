Client = require('node-rest-client').Client;

client = new Client();
var moscow = 524901;
var requestKey = "788e5243a8bed6df60e79a13643a3d4a";
var requestLinkCurrent = "http://api.openweathermap.org/data/2.5/weather?id=&appid=";



function fullRequestLinkCurrent (city, key) {
return requestLinkCurrent.substring(0,50) + city + requestLinkCurrent.substring(50,57) + key;
}


function requestCurrent (id, callback) {
	this.id = id;
	client.get(fullRequestLinkCurrent(moscow, requestKey), function(data, response){
			var i = console.log(data.toString('ascii', 0, data.length));
			callback(i);

	});
}



function putConsole(i) {
	console.log(i);
}

requestCurrent (moscow, putConsole);
