const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log('date:',date )
  if (date === undefined) return 'Unable to determine the time of year!'
  if (typeof (date) !== 'object' || date===null || date.constructor !== Array ) {
    return new Throw('')
  }

  let ret
  switch (date.getMonth()){
    case 12:
    case 1:
    case 2:
      ret ='winter'
      break
    case 3:
    case 4:
    case 5:
      ret ='spring'
      break
    case 6:
    case 7:
    case 8:
      ret ='summer'
      break

    case 9:
    case 10:
    case 11:
      ret ='autumn'
  }
  return ret
};

// весна — spring, лето — summer, осень — autumn (fall), зима — winter.
// const springDate = new Date(2020, 02, 31)
// getSeason(springDate) => 'spring'
// Если аргумент date не был передан, функция должна вернуть строку 'Unable to determine the time of year!'
// Если аргумент date некорректный, функция должна выбросить ошибку (Error).