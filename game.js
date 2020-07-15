var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);

    nextSequence();
    started = true;
  }
});

//recupere la class btn

$(".btn").click(function () {
  //On stock id du bouton qui vient d'etre cliquer dans userChosenColor
  var userChosenColor = $(this).attr("id");
  //on clique rajoute les bouton cliquer dans le tableau userClickedPattern
  userClickedPattern.push(userChosenColor);
  //play sound quand le bouton est cliquer
  playSound(userChosenColor);
  animatePress(userChosenColor);
  //Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user 's sequence.
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {

  //if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {


    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {

    playSound("wrong");


    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Appuie sur une touche pour recommencer");
    //here is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}


function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("level " + level);

  //selectionne une chiffre entre 0 et 3
  var randomNumber = Math.floor(Math.random() * 4);

  //selectionne un bouton au hasard dans le tableau de couleur boutonColor
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);


}

function playSound(name) {
  //play sound quand la couleur est la meme que le son
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
//ajouter la class pressed du css lorsqun bouton est cliquer
function animatePress(currentColor) {
  //recupéré la class au couleur associé et y ajouter la class pressed

  $("#" + currentColor).addClass("pressed");
  //ajouter un delai pour retiré le pressed style
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}