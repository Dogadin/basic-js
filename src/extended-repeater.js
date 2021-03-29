const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    const {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options
    let s = str
    let add = addition
    for (let i = 1; i < additionRepeatTimes; i++) {
        add = add + additionSeparator + addition
    }
    s = s + add
    let ret = s
    for (let i = 1; i < repeatTimes; i++) {
        ret = ret + separator + s
    }
    return ret
};
  