// create a button that will start a timer once clicked and presents a question
var hideContainerEl = $('#instructions');
var showQuestionEl = $('#question1');

showQuestionEl.hide();

hideContainerEl.on('click', function () {
    hideContainerEl.hide();
    showQuestionEl.show();
});

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


// function promptEl(){
//     var questionEl = prompt("Type A, B, C or D. Commnly used data types DO NOT include:");
//     alert (questionEl);
// }
// answer multiple choice question by clicking answer.
// once answer is chosen screen will say "correct" or "wrong" then list another question
// if answer is incorrect then time will be subtracted from clock
// quiz ends when timer reaches 0 or when questeds are all answered
// final score will be posted
// enter initials into field to save high score