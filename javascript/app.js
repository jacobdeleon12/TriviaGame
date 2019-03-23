//varables
var correct = 0;
var incorrect = 0;
var correctCounter = 0;
var userAnswers = [];
var gameRunning = false;
var myQuestions = [
    {
      question: "Who does the opening monologue for every 'Twilight Zone' episode?",
      answers: {
        a: "Orson Welles",
        b: "Earl Hamner Jr.",
        c: "Rod Serling",
        d: "Jack Palance"
      },
      correctAnswer: "c"
    }
  ];

  var help = "help"

  console.log(myQuestions[0]);

function newGame() {


    gameRunning = true;
    // console.log(gameRunning);

    // clearing the dom
    // $(".questions").empty();

    //pushing question to dom
    


    $("#domQuestions").html(myQuestions.question);
    console.log(help);
    
    


    
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