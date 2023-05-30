// Create code that generates the div square elements
const grid = document.querySelector(".grid");
// const div = document.querySelector("#rectangle");
const rectangle = document.getElementById('rectangle');
var degrees = 0;


// create for loop to add 214 squares into grid

for (let i = 0; i < 214; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
} 

const squares = Array.from(document.querySelectorAll(".grid div"))

// shape randomly appears from a square in row 1 and descends slowly ... eventually to fast
var interval = setInterval(function() { //stes the timer
    var div = document.getElementById("rectangle"); //selects the object
    div.style.top = div.offsetTop + 1 + "px"; //moves from top to bottom 1 pixel per second
    div.style.left = div.offsetLeft + 1 + "px"; // moves to the right 1 pixel pr second
    //attempt to iterate rotation
    degrees++
    rectangle.style.transform = 'rotate('+degrees+ '90deg)'; //rotating at 100 degrees each second also need to move and set up as key

      }, 
    1000); // sets per millisecond
   
    //and rotate ??? 

    // and bounce when hits grid
// yes my code moves but it moves outside of the grid area I need to find a way to go inside the grid
   

// create code that moves shape keyUp

// create code that moves shape keyDown

// create code that moves shape keyRight

// create code that moves shape keyLeft

// create code that rotates shape 90 degs per keystroke