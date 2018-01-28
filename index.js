var express = require('express')
var app = express()
 
app.use(express.static(`./public`))
console.log("server start");

app.listen(9000)