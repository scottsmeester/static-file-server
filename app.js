var express = require('express');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// var fileContents = fs.readFileSync('data.txt');


app.get('/', function(req, res) {
	// res.render('index');

  fs.readFile('data.txt', 'utf-8', function(err, data){
    // res.header('Content-Type', 'text/plain');
    // res.send(data);
    res.render('index', {data:data});

  });
});


var server = app.listen(4627, function() {
	console.log('Express server listening on port ' + server.address().port);
});