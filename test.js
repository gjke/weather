var client = require('./weather.js');

client.requestCurrent(524901, function(data){
	console.log(data);
});


