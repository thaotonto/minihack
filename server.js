const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const questionController = require('./controller/questionController.js');

let app = express();

mongoose.connect('mongodb://localhost/minihack', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connect success');
  }
});

questionController.getQuestionList((err,questions) => {
  if (err == null) {
    // console.log(questions);
  }
});


app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/public'));

app.listen(6969, () => {
  console.log('Server is ready');
});
