var questionID = 1;
// const getQuestion = (userID) => {
//   if (questionID <= 6) {
//     $.ajax({
//         type:'get',
//         url:'http://127.0.0.1:6969/questions/' + questionID,
//         data: {userID: userID}
//      }).then((data) => {
//        $("#question").html(data.question.question);
//        if (data.score >= 0) {
//          $("#score").html(`Điểm số: ${data.score} / 30`);
//        }
//        for (i = 0; i < data.question.answerButton.length; i++) {
//            button = document.querySelectorAll(`button[value='${data.question.answerButton[i]}']`)[0];
//            button.setAttribute('style', 'display:inline !important');
//        }
//
//        if (data.question.answerButton.length == 0) {
//          console.log(document.getElementsByClassName("row")[0]);
//          document.getElementsByClassName("row")[0].setAttribute('style', 'display:inline');
//        }
//     });
//   }
// }

const getQuestion = () => {
  if (questionID <= 6) {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:6969/questions/' + questionID,
     }).then((data) => {
       $("#question").html(data.question.question);
       if (data.score >= 0) {
         $("#score").html(`Điểm số: ${data.score} / 30`);
       }
       for (i = 0; i < data.question.answerButton.length; i++) {
           button = document.querySelectorAll(`button[value='${data.question.answerButton[i]}']`)[0];
           button.setAttribute('style', 'display:inline !important');
       }

       if (data.question.answerButton.length == 0) {
         console.log(document.getElementsByClassName("row")[0]);
         document.getElementsByClassName("row")[0].setAttribute('style', 'display:inline');
         $("#totalPlayer").html(`Tổng số người chơi: ${data.totalPlayer.length}`);
       }
    });
  }
}

// const postAnswer = (answer, userID) => {
//   $.ajax({
//       type:'post',
//       url:'http://127.0.0.1:6969/answer',
//       data : {
//         questionID,
//         answer,
//         userID
//       }
//    }).then((data) => {
//      hideButton($('button.answer'));
//      questionID++;
//      getQuestion(userID);
//   });
// }

const hideButton = (buttons) => {
  if (questionID == 4) {
     document.getElementsByClassName("row")[0].setAttribute('style', 'display:none');
  }
  for (i = 0; i < buttons.length; i++ ) {
    buttons[i].setAttribute('style', 'display:none !important');
  }
}

const postAnswer = (answer) => {
  $.ajax({
      type:'post',
      url:'http://127.0.0.1:6969/answer',
      data : {
        questionID,
        answer
      }
   }).then((data) => {
     hideButton($('button.answer'));
     questionID++;
     getQuestion();
  });
}
