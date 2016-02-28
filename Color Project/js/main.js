//VARIABLES
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square")
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
			//mode buttons event listeners
		 	setupModeButtons();
   //LOGIC/ square event listeners
		  setupSquares();
	   reset();
	}

function setupModeButtons() {
	   for(var i = 0; i < modeButtons.length; i++) {
	   modeButtons[i].addEventListener("click", function() {
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
			 this.classList.add("selected");
				
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
				/*if(this.textContent === "Easy") {
				  numSquares = 3;
				} else {
					 numSquares = 6;
				}*/
				reset();
			});
	}
}
function setupSquares() {
  	for(var i = 0; i < squares.length; i++) {
						//add initial colors to squares
						squares[i].style.background = colors[i];
						//add click listeners to squares
						squares[i].addEventListener("click", function(){
										//grab color of clicked square
										var clickedColor = this.style.background;
										//compare color to pickedColor
										console.log(clickedColor, pickedColor);//check Console for matching process
										if(clickedColor === pickedColor){
														messageDisplay.textContent = "Correct!";
														resetButton.textContent = "Play Again?";
														changeColors(clickedColor);
														h1.style.background = clickedColor;
														
										} else {
														this.style.background = "#232323";
														messageDisplay.textContent = "Try again!"
										}
						});
		}	
}
function reset() {
	   //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDispay to match pickedColor
    colorDisplay.textContent = pickedColor;
				//reset for game message and PLAY AGAIN
				messageDisplay.textContent = "";
				resetButton.textContent = "New Colors";
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
					if(colors[i]) {
						    squares[i].style.display = "block";
          squares[i].style.background = colors[i];
					} else {
				     	squares[i].style.display = "none";
				}
    }
    h1.style.background = "steelblue";
	}
//EVENTS
/*easyBtn.addEventListener("click", function(){
    numSquares = 3;
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for( var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function(){
    numSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for( var i = 0; i < squares.length; i++) {
         squares[i].style.background = colors[i];
         squares[i].style.display = "block";
   }
});*/

//RESET
resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;



//FUNCTIONS


//Grenerate random RGB color
function randomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
//Generate random colors to array
function generateRandomColors(num) {
    //make an empty array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
    //get random color and push it to array
        arr.push(randomColor());
    }
    //return array
    return arr;
}
//Pick random color from our array of random colors
function pickColor() {
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
//if you pick right color, change all squares to the same color, you win!
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
    }
}




