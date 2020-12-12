let choicesListEl = document.getElementById("#choices-list");
let questionTextEl = document.getElementById("#question-text");

// variables
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

// console.log(quizQuestions[0].choices);
for (i = 0; i < quizQuestions.length; i++) {
  // questionTextEl.textContent = quizQuestions[i].question;
  console.log(quizQuestions[i].question);
  for (j = 0; j <quizQuestions[i].choices.length; j++){
    console.log(j+1);
    console.log(quizQuestions[i].choices[j]);
  }
}

// event listener for question

// start button
// timer starts
// question from array of questions appear
// correct answer moves to next question and notifies correct
// incorrect answer deducts 10 seconds from remaining time and notifies wrong
// when all questions are answered or timer reaches 0 the game is over
// submit initials and high ScopedCredential
