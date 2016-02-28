var newArr = [];
var space = " ";
var fromInput = [];
var masterArr = {
a: ["12", "11", "13", "15", "16", "18", "19", "23", "24", "29", "34", "39", "44", "49", "48", "43", "38", "33", "28", "27", "26", "31", "36", "41", "46", "47", "40", "35", "30"],
b: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "1", "6", "11", "16", "21", "26", "31", "36", "41", "46", "47", "48", "44", "39", "34", "29", "24", "19", "13", "12", "18", "23", "28", "33", "38", "43"],
c: ["40", "35", "30", "25", "20", "15", "11", "16", "21", "26", "31", "36", "41", "46", "47", "48", "44", "43", "12", "13", "19", "18"],
d: ["4", "9", "14", "19", "24", "29", "34", "39", "44", "49", "3", "8", "13", "18", "23", "28", "33", "38", "43", "48", "12", "11", "15", "20", "25", "30", "35", "40", "46", "41", "47", "36", "31", "26", "21", "16"],
e: ["44", "43", "48", "47", "46", "41", "36", "31", "26", "21", "16", "11", "15", "20", "25", "30", "35", "40", "12", "13", "18", "19", "34", "29", "24", "32", "33", "28", "23"],
f: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "46", "41", "36", "31", "26", "21", "16", "11", "6", "1", "2", "3", "9", "14", "13", "8", "27", "28", "33", "32"],
g: ["13", "12", "11", "15", "20", "25", "31", "32", "33", "28", "23", "18", "38", "43", "48", "47", "46", "41", "40", "44", "39", "34", "29", "24", "19", "16", "21", "26", "14"],
h: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "1", "6", "11", "16", "21", "26", "31", "36", "41", "46", "12", "13", "18", "23", "28", "33", "38", "43", "48", "19", "24", "29", "34", "39", "44", "49"],
i: ["13", "12", "11", "17", "22", "27", "32", "37", "42", "47", "48", "46"],
j: ["13", "14", "19", "24", "29", "34", "39", "44", "48", "47", "46", "41", "40", "43", "38", "33", "28", "23", "18"],
k: ["10", "15", "20", "25", "30", "35", "40", "45", "11", "16", "21", "26", "31", "36", "41", "41", "46", "49", "37", "43", "32", "28", "24", "19", "13", "18", "23", "14", "38", "44", "27", "48"],
l: ["6", "7", "11", "16", "21", "26", "31", "36", "41", "12", "17", "22", "27", "32", "37", "42", "47", "48"],
m: ["13", "12", "11", "10", "15", "20", "25", "30", "35", "40", "45", "17", "22", "27", "32", "37", "42", "47", "19", "24", "29", "34", "39", "44", "49", "16", "18"],
n: ["13", "12", "11", "10", "15", "20", "25", "30", "35", "40", "45", "16", "21", "26", "31", "36", "41", "46", "19", "24", "29", "34", "39", "44", "49", "18", "23", "28", "17", "33", "38", "43", "48"],
o: ["13", "12", "11", "15", "20", "25", "30", "35", "40", "46", "47", "48", "44", "39", "34", "29", "24", "19", "18", "23", "28", "33", "38", "43", "16", "21", "26", "31", "36", "41"],
p: ["13", "12", "11", "10", "15", "20", "25", "30", "35", "40", "45", "46", "41", "36", "31", "26", "21", "16", "19", "24", "29", "33", "32", "28", "23", "18"],
q: ["19", "13", "12", "11", "15", "20", "25", "31", "32", "33", "18", "23", "28", "38", "43", "48", "24", "29", "34", "39", "49", "44", "16", "21", "26"],
r: ["10", "15", "20", "25", "30", "35", "40", "45", "46", "41", "36", "31", "26", "21", "16", "11", "12", "13", "19", "24", "18", "23"],
s: ["13", "12", "11", "15", "20", "25", "26", "27", "32", "33", "34", "39", "44", "43", "38", "48", "47", "46", "41", "36", "35", "40", "23", "24", "19", "18", "21", "16"],
t: ["1", "6", "11", "16", "21", "26", "31", "36", "41", "47", "48", "42", "37", "32", "27", "22", "17", "12", "7", "2", "10", "13"],
u: ["14", "19", "24", "29", "34", "39", "44", "49", "48", "47", "46", "43", "38", "33", "28", "23", "18", "13", "41", "40", "36", "31", "26", "21", "16", "11", "10", "15", "20", "25", "30", "35"],
v: ["47", "41", "42", "43", "39", "34", "29", "24", "19", "14", "13", "18", "23", "28", "33", "38", "36", "35", "30", "25", "20", "15", "10", "11", "16", "21", "26", "31"],
w: ["14", "19", "24", "29", "34", "39", "44", "48", "42", "37", "32", "27", "22", "17", "12", "10", "15", "20", "25", "30", "35", "40", "46", "41", "43"],
x: ["46", "45", "48", "49", "14", "13", "11", "10", "16", "21", "18", "23", "43", "38", "41", "36", "32", "28", "26", "15", "20", "24", "19", "40", "44"],
y: ["14", "13", "19", "24", "29", "34", "39", "44", "48", "47", "46", "40", "41", "43", "38", "33", "18", "23", "28", "32", "31", "25", "20", "15", "10", "11", "16", "21", "26"],
z: ["13", "12", "11", "10", "15", "16", "18", "17", "19", "23", "27", "31", "35", "40", "45", "49", "48", "47", "46", "41", "36", "32", "28", "24", "42", "43", "44", "14"],   
    
    
    

	};
//var letterContainer = document.querySelector(".letter-container").getElementsByTagName("div"), x;
//for(x = 0; x < letterContainer.length; x++) {
  //  letterContainer[x].style.background = "black";
    //console.log(x);
//}
var letterContainer = document.querySelectorAll(".letter-container");
var letterContainerObject = toObject(letterContainer);

var square = document.querySelectorAll(".letter-container div");
//Square to Object
var squareObject = toObject(square);

Object.keys(squareObject).forEach(function (key) {
    //console.log(key, squareObject[key]);
    squareObject[key].addEventListener("click", function ( ) {
       //squareObject[key].style.background = "black";
       console.log(key); 
       color(key, squareObject[key]);    
    });
});
window.onload = function() {
	 document.getElementById("userinput").focus();
};

// draw pixel and save it to array
function color(index, square) {
    square.style.background = "orange";
        a.push(index);
        console.log(a);	
	}

// Draw letter based on Array of indexes.
function draw(letter, position) {
    var elementChildren = letterContainerObject[position].children;
        for (var i = 0; i < elementChildren.length; i++) {
          for (var j = 0; j < letter.length; j++){
                        if(Number(letter[j]) === i) {
                        elementChildren[i].style.background = "orange";
																								 }
                    }
                }								
   }


// Array to Object
function toObject(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; ++i)
      obj[i] = arr[i];
      return obj;
}
//get Array from Input
function addTo() {
   fromInput.push(document.getElementById("userinput").value.toLowerCase());
   console.log(fromInput); //to confirm it has been added to the array
			stringToArr(fromInput);
			callLibrary(); 
	
}
//Split String to Array of Symbols
function stringToArr(arr){
	  for(var i = 0; i < arr.length; i++) {
				   newArr = arr[i].split("");
				}
			console.log(newArr);		
	}
//clean Display before new input	
function reset() {
	  for (var x= 0; x < 32; x++) {
	    var elementChildren = letterContainerObject[x].children;
        for (var i = 0; i < elementChildren.length; i++) {
	          elementChildren[i].style.background = "#2d2d2d";
										}
	    }
}
//find matches from Library	
	function callLibrary(){
		   reset();
		   var position = 0;
		   for(var i = 0; i < newArr.length; i++) {
               if (newArr[i] == space) {
                    position ++;
                } else {
               for (var key in masterArr){
                   
				 if(newArr[i] == key) {
				    letter = masterArr[key];
                    console.log(letter);
                    draw(letter, position);
                    position ++;
				}
               }
               }
           }
		}

//DRAWING "N"
var n_canvas = document.getElementById("n");
var context = n_canvas.getContext("2d");

// CIRCLE
context.fillStyle = "#e0b50b";
context.beginPath();
context.arc(60, 55, 40, 0, 2*Math.PI);
context.closePath();
context.fill();

context.fillStyle = "black";

// TRAIN NUMBER
context.font = "52px Helvetica";
context.fillText("N",42,73);

//DRAWING "R"
var r_canvas = document.getElementById("r");
var context = r_canvas.getContext("2d");

// CIRCLE
context.fillStyle = "#e0b50b";
context.beginPath();
context.arc(60, 55, 40, 0, 2*Math.PI);
context.closePath();
context.fill();

context.fillStyle = "black";

// TRAIN NUMBER
context.font = "52px Helvetica";
context.fillText("R",42,73);

//DRAWING "Q"
var q_canvas = document.getElementById("q");
var context = q_canvas.getContext("2d");

// CIRCLE
context.fillStyle = "#e0b50b";
context.beginPath();
context.arc(60, 55, 40, 0, 2*Math.PI);
context.closePath();
context.fill();

context.fillStyle = "black";

// TRAIN NUMBER
context.font = "52px Helvetica";
context.fillText("Q",42,73);

//DRAWING STATION NAME
var station_canvas = document.getElementById("station");
var context = station_canvas.getContext("2d");

context.fillStyle = "white";

context.font = "46px Helvetica";
context.fillText("Prince",17,53);
context.fillText("Street Station",17,98);

//EXIT
var exit_canvas = document.getElementById("exit");
var context = exit_canvas.getContext("2d");

context.fillStyle = "white";

context.font = "bold 52px Helvetica";
context.fillText("Exit",2,48);

//DRAWING MTA LOGO
var mta_canvas = document.getElementById("mta");
var context = mta_canvas.getContext("2d");

// CIRCLE
context.fillStyle = "#666";
context.beginPath();
context.arc(60, 65, 52, 0, 2*Math.PI);
context.closePath();
context.fill();

context.fillStyle = "#fff";
context.beginPath();
context.arc(60, 65, 50, 0, 2*Math.PI);
context.closePath();
context.fill();

context.fillStyle = "blue";
context.beginPath();
context.arc(45, 60, 20, 0, 2*Math.PI);
context.closePath();
context.fill();

context.fillStyle = "white";

// TRAIN NUMBER
context.font = "16px Helvetica";
context.fillText("MTA",25,68);