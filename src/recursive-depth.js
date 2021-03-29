const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
// class DepthCalculator {
    depth = 1

    calculateDepth(arr) {
        console.log('this.depth:', this.depth)
        for (let i = 0; i < arr.length; i++) {
            const elem = arr[i]
            console.log('i:', i, 'elem', elem, 'this.depth:', this.depth)
            let curr = 0
            if (typeof (elem) === 'object' && elem.constructor.name === 'Array') {
                const instance = new DepthCalculator();
                const calculateDepth = instance.calculateDepth.bind(instance);
                curr = calculateDepth(elem);
            }
            const depth = 1 + curr
            if (depth > this.depth) {
                this.depth = depth
            }
            console.log('curr:', curr, 'this.depth:', this.depth)
        }
        const ret = this.depth
        this.depth = 1
        return ret
    }
}
//
// const instance = new DepthCalculator();
// const calculateDepth = instance.calculateDepth.bind(instance);
// console.log(calculateDepth([1, 2, 3, 4, 5, [1, []]]), 3);
//
// // console.log(calculateDepth([1, 2, 3, 4, 5, [1]]), 2);
// console.log(calculateDepth([[1], 2, 3, 4, 5, [1, []]]), 3);
// console.log(calculateDepth([1, 2, 3, 4, 5, [1, []]]), 3);
// console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
