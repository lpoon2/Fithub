var mongoose = require('mongoose');

var workoutSchema   = new mongoose.Schema({
  name: String,
  description : String,
  original_user : String,
  current_user : String,
  rating : Number,
  comments : String,
  keywords: [String], // array of tags that pertain to the workout
  elements : [String], //array of element_ids and fields(ie weight, reps, sets, etc
});

module.exports = mongoose.model('Workout', workoutSchema);
