////// DOM Variables
let questionTextEl = document.getElementById("question-text");
let instructionsEl = document.getElementById("instructions");
let choicesListEl = document.getElementById("choices-list");
let notificationEl = document.getElementById("correct-notification");
let startButtonEl = document.getElementById("start-button");
let scoreTimerEl = document.getElementById("score-timer");
let highscoresEl = document.getElementById("view-highscores");
let userScoreFormEl = document.getElementById("user-score-form");
let userInitialsInput = document.getElementById("user-initials");
let highScoresListEl = document.getElementById("highscores-list");
let clearScoresEl = document.getElementById("clear-scores");

////// Variables
let currentQuestion = 0;
let timeRemaining = 75; // starting time at 75 seconds
var highscoresArray = [];
// array of objects for questions{question: Text, choices:[1,2,3,4], answer:choices[i]}
let jsQuizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
    answerIndex: 2,
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
    answerIndex: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
    answerIndex: 3,
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
    answerIndex: 2,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log()"],
    answer: "console.log()",
    answerIndex: 3,
  },
];

init();

////// FUNCTIONS
// function to start the quiz
function startQuiz() {
  questionTextEl.textContent = "";
  instructionsEl.textContent = "";
  startButtonEl.setAttribute("class", "d-none"); //do not display start button once game begins
  currentQuestion = 0; // new quiz reset to start question
  scoreTimerEl.textContent = "Time: " + timeRemaining;
  setScoreTimer();
  askQuestion(currentQuestion);

}
// start score timer
function setScoreTimer() {
  var timerInterval = setInterval(function () {
    // count down if not all questions completed
    if (currentQuestion < jsQuizQuestions.length) {
      timeRemaining--;
      scoreTimerEl.textContent = "Time: " + timeRemaining;
      // if time runs out stop the clock at 0 and get user initials for high scores
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        getInitials();
      }
    }
  }, 1000);
}
// function to ask a question from a given array and question number
function askQuestion(questionNumber) {
  // clear old choices
  choicesListEl.innerHTML = "";

  //ask the question
  questionTextEl.textContent = jsQuizQuestions[questionNumber].question;

  // list choices for the question as buttons
  for (j = 0; j < jsQuizQuestions[questionNumber].choices.length; j++) {
    let liEl = document.createElement("li"); //create list element for options within ol
    liEl.setAttribute("class", "m-2"); //bootstrap classes here
    choicesListEl.appendChild(liEl);
    let buttonEl = document.createElement("button"); //create buttons within li element
    buttonEl.setAttribute("class", "btn btn-primary"); //bootstrap classes here
    buttonEl.setAttribute("data-choiceIndex", j); //for event listener event delegation
    buttonEl.textContent =
      j + 1 + ". " + jsQuizQuestions[questionNumber].choices[j];
    liEl.appendChild(buttonEl);
  }
}
// clear page of questions to ask user for initials
function getInitials() {
  questionTextEl.textContent = "All done!";
  instructionsEl.textContent = "Your final score is " + timeRemaining + ".";
  choicesListEl.innerHTML = "";
  userScoreFormEl.setAttribute("class", "visible mb-5"); //display user initials form
}
// function to initialize high scores data
function init() {
  var storedScores = JSON.parse(localStorage.getItem("storedScores"));
  if (storedScores) {
    highscoresArray = storedScores;
  }
}
// function to record high scores to local data
function recordScore() {
  localStorage.setItem("storedScores", JSON.stringify(highscoresArray));
}
// function to display high scores
function renderScores() {
  highScoresListEl.innerHTML = ""; //clear list
  // sort scores high to low
  let sortedScores = highscoresArray.sort((a, b) => {
    return b.score - a.score;
  }); 
  for (j = 0; j < sortedScores.length; j++) {
  
    var li = document.createElement("li");
    li.textContent =
      j + 1 + ". " + sortedScores[j].player + " - " + sortedScores[j].score;
    li.setAttribute("class", "bg-primary-light align-left my-2 p-1"); //placeholder for bootstrap class
    highScoresListEl.appendChild(li);
  }
}

////// EVENT LISTENERS
// event listeners for index.html
if (document.title === "JavaScript Quiz Game") {
  // event listener to start the game
  startButtonEl.addEventListener("click", function (event) {
    event.preventDefault();
    startQuiz();
  });
  // event listener for user selection of choices for the question
  choicesListEl.addEventListener("click", function (event) {
    event.preventDefault();
    // match user choice to index
    if (event.target.matches("button")) {
      var userSelection = parseInt(
        event.target.getAttribute("data-choiceIndex")
      );
      // user selection matches correct answer
      if (userSelection === jsQuizQuestions[currentQuestion].answerIndex) {
        notificationEl.textContent = "Correct!";
      // user selected incorrect answer  
      } else {
        notificationEl.textContent = "Wrong!";
        timeRemaining = timeRemaining - 10;
        scoreTimerEl.textContent = "Time: " + timeRemaining;
      }
      // go to the next question if there are more questions left
      currentQuestion++;
      if (currentQuestion < jsQuizQuestions.length) {
        askQuestion(currentQuestion);
      } else {
        getInitials();
      }
    }
  });
  // event listener for user submitting initials for high scores
  userScoreFormEl.addEventListener("submit", function (event) {
    event.preventDefault();
    let user = userInitialsInput.value.trim();
    highscoresArray.push({ score: timeRemaining, player: user });
    recordScore();
    window.location.href = "./highScores.html";
  });
}

// event listeners for highScores.html
if (document.title === "JavaScript Quiz Highscores") {
  renderScores();
  // event listener for clear scores from high scores
  clearScoresEl.addEventListener("click", function (event) {
    highscoresArray = [];
    recordScore();
    init();
    renderScores();
  });
}
