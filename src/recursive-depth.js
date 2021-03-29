const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let ret = 1
        for (let i = 0; i < arr.length; i++) {
            const elem = arr[i]
            let curr = 0
            if (typeof (elem) === 'object' && elem.constructor.name === 'Array') {
                curr = this.calculateDepth(elem);
            }
            const depth = 1 + curr

            if (depth > ret) ret = depth

        }
        return ret
    }
}
