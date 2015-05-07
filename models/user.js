var mongoose = require('mongoose')
  , mongoTypes = require('mongoose-types');

// validations.... maybe put to a helper method`
function required(val) { return val && val.length; }

mongoose.connect('mongodb://localhost/soundboards');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  boards: [], //TODO: add boards type
  likes: []  //TODO: add likes type
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
