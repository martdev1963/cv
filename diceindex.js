
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 -6

//alert(randomNumber1);
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png through dice6.png

var randomImageSource = "images/" + randomDiceImage; // folder with the images...

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2  = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var player1Sound = new Audio("success.mp3");
var player2Sound = new Audio("opponent.mp3");
var drawSound = new Audio("draw.mp3");

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🤠Player 1 Wins!!";
  player1Sound.play();
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "😀Player 2 Wins!!";
  player2Sound.play();
}
else {
  document.querySelector("h1").innerHTML = "🌞DRAW!!";
  drawSound.play();
}

function rollTheDice(){
    location.reload();
}
