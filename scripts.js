$(function(){

// create variables in global scope

class Ground

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

var xAxis = 1;
var yAxis = 1;

var $wall = $(".wall");

var interval = null;
var interval2 = null;
var counter = 0
var falling = true;

//----------------------------------------------------------------------//

//  create a function for the player to move left and right when page loads and changes direction based on the screen width

          function moveAndFall(){

          var xPosition = parseInt($player.css("left"));
          var yPosition = parseInt($player.css("top"));

          var screenWidth = parseInt($screen.width());
          var playerWidth = parseInt($player.width());
          var playerWidth = parseInt($player.width());
          var floorWidth = parseInt($floor.width());
          var holeWidth = parseInt($hole.width());
          var pillar1Width = parseInt($pillar1.width());

          var container1Height = parseInt($container1.height());
          var playerHeight = parseInt($player.height());
          var floorHeight = parseInt($floor.height());
          var holeHeight = parseInt($hole.height());
          var pillar1Height = parseInt($pillar1.height());

          var moving = true;



          switch (moving) {
                case ( xPosition > screenWidth || xPosition < (screenWidth - screenWidth) ): {
                  xAxis = -xAxis;
                } break;

                case ( 0 < xPosition <= (floorWidth + playerWidth) && 0 < yPosition <= container1Height - (floorHeight + playerHeight)): {
                  xAxis = 2;
                  yAxis = 1;
                      if ( yPosition >= container1Height - (floorHeight + playerHeight) ) {
                      yAxis = 0;
                      }
                      // if (xPosition > (floorWidth - playerWidth)) {
                      //   yAxis = 1;
                      // }
                      // if (xPosition > (floorWidth - playerWidth) + holeWidth) {
                      //   yAxis = 0;
                      // }
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
              console.log(yPosition);
              console.log(xPosition);

          }



//------------------------------------------------------------------------//

// function floorDivs () {

//           var xPosition = parseInt($player.css("left"));
//           var yPosition = parseInt($player.css("top"));

//           var screenWidth = parseInt($screen.width());
//           var playerWidth = parseInt($player.width());
//           var playerWidth = parseInt($player.width());
//           var floorWidth = parseInt($floor.width());
//           var holeWidth = parseInt($hole.width());
//           var pillar1Width = parseInt($pillar1.width());

//           var container1Height = parseInt($container1.height());
//           var playerHeight = parseInt($player.height());
//           var floorHeight = parseInt($floor.height());
//           var holeHeight = parseInt($hole.height());
//           var pillar1Height = parseInt($pillar1.height());


//                   if ( 0 < xPosition <= (floorWidth + playerWidth) && 0 < yPosition <= container1Height - (floorHeight + playerHeight) ) {
//                   xAxis = 1;
//                   yAxis = 1;
//                       if ( yPosition >= container1Height - (floorHeight + playerHeight) ) {
//                       yAxis = 0;
//                       }
//                  }

//               var pxValue = xPosition + xAxis + "px";
//               $player.css("left", pxValue);

//               var pxValue = yPosition + yAxis + "px";
//               $player.css("top", pxValue);
//               console.log(yPosition);
//               console.log(xPosition);
// }

//------------------------------------------------------------------------//

//  create a function for the player to always be falling -- unless he is hitting the y-axis of a div top


         // function fall(){

         //      var xPosition = parseInt($player.css("left"));



         //      var falling = true;


         //      // if he falls into a div floor top, quit the fall funtion, but move forward
         //      // else, keep falling
         //      switch (falling) {
         //          case (  ): {
         //                        console.log('bigger than 0, less that DIV width');
         //                        yAxis = 1;
         //                         if ()) {
         //                          yAxis = 0;
         //                        }
         //                        //  if () {
         //                        //   yAxis = 1;
         //                        // }
         //                        break;
         //                      };


         //          // case ( xPosition > (floorWidth - playerWidth) ): {
         //          //               console.log('bigger that 1st div width');
         //          //               yAxis = 1;
         //          //               // if (yPosition >= container1Height - (holeHeight + playerHeight)) {
         //          //               // yAxis = 0;
         //          //               // clearInterval(intMove);
         //          //               // clearInterval(intFall);
         //          //               // alert("You LOSE!");
         //          //               // };
         //          //               break;
         //          //             }

         //          // case 3:
         //      } // continue to write else if statements until I die...



         //  }


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
                  $player.animate({top: 70}, 200);
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

// var intFall = setInterval(function(){
//   floorDivs();
// }, 15);




})
