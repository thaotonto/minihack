const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const questionRouter = require('./routers/questionRouter.js');
const answerRouter = require('./routers/answerRouter.js');

let app = express();
app.use(cors());

mongoose.connect('mongodb://localhost/minihack', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connect success');
  }
});

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/questions', questionRouter);
app.use('/answer', answerRouter);

app.use(express.static(__dirname + '/public'));

app.listen(6969, () => {
  console.log('Server is ready');
});
