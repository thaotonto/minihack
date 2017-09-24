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

const getQuestionById = (id, callback) => {
    questionModel.findOne({id: id}, (err, question) => {
        if (err) {
            console.log(err);
        } else {
            callback(null, question);
        }
    });
};

module.exports = {
  getQuestionList,
  getQuestionById
}
