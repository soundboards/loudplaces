var mongoose = require('mongoose')
  , mongoTypes = require('mongoose-types');

function required(val) { return val && val.length; }

var Schema = mongoose.Schema;
var ObjectID = Schema.ObjectID;

var BoardSchema = new Schema({
  name: {
    type: String,
    validate: [required, 'Name is required']
  },
  clips: [] //TODO: Add clip type
});

var Board = mongoose.model('Board', BoardSchema);
module.exports = Board;
