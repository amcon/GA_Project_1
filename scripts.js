$(function(){

var $player = $("#player");
var $screen = $("#screen");
var xAxis = 5;

//create a function for the player to move left and right when page loads and changes direction based on the screen width

function movePlayer(){

  var xPosition = parseInt($player.css("left"));

   if (xPosition > 1214 || xPosition < 12){
   xAxis = -xAxis;
  }

  pxValue = xPosition + xAxis + "px";
  $player.css("left", pxValue);
  console.log(xPosition);

}

//create a function that ends the game when the player hits certain divs


setInterval(function() {
 movePlayer();
 }, 40);

})
