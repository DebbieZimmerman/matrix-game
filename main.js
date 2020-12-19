//Player 1 will control their player using the WASD keys, and Player 2 should use the IJKL keys.
// A player may not move to a location on the board that has a wall or another player, but they should get 10 points any time they move to a location with a coin on it. In this case, the coin should disappear from the board.

const renderer = new Renderer()

let x = 8
let y = 8


const board = new GoldRush()
board.generateBoard(x, y)

renderer.renderBoard(board)

$('#start').click(function () {
    const board = new GoldRush()
    board.generateBoard(x, y)

    renderer.renderBoard(board)
    renderer.renderPoints("p1", board.p1.points)
    renderer.renderPoints("p1", board.p2.points)
})

$(document).keypress(function (e) {
    console.log(e)
    if (e.which == 119) {
        board.movePlayer('p2', "up")
    }

    renderer.renderBoard(board)

})
