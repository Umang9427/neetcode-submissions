class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        if (!board) return false;

        // 1. Check Rows
        for (let i = 0; i < 9; i++) {
            let seen = new Set();
            for (let j = 0; j < 9; j++) {
                let val = board[i][j];
                if (val === ".") continue;
                if (seen.has(val)) return false;
                seen.add(val);
            }
        }

        // 2. Check Columns
        for (let i = 0; i < 9; i++) {
            let seen = new Set();
            for (let j = 0; j < 9; j++) {
                let val = board[j][i];
                if (val === ".") continue;
                if (seen.has(val)) return false;
                seen.add(val);
            }
        }

        // 3. Check 3x3 Sub-boxes
        for (let box = 0; box < 9; box++) {
            let seen = new Set();
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    // Corrected offset formulas and Math.floor
                    let i = Math.floor(box / 3) * 3 + row;
                    let j = (box % 3) * 3 + col;

                    let val = board[i][j];
                    if (val === ".") continue;
                    if (seen.has(val)) return false;
                    seen.add(val);
                }
            }
        }

        return true;
    }
}