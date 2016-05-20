window.onload = shuffleTiles;

var tempTile, tempText;
var tileFlippedCounter = 0; // COUNTER


////////////////////////////
// CALLBACKS //
function checkMatch() {
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
	}, 1000);
}

function gameOver(){
  	return ($(".matched").length == 18);
}

//////////////////////////////////

// Flips tiles between front and back
function reveal(tile) {
	console.log(tile);
	
		if (tile.className == "faceDown") {
			if ($(".faceUp").length < 2) {
			tile.className = "faceUp";
			tileFlippedCounter += 1;
			console.log(tileFlippedCounter);
			if (tileFlippedCounter == 2) {
				checkMatch(); 
				if (gameOver()) {
					alert("Good job! Click RESET to begin a new game.");
				}
			} 
		}
		}			
		else {
			tile.className = "faceDown";
		}
	
}

///////////////////////////////
// SHUFFLE TILES //

function shuffleTiles(){
	console.log("hello from shuffleTiles");
	var testArray = ["!","@","#","$","%","^","&","*","(",")","!","@","#","$","%","^","&","*","(",")"];
	console.log(testArray);
	var shuffledArray = shuffle(testArray);


	for(var i = 0; i <= testArray.length; i++){
		var rando = Math.floor(Math.random() * 21);
		tempTile = $("#a" + i); // replace i with randomly generated number in this line
		tempText = testArray[i];
		$(tempTile).text(tempText);
	}
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
  }
  console.log(a);
  return a;
}



///////////////////////////////
// RESET //

$(document).on('click', '#reset', function(){
	location.reload();
	shuffleTiles();
});







