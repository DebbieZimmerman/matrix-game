// const Matrix = require('./Matrix')

class GoldRush extends Matrix {
    constructor(x, y) {
        super(x, y)
        this.matrix = this.generateMatrix(x, y)
            this.rows = x,
            this.columns = y,
            this.p1 = {
                avatar: "&#128523",
                xPos: 0,
                yPos: 0,
                points: 0
            },
            this.p2 = {
                avatar: "&#129316",
                xPos: x-1,
                yPos: y-1,
                points: 0
            }
        this.emojis = ['&#127846', '&#127874', '&#127848', '&#127849', '&#127850', '&#127851', '&#127853', '&#127856']

    }

    generateBoard() {
        try {
            this.generateCoins()
            this.alter(this.p1.xPos, this.p1.yPos, this.p1.avatar)
            this.alter(this.p2.xPos, this.p2.yPos, this.p2.avatar)
        } catch (err) {
            console.log(err)
        }
    }

    movePlayer(player, direction) {
        try {
            if (this.isViableMove(player, direction)) {
                this.alter(this[player].xPos, this[player].yPos, '')
                this.changePosition(player, direction)
                this.alter(this[player].xPos, this[player].yPos, this[player].avatar)
            }
        } catch (err) {
            console.log(err)
        }
    }

    checkNewPosition(player, x, y) {
        try {
            let inPos = this.get(x, y)
            if (inPos.substring(0, 5) === '&#127' || inPos === " " || inPos === '') {
                if (inPos.substring(0, 5) === '&#127') {
                    this[player].points += 10
                }
                return true
            } else {
                return false
            }
        } catch (err) {
            console.log(err)
        }
    }

    isViableMove(player, direction) {
        try {
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
        } catch (err) {
            console.log(err)
        }
    }

    changePosition(player, direction) {
        try {
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
        } catch (err) {
            console.log(err)
        }
    }

    generateCoins() {
        try {
            const coins = this.getCoinAmount()
            for (let i = 0; i < coins; i++) {
                const x = this.getRowNumber()
                const y = this.getColNumber()
                const z = this.getCoinNumber()
                this.alter(x, y, this.emojis[z])
            }
        } catch (err) {
            console.log(err)
        }
    }

    getCoinNumber() {
        return Math.floor(Math.random() * this.emojis.length)
    }

    getCoinAmount() {
        return Math.floor(Math.random() * this.rows * this.columns) + 10
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