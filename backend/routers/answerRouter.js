const express = require('express');
const router = express.Router();
const answerController = require('../controller/answerController.js');

router.post('/', (req, res) => {
    console.log(req.body);

    if (req.body.questionNo == 6) {
      res.redirect('/finish');
    } else {
      res.send(req.body);
    }
    
    // questionController.getQuestionById(id, (err, question) => {
    //     if(err != null){
    //         console.log();
    //     } else {
    //       res.send(question);
    //     }
    // });
    // res.redirect('/');

});

router.get('/',(req, res) => {
})



module.exports = router;
