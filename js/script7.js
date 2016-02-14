/*var http = require("http");

http.createServer(function(request, response){
	response.writeHead("200");
	response.write("Hello, this is rat.");
	response.end();
	setTimeout(function(){
		response.write("Rat is dead.");
		response.end();
	}, 4000);
}).listen(8080);
console.log("Listening on port 8080");*/

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

/*http.createServer(function(request, response){
	response.writeHead("200");
	request.pipe(response);
}).listen(8080);*/

/*var fs = require("fs");
var http = require("http");

var file = fs.createReadStream("readme.md");
var newFile = fs.createWriteStream("readme_copy.md");

file.pipe(newFile);*/

/*var fs = require("fs");
var http = require("http");

http.createServer(function(request, response){
	var newFile = fs.createWriteStream("readme_copy.md");
	request.pipe(newFile);
	
	request.on("end", function{
			   response.end("File Uploaded!");
			   });
	
})

file.pipe(newFile);*/

/*readStream.on("data", function(){
	var buffer_good = writeStream.write(chunk);
	if (!buffer_good) readStream.pause();
});
writeStream.write("drain", function(){
	readStream.resume();
});

readStream.pipe(writeStream);*/

/*
//require modules
var custom = require("../js/custom.js");
require("../js/custom_once.js") //only call once

//module: var foo = function(){};
//	      exports.foo = foo;

var myMod = require("../js/custom.js");
myMod.foo();*/

/*var http = require("http");

var message = function(message){
var options = {
	host: "localhost", port: 8080, path="/", method="post"
}

var request = http.request(options, function(response){
	response.on("data", function(data){
		console.log(data);
	});
});
request.write(message);
request.end();
}
message("Screw you, rat.");*/

var express = require("express");
var app = express.createServer();

app.get("/tweets/:username", function(request, response){
	var username = req.params.username;
	response.sendFile(__dirname + "index.html");
});

app.listen(8080);
