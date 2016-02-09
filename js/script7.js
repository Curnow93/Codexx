var http = require("http");

http.createServer(function(request, response){
	response.writeHead("200");
	response.write("Hello, this is rat.");
	response.end();
	setTimeout(function(){
		response.write("Rat is dead.");
		response.end();
	}, 4000);
}).listen(8080);
console.log("Listening on port 8080");

/*var EventEmitter = require("events").EventEmitter;

var logger = new EventEmitter();
logger.on("error", function(message){
	console.log("ERR: " + message); 
});

logger.emit("error", "Broken legs");

/*http.createServer(function(request, response){
	response.writeHead("200");
	response.write("Hello");
	request.on("data", function(chunk){
		console.log(chunk.toString());
	});
	request.on("end", function(chunk){
		response.end();
	});
	response.end();
}).listen(8080);*/
