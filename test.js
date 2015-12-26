Client = require('node-rest-client').Client;
 
client = new Client();
 
// direct way 
client.get("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=788e5243a8bed6df60e79a13643a3d4a", function(data, response){
			// parsed response body as js object 
			//console.log(data);
			console.log(data.toString('ascii', 0, data.length));
			// raw response 
			//console.log(response);
		});
 
// registering remote methods 

