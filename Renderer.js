class Renderer {

    renderBoard(board) {
        try {
            const source = $('#board-template').html();
            const template = Handlebars.compile(source);
            let newHTML = template(board);
            $('#board-display').empty().append(newHTML);
            this.renderPoints(board)
        } catch (err) {
            console.log(err)
        }
    }

    renderPoints(board) {
        try {
            const source = $('#points-template').html();
            const template = Handlebars.compile(source);
            let newHTML = template(board);
            $(`#player-info`).empty().append(newHTML);
        } catch (err) {
            console.log(err)
        }
    }
}
