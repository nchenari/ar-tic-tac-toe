$(document).ready(function() {

    // map of 9 possible spaces
    var map = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ]

    // binary win pattern
    const winPatterns = [
        Ob111000000, Ob000111000, Ob000000111, // Rows
        Ob100100100, Ob010010010, Ob001001001, // Columns
        Ob100010001, Ob001010100 // Diagonals
    ];
    
    // constants for cell posibilities
    const BLANK = 0;
    const X = 1;
    const O = -1;

    // session variables
    var currentPlayer = X; // X starts the game 
    var gameOver = false;

    // reference to message area


    // call fill board
    fillBoard();

    // display first turn
    displayTurn();

    // on click listener
    $("tic-tac-toe").on("click", ".square", function() {
        var posString = $(this).attr('id');
        
        // convert position string from id to number
        var position = parseint(posString);
        console.log("position string: " + posString);
        
    });



    function displayTurn() {
        console.log(((currentPlayer == X)? 'X': 'O') + '\'s turn.');
    }

    function play(cell) {

        if (map[cell] != BLANK) {
            console.log("position taken");
            return;
        }

        map[cell] = currentPlayer;

        // check to see if winning move
        var winCheck = checkWin(currentPlayer);
        console.log("win check: " + winCheck);

        if (winCheck != 0) {
            gameOver = true;
            console.log(((currentPayer == X) ? 'X': 'O') + " wins! game over.");
            return;
        } else if (map.indexOf(BLANK) == -1) {
            gameOver = true;
            console.log("tie! game over.");
            return;
        }


        // flip from current player
        currentPlayer *= -1; 

        console.log("play was a success");

        displayTurn();
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

    function fillBoard() {
        for (let i = 0; i < map.length; i++) {
            var coords = getCellCoords(i);

            if (map[i] == X) {
                drawX();
            } else if (map[i] == O) {
                drawO();
            }

        }
    }
    
    function drawX() {

    }

    function drawO() {

    }

    function getCellCoords (cell) {
        var x = (cell % 3) * cellSize;
        var y = Math.floor(cell / 3) * cellSize;

        return {
            'x': x,
            'y': y
        }
    }

});