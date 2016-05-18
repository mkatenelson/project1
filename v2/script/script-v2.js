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


function twoFlipped() {
	return $(".back").length == 2;
}

function matchFound() {
	return $(".back:eq(0)").text() == $(".back:eq(1)").text()
;}

function markMatch() {
	$(".back").each(function() {
		$(this).addClass("matched").removeClass("back").off("click");
	});
}

function flipBack() {
	$(".back").each(function() {
		$(this).addClass("front").removeClass("back");
	});
}


// LOOP //
$("td").on("click", function() {
	if ($(".back").length == 2) {
		return false;
	}
	$(this).removeClass("front").addClass("back");

	if (twoFlipped()) {
		if (matchFound()) {
			markMatch();
		}
	}
	else {
		flipBack();
	}
});













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