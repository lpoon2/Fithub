var mongoose = require('mongoose');

var elemDetail = new mongoose.Schema({
  name:{type: String, required:true},
  elementid: String,
  reps: Number,
  sets: Number,
  time: Number,
  distance: Number,
});
var workoutSchema   = new mongoose.Schema({
  name: String,
  description : String,
  num_favorite : Number,
  num_copy : Number,
  original_user : String,
  original_workout_id : String,
  current_user : String,
  current_user_id :String,
  rating : Number,
  private: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  comments : [
    {
      user: String,
      content: String,
    }
  ],
  keywords: [String], // array of tags that pertain to the workout
  //elements : [String], //array of element_ids and fields(ie weight, reps, sets, etc
  days : [
    {
      day:String,
      currIndex: Number,
      elements: [elemDetail],
    }
  ]

});

module.exports = mongoose.model('Workout', workoutSchema);
