// DOM Variables 
let questionTextEl = document.getElementById("question-text");
let instructionsEl = document.getElementById("instructions");
let choicesListEl = document.getElementById("choices-list");
let notifcationEl = document.getElementById("correct-notification")


// Variables
// array of objects for questions{question: Text, choices:[1,2,3,4], answer:choices[i]}
let quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question:
      "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log()"],
    answer: "console.log()",
  },
];


for (i = 0; i < quizQuestions.length; i++) {
  questionTextEl.textContent = quizQuestions[i].question;
  instructionsEl.remove(); 
  for (j = 0; j <quizQuestions[i].choices.length; j++){
    let liEl = document.createElement("button");
    liEl.textContent=(j+1) + ". " + (quizQuestions[i].choices[j]);
    liEl.setAttribute("class",""); //bootstrap classes here
    liEl.setAttribute("data-index",j) //for event listener event delegation
    choicesListEl.appendChild(liEl);
  }
  //wait for user to select answer
}

// event listener for question

//   choicesListEl.addEventListener("click",function(event){
//   event.preventDefault();
//   if(event.target.matches("button")){
//     var item = do
//   }


// })

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

