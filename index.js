var express = require('express')
var path = require('path')
var app = express()
 
app.use(express.static(__dirname + `/public`))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
console.log("server start");

app.listen(3000)