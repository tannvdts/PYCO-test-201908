const { ROTATE_PICTURE } = require('./constants')
/**
 * Function rotate the photo on user request
 * Input: 
 *  - grid: n * n matrix
 *  - k: number of rotations
 * Output:
 *  n * n matrix, which is rotated picture
 * Time Complexity: O(n^2)
 * Memory Complexity: O(n)
 */
module.exports = (grid, k) => {
    // check params must be provided
    if (grid === undefined && k === undefined) throw new TypeError(ROTATE_PICTURE.ERRORS.PARAMS_IS_REQUIRED);
    // check grid param must be array
    if (!Array.isArray(grid)) throw new TypeError(ROTATE_PICTURE.ERRORS.GRID_MUST_BE_ARRAY);
    
    // check grid param must be n*n matrix
    const gridError = new RangeError(ROTATE_PICTURE.ERRORS.GRID_MUST_BE_NN_MATRIX);
    const numRow = grid.length;
    if (numRow < 1) throw gridError;
    grid.forEach((row) => {
        const numCol = row.length;
        if (numCol !== numRow) {
            throw gridError;
        }
    })

    // check k must be integer >= 0
    if (!Number.isInteger(k) || (Number.isInteger(k) && k < 0)) throw new TypeError(ROTATE_PICTURE.ERRORS.K_MUST_BE_WHOLE_NUMBER);

    // We really have only 4 rotation state of the picture: 
    // 0: initial state of picture
    // 1: equivalent to one-time rotation
    // 2: equivalent to two-time rotation
    // 3: equivalent to three-time rotation
    const type = k % 4;

    switch (type) {
        case 0:
            return grid;
        case 1: {
            const result = [];
            for (let i = 0; i < numRow; i++) {
                result.push(
                    grid.reduceRight((arr, row) => {
                        arr.push(row[i]);
                        return arr;
                    }, [])
                );
            }
            return result;
        }
        case 2: {
            return grid.map((row) => {
                return row.reverse();
            }).reverse();
        }
        case 3: {
            const result = [];
            for (let i = numRow - 1; i > -1; i--) {
                result.push(
                    grid.map((row) => row[i])
                );
            }
            return result;
        }
        default: return
    }
}