const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionID: {
    type: Number,
    require: true
  },
  answer: {
    type: Number
  },
  score: {
    type: Number,
    default: 0
  },
  userID: {
    type: String
  }
});

module.exports = mongoose.model('answers', answerSchema);
