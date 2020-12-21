const renderer = new Renderer()
let x = 8
let y = 8

let board = new GoldRush(x, y)

$('#display').on('click', $('.start'), function () {

    board.generateBoard(x, y)

    renderer.renderBoard(board)
})

$(document).on('keydown', function (e) {
    try {
        if (e.which === 87) {
            board.movePlayer('p1', "up")
        } else
            if (e.which === 65) {
                board.movePlayer('p1', "left")
            } else
                if (e.which === 83) {
                    board.movePlayer('p1', "down")
                } else
                    if (e.which === 68) {
                        board.movePlayer('p1', "right")
                    } else
                        if (e.which === 73) {
                            board.movePlayer('p2', "up")
                        } else
                            if (e.which === 74) {
                                board.movePlayer('p2', "left")
                            } else
                                if (e.which === 75) {
                                    board.movePlayer('p2', "down")
                                } else
                                    if (e.which === 76) {
                                        board.movePlayer('p2', "right")
                                    } else {
                                        return
                                    }
    } catch (err) {
        console.log(err)
    }
    try {
        renderer.renderBoard(board)
    } catch (err) {
        console.log(err)
    }
})
