const answerModel = require('../schema/answerSchema.js');

const addNewAnswer = (answerInfo, callback) => {
  answerModel.find({questionID: answerInfo.questionID, userID: answerInfo.userID}, (err, result) => {
    if (result.length == 0) {
      answerModel.create(answerInfo, (err, data) => {
        if (err) {
          console.log("addNewAnswer: ", err);
        } else {
          callback(null, data);
        }
      });
    } else {
      callback("Answered");
    }
  });
};

const updateScore = (answerInfo, score, callback) => {
  answerModel.findOneAndUpdate({questionID: answerInfo.questionID, userID: answerInfo.userID},{score: score} , (err, result) => {
    if (err) {
      console.log("updateScore: ", err);
    } else {
      callback();
    }
  });
}
const getTotalScore = (userID, callback) => {
  score = 0;
  answerModel.find({userID: userID}, (err, result) => {
    if (err) {
      console.log('getTotalScore: ', err);
    } else {
      for(i = 0; i < result.length; i++) {
        score += result[i].score;
      }
      getTotalPlayer((totalPlayer) => {
        callback(score, totalPlayer);
      });
    }
  });
};

const getNumberOfAnswerFromQuestion = (questionID, answer, callback) => {
  answerModel.find({questionID: questionID, answer: answer}, (err, result) => {
    if (err) {
      console.log("getNumberOfAnswerFromQuestion: ", err);
    } else {
      callback(result);
    }
  });
};

const getTotalAnswerFromQuestion = (questionID, callback) => {
  answerModel.find({questionID: questionID}, (err, result) => {
    if (err) {
      console.log("getTotalAnswerFromQuestion: ", err);
    } else {
      callback(result);
    }
  });
};
//TODO: fix wrong
const getTotalPlayer = (callback) => {
  answerModel.find().distinct('userID', (err, result) => {
    if (err) {
      console.log('getTotalPlayer: ', err);
    } else {
      // unique = result.filter((elem, index, self) => {
      //    index == self.indexOf(elem);
      // });
      // console.log('result', result);
      // console.log('unique', unique);
      // callback(unique);
      callback(result);
    }
  })
}

module.exports = {
  addNewAnswer,
  getTotalScore,
  updateScore,
  getTotalAnswerFromQuestion,
  getNumberOfAnswerFromQuestion,
  getTotalPlayer
}
