module.exports = (grid, k) => {
    if (!grid || !k) throw new TypeError('params is required');
    if (!Array.isArray(grid)) throw new TypeError('grid must be array');
    if (!Number.isInteger(k) || (Number.isInteger(k) && k < 0)) throw new TypeError('k must be integer >= 0');
}