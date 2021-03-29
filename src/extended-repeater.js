const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {repeatTimes = 1,separator = '+',addition = '',additionRepeatTimes = 1, additionSeparator = ''} = options
  const arr = Array(repeatTimes)
  let s = str
  let add = addition
  for(let i =1 ; i<additionRepeatTimes;i++){
    add = add + additionSeparator + addition
  }
  for(let i =0; i<additionRepeatTimes;i++){
    s = s + add
  }

  for(let i = 0;i<arr.length;i++){
    arr[i] = s
  }
  console.log(arr)
  let sep = separator
  return arr.join(sep)
};
  