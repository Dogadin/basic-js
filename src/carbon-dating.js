const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity)!=='string') return false
  if(/\w/i.test(sampleActivity)===false) return false
  const ln = 0.693
  return 1
};

