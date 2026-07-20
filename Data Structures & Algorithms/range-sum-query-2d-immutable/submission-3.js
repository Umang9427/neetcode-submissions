class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

        let rows = matrix.length
        let cols = matrix[0].length

        this.dp = Array.from({length: rows+ 1}, ()=> new Array(cols+1).fill(0))

        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                this.dp[i+1][j+1]= matrix[i][j] + this.dp[i][j+1] + this.dp[i+1][j] - this.dp[i][j]
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return(
this.dp[row2+1][col2+1] - this.dp[row1][col2+1] - this.dp[row2+1][col1] + this.dp[row1][col1]        )
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
