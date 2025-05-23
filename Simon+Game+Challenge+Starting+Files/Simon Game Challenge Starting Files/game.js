
var buttoncolors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function(){
  if(!started)
  {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

})

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
  {
    console.log('Success');
    if(userClickedPattern.length === gamePattern.length)
    {
      setTimeout(function(){
        nextsequence();
      },1000);
    }

  } else {

    console.log("wrong");
    playSound(wrong);
    $('body').addClass('game-over');
    
    setTimeout(function(){
      $('body').removeClass('game-over');
    },200);
    $('#level-title').text("Game Over, Press Any Key to Restart");
    startOver()

  }

  
}


function nextsequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);

    var randomvariable = Math.floor(Math.random() *4);
    var randomChosenColour = buttoncolors[randomvariable];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    

}
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})

function playSound(name){
    var audio = new Audio("sounds/" +name + ".mp3");
    audio.play();
}
 
function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+ currentColour).removeClass("pressed");
  },100);

}
function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}





