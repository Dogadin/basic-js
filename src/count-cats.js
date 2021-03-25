const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
// function countCats(matrix) {
    return matrix.reduce((count, entry) => {
        return count + entry.reduce((count, item) => {
            return String(item).toString() === '^^' ? count + 1 : count
        }, 0)
    }, 0)
}
