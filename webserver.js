var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', function(req, res, next) {
  console.log(req.body);
  res.send(req.body);
})

app.get('/test', function(req, res, next) {
  console.log('hello');
  res.json();
})

app.listen(3000, function() {
  console.log('started on 3000')
})
