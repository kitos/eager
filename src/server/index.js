var express = require('express');

var goalsApi = require('./controllers/goals.controller');

var app = express();

app.use(goalsApi());

app.listen(3000, () => console.log('App is listening on  http://localhost:3000'));