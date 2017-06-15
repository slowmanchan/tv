var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user');
var Show = require('./models/show');

var app = express();
mongoose.Promise = global.Promise;
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected')
})


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', function(req, res, next) {
  console.log(req.body);
  var user = new User({
    username: req.body.username,
    password: req.body.password
  })

  user.save(function(err) {
    console.log(err);
  })
  res.send(req.body);
})

app.post('/login', function(req, res, next) {
  User.find({ username: req.body.username }).then(function(user) {
    res.json(user)
  })
  .catch(function(error) {
    console.log(error)
  })
})

app.post('/show', function(req, res, next) {
  var newShow = new Show(req.body);
  newShow.user = req.body.user_id;
  newShow.save().then(function(show) {
    User.findById(req.body.user_id).then(function(user) {
      user.shows.push(newShow)
      user.save().then(function(user) {
        res.json(user);
      })
    })
  })
})

app.get('/users/:user_id/shows', function(req, res, next) {
  User.findById(req.body.owner_id)
    .populate('shows')
    .exec()
    .then(function(user) {
      res.json(user)
    })
})

app.get('/test', function(req, res, next) {
  console.log('hello');
  res.json();
})

app.listen(3000, function() {
  console.log('started on 3000')
})
