//Question rendering found here. Credit given to Code Explained on Youtube: https://www.youtube.com/watch?v=49pYIMygIcU

// let lastQuestionIndex = questions.length - 1;

// let runningQuestionIndex = 0;

// function renderQuestion

// // select all elements

// const start = document.getElementById("start");
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
    title: "Who is the best CoHort student?",
    choices: ["Elliot", "Elliot", "Elliot", "Elliot"],
    answer: "Elliot"
  }
];

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  start.style.display = "none";
  // renderQuestion();
  quiz.style.display = "block";
  // renderProgress();
  // renderCounter();
  // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
  runGame();
}

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
    choiceYoMomma[i].innerHTML = Object.values(questions[x]["choices"][i]).join("");
  }
}


function runGame(){

    let isCorrect = false;

    for (p = 0; p < questions.length; p++){

        displayQuestion(p);

    }

}

// // create some variables

// const lastQuestion = questions.length - 1;
// let runningQuestion = 0;
// let count = 0;
// const questionTime = 10; // 10s
// const gaugeWidth = 150; // 150px
// const gaugeUnit = gaugeWidth / questionTime;
// let TIMER;
// let score = 0;

// // render a question
// function renderQuestion(){
//     let q = questions[runningQuestion];

//     question.innerHTML = "<p>"+ q.question +"</p>";
//     qImg.innerHTML = "<img src="+ q.imgSrc +">";
//     choiceA.innerHTML = q.choiceA;
//     choiceB.innerHTML = q.choiceB;
//     choiceC.innerHTML = q.choiceC;
// }



// // render progress
// function renderProgress(){
//     for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
//         progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//     }
// }

// // counter render

// function renderCounter(){
//     if(count <= questionTime){
//         counter.innerHTML = count;
//         timeGauge.style.width = count * gaugeUnit + "px";
//         count++
//     }else{
//         count = 0;
//         // change progress color to red
//         answerIsWrong();
//         if(runningQuestion < lastQuestion){
//             runningQuestion++;
//             renderQuestion();
//         }else{
//             // end the quiz and show the score
//             clearInterval(TIMER);
//             scoreRender();
//         }
//     }
// }

// // checkAnwer

// function checkAnswer(answer){
//     if( answer == questions[runningQuestion].correct){
//         // answer is correct
//         score++;
//         // change progress color to green
//         answerIsCorrect();
//     }else{
//         // answer is wrong
//         // change progress color to red
//         answerIsWrong();
//     }
//     count = 0;
//     if(runningQuestion < lastQuestion){
//         runningQuestion++;
//         renderQuestion();
//     }else{
//         // end the quiz and show the score
//         clearInterval(TIMER);
//         scoreRender();
//     }
// }

// // answer is correct
// function answerIsCorrect(){
//     document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
// }

// // answer is Wrong
// function answerIsWrong(){
//     document.getElementById(runningQuestion).style.backgroundColor = "#f00";
// }

// // score render
// function scoreRender(){
//     scoreDiv.style.display = "block";

//     // calculate the amount of question percent answered by the user
//     const scorePerCent = Math.round(100 * score/questions.length);

//     // choose the image based on the scorePerCent
//     let img = (scorePerCent >= 80) ? "img/5.png" :
//               (scorePerCent >= 60) ? "img/4.png" :
//               (scorePerCent >= 40) ? "img/3.png" :
//               (scorePerCent >= 20) ? "img/2.png" :
//               "img/1.png";

//     scoreDiv.innerHTML = "<img src="+ img +">";
//     scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
// }
