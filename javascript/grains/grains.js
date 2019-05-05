let bigInt = require("./lib/big-integer");

let reducer = (arr) => arr.reduce((str, x) => { str = x + str;
  return str;
 }, '');

export class Grains {
  square(num) {
    let result = 0;
    result = bigInt(2).pow(num - 1).value;
    if (Array.isArray(result)) {
      result = reducer(result);
    }
    return String(result);
  }

  total() {
    let total = bigInt(this.square(65)).minus(1).value;
    total = reducer(total);
    return total;
  }
}