// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/about', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/profile/:name', function(req, res) {
    res.render('profile', {person: req.params.name});
});

app.listen(8080);
console.log('8080 is the magic port');