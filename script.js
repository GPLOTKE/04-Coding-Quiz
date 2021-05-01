
var showInstructionsEl = $('#instructions');
var showQuestion1El = $('#question1');
var showQuestion2El = $('#question2');
var showQuestion3El = $('#question3');
var showQuestion4El = $('#question4');
var showQuestion5El = $('#question5');
var showAnswerBtns1El = $('#answerBtns1');
var showAnswerBtns2El = $('#answerBtns2');
var showAnswerBtns3El = $('#answerBtns3');
var showAnswerBtns4El = $('#answerBtns4');
var showAnswerBtns5El = $('#answerBtns5');
var showFinalScoresEl = $('#finalScores');
var viewHighScoresEl = $('#viewHighScores');
var submitBtnEl = $('#submitBtn');
var submissionResponseEl = $('#response');
var yourScoreEl = $();
var showBodyEl = $('showBody');

showQuestion1El.hide();
showQuestion2El.hide();
showQuestion3El.hide();
showQuestion4El.hide();
showQuestion5El.hide();
showFinalScoresEl.hide();

// create a button that will start a timer once clicked and presents a question
// answer multiple choice question by clicking answer.
showInstructionsEl.on('click', function () {
    showInstructionsEl.hide();
    showQuestion1El.show();
});

showAnswerBtns1El.on('click', function() {
    showQuestion1El.hide();
    showQuestion2El.show();
});

showAnswerBtns2El.on('click', function() {
    showQuestion2El.hide();
    showQuestion3El.show();
});

showAnswerBtns3El.on('click', function() {
    showQuestion3El.hide();
    showQuestion4El.show();
});

showAnswerBtns4El.on('click', function() {
    showQuestion4El.hide();
    showQuestion5El.show();
});

showAnswerBtns5El.on('click', function() {
    showQuestion5El.hide();
    showFinalScoresEl.show();
});

// function showResponse (event){
//     event.preventDefault();
//     console.log(event);
//     var response = "Your final score is " + yourScoreEl.value + ".";
//     submissionResponseEl.textContext = response;
// }

// submitBtnEl.addEventListener("click", showResponse);

// viewHighScoresEl.on('click', function() {
//     showInstructionsEl.hide();
//     showQuestion1El.hide();
//     showQuestion2El.hide();
//     showQuestion3El.hide();
//     showQuestion4El.hide();
//     showQuestion5El.hide();
//     showFinalScoresEl.hide();
// });

// timer that starts when clicking start quiz button. info gathered from even listener activities and stackoverflow examples

document.getElementById("startQuiz").addEventListener("click", function () {
    var secondsleft = 75;

    var downloadTimer = setInterval(function function1() {
        document.getElementById("startTimer").innerHTML = secondsleft + " seconds remaining.";

        secondsleft -= 1;
        if (secondsleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("startTimer").innerHTML = "Time is up!"
        }
    }, 1000);

    console.log(startTimer);
});




// once answer is chosen screen will say "correct" or "wrong" then list another question
// if answer is incorrect then time will be subtracted from clock
// quiz ends when timer reaches 0 or when questeds are all answered
// final score will be posted
// enter initials into field to save high score