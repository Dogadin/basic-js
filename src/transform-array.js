const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let ind
    let ret
    let action = ''
    for (ind = 0 ; ind< arr.length; ind++) {
        if (typeof (arr[ind]) === 'string' && arr[ind][0] === '-' && arr[ind][1] === '-') {
            if (arr[ind] === '--discard-next' ||
                arr[ind] === '--discard-prev' ||
                arr[ind] === '--double-next' ||
                arr[ind] === '--double-prev'
            ) {
                action = arr[ind]
                break
            }
        }
    }
    switch (action) {
        case '--discard-next':
            ret = ind < arr.length - 1 ? [...arr.slice(0, ind), ...transform(arr.slice(ind + 2,))] : [...arr.slice(0,ind)]
            break
        case '--discard-prev':
            ret = ind > 0 ? [...arr.slice(0, ind - 1), ...transform(arr.slice(ind + 1,))] : [...transform(arr.slice(1,))]
            break
        case '--double-next':
            ret = ind < arr.length-1 ? [...arr.slice(0, ind), arr[ind + 1], ...transform(arr.slice(ind + 1,))] : [...arr.slice(0,ind)]
            break
        case '--double-prev':
            ret = ind > 0 ? [...arr.slice(0, ind), arr[ind - 1], ...transform(arr.slice(ind + 1,))] : [...transform(arr.slice(1,))]
            break
        default:
            ret = [...arr.slice(0,)]
    }
    return ret
}
