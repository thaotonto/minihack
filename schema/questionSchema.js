const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  id:{
    type: Number,
    require: true
  },
  question: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('questions', questionSchema);
