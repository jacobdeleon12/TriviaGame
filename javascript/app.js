//varables
var correct = 0;
var incorrect = 0;
var nonAnswer = 0;

var myQuestions = [
  {
    question: "Who does the opening monologue for every 'Twilight Zone' episode?",
    answers: [
      "Orson Welles",
      "Earl Hamner Jr.",
      "Rod Serling",
      "Jack Palance"
    ],
    correctAnswer: "Rod Serling"
  },

  {
    question: "Which of the following episodes has NOT been redone by 'The Simpsons'?",
    answers: [
      "Nightmare at 20,000 Feet",
      "A Game of Pool",
      "It's A Good Life",
      "Little Girl Lost"
    ],
    correctAnswer: "A Game of Pool"
  },

  {
    question: "How many seasons did the ORIGINAL 'Twilight Zone' air?",
    answers: [
      "4",
      "7",
      "5",
      "2"
    ],
    correctAnswer: "A Game of Pool"
  },

  {
    question: "In 'The Hitch-Hiker', who is the hitch-hiker?",
    answers: [
      "Life",
      "Death",
      "Happiness",
      "Just Some Bum"
    ],
    correctAnswer: "Death"
  },

  {
    question: "Which of these is NOT an hour long episode?",
    answers: [
      "Miniature",
      "A Passage for Trumpet",
      " The New Exhibit",
      "On Thursday We Leave For Home"
    ],
    correctAnswer: "A Passage for Trumpet"
  },
];

var text = "";
var timer;
var timeInSeconds = 120;
var j = 0;

function newGame() {

  timeInSeconds = 120;
  correct = 0;
  incorrect = 0;
  nonAnswer = 0;



  //setting timer text to 120 so when the page loads it dosnt look weird
  $('#timer').text("Time left 120 ");
  //timer function
  timer = setInterval(function () {
    countDown();
  }, 1000);

  var val = 0;
  //loop for questions
  for (j = 0; j < myQuestions.length; j++) {

    $("#domAnswers").append("<div id='aWrapper'></div>");

    $("#aWrapper").append(myQuestions[j].question);
    $('#aWrapper').append('<br/>');




    //loop for answers
    for (i = 0; i < 4; i++) {
      //create radio buttons
      $('#aWrapper').append('<div class="btn"><input type="radio", name="' + val + '", class = "radio"  />' + myQuestions[j].answers[i] + '</div>');
      $('#aWrapper').append('<br/>');

    }
    val++;


  }
  //on click function
  $(".btn").on("click", function () {
    text = $(this).text();
    console.log(text);


  })

  //add finish button
  $('#finsh').append("<button id='finshBtn'>Finish</button>");



}

//create timer
function countDown() {
  timeInSeconds--;
  $('#timer').text("Time left " + timeInSeconds);

  if (timeInSeconds === 0) {
    checkAnswers();
    $('#timer').text("Times Up");
    $('#domAnswers').text("");
    $("#domQuestions").text("");
    $("#finshBtn").remove();
    $('#domIncorrect').append('<br/>');
    $("#domIncorrect").append("<button id='startGame2'>Start New Game</button>");

  }
};

//click for new game
$(document).on("click", "#startGame", function () {
  //remove game button
  $("#startGame").remove();
  //call new game function
  newGame();
});


//click for finish btn
$(document).on("click", "#finshBtn", function () {
  //checking all slected answers
  checkAnswers();
  //removing all content from the dom, 
  $('#timer').text("");
  $('#domAnswers').text("");
  $("#domQuestions").text("");
  $("#finshBtn").remove();
  //adding newgame btn
  $('#domIncorrect').append('<br/>');
  $('#domNonAnswer').append('<br/>');

  $("#domNonAnswer").append("<button id='startGame2'>Start New Game</button>");
});


//click for new game btn after first game
$(document).on("click", "#startGame2", function () {

  newGame();
  $("#startGame").remove();
  $("#domCorrect").text("");
  $("#domIncorrect").text("");
  $("#domNonAnswer").text("");


});


//check answers
function checkAnswers() {

  clearInterval(timer);


  for (var i = 0; i < myQuestions.length; i++) {



    // not working after finding first answer

    if (text === myQuestions[i].correctAnswer && text != "") {
      // || myQuestions[1].correctAnswer

      correct++;

      console.log(myQuestions[i]);



    }

    else if (text != myQuestions[i].correctAnswer && text != "") {
      // || myQuestions[1].answers

      incorrect++

      console.log(myQuestions[i]);


    }
    else {
      //not working

      nonAnswer++;


      //questions you didnt answer
      console.log(myQuestions[i]);

    }
  }
  $("#domCorrect").html(("You answered: " + correct + " Correct!"));
  $("#domIncorrect").html("You answered: " + incorrect + " Incorrect!");
  $("#domNonAnswer").html("You didnt answer: " + nonAnswer);

}

