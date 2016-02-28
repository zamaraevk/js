var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p3Button = document.querySelector("#p3");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

p1Button.addEventListener("click", function() {
			 if(!gameOver) {
					 		p1Score++
								console.log(p1Score, winningScore);
								if(p1Score === winningScore) {
									  gameOver = true;
											p1Display.classList.add("winner");
									}
				    p1Display.textContent = p1Score
					}
		});
		
p2Button.addEventListener("click", function() {
			 if(!gameOver) {
					 		p2Score++
								if(p2Score === winningScore) {
									  gameOver = true;
											p2Display.classList.add("winner");
									}
				    p2Display.textContent = p2Score
					}
		});		
p3Button.addEventListener("click", function() {
	  reset();
		});				
		
function reset() {
	 p1Score = 0;
    p2Score = 0;
			 p1Display.textContent = 0;
				p2Display.textContent = 0;
				p1Display.classList.remove("winner");
				p2Display.classList.remove("winner");
				gameOver = false;
	};		
	numInput.addEventListener("change", function() {
	   winningScoreDisplay.textContent = this.value;
				winningScore = Number(this.value);
	   reset();
	});