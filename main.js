var express = require('express');
var path = require('path');

var app = express();


//Declare public resources.
app.use(express.static("public"));

app.get('/', function(req, res){
	var indexFilePath = path.join(__dirname, "views", "index.html");
	res.sendFile(indexFilePath);
});

app.listen(3000);