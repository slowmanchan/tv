var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  shows: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show'
  }]
})

var User = mongoose.model('User', userSchema);
module.exports = User;
