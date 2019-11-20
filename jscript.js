//Question rendering found here. Credit given to Code Explained on Youtube: https://www.youtube.com/watch?v=49pYIMygIcU

// let lastQuestionIndex = questions.length - 1;

// let runningQuestionIndex = 0;

// function renderQuestion

// // select all elements
 const start = document.getElementById("start");
// const quiz = document.getElementById("quiz");
// const question = document.getElementById("question");
// const qImg = document.getElementById("qImg");
// const choiceA = document.getElementById("A");
// const choiceB = document.getElementById("B");
// const choiceC = document.getElementById("C");
// const counter = document.getElementById("counter");
// const timeGauge = document.getElementById("timeGauge");
// const progress = document.getElementById("progress");
// const scoreDiv = document.getElementById("scoreContainer");

// array of objects

const questions = [
  {
    title: "What is a comparable analogy for the 'CSS' of Javascript?",
    choices: ["CSS", "HTML", "JS", "JQuery"],
    answer: "JQuery"
  },
  {
    title:
      "All functions in Javascript must have ____ following the word 'function'.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "The 'let' variable in JS means that the variable is:",
    choices: ["the same", "changes", "deletes", "repeats"],
    answer: "changes"
  },
  {
    title: "What does CSS stand for?",
    choices: [
      "Cascading Style Sheet",
      "Cool School Studies",
      "Carl Sucks Severely",
      "This is correct"
    ],
    answer: "Cascading Style Sheet"
  },
  {
    title: "What's Brian's favorite color?",
    choices: ["Salmon", "Generic Purple", "Thistle", "Rebecca Purple"],
    answer: "Rebecca Purple"
  }
];
let counter = 1;
start.addEventListener("click", startQuiz);


// start quiz
function startQuiz() {
  start.style.display = "none";
  // renderQuestion();
  quiz.style.display = "block";
  // renderProgress();
  // renderCounter();
  // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
  displayQuestion(0);
  
}

function startTimer() {


  const clockEl = document.getElementById("clock");
  let savedValue = localStorage.getItem("time");
  let time = 75;
  
  let myInterval = null;

    if (myInterval) {
      clearInterval(myInterval);
      myInterval = null;
    }
    myInterval = setInterval(function() {
      time = time - 1;

      let hours = Math.floor(time / 60 / 60);
      let minutes = Math.floor(time / 60) % 60;
      let seconds = time % 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      clockEl.innerHTML = hours + ":" + minutes + ":" + seconds;

      if (time <= 0) {
        clearInterval(myInterval);
      }
    }, 1000);
  }
  startTimer();


//Received help from William on these functions

function displayQuestion(x) {
  const questionSentence = document.getElementById("question");

  const choiceA = document.getElementById("A");
  const choiceB = document.getElementById("B");
  const choiceC = document.getElementById("C");
  const choiceD = document.getElementById("D");

  const choiceYoMomma = [choiceA, choiceB, choiceC, choiceD];

  questionSentence.innerHTML = Object.values(questions[x]["title"]).join("");

  for (i = 0; i < choiceYoMomma.length; i++) {
    choiceYoMomma[i].innerHTML = Object.values(questions[x]["choices"][i]).join(
      ""
    );
  }
}




function checkAnswer() {
    displayQuestion(counter);
    counter++;
}

// function keepScore(){

//    const  

// }