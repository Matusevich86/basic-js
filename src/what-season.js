const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if(date == undefined) {
    return 'Unable to determine the time of year!'
  }
  // if(isNaN(Date.parse(date))){
  //   throw new invalidArguments("Invalid date!")
  // }
  let mounth = date.getMonth()
  if(mounth < 2){
    return 'winter'
  }else if(mounth >=2 && mounth < 5){
    return 'spring'
  }else if(mounth >=5 && mounth < 8){
    return 'summer'
  }else if(mounth >=8 && mounth < 11){
    return 'autumn (fall)'
  }else if(mounth = 11){
    return 'winter'
  }
}

module.exports = {
  getSeason
};
