const CustomError = require("../extensions/custom-error");

// module.exports = class DepthCalculator {
  class DepthCalculator {
  calculateDepth(arr) {
    const ret = arr.reduce((depth,elem)=>{
      let curr = 1
      if(typeof(elem)==='object'){
        if(elem.constructor.name ==='Array'){
          const instance = new DepthCalculator();
          const calculateDepth = instance.calculateDepth.bind(instance);
          curr+=calculateDepth(elem);
        }
      }
      return depth > curr ? depth : curr
    },0)
    return ret
  }
}

const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);
// console.log(calculateDepth([1, 2, 3, 4, 5, [1]]), 2);
console.log(calculateDepth([1, 2, 3, 4, 5, [1, []]]), 3);
console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
