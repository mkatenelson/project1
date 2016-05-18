function toggleClass(tile) {
	if (tile.className === "front") {
		tile.className = "back";
	}
	else {
		tile.className = "front";
	}

}

function wasFlipped() {
	var testClicks = document.getElementsByClassName("flip");
	for(var i = 0; i < testClicks.length; i++){
		console.log("element found"); // returns 16 elements
		// testClicks.addEventListener
		// 
		// if <td> with class .flip has been clicked
		// remove class .flip and add class .stayFlip
	}
}