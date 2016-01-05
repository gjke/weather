var client = require('./current.js');

client.requestCurrent(524901, function(data){
	console.log(data);
});


