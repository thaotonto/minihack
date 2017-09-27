const questionModel = require('../schema/questionSchema.js');
const answerController = require('./answerController.js');

const getQuestionList = (callback) => {
  questionModel.find({}, (err, questions) => {
    if (err) {
      console.log('getQuestionListError: ', err);
    } else {
      callback(null, questions);
    }
  });
};

const getQuestionById = (id, callback) => {
  questionModel.findOne({
    id: id
  }, (err, question) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, question);
    }
  });
};

const handleQuestion1 = (answerInfo, callback) => {
  answerController.getTotalAnswerFromQuestion(1, (totalAnswers) => {
    answerController.getNumberOfAnswerFromQuestion(1, answerInfo.answer, (result) => {
      if ((result.length / totalAnswers.length) > 0.17) {
          return callback(0);
      }
      callback(answerInfo.answer);
    });
  });
};

const handleQuestion2 = (answerInfo, callback) => {
  if (answerInfo.answer == 4) {
    return callback(4);
  }
  answerController.getTotalAnswerFromQuestion(2, (totalAnswers) => {
    answerController.getNumberOfAnswerFromQuestion(2, 10, (result) => {
      if ((result.length / totalAnswers.length) > 0.2) {
          return callback(0);
      }
      callback(10);
    });
  });
};

const handleQuestion3 = (answerInfo, callback) => {
  answerController.getTotalAnswerFromQuestion(3, (totalAnswers) => {
    answerController.getNumberOfAnswerFromQuestion(3, answerInfo.answer, (result) => {
      if ((result.length / totalAnswers.length) > 0.13) {
          return callback(0);
      }
      callback(answerInfo.answer);
    });
  });
};

const handleQuestion4 = (answerInfo, callback) => {
  let playerWin = 0;
  answerController.getTotalPlayer((result) => {
    for (i = 0; i < result; i++) {
      answerController.getTotalScore(result, (score) => {
          if (score >= 30) {
            playerWin++;
          }
      });
    }
    score = (1 - (Math.abs(playerWin - answerInfo.answer) / result.length)) * 10;
    if (score < 0) score = 0;
    callback(score);
  });
};

const handleQuestion5 = (answerInfo, callback) => {
  answerController.getTotalAnswerFromQuestion(5, (totalAnswers) => {
    answerController.getNumberOfAnswerFromQuestion(5, answerInfo.answer, (result) => {
      if ((result.length / totalAnswers.length) > 0.1) {
          return callback(0);
      }
      callback(answerInfo.answer);
    });
  });
};

const handleQuestion6 = (answerInfo, callback) => {
answerController.getTotalAnswerFromQuestion(5, (totalAnswers) => {
    let average = 0;
    for(i = 0; i < totalAnswers.length; i++) {
      average += totalAnswers.answer;
    }
    average = average / totalAnswers.length;
    if (answerInfo.answer < average) return callback(average);
    callback(0);
  });
};

const handleQuestion = (answerInfo, callback) => {
  let playerScore = 0;
  if (answerInfo.questionID == 1) handleQuestion1(answerInfo, (score) => {
    playerScore = score;
    return callback(playerScore);
  });
  else if (answerInfo.questionID == 2) handleQuestion2(answerInfo, (score) => {
    playerScore = score;
    return callback(playerScore);
  });
  else if (answerInfo.questionID == 3) handleQuestion3(answerInfo, (score) => {
    playerScore = score;
    return callback(playerScore);
  });
  else if (answerInfo.questionID == 4) handleQuestion4(answerInfo, (score) => {
    playerScore = score;
    return callback(playerScore);
  });
  else if (answerInfo.questionID == 5) handleQuestion5(answerInfo, (score) => {
    playerScore = score;
    return callback(playerScore);
  });
  else if (answerInfo.questionID == 6) handleQuestion6(answerInfo, (score) => {
    playerScore = score;
    return callback(playerScore);
  });
}

module.exports = {
  getQuestionList,
  getQuestionById,
  handleQuestion
}
