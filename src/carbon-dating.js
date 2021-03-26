const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN = 0.693

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity)!=='string') return false
  if(/[a-z_ ]/gi.test(sampleActivity)===true) return false
  if(/\d/gi.test(sampleActivity)===false) return false

  if(+sampleActivity>MODERN_ACTIVITY || +sampleActivity <=0) return false
  return Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/(LN / HALF_LIFE_PERIOD))
}
