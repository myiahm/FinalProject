const sqlite3 = require('sqlite3').verbose();
// server.js
// load the things we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
app.use('/public', express.static('public'));




// set the view engine to ejs
app.set('view engine', 'ejs');


// use res.render to load up an ejs view file

// index page
app.get('', function(req, res) {
    res.render('index');
});

// about page
app.get('/start/', function(req, res) {
    var usersinfo ={kid:"Beaute'",kid: "Kevian", kid:"Bella"};
    res.render('profile', {user: req.params.name, usersinfo: usersinfo});
});
app.get('/about/', function(req, res) {
    res.render('about');
});
app.post('/post/',function(request,response){
    console.log(request.body) //you will get your data in this as object.
});

// open database in memory
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

// close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});

app.listen(8080);
console.log('8080 is the magic port');