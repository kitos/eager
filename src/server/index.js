var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var history = require('connect-history-api-fallback');

var goalsApi = require('./controllers/goals.controller');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(history());

app.use(express.static(path.join(__dirname, 'static')));
app.use(goalsApi());

mongoose.connect('mongodb://admin:123123@ds030829.mlab.com:30829/eager');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Successful db connection.');
    app.listen(3000, () => console.log('App is listening on  http://localhost:3000'));
});