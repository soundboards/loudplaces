var mongoose = require('mongoose')
  , mongoTypes = require('mongoose-types');

function required(val) { return val && val.length; }

var Schema = mongoose.Schema;
var ObjectID = Schema.ObjectID;
