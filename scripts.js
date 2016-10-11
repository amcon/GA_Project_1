$(function(){

// create variables in global scope


var $player = $(".player");
var $screen = $("body");
var $container1 = $(".container1");
var $header = $("header");
var $restart = $(".lose");
var $youWin = $(".win");

var $homeStart = $(".one");
var $homeInstructions = $(".instructions");

var $floorLong = $(".floorLong");
var $floor = $(".floor");
var $hole = $(".hole");
var $pillar1 = $(".pillar1Long");
var $pillar2 = $(".pillar2");
var $pillar3 = $(".pillar3");
var $dangerZone = $(".dangerZone");

var $floorWall = $(".floorWall");
var $pillar1Wall = $(".pillar1Wall");
var $pillar2Wall = $(".pillar2Wall");
var $pillar3Wall = $(".pillar3Wall");

var xAxis = 2;
var yAxis = 5;
var x = NaN;

var $wall = $(".wall");

var $data = window.location.search.substring(1);
var $username = $data.split('=');
// var $formData =

//----------------------------------------------------------------------//

//  create a function for the player to move left and right when page loads and changes direction based on the screen width

          function moveAndFall(){

          var xPosition = parseInt($player.css("left"));
          var yPosition = parseInt($player.css("top"));

          var screenWidth = parseInt($screen.width());
          var playerWidth = parseInt($player.width());
          var floorLongWidth = parseInt($floorLong.width());
          var floorWidth = parseInt($floor.width());
          var holeWidth = parseInt($hole.width());
          var pillar1Width = parseInt($pillar1.width());
          var pillar2Width = parseInt($pillar2.width());
          var pillar3Wdith = parseInt($pillar3.width());
          var dangerZoneWidth = parseInt($dangerZone.width());

          var floorWallWidth = parseInt($floorWall.width());
          var pillar1WallWidth = parseInt($pillar1Wall.width());
          var pillar2WallWidth = parseInt($pillar2Wall.width());
          var pillar3WallWidth = parseInt($pillar3Wall.width());

          var container1Height = parseInt($container1.height() + $header.height());
          var playerHeight = parseInt($player.height());
          var floorLongHeight = parseInt($floorLong.height());
          var floorHeight = parseInt($floor.height());
          var holeHeight = parseInt($hole.height());
          var pillar1Height = parseInt($pillar1.height());
          var pillar2Height = parseInt($pillar2.height());
          var pillar3Height = parseInt($pillar3.height());
          var dangerZoneHeight = parseInt($dangerZone.height());

          var moving = true;
          var jump = false;




          switch (moving) {
                case ( xPosition > (screenWidth - playerWidth)): {
                  xAxis = 0;
                  yAxis = 0;
                  $youWin.css('z-index', '1');
                  clearInterval(intMove);

                } break;

                case ( 0 < xPosition <= (screenWidth - playerWidth)): {
                  xAxis = 2;
                  yAxis = 5;

// LONG FLOOR
                      if ( yPosition >= container1Height - (floorLongHeight + playerHeight) ) {
                      yAxis = 0;
                      x = 340;
                      }

// HOLE
                      if ( xPosition > floorLongWidth ) {
                        yAxis = 5;
                        x = NaN;
                             if (yPosition >= container1Height - (holeHeight + playerHeight)) {
                              yAxis = 0;
                              $restart.css('z-index', '1');
                              clearInterval(intMove);
                              }
                      }

                      // if ((floorLongWidth + holeWidth + floorLongWallWidth) < xPosition < (floorLongWidth + holeWidth) && ))

// LONG FLOOR
                      if (xPosition > floorLongWidth + holeWidth) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (floorLongHeight + playerHeight)) {
                              yAxis = 0;
                              x = 340;
                            }
                      }
// PILLAR
                      if ( xPosition > (floorLongWidth * 2) + holeWidth ) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (pillar1Height + playerHeight)) {
                              yAxis = 0;
                              x = 320;
                            }
                      }
// HOLE
                      if (xPosition > (floorLongWidth * 2) + holeWidth + pillar1Width) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (holeHeight + playerHeight)) {
                              yAxis = 0;
                              $restart.css('z-index', '1');
                              clearInterval(intMove);
                            }
                      }
// PILLAR
                      if (xPosition > (floorLongWidth * 2) + (holeWidth * 2) + pillar1Width) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (pillar1Height + playerHeight)) {
                              yAxis = 0;
                              x = 320;
                            }
                      }
// FLOOR
                      if (xPosition > (floorLongWidth * 2) + (holeWidth * 2) + (pillar1Width * 2)) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (floorHeight + playerHeight)) {
                              yAxis = 0;
                              x = 340;
                            }
                      }
// HOLE
                      if (xPosition > (floorLongWidth * 2) + (holeWidth * 2) + (pillar1Width * 2) + floorWidth) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (holeHeight + playerHeight)) {
                              yAxis = 0;
                              $restart.css('z-index', '1');
                              clearInterval(intMove);
                            }
                      }
// FLOOR
                       if (xPosition > (floorLongWidth * 2) + (holeWidth * 3) + (pillar1Width * 2) + floorWidth) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (floorHeight + playerHeight)) {
                              yAxis = 0;
                              x = 340;
                            }
                      }
// PILLAR
                        if (xPosition > (floorLongWidth * 2) + (holeWidth * 3) + (pillar1Width * 2) + (floorWidth * 2)) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (pillar1Height + playerHeight)) {
                              yAxis = 0;
                              x = 320;
                            }
                      }
// PILLAR 2
                       if (xPosition > (floorLongWidth * 2) + (holeWidth * 3) + (pillar1Width * 3) + (floorWidth * 2)) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (pillar2Height + playerHeight)) {
                              yAxis = 0;
                              x = 300;
                            }
                      }
// PILLAR 3
                         if (xPosition > (floorLongWidth * 2) + (holeWidth * 3) + (pillar1Width * 3) + (floorWidth * 2) + pillar2Width) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (pillar3Height + playerHeight)) {
                              yAxis = 0;
                              x = 280;
                            }
                      }
// HOLE X2
                        if (xPosition > (floorLongWidth * 2) + (holeWidth * 3) + (pillar1Width * 3) + (floorWidth * 2)
                         + pillar2Width + pillar3Wdith) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (holeHeight + playerHeight)) {
                              yAxis = 0;
                              $restart.css('z-index', '1');
                              clearInterval(intMove);
                              //
                            }
                      }
// DANGER ZONE
                       if (xPosition > (floorLongWidth * 2) + (holeWidth * 5) + (pillar1Width * 3) + (floorWidth * 2)
                        + pillar2Width + pillar3Wdith) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (dangerZoneHeight + playerHeight)) {
                              yAxis = 0;
                              x = 310;
                            }
                      }
//HOLE X2
                        if (xPosition > (floorLongWidth * 2) + (holeWidth * 5) + (pillar1Width * 3) + (floorWidth * 2)
                        + pillar2Width + pillar3Wdith + dangerZoneWidth) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (holeHeight + playerHeight)) {
                              yAxis = 0;
                              $restart.css('z-index', '1');
                              clearInterval(intMove);
                            }
                      }
// DANGER ZONE
                         if (xPosition > (floorLongWidth * 2) + (holeWidth * 7) + (pillar1Width * 3) + (floorWidth * 2)
                        + pillar2Width + pillar3Wdith + dangerZoneWidth) {
                        yAxis = 5;
                        x = NaN;
                            if (yPosition >= container1Height - (dangerZoneHeight + playerHeight)) {
                              yAxis = 0;
                              x = 310;
                            }
                      }

                } break;

          };
     // function for right movement
              var pxValue = xPosition + xAxis + "px";
              $player.css("left", pxValue);

     // function for left movement
              var pxValue = yPosition + yAxis + "px";
              $player.css("top", pxValue);
              // console.log(yPosition);
              // console.log(xPosition);

          }


//----------------------------------------------------------------------//

//create a function that ends the game when the player hits certain divs (bottom of holes and sides of walls)

          // function hitWall(){

          // var xPosition = $player.offset();
          // var wallPosition = $wall.offset();

          // console.log(xPosition);
          // console.log(wallPosition);

          // if (xPosition = the height and width of the wall elements) {
          // alert("You Lose, BITCH!");

          // clearInterval(intMove);
          //     }
          // }

//----------------------------------------------------------------------//



//  create a funtion that jumps when you hit the spacebar

          function jump(){
                  $player.animate({top: x}, 200);
                      };



//----------------------------------------------------------------------//

//  create a function for when the player wins & is alerted that he won to reloads the page.

          function reloadPage(){
                  history.go(0);
          }

//----------------------------------------------------------------------//

// create a function that directs the home page to the index.html when clicked.

          function goToGame() {
                  window.location.href = "./game.html";
          }

//----------------------------------------------------------------------//

// create a function that makes the instructions pop up on the home page.

            function instructions() {
                  $homeInstructions.css('z-index', '1');
            }

            function instructionsOff() {
                  $homeInstructions.css('z-index', '-1');
            }

//----------------------------------------------------------------------//

// Call Functions:

var intMove = setInterval(function() {
    moveAndFall();
    }, 25);


$(document).keydown(function(e) {
    switch (e.which) {
    case (38): // upkey
          jump();
        break;
    }
   })

$(".lose").click(function() {
reloadPage();
});

$(".win").click(function() {
reloadPage();
});

$(".one").click(function() {
goToGame();
});

$(".submit").click(function() {
goToGame();
});

$(".three").click(function() {
  instructions();
})

$(".homeInstructions").click(function() {
  instructions();
})

$homeInstructions.click(function() {
  instructionsOff();
})

//get form data

$("#usernameBox").html("USERNAME:" + $username[1]);


})
