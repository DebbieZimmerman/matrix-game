// const Matrix = require('./Matrix')

class GoldRush extends Matrix {
    constructor() {
        super()
            this.rows = null,
            this.columns = null,
            this.p1 = {
                avatar: "&#128516",
                xPos: 0,
                yPos: 0,
                points: 0
            },
            this.p2 = {
                avatar: "2",
                xPos: 0,
                yPos: 0,
                points: 0
            }

    }

    generateBoard(x, y) {
        this.matrix = this.generateMatrix(x, y)
        this.rows = x
        this.columns = y
        this.p1.xPos = 0
        this.p1.yPos = 0
        this.p2.xPos = x - 1
        this.p2.yPos = y - 1
        this.generateCoins()
        this.alter(this.p1.xPos, this.p1.yPos, this.p1.avatar)
        this.alter(this.p2.xPos, this.p2.yPos, this.p2.avatar)
    }

    movePlayer(player, direction) {
        if (this.isViableMove(player, direction)) {
            this.alter(this[player].xPos, this[player].yPos, '')
            this.changePosition(player, direction)
            this.alter(this[player].xPos, this[player].yPos, this[player].avatar)
        }
    }

    checkNewPosition(player, x, y) {
        let inPos = this.get(x, y)
        if (inPos === '.' || inPos === '' || inPos === 'c') {
            if (inPos === 'c') {
                this[player].points += 10
            }
            return true
        } else {
            return false
        }
    }

    isViableMove(player, direction) {
        let newX = this[player].xPos
        let newY = this[player].yPos
        if (direction === 'down') {
            newX++
            if (newX === this.rows) {
                return false
            }
        }
        if (direction === 'up') {
            newX--
            if (newX === -1) {
                return false
            }
        }
        if (direction === 'left') {
            newY--
            if (newY === -1) {
                return false
            }
        }
        if (direction === 'right') {
            newY++
            if (newY === this.columns) {
                return false
            }
        }

        return this.checkNewPosition(player, newX, newY) ? true : false
    }

    changePosition(player, direction) {
        if (direction === 'down') {
            this[player].xPos++
        }
        if (direction === 'up') {
            this[player].xPos--
        }
        if (direction === 'left') {
            this[player].yPos--
        }
        if (direction === 'right') {
            this[player].yPos++
        }
    }

    generateCoins() {
        const coins = this.getCoinNumber()
        for (let i = 0; i < coins; i++) {
            const x = this.getRowNumber()
            const y = this.getColNumber()
            this.alter(x, y, 'c')
        }
    }

    getCoinNumber() {
        return Math.floor(Math.random() * this.rows * this.columns)
    }

    getRowNumber() {
        return Math.floor(Math.random() * this.rows)
    }

    getColNumber() {
        return Math.floor(Math.random() * this.columns)
    }

    getScore(player) {
        return this[player].points
    }
}



// module.exports = GoldRush