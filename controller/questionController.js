const questionModel = require('../schema/questionSchema.js');

const getQuestionList = (callback) => {
  questionModel.find({}, (err, questions) => {
    if (err) {
      console.log('getQuestionListError: ', err);
    } else {
      callback(null, questions);
    }
  });
}

module.exports = {
  getQuestionList
}
