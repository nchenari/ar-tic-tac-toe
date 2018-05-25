// contain everything except for the AFRAME into jQuery .ready() function. html elements cannot be accessed otherwise
$(document).ready(function(){

// map of 9 possible spaces
var map = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];

// binary win pattern
const winPatterns = [
    0b111000000, 0b000111000, 0b000000111, // Rows
    0b100100100, 0b010010010, 0b001001001, // Columns
    0b100010001, 0b001010100 // Diagonals
];

// constants for cell posibilities
const BLANK = 0;
const X = 1;
const O = -1;

// session variables
var currentPlayer = X; // X starts the game 
var withComp = true; // default play with computer
var gameOver = true;

var moveAllowed = true; // block move when appropriate

// var userPosition; // number 0-8, user's position extracted from click listener
// var userPosCoords; // x y z of user selected position

// after refresh wait a second for before allowing game to be in session (prevents auto click on refresh on mobile)
setTimeout(function() {
    gameOver = false;
}, 2000);

// reference to message area
var instructions = $(".instructions");

displayInstructions("Welcome to the game! Please select one player or two player! (one player default)");

$("#twoPlayerSwitch :checkbox").change(function() {
    if (this.checked) {
        console.log("switch checked, user has selected two player game");
        withComp = false;
        console.log("withComp variable: " + withComp);
        displayInstructions("2 player selected!");
    } else {
        console.log("switch unchecked, user has selected one player game");
        withComp = true;
        console.log("withComp variable: " + withComp);
        displayInstructions("1 player selected!");
    }
});

// on click listener reset button, 500 millisecond delay
$("#restartBtn").on("click", function() {
    console.log("restart button pressed. page reloading")
    setTimeout(function() {
        location.reload();
    }, 500);
});


// overwrite aframeListener function 
aframeListener = function() {
    console.log("aframeListener function overwritten and code added");

    if (gameOver == false && moveAllowed == true) {
        console.log("user selected position: " + userPosString + "x-y-z: " + userPosCoords);
        
        console.log("calling userPlay() next");
        userPlay();
    }
}


function userPlay() {

    if (map[userPosition] != BLANK) {
        // position already taken, return so that user can select another postion on board
        console.log("position taken");
        return;
    }

    console.log("play was a success");
    // record on map either 1 (for X) or -1 (for O) (based on current player variable)
    // ...using userPosition (0-8) as index for map
    map[userPosition] = currentPlayer;
    console.log(map); // print map to console 
    
    // draw player's symbol at userPosCoords
    drawOnCoords(userPosCoords);

    // block move until ready
    moveAllowed = false;

    // check to see if winning move
    var winCheck = checkWin(currentPlayer);
    console.log("win check: " + winCheck + " (0 is not a win)");

    if (winCheck != 0) {
        gameOver = true;
        console.log(((currentPlayer == X) ? 'X': 'O') + " wins! game over.");
        displayInstructions(((currentPlayer == X) ? 'X': 'O') + " wins! Press restart button to play again.");
        return;
    } else if (map.indexOf(BLANK) == -1) {
        gameOver = true;
        console.log("tie! game over.");
        displayInstructions("Tie! Press restart button to play again.");
        return;
    }

    // flip from current player
    currentPlayer *= -1; 

    // check if playing with computer
    if (withComp == true) {
        setTimeout(displayTurn, 600);
        // set delay between user move and computer move (700 miliseconds)
        setTimeout(compPlay, 900);
    } else {
        moveAllowed = true;
        setTimeout(displayTurn, 600);
    }
}

function compPlay() {
    if (gameOver == false) { // if after user move, game still on (not lost or tied)

        var compPosition = randomOpenPos();
        console.log("computer randomly chosen position: " + compPosition);

        // record on map either 1 (for X) or -1 (for O) based on currentPlayer for randomly selected computer position
        map[compPosition] = currentPlayer;
        console.log(map);
        
        // draw computer symbol at position
        // get coords based on position id
        var compPosCoords = $( ".hiro" ).find('[id^="' + compPosition + '"]').attr("position");
        drawOnCoords(compPosCoords);
        console.log("comp generated position: " + compPosition + "x-y-z: " + compPosCoords);

        // check to see if winning move
        var winCheck = checkWin(currentPlayer);
        console.log("win check: " + winCheck + " (0 is not a win)");

        if (winCheck != 0) {
            gameOver = true;
            console.log(((currentPlayer == X) ? 'X': 'O') + " wins! game over.");
            displayInstructions(((currentPlayer == X) ? 'X': 'O') + " wins! game over.");
            return;
        } else if (map.indexOf(BLANK) == -1) { // no more blank spaces on board and no win
            gameOver = true;
            console.log("tie. game over.");
            displayInstructions("tie! game over.");
            return;
        }

        // flip from current player 
        currentPlayer *= -1; 

        // allow user move
        moveAllowed = true;

        setTimeout(displayTurn, 400);
    }
}

// -------- function to draw appropriate symbol on board at given position (for augmented reality)

function drawOnCoords(posCoords) {
    // extract x,y,z coordinates from position attribute
    var x = posCoords.x;
    var y = posCoords.y;
    var z = posCoords.z;

    // draw symbol
    $( ".hiro" ).append( "<a-entity text-geometry='value: " + ((currentPlayer == X) ? 'X': 'O') + "; size: 1' material='color: " + ((currentPlayer == X) ? '#01e6a1': '#0e100e')  + "' position='" 
                        + (x - 0.4) + " " + 0.25 + " " + (z + 0.5) + "' rotation='-90 0 0' scale='' visible=''></a-entity>");
    console.log(currentPlayer + " drawn at: " + posCoords);
}

// -------- function to check win after every successful move from either players or computer
function checkWin(player) {
    var playerMapBitMask = 0;    // leading zeros don't mean anything with bitmask
    for (var i = 0; i < map.length; i++) {
        playerMapBitMask <<= 1;
        if (map[i] == player) {
            playerMapBitMask += 1;
        }
    }
    console.log("player bitmask: " + playerMapBitMask);

    for (var i = 0; i < winPatterns.length; i++) {
        if ((playerMapBitMask & winPatterns[i]) == winPatterns[i]) {
            return winPatterns[i];
        }
    }

    // did not win
    return 0;
}

// ----------- utility function to select random open position for ai/computer player 

function randomOpenPos() {
    // pick an open corner position if available, otherwise pick a random open positon 
    // max 4 corners available....at index 0, 2, 6, 8
    var cornerIndexes = [0, 2, 6, 8];
    var openCornerIndexes = [];
    for (var i = 0; i < cornerIndexes.length; i++) {
        if (map[cornerIndexes[i]] == BLANK) {
            // append index stored in i of cornerIndexes array to openCornerIndexes 
            openCornerIndexes.push(cornerIndexes[i]);
        }
    }
    console.log("number of corner indexes available: " + openCornerIndexes.length);

    if (openCornerIndexes.length > 1) {
        // select random map index from open corner indexes
        return openCornerIndexes[Math.floor(Math.random() * openCornerIndexes.length)];
    } else if (openCornerIndexes.length > 0) {
        // return first and only element
        return openCornerIndexes[0];
    }
    
    // if no open corner indexes available, pick a random index
    var openIndexes = [];
    // iterate through map and find all BLANK positions (O)
    for (var i = 0; i < map.length; i++) {
        if (map[i] == BLANK) {
            // append index of map to openIndexes array
            openIndexes.push(i);
        }
    }
    // return a random open index
    return openIndexes[Math.floor(Math.random() * openIndexes.length)];
}

// ----------- utility functions to display info to user
function displayTurn() {
    console.log(((currentPlayer == X)? 'X': 'O') + '\'s turn.');
    displayInstructions(((currentPlayer == X)? 'X': 'O') + '\'s turn.');

}

function displayInstructions(str) {
    instructions.text(str);
}

});    





