var mongoose = require('mongoose');

var eleSchema   = new mongoose.Schema({
  name: String,
  description : String,
  type : String,
  media : String,  // the path to the media ?
  keywords: [String], // array of tags that pertain to the workout
});

module.exports = mongoose.model('Element', eleSchema);
