var tileFlippedCounter = 0;

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

function gameOver() {
  return ($(".matched").length == 16);
}

function flipBack() {
	setTimeout(function() {
		$(".faceUp").each(function() {
			// flip back to front
			reveal(this);
		});
	}, 1200);
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
		} 
	}
	else {
		tile.className = "faceDown";
	}
}

// LOOP //
$("td").on("click", function() {
	// console.log(this.id);
	reveal(this);
});



///////////////////////////////
// RESET //
$("#reset").click(function() {
	setTimeout(function() {
		$("td").addClass("faceDown").removeClass("faceUp").setAttr("onclick");
	}, 600);
	tileFlippedCounter = 0;
});











