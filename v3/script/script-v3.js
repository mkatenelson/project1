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



    var clicks = 0; //counts how may picks have been made in each turn
    var firstchoice; //stores index of first card selected
    var secondchoice; //stores index of second card selected

    var match = 0; //counts matches made
    var backcard = "guess.jpeg"; //shows back of card when turned over

    var faces = []; //array to store card images
    faces[0] = 'image1.png';
    faces[1] = 'image2.png';
    faces[2] = 'image3.png';
    faces[3] = 'image3.png';
    faces[4] = 'image1.png';
    faces[5] = 'image2.png';

    function choose(card) {
            if (clicks == 2) {
                return;
            }
            if (clicks === 0) {
                firstchoice = card;
                document.images[card].src = faces[card];
                clicks = 1;
            } else {
                clicks = 2;
                secondchoice = card;
                document.images[card].src = faces[card];
            }
        }
        /* Check to see if a match is made */

function check() {
    clicks = 0;
    if (faces[secondchoice] == faces[firstchoice]) {
        match++;
        document.getElementById("matches").innerHTML = match;
    } else {
        document.images[firstchoice].src = backcard;
        document.images[secondchoice].src = backcard;
        return;
    }
}