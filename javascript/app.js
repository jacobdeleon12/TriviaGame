//varables
var correct = 0;
var incorrect = 0;
var nonAnswer = 0;
var gameRunning = false;
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
    }
  ];

  var text = "";
var timer;
var timeInSeconds = 120;

function newGame() {

    timeInSeconds = 120;
    correct = 0;
    incorrect = 0;
    nonAnswer = 0;


    gameRunning = true;

    $('#timer').text("Time left 120 ");

    timer = setInterval(function(){
      countDown();
    },1000);

    for (var j = 0; j < myQuestions.length; j++) {
      console.log(myQuestions.length);
      
    $("#domAnswers").append(myQuestions[j].question);
    $('#domAnswers').append('<br/>'); 

    // + myQuestions[1].answers
    
    
    //push questions to dom
    for (i = 0; i < 4; i++) {
      //create radio buttons
      $('#domAnswers').append('<div class="btn"><input type="radio", name="radio_name", class = "radio"  />' + myQuestions[j].answers[i] + '</div>'); 
      
      $('#domAnswers').append('<br/>'); 
    
    }

    }
    $(".btn").on("click", function(){
       text = $(this).text();
      console.log(text);
      
      
      })
    
    
    $('#finsh').append("<button id='finshBtn'>Finish</button>");


    
}

//create timer
function countDown(){
timeInSeconds --;
$('#timer').text("Time left " + timeInSeconds);

if (timeInSeconds === 0 ) {
  checkAnswers()
  $('#timer').text("Times Up");
  $('#domAnswers').text("");
  $("#domQuestions").text("");
  $("#finshBtn").remove();
  $('#domIncorrect').append('<br/>'); 
  $("#domIncorrect").append("<button id='startGame2'>Start New Game</button>");

}
};


$(document).on("click", "#startGame", function() {
 //remove game button
$("#startGame").remove();
//call new game function
newGame();
  });


  
  $(document).on("click", "#finshBtn", function() {
    //checking all slected answers
    checkAnswers();
    //removing all content from the dom, 
    $('#timer').text("");
    $('#domAnswers').text("");
    $("#domQuestions").text("");
    $("#finshBtn").remove();
    //adding newgame btn
    $('#domIncorrect').append('<br/>'); 
    $("#domIncorrect").append("<button id='startGame2'>Start New Game</button>");
  });
  
  $(document).on("click", "#startGame2", function() {
  
      
    newGame();
    $("#startGame").remove();
    $("#domCorrect").text("");
    $("#domIncorrect").text("");
  
  });



  // $("#startGame").on("click", function(){
  // //remove game button
  // $("#startGame").remove();
  // //call new game function
  // newGame();

  // $("#finshBtn").on("click" , function(){
    //   //checking all slected answers
//   checkAnswers();
//   //removing all content from the dom, 
//   $('#domAnswers').text("");
//   $("#domQuestions").text("");
//   $("#finshBtn").remove();
//   //adding newgame btn
//   $('#domIncorrect').append('<br/>'); 
//   $("#domIncorrect").append("<button id='startGame2'>Start New Game</button>");
  
  


//   $("#startGame2").on("click", function(){
//     newGame();
//     $("#startGame").remove();
//     $("#domCorrect").text("");
//     $("#domIncorrect").text("");

// });
// });
// });






//check answers
function checkAnswers() {

  clearInterval(timer);

  if (text === myQuestions[0].correctAnswer) {
      gameRunning = false;
      correct++;
      
      $("#domCorrect").html(("You answered: " + correct + " correct!" ))
      
    
  }
  else if(text != myQuestions[0].answers){
    gameRunning = false;
    incorrect++
    
    $("#domIncorrect").html("You answered: " + incorrect + " incorrect!" )
    
  }
  else{
    //not working
    gameRunning = false;
    nonAnswer++;

    $("#domIncorrect").html("You answered: " + nonAnswer + " incorrect!" )
    //questions you didnt answer
  }
}

//clear dom and display correct and incorrect counter

//