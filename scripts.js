$(function(){

// create variables in global scope

var $player = $(".player");
var $screen = $("body");
var $container1 = $(".container1");
var $container2 = $(".container2");
var $container3 = $(".container3");

var $floor = $(".floorLong");
var $hole = $(".hole");
var $pillar1 = $(".pillar1");
var $pillar2 = $(".pillar2");
var $pillar3 = $(".pillar3");

var xAxis = 2;
var yAxis = 1;

var $wall = $(".wall");

var interval = null;
var interval2 = null;
var counter = 0
var falling = true;

//----------------------------------------------------------------------//

//  create a function for the player to move left and right when page loads and changes direction based on the screen width

          function movePlayer(){

          var xPosition = parseInt($player.css("left"));
          var screenWidth = parseInt($screen.width());

          if (xPosition > (screenWidth - 20) || xPosition < (screenWidth - screenWidth)){
          xAxis = -xAxis;
          }

          var pxValue = xPosition + xAxis + "px";
          $player.css("left", pxValue);
      //  console.log(xPosition);

          }
//------------------------------------------------------------------------//

//  create a function for the player to always be falling -- unless he is hitting the y-axis of a div top

         function fall(){

              var xPosition = parseInt($player.css("left"));
              var yPosition = parseInt($player.css("top"));

              var container1Height = parseInt($container1.height());
              var floorHeight = parseInt($floor.height());
              var floorWidth = parseInt($floor.width());
              var holeHeight = parseInt($hole.height());
              var holeWidth = parseInt($hole.width());
              var pillar1Height = parseInt($pillar1.height());
              var pillar1Width = parseInt($pillar1.width());


              // if he falls into a div floor top, quit the fall funtion, but move forward
              // else, keep falling
              if (xPosition >= (floorWidth - 20)) {
                    var falling = true;
                    if (yPosition >= 125) {
                          // clearInterval(intFall);
                          yAxis = 0;
                          var falling = false;
                          }
                    }

               // if he falls into a hole top, you lose
               // if (xPosition >= holeWidth) {
               //      if (yPosition >= container1Height - holeHeight);
               //      clearInterval(intFall);
               //      clearInterval(inMove);
               //      alert("You LOSE!");
               // }

              //else if (yPosition < container1Height - floorHeight) - 25) && (yPosition < ((container1Height - pillar1Height) - 25)) {
              //   setInterval(intFall);
              // }

              var pxValue = yPosition + yAxis + "px";
              $player.css("top", pxValue);
              console.log(yPosition);
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
          // clearInterval(intId);
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
                  $player.animate({top: 80}, 400);
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
    movePlayer();
    }, 15);

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

var intFall = setInterval(function(){
  fall();
}, 25);



})
