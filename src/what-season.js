const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'
  if (typeof (date) !== 'object' || date===null || date.constructor !== Date ) {
    return new Throw('')
  }

    if (date.prototype !== undefined ) {
      return new Throw('')
    }



    let ret
  switch (date.getMonth()){
    case 11:
    case 0:
    case 1:
      ret ='winter'
      break
    case 2:
    case 3:
    case 4:
      ret ='spring'
      break
    case 5:
    case 6:
    case 7:
      ret ='summer'
      break

    case 8:
    case 9:
    case 10:
      ret ='autumn'
  }
  return ret
}

// debugger
//
// const deeperFakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//     return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//     return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//     return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//     return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//     return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//     return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//     return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//     return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   }
// };

// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));
// console.log(getSeason(new Date(1661, 4, 25, 6, 22, 21, 37)), 'spring');
//
// try {
//   getSeason(deeperFakeDate)
// } catch(err) {
//   if (err._validationProp === 'NA') {
//     this.skip();
//   } else {
//     res = 'THROWN';
//   }
// }
//
// console.log(res, 'THROWN');
