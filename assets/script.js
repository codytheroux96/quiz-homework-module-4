var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var timer = document.getElementById("timer");
var secondsLeft = 75;
var questionsEl = document.getElementById("questions");
var position = 0;
var answersEl = document.getElementById("answers");


var quizQuestions = [{
    question: "What number are you trying to reach in blackjack?",
    choiceA: "16",
    choiceB: "21",
    choiceC: "18",
    choiceD: "13",
    correctAnswer: "21"
},

{
    question: "How many points is a touchdown worth in football?",
    choiceA: "3",
    choiceB: "7",
    choiceC: "6",
    choiceD: "2",
    correctAnswer: "6"
},
{
    question: "A grand slam scores how many runs in baseball?",
    choiceA: "5",
    choiceB: "2",
    choiceC: "3",
    choiceD: "4",
    correctAnswer: "4"
},
{
    question: "What state does not have multiple baseball teams?",
    choiceA: "New York",
    choiceB: "California",
    choiceC: "Florida",
    choiceD: "Colorado",
    correctAnswer: "Colorado"
},
{
    question: "Which is the most populated country?",
    choiceA: "China",
    choiceB: "United States",
    choiceC: "Canada",
    choiceD: "Brazil",
    correctAnswer: "China"
},
];
function displayMessage(){
    timer.textContent = "Time left: " + secondsLeft;
}
function setTime(){
    displayMessage();
    var timerInterval = setInterval(function(){
        secondsLeft--;
        displayMessage();

        if (secondsLeft === 0){
            alert("Times Up!")
            state= "end";
            displayState();
        }
    }, 1000);
}

function displayQuestions() {
    questionsEl.innerHTML = "";
    answersEl.innerHTML = "";
    
    
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");
    var questionsDisplay = document.createElement("p");
   
    questionsDisplay.textContent = quizQuestions[position].question;
    buttonA.textContent = quizQuestions[position].choiceA;
    buttonB.textContent = quizQuestions[position].choiceB;
    buttonC.textContent = quizQuestions[position].choiceC;
    buttonD.textContent = quizQuestions[position].choiceD;
   
    questionsEl.appendChild(questionsDisplay);
    answersEl.appendChild(buttonA);
    answersEl.appendChild(buttonB);
    answersEl.appendChild(buttonC);
    answersEl.appendChild(buttonD);

 

}
answersEl.addEventListener("click", function (event) {
    
    if (event.target.type==="submit"){

        if(event.target.textContent === quizQuestions[position].correctAnswer){
            alert("Correct!")
        
        }else {
            alert("Wrong! You lost 10 seconds")

        }
        position++;
        if (position < quizQuestions.length) {
            displayQuestions();
        }
        else{
            state="end";
            displayState();
        }
    }
});


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
        displayQuestions();
        setTime();


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