$(document).ready(function() {

    // map of 9 possible spaces
    var map = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ]

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
    var gameOver = false;

    var currPosition; // number
    var elemCurrPosition; // html element

    // reference to message area
    var instructions = $(".instructions");

    displayInstructions("Welcome to the game!");

    // display first turn
    displayTurn();

    // on click listener
    $(".tic-tac-toe").on("click", ".position", function() {
        console.log("square on board clicked");
        elemCurrPosition = $(this);
        var posString = elemCurrPosition.attr('id');
        
        // convert position string from id to number
        position = parseInt(posString);
        console.log("position string: " + posString);

        play(position);
        
    });

    function displayTurn() {
        console.log(((currentPlayer == X)? 'X': 'O') + '\'s turn.');
        displayInstructions(((currentPlayer == X)? 'X': 'O') + '\'s turn.');

    }

    function play() {

        if (map[position] != BLANK) {
            console.log("position taken");
            return;
        }

        // record on map either 1 (for X) or -1 (for O) based on currentPlayer
        map[position] = currentPlayer;
        console.log(map);
        
        // draw player symbol at position
        if (currentPlayer == X) {
            drawX(position);
        } else if (currentPlayer == O) {
            drawO(position);
        }

        // check to see if winning move
        var winCheck = checkWin(currentPlayer);
        console.log("win check: " + winCheck + " (0 is not a win)");

        if (winCheck != 0) {
            gameOver = true;
            console.log(((currentPlayer == X) ? 'X': 'O') + " wins! game over.");
            displayInstructions(((currentPlayer == X) ? 'X': 'O') + " wins! game over.");
            return;
        } else if (map.indexOf(BLANK) == -1) {
            gameOver = true;
            console.log("tie! game over.");
            displayInstructions("tie! game over.");
            return;
        }


        // flip from current player
        currentPlayer *= -1; 

        console.log("play was a success");

        displayTurn();
    }

    function drawX() {
        var elemX = $("<h1></h1>").text("X");

        // append to element position on the board 
        elemCurrPosition.append(elemX);
    }

    function drawO() {
        var elemO = $("<h1></h1>").text("O");

        // append to element position on the board
        elemCurrPosition.append(elemO);
    }

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

    function displayInstructions(str) {
        instructions.text(str);
    }

});