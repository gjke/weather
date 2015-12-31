Client = require('node-rest-client').Client;

client = new Client();
var moscow = 524901;
var requestKey = "788e5243a8bed6df60e79a13643a3d4a";
var requestLinkHistory = ""
var days = 30

function fullRequestLinkHitory(city, days, key) {
return "return";
}



function requestHistory(id, callback) {
	this.id = id;
	client.get("historyrequest", function(data, response){
			var i = console.log(data.toString('ascii', 0, data.length));
			callback(i);

	});
}



function putConsole(i) {
	console.log(i);
}

requestFor(moscow, putConsole);
