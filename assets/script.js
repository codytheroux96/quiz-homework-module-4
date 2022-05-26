var state = 'quiz';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");


var quizQuestions = [{
    question: "What number are you trying to reach in blackjack?",
    choiceA: "16",
    choiceB: "21",
    choiceC: "18",
    choiceD: "13",
    correctAnswer: "b"
},

{
    question: "How many points is a touchdown worth in football?",
    choiceA: "3",
    choiceB: "7",
    choiceC: "6",
    choiceD: "2",
    correctAnswer: "c"
},
{
    question: "A grand slam scores how many runs in baseball?",
    choiceA: "5",
    choiceB: "2",
    choiceC: "3",
    choiceD: "4",
    correctAnswer: "d"
},
{
    question: "What state does not have multiple baseball teams?",
    choiceA: "New York",
    choiceB: "California",
    choiceC: "Florida",
    choiceD: "Colorado",
    correctAnswer: "d"
},
{
    question: "What is the most populated country?",
    choiceA: "China",
    choiceB: "United States",
    choiceC: "Canada",
    choiceD: "Brazil",
    correctAnswer: "a"
},
];
 



function displayState() {
    if (state === 'start') {
        startEl.style.display = 'block';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
    }
    if (state === 'quiz') {
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
    }
}

function init() {
    displayState();
}

startBtn.addEventListener("click", function () {
    state = 'quiz';
    displayState();
});

quizTitle.addEventListener("click", function () {
    state = 'end';
    displayState();
});

init();