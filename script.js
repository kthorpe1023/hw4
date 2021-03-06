// VARIABLES
var score = 0;
var timer = 60;
var startTime;
var displayTimer = document.querySelector("#timer");
var presentScore = document.getElementById("score");
var finalScore = document.getElementById("display-score");
var startBtn = document.querySelector("#startBtn");
var question2 = document.querySelector("#question-two");
var question = document.querySelector("#questionOne");
var question3 = document.querySelector("#question-three");
var question4 = document.querySelector("#question-four");
var final = document.querySelector("#final-screen");
var submitBtn = document.querySelector("#submit");
var initials = document.querySelector("#enter-initials");
var tryAgainBtn = document.querySelector("#try-again");



//  FUNCTIONS
function changeScreen() {
  var start = document.getElementById("start");
    if (start.style.display === "none") {
        start.style.display = "block";
      } else {
        start.style.display = "none";
        
      }
      question.classList.remove("hide");
      startQuizTimer();
      questionOne();
}
function startQuizTimer(){
  startTimer = setInterval(function(){
    timer--;
    displayTimer.textContent = timer;
    if(timer == 0){
      clearInterval(startTimer); 
      alert("You ran out of time!");
      start.classList.add("hide");
      question.classList.add("hide");
      question2.classList.add("hide");
      question3.classList.add("hide");
      question4.classList.add("hide");
      finalScreenwrong();
    }
    
  }, 1000);
}
 
  
  


function questionOne() {
  var answerBtnEl1 = document.querySelector("#answerBtnEl1");
  var answerBtnEl2 = document.querySelector("#answerBtnEl2");
  var answerBtnEl3 = document.querySelector("#answerBtnEl3");
  var answerBtnEl4 = document.querySelector("#answerBtnEl4");
  answerBtnEl1.addEventListener("click", questionTwowrong);
  answerBtnEl2.addEventListener("click", questionTwowrong);
  answerBtnEl3.addEventListener("click", questionTwo);
  answerBtnEl4.addEventListener("click", questionTwowrong);
}
    

function questionTwo() {
  score++;
  question.classList.add("hide");
  question2.classList.remove("hide");
  var ansBtn1 = document.querySelector("#ans2Btn1");
  var ansBtn2 = document.querySelector("#ans2Btn2");
  var ansBtn3 = document.querySelector("#ans2Btn3");
  ansBtn1.addEventListener("click", questionThreewrong);
  ansBtn2.addEventListener("click", questionThreewrong);
  ansBtn3.addEventListener("click", questionThree);
  presentScore.textContent = score;

}

function questionTwowrong() {
  timer -= 5;
  question.classList.add("hide");
  question2.classList.remove("hide");
  var ansBtn1 = document.querySelector("#ans2Btn1");
  var ansBtn2 = document.querySelector("#ans2Btn2");
  var ansBtn3 = document.querySelector("#ans2Btn3");
  ansBtn1.addEventListener("click", questionThreewrong);
  ansBtn2.addEventListener("click", questionThreewrong);
  ansBtn3.addEventListener("click", questionThree);
}


function questionThree(){
  score++;
  question2.classList.add("hide");
  question3.classList.remove("hide");
  var ans3Btn1 = document.querySelector("#ans3Btn1");
  var ans3Btn2 = document.querySelector("#ans3Btn2");
  var ans3Btn3 = document.querySelector("#ans3Btn3");
  var ans3Btn4 = document.querySelector("#ans3Btn4");
  ans3Btn1.addEventListener("click", questionFourwrong);
  ans3Btn2.addEventListener("click", questionFour);
  ans3Btn3.addEventListener("click", questionFourwrong);
  ans3Btn4.addEventListener("click", questionFourwrong);
  presentScore.textContent = score;
}
function questionThreewrong(){
  timer -= 5;
  question2.classList.add("hide");
  question3.classList.remove("hide");
  var ans3Btn1 = document.querySelector("#ans3Btn1");
  var ans3Btn2 = document.querySelector("#ans3Btn2");
  var ans3Btn3 = document.querySelector("#ans3Btn3");
  var ans3Btn4 = document.querySelector("#ans3Btn4");
  ans3Btn1.addEventListener("click", questionFourwrong);
  ans3Btn2.addEventListener("click", questionFour);
  ans3Btn3.addEventListener("click", questionFourwrong);
  ans3Btn4.addEventListener("click", questionFourwrong);
}

function questionFour(){
  score++;
  question3.classList.add("hide");
  question4.classList.remove("hide");
  var ans4Btn1 = document.querySelector("#ans4Btn1");
  var ans4Btn2 = document.querySelector("#ans4Btn2");
  var ans4Btn3 = document.querySelector("#ans4Btn3");
  ans4Btn1.addEventListener("click", finalScreen);
  ans4Btn2.addEventListener("click", finalScreenwrong);
  ans4Btn3.addEventListener("click", finalScreenwrong);
  presentScore.textContent = score;
}
function questionFourwrong(){
  timer -= 5;
  question3.classList.add("hide");
  question4.classList.remove("hide");
  var ans4Btn1 = document.querySelector("#ans4Btn1");
  var ans4Btn2 = document.querySelector("#ans4Btn2");
  var ans4Btn3 = document.querySelector("#ans4Btn3");
  ans4Btn1.addEventListener("click", finalScreen);
  ans4Btn2.addEventListener("click", finalScreenwrong);
  ans4Btn3.addEventListener("click", finalScreenwrong);
}



function finalScreen(){
  score++;
  question4.classList.add("hide");
  final.classList.remove("hide");
  presentScore.textContent = score;
  finalScore.textContent = score;
  if(timer !== 0){
    clearInterval(startTimer);
  }
  

}
function finalScreenwrong(){
  timer -= 5;
  question4.classList.add("hide");
  final.classList.remove("hide");
  presentScore.textContent = score;
  finalScore.textContent = score;
  if(timer !== 0){
    clearInterval(startTimer);
  }
}
// create object to store user score, initials, and remaining time


//add function to add score and initials to local storage
function submitScore(){
  var savedScores = localStorage.getItem("myScore");
  var scores = [];
  var pushOldScores = JSON.parse(savedScores);
  scores.push(pushOldScores);
  
  // console.log(savedScores);
  // console.log(typeof scores);
  var userInitials = initials.value;
  var myScore = {
      score: score,
      initials: userInitials,
      timeLeft: timer
  }
   
    scores.push(myScore);
  // localStorage.setItem("timer", "score", "userInitials");

  var myJSON = JSON.stringify(scores);
  localStorage.setItem("myScore", myJSON);
  final.classList.add("hide");
  // displayScores.classList.remove("hide");
  // showScore.textContent = myScore;

}

//add event listener to submit initials
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  submitScore()
});

tryAgainBtn.addEventListener("click", submitScore);




// Add event listener to begin
startBtn.addEventListener("click", changeScreen);
