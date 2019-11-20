// // select all elements
 const start = document.getElementById("start");


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


let score = 0;
let counter = 0;
let time = 75;
start.addEventListener("click", startQuiz);


// start quiz
function startQuiz() {
  start.style.display = "none";

  quiz.style.display = "block";

  displayQuestion(0);
  
}

//Function taken and modified from class activity

function startTimer() {


  const clockEl = document.getElementById("clock");
  let savedValue = localStorage.getItem("time");
  
  
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

//use this line for the scoreboard, make sure it updates when a change is made to the score

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


//get the value of the users choice and then compare that value with the value of the answer

//we need to get that i to be a new variable, and make it equal something different

//we want to see the object.value in the if statement within the conditional part of it


//can check answers here


function checkAnswer(E) {

  const scoreDisplay = document.getElementById("scoreNumber");

    displayQuestion(counter);

    console.log(Object.values(questions[counter]["choices"][E]).join(""))


    if(Object.values(questions[counter]["choices"][E]).join("") === Object.values(questions[counter]["answer"]).join("")){


counter++;

displayQuestion(counter);

score++;

scoreDisplay.innerHTML = "Score: " + score;

alert("Correct!")

    } else{

alert("Wrong!")

time = time -10;

    }

}
