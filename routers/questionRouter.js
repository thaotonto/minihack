const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionController.js');

router.get('/:id', (req, res) => {
    let id = req.params.id;
    questionController.getQuestionById(id, (err, question) => {
        if(err != null){
            console.log();
        } else {
          res.send(question);
        }
    });
});

module.exports = router;
