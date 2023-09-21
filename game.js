userClickedPattern = []
var gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"]
var level = 0
var started = false
$('.btn').on('click', function(){
    var userChosenColour = this.id
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length - 1)
    console.log(userClickedPattern)
    console.log(gamePattern)
})
function nextSequence(){
    userClickedPattern=[]
    level+=1
    $('h1').text('Level '+ level)
    var randomNumber = Math.floor(Math.random()* 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour) 
    $('#'+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

}
function playSound(name){
        var audio = new Audio("sounds/"+ name +".mp3");
        audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
$('html').on('keypress', function(){
    if (!started){
        $('h1').text('Level '+ level)
        started = true
        nextSequence()
    }

})
$('.start').on('click', function(){
    if (!started){
        $('h1').text('Level '+ level)
        started = true
        nextSequence()
    }

})
function checkAnswer(lastColor){
    if (userClickedPattern[lastColor]==gamePattern[lastColor]){
        console.log('success')
        if (userClickedPattern.length === gamePattern.length){
              setTimeout(function () {
              nextSequence();
            }, 1000);
    
    }

}
    else{
        $('body').addClass('game-over')
        setTimeout(function () {
            $('body').removeClass("game-over");
          }, 200);
        
        playSound('wrong')
        $('h1').text("Game Over, Press Any Key to Restart")
        startOver()
}}
function startOver(){
    level=0
    gamePattern=[]
    started=false
}