$(function(){

function run() {
// Create variables for objects I want to manipulate
var screen = $('.screen');
var player = $('#player');

// Use parseInt to get values to be more consistent
var screen_width = parseInt(screen.width());
var playerStart = parseInt(player.css('left'));
var speed = 5;

// Function for my runner moving left to right in my screen
    setInterval(function() {
    var playerNow = parseInt(player.css('left'));
    if (playerNow >= screen_width) {
      playerNow = playerStart.css('right', playerNow + speed);
      }
// Make the player's position move from left to right at the set speed
    player.css('left', playerNow + speed);
  }, 40);
};

$(document).ready(function(){
  run();
})

})
