const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!'
    if (typeof (date) !== 'object' || date === null || date.constructor !== Date) {
        return new Throw('')
    }

    for(let key in date){
        return new Throw('')
    }

    let ret
    switch (date.getMonth()) {
        case 11:
        case 0:
        case 1:
            ret = 'winter'
            break
        case 2:
        case 3:
        case 4:
            ret = 'spring'
            break
        case 5:
        case 6:
        case 7:
            ret = 'summer'
            break

        case 8:
        case 9:
        case 10:
            ret = 'autumn'
    }
    return ret
}
