var mongoose = require('mongoose');

var workoutSchema   = new mongoose.Schema({
  name: String,
  description : String,
  num_favorite : Number,
  num_copy : Number, 
  original_user : String,
  original_workout_id : String,
  current_user : String,
  rating : Number,
  comments : {
    user: String,
    content: String,
  },
  keywords: [String], // array of tags that pertain to the workout
  elements : [String], //array of element_ids and fields(ie weight, reps, sets, etc
  day : {
    Mon : [String],
    Tue : [String],
    Wed : [String],
    Thu : [String],
    Fri : [String]
  }
});

module.exports = mongoose.model('Workout', workoutSchema);
