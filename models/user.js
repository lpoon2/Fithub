var mongoose = require('mongoose');

var userSchema   = new mongoose.Schema({
  name: String,
  email: String,
  workouts : [String],
  Hash_password : String,
});

module.exports = mongoose.model('User', userSchema);
