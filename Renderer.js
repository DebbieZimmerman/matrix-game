class Renderer {

    renderBoard(board) {
        try {
            const source = $('#board-template').html();
            const template = Handlebars.compile(source);
            let newHTML = template(board);
            $('#board-display').empty().append(newHTML);
        } catch (err) {
            console.log(err)
        }
    }

    renderPoints(player, points){
    try {
        const source = $('#points-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(points);
        $(`#${player}`).empty().append(newHTML);
    } catch (err) {
        console.log(err)
    }
}
}
