var hidequiz = document.getElementById("hidequiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var finalScore = document.getElementById("finalScore");
var endMessage = document.getElementById("endMessage");
var result = document.getElementById("result");
var scoreList = document.getElementById("scorelist");
var userAnswers = document.getElementById("userAnswers");


//The array holding questions
var questions = [
    {
        question: "What is the language that makes websites dynamic?:",
        choice1: "1. Markup",
        choice2: "2. Javascript",
        choice3: "3. Klingon 👽 ",
        choice4: "4. C++",
        correct: "2"
    },
    {
        question: "What does CSS stand for?",
        choice1: "1. Child Safety Site 👶",
        choice2: "2. Computer Science Syntax",
        choice3: "3. Cascading Style Sheets",
        choice4: "4. Cell Style Sheets",
        correct: "3"
    },
    {
        question: "What are 'strings' enclosed with?",
        choice1: "1. Parenthesis",
        choice2: "2. Quotation Marks",
        choice3: "3. Curly Brackets",
        choice4: "4. Square Brackets",
        correct: "2"
    },
    {
        question: "What is the main title header tag?",
        choice1: "1. h4",
        choice2: "2. h3",
        choice3: "3. h2",
        choice4: "4. h1",
        correct: "4"
    },
]

//Hides display 
intro.style.display = "block";
hidequiz.style.display = "none";
finalScore.style.display = "none";

//Variable for Start Quiz Button
var startBtn = document.getElementById("startBtn");

//Event listener to initialize 
startBtn.addEventListener("click", startGame);

// Timer Function Begin
var timeLeft = 75;
var startScore = 0;
var timer = document.getElementById("timer");

timer.textContent = "Time left: " + startScore + "s";

// Start Game function 
function startGame() {
    hidequiz.style.display = "block";
    question.style.display = "block";
    header.style.display = "block";
    intro.style.display = "none";
    finalScore.style.display = "none";
    // Function for timer
    var timeInterval = setInterval(function () {
        timer.textContent = "Time left:" + timeLeft + "s";
        timeLeft -= 1;
        if (timeLeft === 0 || questions.length === QuestionIndex) {
            resultRender();
            clearInterval(timeInterval);
            timer.textContent = "Time left:" + timeLeft + "s";
        }
    }, 1000);
    renderQuestion();
};

// Function to render questions 
var lastQuestionIndex = questions.length - 1;
var QuestionIndex = 0;

function renderQuestion() {
    var queue = questions[QuestionIndex];
    question.innerHTML = queue.question;
    choice1.innerHTML = queue.choice1;
    choice2.innerHTML = queue.choice2;
    choice3.innerHTML = queue.choice3;
    choice4.innerHTML = queue.choice4;
};

// Check Answers
function checkAnswer(answer) {
    if (questions[QuestionIndex].correct == answer) {
        userAnswers.textContent = "Correct!"
    }
    else {
        userAnswers.textContent = "Incorrect!"
        //time penalty if incorrect is clicked
        timeLeft -= 10;
    } if (questions.length === QuestionIndex + 1) {
        resultRender();
        return;
    }
    QuestionIndex++;
    renderQuestion();
};

//Score Quiz
function resultRender() {
    hidequiz.style.display = "none";
    intro.style.display = "none";
    finalScore.style.display = "block";
    endMessage.style.display="block";
    result.style.display ="none";

    if (timeLeft === 0 || questions.length - 1) {
        result.textContent = "Your final score is ";
        return; 
    }
    resultRender();
};
console.log('resultRender',resultRender);