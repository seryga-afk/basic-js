const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(teamArray) {

  let dream = []
  let trimItem 


  if (!teamArray) {
    dream = false
    return dream
  }else{
    for (let i = 0; i < teamArray.length; i++) {
      if (typeof teamArray[i] === 'string') {
        trimItem = teamArray[i].trim()
        dream.push(trimItem[0].toUpperCase())
      }
      
    }
  }


  return dream.sort().join('')
}

module.exports = {
  createDreamTeam
};
