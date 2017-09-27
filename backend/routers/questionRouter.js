const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionController.js');
const answerController = require('../controller/answerController.js');

router.get('/:id', (req, res) => {

  // console.log(req.connection.remoteAddress);
  // console.log(req.connection.remotePort);
  // console.log(req.connection.localAddress);
  // console.log(req.connection.localPort);

    let id = req.params.id;
    questionController.getQuestionById(id, (err, question) => {
        if(err != null){
            console.log();
        } else {
          // answerController.getTotalScore(req.query.userID, (score, totalPlayer) => {
          //   let data = {
          //     question,
          //     score,
          //     totalPlayer
          //   }
          //   res.send(data);
          // });
          // TODO: userID = ip
          answerController.getTotalScore(req.ip, (score, totalPlayer) => {
            let data = {
              question,
              score,
              totalPlayer
            }
            console.log(data);
            res.send(data);
          });
        }
    });
});

module.exports = router;
