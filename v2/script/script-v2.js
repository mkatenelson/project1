window.onload = shuffleTiles;


var tempTile, tempText;
// COUNTER //
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
	}, 600);
}


function flipBack() {
	setTimeout(function() {
		$(".faceUp").each(function() {
			// flip back to front
			reveal(this);
		});
	}, 600);
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
// SHUFFLE TILES //

function shuffleTiles(){
	console.log("hello from shuffleTiles");
	var testArray = ["!","@","#","$","%","^","&","*","(",")","!","@","#","$","%","^","&","*","(",")"];

	// generate a random number from 1 - 20

	for(var i = 0; i <= testArray.length; i++){
		 tempTile = $("#a" + i); // replace i with your randomly generated number in this line only
		 tempText = testArray[i];
		$(tempTile).text(tempText);
		//		console.log(tempTile);
		//		tilesArray[i].text = testArray[i];
		// $(tilesArray[0]).text(testArray[0]);
		// $(tilesArray[i]).html(testArray[i]);
	}
}

///// Example 1
// var shuffleTiles = function() {
//     var parent = $("#shuffle");
//     var tds = parent.children();
//     while (tds.length) {
//         parent.append(tds.splice(Math.floor(Math.random() * tds.length), 1)[0]);
//     }
//     console.log("shuffle hears");
// };

////// Example 2
// var squares = $(".square");
// squares.remove();
// squares = shuffle(squares);
// squares.appendTo($(".board"));

// function shuffleTiles(squares){
//   var i = squares.length, j, tempi, tempj;
//   if ( i === 0 ) return false;
//   while ( --i ) {
//     j = Math.floor( Math.random() * ( i + 1 ));
//     tempi = squares[i];
//     tempj = squares[j];
//     squares[i] = tempj;
//     squares[j] = tempi;
//   }
//   return squares;
// }

///// Example 3
// Shuffle(testArray);

// // jQuery to dump out new values to element with class of 'square'
// var shuffleTiles = function() {
//    for (var i=0;i<testArray.length;i++) {
//       $(".square").append(testArray[i]);
//    }
// };

////////////////////////
// Create HTML in script
// var square = $(document.createElement('td'));
// var square = $('<table>');
// var square = $('<tr>');
// var square = $('<td>');





///////////////////////////////
// RESET //

$(document).on('click', '#reset', function(){
	location.reload();
	shuffleTiles();
});







