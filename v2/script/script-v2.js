

var tileFlippedCounter = 0;
//var square = getElementsByTag("td");

////////////////////////////
// CALLBACKS //
function checkMatch() {
	// console.log("hello from check match");
	if ( $(".faceUp:eq(0)").text() == $(".faceUp:eq(1)").text() ) {
		console.log("There is a match.");
		markMatch(); 
	} else {
		console.log("No match.");
		flipBack();
	}
	tileFlippedCounter = 0;
}

function markMatch() {
	setTimeout(function(){
		$(".faceUp").each(function() {
			$(this).addClass("matched").removeClass("faceUp").removeAttr("onclick");
		});
	}, 1000);
}


function flipBack() {
	setTimeout(function() {
		$(".faceUp").each(function() {
			// flip back to front
			reveal(this);
		});
	}, 1200);
}

function gameOver(){
  	return ($(".matched").length == 18);
}

//////////////////////////////////

// Flips tiles between front and back
function reveal(tile) {
	console.log(tile);
	if (tile.className == "faceDown") {
		tile.className = "faceUp";
		tileFlippedCounter += 1;
		console.log(tileFlippedCounter);
		if (tileFlippedCounter == 2) {
			checkMatch(); 
			if (gameOver()) {
				alert("Game over! Click RESET to begin a new game.");
			}
		} 
	}			
	else {
		tile.className = "faceDown";
	}
}






///////////////////////////////
// RESET //

$(document).on('click', '#reset', function(){
	location.reload();
});



