const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let excludedCols = new Set();

  let sum = 0;
  for (let i = 0; i < numRows * numCols; i++) {
    const rowIndex = Math.floor(i / numCols);
    const colIndex = i % numCols;
    const value = matrix[rowIndex][colIndex];
    if (value === 0) {
      excludedCols.add(colIndex);
    } else if (!excludedCols.has(colIndex)) {
      sum += value;
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
