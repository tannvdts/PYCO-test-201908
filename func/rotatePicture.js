module.exports = (grid, k) => {
    // check params must be provided
    if (grid === undefined && k === undefined) throw new TypeError('params is required');
    // check grid param must be array
    if (!Array.isArray(grid)) throw new TypeError('grid must be array');
    
    // check grid param must be n*n matrix
    const gridError = new RangeError('grid must be n*n matrix');
    const numRow = grid.length;
    if (numRow < 1) throw gridError;
    grid.forEach((row) => {
        const numCol = row.length;
        if (numCol !== numRow) {
            throw gridError;
        }
    })

    // check k must be integer >= 0
    if (!Number.isInteger(k) || (Number.isInteger(k) && k < 0)) throw new TypeError('k must be integer >= 0');

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