class Matrix {
    constructor(x, y) {
        this.matrix = this.generateMatrix(x, y)
    }

    generateMatrix(x, y) {
        let matrix = []
        
        for (let r = 0; r < x; r++) {
            matrix.push([])
            for (let c = 0; c < y; c++) {
                matrix[r].push(' ')
            }
        }
        return matrix
    }

    printMatrixValues() {
        for (let x = 0; x < this.matrix.length; x++) {
            for (let y = 0; y < this.matrix[x].length; y++) {
                console.log(this.matrix[x][y])
            }
        }
    }

    print() {
        for (let x = 0; x < this.matrix.length; x++) {
            let line = ""
            for (let y = 0; y < this.matrix[x].length; y++) {
                line = line + this.matrix[x][y] + "\t"
            }
            console.log(line)
        }
    }

    get(x, y) {
        return this.matrix[x][y]
    }

    printColumn(y) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][y])
        }
    }

    printRow(x) {
        for (let i = 0; i < this.matrix[x].length; i++) {
            console.log(this.matrix[x][i])
        }
    }

    alter(x, y, val) {
        this.matrix[x][y] = val
    }

    findCoordinate(value) {
        for (let x = 0; x < this.matrix.length; x++) {
            for (let y = 0; y < this.matrix[x].length; y++) {
                if (this.matrix[x][y] === value)
                return {x, y}
            }
        }

    }
}

// module.exports = Matrix
