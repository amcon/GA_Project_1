/*Hey designers,

I've created a simple runner game. Your character is always moving, but he will fall into holes if you dont make him jump with the up-button. 
You should also die if you run into any wall. If you're able to make it through the course, then you win! It would take you to a new page with a 
more complex level. 

I used wireframe.cc to make an initial concept for the map. The game concept is that each div in the map has its own properties for where the floor is.
Some floor is ok to touch, and some is not. So, I built the map using divs that have specific height and width properties. 

Inside the index.html, I have a header for the logo, a div container for the game, and a footer for the form value. Inside the container lives the
game structure in divs. 

The CSS is extensive. I initially had three separate game containers, but with time brought it back to one. There are many elements that
once existed in the game, but no longer do. I utilized flex-box to acheive the div positions. I also utilized images/gifs to make the game look
like a pokemon styled game. There are a few elements utilizing the z-axis in my game: runner, lose pop-up, and win pop-up. They need to exist on 
page on top of the map--so that the game layout is not effected.

The javascrip utilizes Jquery. I use Jquery to point at my elements more efficiently. The functionality is mainly in how the runnner moves on the 
x and y-axis. He is always moving right or down. If he hits the floor of a specific div, he stops falling or dies. When he hits the floor, he is allowed
to jump once, and then continues to fall. I also have a seperate jump function using animate that has a variable for each div container-width he is 
inside of. Then I have different screens pop up to alert if you've won or lost. The won screen gives you a pokemon prize. These pop forward by 
changing the z-index to 1. Lastly, there are event listeners for the up-button (jump) and the click to reload the page/redirect etc. My form should 
display on the second page, but I can't seem to actually target that value. (sigh).

I still need to make collision for the walls, make the form submission work, and that's about it. It would be nice to continue to make new levels, 
have a way to track which pokemon you've won, etc. */
 
