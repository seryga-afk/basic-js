const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(catsArray) {
  let cat = "^^"
  let catsCount = 0
  for (let i = 0; i < catsArray.length; i++) {
    for (let j = 0; j < catsArray[i].length; j++) {
      if (catsArray[i][j] === cat) {
        catsCount++
      }
    }
    
  }
  return catsCount
}

module.exports = {
  countCats
};
