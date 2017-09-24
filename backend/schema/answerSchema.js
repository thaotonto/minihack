const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionID: {
    type: Number,
    require: true
  },
  answer: {
    type: String,
    require: true
  },
  score: {
    type: Number
  }
});

module.exports = mongoose.model('answers', answerSchema);
