var mongoose = require('mongoose');

var eleSchema   = new mongoose.Schema({
  name: String,
  description : String,
  type : String,
  media : String,  // the path to the media ?
  keywords: [String], // array of tags that pertain to the workout
  repetitions: int,
  sets: int,
  // if this a cardio lift (ie running, biking, swimming)
  duration: int,
  pace: int
});

module.exports = mongoose.model('Element', eleSchema);
