var express = require('express')
var app = express()
 
app.use(express.static(__dirname + `/public`))
console.log("server start");

app.listen(80)