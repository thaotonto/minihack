const express = require('express');
const router = express.Router();
const answerController = require('../controller/answerController.js');
const questionController = require('../controller/questionController.js');

router.post('/', (req, res) => {
  let answerInfo = {
    questionID: req.body.questionID,
    answer: req.body.answer,
    userID: req.ip
  }

  // let answerInfo = {
  //   questionID: req.body.questionID,
  //   answer: req.body.answer,
  //   userID: req.body.userID
  // }
  answerController.addNewAnswer(answerInfo, (err, data) => {
    if (err == null) {
      questionController.handleQuestion(answerInfo, (score) => {
        answerController.updateScore(data, score, () => {
          answerController.getTotalScore(data.userID, (newScore) => {
            res.send({newScore});
          });
        });
      });
    } else {
      if (err == "Answered") {
        res.send("Answered");
      }
    }
  });
});

module.exports = router;
