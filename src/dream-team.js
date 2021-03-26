const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (typeof (members) !== 'object' || members===null || members.constructor !== Array ) return false
    const arr = members.filter(item => typeof (item) === 'string')
        .map(item => {
            return item.trim()[0].toUpperCase()
        }).sort()
    const a = []
    console.log(arr.join(''))
    return arr.join('')
}

