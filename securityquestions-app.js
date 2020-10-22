'use strict';

var correctAnswerNumber = 0;
var questionText = ['Question One: Where was I born?', 'Question Two: What is my mother\'s maiden name?', 'Question Three: What truck did I drive for work?', 'Thank you. Proceed to password reset.'];
var answerText = ['Brooklyn', 'Wilson', 'Ice Cream Truck'];
var securityQuestionOneElement = document.getElementById('securityquest-box').addEventListener('submit', handleSubmit);
// var attemptLimit = 3;
// var attemptsSoFar = 0;

function question(){
  var questionInput = document.getElementById('question');
  questionInput.textContent = questionText[correctAnswerNumber];
}
// question();

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);
  var userInput = event.target.answer.value;
  if (answerText[correctAnswerNumber] === userInput) {
    correctAnswerNumber++;
    correctAttempt(event);
    question();
  } else if (correctAnswerNumber === 3){
    finalSubmit();
  }
  else {
    incorrectAttempt(event);
  }
  var labelElement = document.getElementById('answerResponse');
  var attemptResponse = labelElement.lastChild;
  labelElement.removeChild(attemptResponse);
}


function correctAttempt(event){
  var correctText = document.createElement('p');
  var parentElementQOne = document.getElementById('answerInput');
  correctText.textContent ='Correct!';
  parentElementQOne.after(correctText);
  event.target.answer.value = null;
}

function incorrectAttempt(event){
  var incorrectText = document.createElement('p');
  var parentElementQOne = document.getElementById('answerInput');
  incorrectText.textContent='Incorrect. Remember answers are case sensitive';
  parentElementQOne.after(incorrectText);
  event.target.answer.value = null;
}

// function questionCycle(){
//   // var i = 0;
//   for (var i=0; i < questionText.length; i++){
//     question();
//   }
//   // i++;
// }

question();

var finalSubmit = document.getElementById('passwordResetButton');
finalSubmit.addEventListener('click', handleClick);
function handleClick(event){
  event.preventDefault();
  if (correctAnswerNumber === 3){
    location.href = 'celebrity-hack-password-reset.html';
    // location.href = 'celebrity-hack-sb-photos.html';
  } else {
    location.href = 'securityquestions.html';
  }
}


// select security question answer based off quick google searches
// x amount of tries if ita wrong
// breaks through if its right to reset password
//prompt that says incorrect answer
// once hit 3 correct answers goes to reset
// add buttons next to each question
// event listener for button 'click'
// remove event listener
// place holder type answer here

