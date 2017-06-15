var mongoose = require('mongoose');
var showSchema = mongoose.Schema({
  name: {type: String},
  showid: {type: Number},
  summary: {type: String },
  date: {type: Date, default: Date.now},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

var Show = mongoose.model('Show', showSchema);
module.exports = Show;
