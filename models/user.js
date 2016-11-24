var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema   = mongoose.Schema({
  name: String,
  email: String,
  workouts : [String],
  Hash_password : String,
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.Hash_password);
};

module.exports = mongoose.model('User', userSchema);
