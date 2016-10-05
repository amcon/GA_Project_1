$(function(){

function run() {
// Create variables for objects I want to manipulate
var screen = $('body');
var player = $('#player');

// Use parseInt to get values to be more consistent
var screen_width = parseInt(screen.width());
var speed = 20;

// Function for my runner moving left to right in my screen
    setInterval(function() {
    var playerRight = parseInt(player.css('left'));
    if (playerRight > (screen_width - 20)) {
      playerRight();
      }
// Make the player's position move from left to right at the set speed
    player.css('left', playerRight + speed);

  }, 40);
}

function collide() {
      var player = $('#player');
      var wall = $()
}

$(document).ready(function(){
  run();
})

})


// $(function(){

//     function moveLeftRight() {

//       var player = $('#player');

//       var playerCurrent = player.animate({left: '1219px'}, 4000);

//     }

//     $(document).ready(function(){
//     moveLeftRight();
// })

// })
