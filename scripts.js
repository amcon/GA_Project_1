$(function(){

// create variables in global scope


var $player = $(".player");
var $screen = $("body");
var $container1 = $(".container1");
var $header = $("header");

var $floorLong = $(".floorLong");
var $floor = $(".floor");
var $hole = $(".hole");
var $pillar1 = $(".pillar1Long");
var $pillar2 = $(".pillar2");
var $pillar3 = $(".pillar3");
var $dangerZone = $(".dangerZone");

var xAxis = 2;
var yAxis = 5;

var $wall = $(".wall");



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



          switch (moving) {
                case ( xPosition > (screenWidth - playerWidth)): {
                  xAxis = 0;
                  yAxis = 0;
                  console.log ("You WON!");
                  clearInterval(intMove);

                } break;

                case ( 0 < xPosition <= (screenWidth - playerWidth)): {
                  xAxis = 2;
                  yAxis = 5;

// LONG FLOOR
                      if ( yPosition >= container1Height - (floorLongHeight + playerHeight) ) {
                      yAxis = 0;
                      }

// HOLE
                      if ( xPosition > floorLongWidth ) {
                        yAxis = 5;
                             if (yPosition >= container1Height - (holeHeight + playerHeight)) {
                              yAxis = 0;
                              console.log("You Lose!");
                              clearInterval(intMove);
                              }
                      }
// LONG FLOOR
                      if (xPosition > floorLongWidth + holeWidth) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (floorLongHeight + playerHeight)) {
                              yAxis = 0;
                            }
                      }
// PILLAR
                      if (xPosition > floorLongWidth + holeWidth + floorLongWidth) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (pillar1Height + playerHeight)) {
                              yAxis = 0;
                            }
                      }
// HOLE
                      if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (holeHeight + playerHeight)) {
                              yAxis = 0;
                              console.log("You Lose!");
                              clearInterval(intMove);
                            }
                      }
// PILLAR
                      if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (pillar1Height + playerHeight)) {
                              yAxis = 0;
                            }
                      }
// FLOOR
                      if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth + pillar1Width) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (floorHeight + playerHeight)) {
                              yAxis = 0;
                            }
                      }
// HOLE
                      if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth + pillar1Width + floorWidth) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (holeHeight + playerHeight)) {
                              yAxis = 0;
                              console.log("You Lose!");
                              clearInterval(intMove);
                            }
                      }
// FLOOR
                       if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth + pillar1Width + floorWidth
                        + holeWidth) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (floorHeight + playerHeight)) {
                              yAxis = 0;
                            }
                      }
// PILLAR
                        if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth + pillar1Width + floorWidth
                          + holeWidth + floorWidth) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (pillar1Height + playerHeight)) {
                              yAxis = 0;
                            }
                      }
// PILLAR 2
                       if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth + pillar1Width + floorWidth
                        + holeWidth + floorWidth + pillar1Width) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (pillar2Height + playerHeight)) {
                              yAxis = 0;
                            }
                      }
// PILLAR 3
                         if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth + pillar1Width + floorWidth
                        + holeWidth + floorWidth + pillar1Width + pillar2Width) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (pillar3Height + playerHeight)) {
                              yAxis = 0;
                            }
                      }
// HOLE X2
                        if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth + pillar1Width + floorWidth
                        + holeWidth + floorWidth + pillar1Width + pillar2Width + pillar3Wdith) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (holeHeight + playerHeight)) {
                              yAxis = 0;
                              console.log("You Lose!");
                              clearInterval(intMove);
                              //
                            }
                      }
// DANGER ZONE
                       if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth + pillar1Width + floorWidth
                        + holeWidth + floorWidth + pillar1Width + pillar2Width + pillar3Wdith + (holeWidth * 2)) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (dangerZoneHeight + playerHeight)) {
                              yAxis = 0;
                            }
                      }
//HOLE X2
                        if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth + pillar1Width + floorWidth
                        + holeWidth + floorWidth + pillar1Width + pillar2Width + pillar3Wdith + (holeWidth * 2) + dangerZoneWidth) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (holeHeight + playerHeight)) {
                              yAxis = 0;
                              console.log("You Lose!");
                              clearInterval(intMove);
                            }
                      }
// DANGER ZONE
                         if (xPosition > floorLongWidth + holeWidth + floorLongWidth + pillar1Width + holeWidth + pillar1Width + floorWidth
                        + holeWidth + floorWidth + pillar1Width + pillar2Width + pillar3Wdith + (holeWidth * 4) + dangerZoneWidth) {
                        yAxis = 5;
                            if (yPosition >= container1Height - (dangerZoneHeight + playerHeight)) {
                              yAxis = 0;
                            }
                      }

                } break;

                // case ( xPosition > (floorWidth - playerWidth) ): {
                //   yAxis = 1;
                // } break;
          };

              var pxValue = xPosition + xAxis + "px";
              $player.css("left", pxValue);
      //  console.log(xPosition);

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
          // alert("YOU LOSE!");

          // clearInterval(intMove);
          //     }
          // }

//----------------------------------------------------------------------//


// create an alert/button/header that has a link to reload the page when the player loses

          // function reload(){

          // }


//----------------------------------------------------------------------//

//create a click event to reload the page when the reload button appears

          // function reloadPage(){

          // }

//----------------------------------------------------------------------//

//  create a funtion that jumps when you hit the spacebar

          function jump(){
                  $player.animate({top: 260}, 200);
                  // $player.css("margin-top", "-40px");
                      };



//----------------------------------------------------------------------//

//  create a function for when the player hits the winZone that alerts that he won/reloads the page.

          // function homeSafe(){

            //if (you touch winZone){
            //   alert("YOU WIN!")
            // }


          // }

//----------------------------------------------------------------------//



// Call Functions:

var intMove = setInterval(function() {
    moveAndFall();
    }, 85);

// var intId = setInterval(function() {
//     hitWall();
//     }, 40);

$(document).keydown(function(e){
    switch (e.which) {
    case 38: // up
        jump();
        break;
    }
   })

// var intFall = setInterval(function(){
//   floorDivs();
// }, 15);




})
