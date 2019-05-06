export class Luhn {
  constructor(str) {
    this.str = str;
  }
  get valid() {
    const regExp = /[^\d\s]/g;
    if ((this.str.length <= 1) || (this.str[0] === ' ') || (regExp.test(this.str))) {
      return false;
    }
    const regExp2 = /[^\s]/g;
    let tmpArr = this.str.match(regExp2);
    tmpArr.reverse();
    let length = tmpArr.length;
    for (let i = 0; i < length; i += 1) {
      if (i % 2 !== 0) {
        tmpArr[i] *= 2;
        if (tmpArr[i] > 9) {
          tmpArr[i] -= 9;
        }
      }
    }
    let sum = tmpArr.reduce(((accum, elem) => accum += Number(elem)), 0);
    return (sum % 10 === 0);
  }
}