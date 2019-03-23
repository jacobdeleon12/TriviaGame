//varables
var correct = 0;
var incorrect = 0;
var correctCounter = 0;
var userAnswers = [];
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
    }
  ];

  var help = "help"

  console.log(myQuestions[0]);

function newGame() {


    gameRunning = true;
    // console.log(gameRunning);

    // clearing the dom
    $(".questions").empty();

    //pushing question to dom
    


    $("#domQuestions").html(myQuestions[0].question);
    // + myQuestions[1].answers
    
    // $("#domAnswers").html("type", raido);
    for (i = 0; i < 4; i++) {
      $('#domAnswers').append('<input type="radio" name="radio_name" />');
      $("#domAnswers").append(myQuestions[0].answers[i])
  }
    console.log(myQuestions[0].question);
    
    


    
}

$("#startGame").on("click", function(){
newGame();
})
//push questions to dom

//create radio buttons

//create timer

//check answers
// if (condition) {
    
// }

//clear dom and display correct and incorrect counter

//