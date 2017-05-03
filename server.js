const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

var listener = app.listen(process.env.PORT || 3000, function() {
    console.log('App is listening on port ', listener.address().port)
})