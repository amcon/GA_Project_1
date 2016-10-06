$(function(){

// create variables in global scope

var $player = $("#player");
var $screen = $("#screen");
var xAxis = 5;
var yAxis = 5;

var $wall = $(".wall");

var interval = null;
var interval2 = null;


//----------------------------------------------------------------------//

//  create a function for the player to move left and right when page loads and changes direction based on the screen width

          function movePlayer(){

          var xPosition = parseInt($player.css("left"));
          var screenWidth = parseInt($screen.width())

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

              var yPosition = parseInt($player.css("top"));

              var pxValue = yPosition + yAxis + "px";
              $player.css("top", pxValue);
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
                      };


//----------------------------------------------------------------------//

//  create a function for when the player hits the winZone that alerts that he won/reloads the page.

          // function homeSafe(){

          // }

//----------------------------------------------------------------------//

// Call Functions:

var intMove = setInterval(function() {
    movePlayer();
    }, 40);

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

setInterval(function(){
  fall();
}, 40);



})
