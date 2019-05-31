var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactSchema = new Schema(
  {
    name: {type: String, required: true},
    number: {type: Number, required: true},
  }
);

// Virtual for contact's URL
ContactSchema
.virtual('url')
.get(function () {
  return '/catalog/contact/' + this._id;
});

//Export model
module.exports = mongoose.model('Contact', ContactSchema);