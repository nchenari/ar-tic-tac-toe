
// -- Constants --
const SYMBOLS = {
    x: 'X',
    o: 'O'
}

const RESULT = {
    incomplete: 0,
    playerXWon: SYMBOLS.x,
    playerOWon: SYMBOLS.y,
    tie: 3
}

const VIEW = {
    question1: 1,
    question2: 2,
    game: 3,
    result: 4
}

function Board (options) {
    // Creates the board Object for the game

    // -- Data Structure --
    state = {
        view: VIEW.question1,
        players: [
            {
                symbol: null,
                isComputer: false,
                score: 0
            },
            {
                symbol: null,
                isComputer: false,
                score: 0
            }
        ] 
    }

    function initGame() {
        state.game = {
            _gameBoard: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ],
            turn: Math.round(Math.random()), // we set this var randomly for the first move.
        }
    }

    function beginGame() {
        initGame();
        state.view = View.game
        render() 
        i
    }

    function moveCount(board) {
        // receives a board and returns the number of moves that have been played.
        let moveCouny = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i][j] != "") {
                moveCount++;
            }
        }
        return moveCount;
    }

    funct


}