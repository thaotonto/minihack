var questionNo = 1;
const getQuestion = () => {
  $.ajax({
      type:'get',
      url:'http://192.168.4.106:6969/questions/' + questionNo
   }).then((data) => {
     $("#question").html(data.question);
  });
}

const postAnswer = (answer) => {
  $.ajax({
      type:'post',
      url:'http://192.168.4.106:6969/answer',
      data : {
        questionNo,
        answer
      }
   }).then((data) => {
     $("#score").html(`Diem So: ${data.score}`);
     questionNo++;
     getQuestion();
  });
}
