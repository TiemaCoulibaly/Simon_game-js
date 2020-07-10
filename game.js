var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];





function nextSequence() {

  //selectionne une chiffre entre 0 et 3
  var randomNumber = Math.floor(Math.random() * 4);

  //selectionne un bouton au hasard dans le tableau de couleur boutonColor
  var randomChosenColor = buttonColors[randomNumber];


  gamePattern.push(randomChosenColor);


  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);


  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();

  $(".btn").click(function (e) {


  });






}
nextSequence();