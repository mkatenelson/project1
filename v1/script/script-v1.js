///// VARIABLES /////
var iconArray = ["!", "!", "@", "@", "#", "#", "$", "$", "%", "%", "^", "^", "&", "&", "*", "*"];
var tempValues = [];
var tileId = [];
var flippedTiles = 0;


// Toggles tiles between front and back
function toggleClass(tile) {
	if (tile.className == "front") {
		tile.className = "back";
	}
	else {
		tile.className = "front";
	}
}
////////////////////////////

var td = document.getElementByTag(td);
td.addEventListener("click", flipTile(this, iconArray[i]));


var setBoard = function() {
	flippedTiles = 0;
	var iconAssign = "";
	for (var i = 0; i < iconArray.length; i++) {
		iconAssign += getElementByTag(td).on("click", flipTile(this, iconArray[i]));
	}
	document.getElementById("board").innerHTML = iconAssign;
};


var flipTile = function(tile, value) {
	// if < 2 tiles have been guessed
	if (tile.innerHTML === "" && tempValues < 2) {
		tile.classname = "front";
		tile.innerHTML = value;
		// if tempValues is empty, push new value to array for tile being clicked
		if (tempValues.length === 0) {
			tempValues.push(value);
			tileId.push(tile.id);
		}
		// if 1 card has been flipped
		else if (tempValues.length == 1) {
			tempValues.push(value);
			tileId.push(tile.id);
			// if the values are a match, clear out tempValues array for next turn
			if (tempValues[0] == tempValues[1]) {
				flippedTiles += 2; // 2 tiles stay flipped
				tempValues = [];
				tileId = [];
			}
			// flip tiles back to back side
			else {
				wrongGuess();
			}
		}
	}
};


// Turns returns to the back side after a wrong guess
var wrongGuess = function() {
	var guess1 = document.getElementById(tileId[0]);
	var guess2 = document.getElementById(tileId[1]);
	guess1.className = "front";
    guess1.innerHTML = "";
	guess2.className = "front";
    guess2.innerHTML = "";
	// Clear both arrays
	tempValues = [];
    tileId = [];
};

// Need new game / clear board function





///////////////////////////

//function wasFlipped() {
	//var testClicks = document.getElementsByClassName("flip");
	//for(var i = 0; i < testClicks.length; i++){
		//console.log("element found"); // returns 16 elements
		// testClicks.addEventListener
		// 
		// if <td> with class .flip has been clicked
		// remove class .flip and add class .stayFlip
	//}
//}