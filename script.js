// DOM Variables
let questionTextEl = document.getElementById("question-text");
let instructionsEl = document.getElementById("instructions");
let choicesListEl = document.getElementById("choices-list");
let notificationEl = document.getElementById("correct-notification");
let startButtonEl = document.getElementById("start-button");

// Variables
let currentQuestion = 0;

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

// function to start the quiz for a given set of questions
function startQuiz() {
  questionTextEl.textContent = "";
  instructionsEl.textContent = "";
  startButtonEl.setAttribute("class","d-none"); //do not display start button once game begins
  currentQuestion = 0; // new quiz reset to start question
  askQuestion(currentQuestion);

  // start timer
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
    liEl.setAttribute("class", ""); //bootstrap classes here
    choicesListEl.appendChild(liEl);
    let buttonEl = document.createElement("button"); //create buttons within li element
    buttonEl.setAttribute("class", ""); //bootstrap classes here
    buttonEl.setAttribute("data-choiceIndex", j); //for event listener event delegation
    buttonEl.textContent =
      j + 1 + ". " + jsQuizQuestions[questionNumber].choices[j];
    liEl.appendChild(buttonEl);
  }
}

// event listener for user selection of choices for the question
choicesListEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.matches("button")) {
    var userSelection = parseInt(event.target.getAttribute("data-choiceIndex"));
    if (userSelection === jsQuizQuestions[currentQuestion].answerIndex){
      notificationEl.textContent = "Correct!";
    } else{
      notificationEl.textContent = "Wrong!";
    }

    currentQuestion++;
    if (currentQuestion < jsQuizQuestions.length) {
      askQuestion(currentQuestion);
    } else {
      console.log("game over");
    }
  }
});

// event listener to start the game
startButtonEl.addEventListener("click", function (event) {
  event.preventDefault();
  startQuiz();
});

//
// start button
// timer starts
// question from array of questions appear
// correct answer moves to next question and notifies correct
// incorrect answer deducts 10 seconds from remaining time and notifies wrong
// when all questions are answered or timer reaches 0 the game is over
// submit initials and high ScopedCredential

// event listener to start quiz
// call gameplay function

// define gameplay function:
// start timer
// for loop over array of questions
// call function to display question i
// event listener for answer
// if incorrect, reduce time, notify incorrect
// if correct, notify correct
// clear question and choices
// if time <=0, call game over function
// else, continue for loop
// call game over function

//game over function
// form for user to submit initials
// save to local storage
